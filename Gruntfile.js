module.exports = function(grunt) {

    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['main.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: ['main.js', '!*.min.js'],
                    dest: 'js',
                    ext: '.min.js'
                }]
            }
        },
        watch: {
            cssmin: {
                files: 'css/*.css',
                tasks: ['cssmin'],
                options: {
                    debounceDelay: 250
                }
            },
            uglify: {
                files: 'js/main.js',
                tasks: ['uglify'],
                options: {
                    debounceDelay: 250
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['cssmin', 'uglify', 'watch']);

};