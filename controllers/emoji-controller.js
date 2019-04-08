const Emoji = require('../models/emoji');

// FETCH ALL EMOJIS FROM DB
const AllEmojis = async (req, res, next) => {
    try {
        let results = await Emoji.findAll();
        // PICK WHAT NEEDS TO BE DISPLAYED
        let picked = results.map((result) => {
            let { id, title, category, emoji } = result;
            return { id, title, category, emoji };
        })
        res.status(200).send(picked);
    } catch (e) {
        res.status(400).send({ error: true });
    }
}

// ADD AN EMOJI TO DB
const CreateEmoji = async (req, res, next) => {
    let { title, category, emoji } = req.body;

    try {
        let results = await Emoji.create({
            title,
            category,
            emoji
        });
        // PICK WHAT NEEDS TO BE DISPLAYED IN THIS BLOCK
        {
            let { title, category, emoji } = results;
            res.status(200).send({ title, category, emoji });
        }
    } catch (e) {
        res.status(400).send({ error: true });
    }
}

// UPDATE AN EMOJI
const UpdateEmoji = async (req, res, next) => {
    const { id } = req.params;
    const {title, category, emoji} = req.body;

    try {
        let result = await Emoji.findByPk(id);
        if(result) {
            result.title = title,
            result.category = category,
            result.emoji = emoji
            let saved = await result.save();
            {
                // PICK WHAT NEEDS TO BE DISPLAYED
                let { id, title, category, emoji } = saved;
                res.status(200).send({id, title, category, emoji});
            }
        }else{
            res.status(404).send({found: false});
        }
    } catch (e) {
        res.status(400).send({ error: true });
    }
}

// DELETE AN EMOJI
const DeleteEmoji = async(req, res, next) => {
    const {id} = req.params;
    
    try{
        let result = await Emoji.destroy({
            where:{id:id}
        });
        if(result)
        {
            res.status(200).send({deleted: true});
        }
        else{
            res.status(404).send({deleted: false});
        }
    }catch(e){
        res.status(400).send({error:true})
    }
}

module.exports = {
    AllEmojis,
    CreateEmoji,
    UpdateEmoji,
    DeleteEmoji
}