module.exports = {
    js: {
        files: 'src/client/Sass/**/*.scss',
        tasks: ['sass', 'autoprefixer']
    },    
    css: {
        files: 'src/client/JavaScript/**/*.js',
        tasks: ['sass', 'autoprefixer']
    }
};