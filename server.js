const express = require('express');
const parser = require('body-parser');

// IMPORT ROUTES
const root_route = require('./routes/root');
const emoji_route = require('./routes/emoji');

// IMPORT DB CONFIG
const { sync_db } = require('./data/config/sync');

// IMPORT BUILD PATH
const { _build } = require('./util/path');

// SET CUSTOM PORT
const PORT = process.env.PORT || 5000;

const app = express();

// CONFIG SERVER
app.use(express.static(_build));
app.use(parser.json());
// SET UP ROUTES
app.use(root_route.router);
app.use('/emoji', emoji_route.router);

// SYNC DB AND START THE SERVER
(async () => {
    try {
        let result = await sync_db();

        // START THE EXPRESS SERVER
        app.listen(PORT, () => console.log("\x1b[36m", "😎  Serving emoji's like nobody's business!"));
    } catch (e) {
        throw new Error(e);
    }
})();
