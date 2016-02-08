module.exports = function(grunt) {

  grunt.initConfig({
     concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      }
    },
    uglify:{
        src: ['js/src/*.js'],
        dest: 'js/dist/script.min.js'
      }
  
  });

  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
 grunt.registerTask('dev', ['concat']);
};