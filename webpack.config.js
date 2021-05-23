const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/game.js',
    output: {
        path: path.resolve(__dirname, 'scripts'),
        filename: 'bundle.js'
    }
};