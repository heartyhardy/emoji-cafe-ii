/* Make sure to build when going production by running
    npm run build
*/

const path = require('path');

const _root_= path.dirname(process.mainModule.filename);
const _index = path.join(_root_, 'build', 'index.html');
const _build = path.join(_root_, 'build');

module.exports = {
    _root_,
    _index,
    _build
}