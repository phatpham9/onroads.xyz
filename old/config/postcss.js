var postcss = require('postcss');

module.exports = {
    use: [
        'postcss-import',
        'postcss-cssnext',
        'postcss-focus',
        'postcss-font-magician',
        'postcss-discard-comments'
    ],
    input: 'src/site.css',
    dir: 'dist'
};
