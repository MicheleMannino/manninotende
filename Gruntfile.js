module.exports = function(grunt) {

    grunt.initConfig({
        imagemin: {                          // Task
            static: {                          // Target
                options: {                       // Target options
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }]
                },
                files: {                         // Dictionary of files
                    'dist/images/services.jpg': 'images/services.jpg',
                    'dist/images/about_us_2.jpg': 'images/about_us_2.jpg',
                    'dist/images/img_carousel_00.jpg': 'images/img_carousel_00.jpg',
                    'dist/images/img_carousel_01.jpg': 'images/img_carousel_01.jpg',
                    'dist/images/img_carousel_02.jpg': 'images/img_carousel_02.jpg',
                    'dist/images/img_carousel_03.jpg': 'images/img_carousel_03.jpg',
                    'dist/images/pencils.svg': 'images/pencils.svg',
                    'dist/images/paper-bag.svg': 'images/paper-bag.svg',
                    'dist/images/clipboard.svg': 'images/clipboard.svg',
                    'dist/images/favicon.png': 'images/favicon.png',
                    'dist/images/logo_2.png': 'images/logo_2.png'
                }
            },
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        },
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
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['cssmin', 'uglify', 'imagemin', 'watch']);

};