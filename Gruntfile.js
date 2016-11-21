module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt);
    
  grunt.registerTask('build_dev_js', '[Dev] Build JavaScript files', ['eslint', 'browserify:development', 'uglify:development']);
  grunt.registerTask('build_dev_css', '[Dev] Build Sass files', ['sass', 'autoprefixer']);
  grunt.registerTask('build_dev', '[Dev] Build all files', ['build_dev_js', 'build_dev_css']);
  grunt.registerTask('dev', '[Dev] Build and Watch', ['build_dev', 'watch']);
  
  grunt.registerTask('build_prod_js', '[Prod] Build JavaScript files', ['browserify:production', 'uglify:production']);
  grunt.registerTask('build_prod_css', '[Prod] Build Sass files', ['sass', 'autoprefixer']);
  grunt.registerTask('build_prod', '[Prod] Build all files', ['build_prod_js', 'build_prod_css']);
  grunt.registerTask('build', '[Prod] Build', ['build_prod']);

  grunt.registerTask('default', ['build_dev']);
  
};