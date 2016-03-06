module.exports = function(grunt) {

  grunt.initConfig({concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/lesson17-18.main.js'
      }
        },

uglify: {
   dist: {

        src: ['js/dist/lesson17-18.main.js'],
        dest: 'js/dist/lesson17-18.main.min.js'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify']);
};