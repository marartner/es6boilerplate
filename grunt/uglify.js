module.exports = {
    options: {
        mangle: false
    },
    development: {
        options: {
            sourceMap: true
        },
        files: {
            'www/dist/common.min.js': ['www/dist/common.js'],
            'www/dist/main.min.js': ['www/dist/main.js'],
        }
    },
    production: {
        options: {
            sourceMap: false
        },
        files: {
            'www/dist/common.min.js': ['www/dist/common.js'],
            'www/dist/main.min.js': ['www/dist/main.js'],
        }
    }
};