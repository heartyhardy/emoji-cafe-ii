const Emoji = require('../models/emoji');

const AllEmojisController = (req, res, next) => {
    res
        .status(200)
        .send(JSON.stringify(['😃', '😄', '😅']));
}

const CreateEmojiController = async(req, res, next) => {
    const {title, category, emoji} = req.body;

    try{
        let result = await Emoji.create({
            title,
            category,
            emoji
        });
        res.status(200).send(result);
    }catch(e){
        res.status(400).send({err: e});
    }
}

module.exports = {
    AllEmojisController,
    CreateEmojiController
}