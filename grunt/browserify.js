module.exports = {
    development: {
        src: [
            "./src/client/JavaScript/main.js"
        ],
        dest: './www/dist/common.js',
        options: {
            browserifyOptions: { debug: true },
            transform: [["babelify", { "presets": ["es2015"] }]],
            plugin: [
                ["factor-bundle", { 
                    outputs: [
                        "./www/dist/main.js"
                    ]
                }]
            ]
        }
    },
    production: {
        src: [
            "./src/client/main.js"
        ],
        dest: './www/dist/common.js',
        options: {
            browserifyOptions: { debug: false },
            transform: [["babelify", { "presets": ["es2015"] }]],
            plugin: [
                ["factor-bundle", { 
                    outputs: [
                        "./www/dist/main.js"
                    ]
                }]
            ]
        }
    }
};