const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        index: './src/index.js',
        more: './src/more.js'
    },
    output: {
        path: __dirname + '/dist',
        // path: path.resolve(__dirname, 'dist')
        filename: '[name].js'
    }
};
