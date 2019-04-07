const {_index } = require('../util/path');

const RootController = (req, res, next) => {
    res
        .status(200)
        .sendFile(_index);
}

module.exports = {
    RootController
} 