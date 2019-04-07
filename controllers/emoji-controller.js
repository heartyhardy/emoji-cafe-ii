
const AllEmojisController = (req, res, next) => {
    res
        .status(200)
        .send(JSON.stringify(['😃', '😄', '😅']));
}

module.exports = {
    AllEmojisController
}