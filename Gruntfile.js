module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            dist: ["dist"]
        },
        copy: {
            dist: {
                files: [
                    // includes files within path
                    {expand: true, src: ['fonts/**/*'], dest: 'dist', filter: 'isFile'},
                    {expand: true, src: ['images/**/*'], dest: 'dist', filter: 'isFile'},
                    {expand: true, src: ['js/bootstrap-image-gallery.min.js'], dest: 'dist', filter: 'isFile'}
                ]
            }
        },
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
        htmlmin: {
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'dist/index.html': 'index.html',     // 'destination': 'source'
                    'dist/gallery.html': 'gallery.html',
                    'dist/promo.html': 'promo.html'
                }
            }
        },
        concat_css: {
            options: {
                // Task-specific options go here.
            },
            all: {
                src: ["css/*.css"],
                dest: "dist/css/main.css"
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        concat: {
            dist: {
                src: ['js/main.js'],
                dest: 'dist/js/main.js'
            }
        },
        uglify: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/js',
                    src: ['main.js', '!*.min.js'],
                    dest: 'dist/js',
                    ext: '.min.js'
                }]
            }
        },
        watch: {
            cssmin: {
                files: 'css/*.css',
                tasks: ['concat_css', 'cssmin'],
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
            },
            htmlmin: {
                files: '*.html',
                tasks: ['htmlmin'],
                options: {
                    debounceDelay: 250
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['copy', 'htmlmin', 'concat_css', 'cssmin', 'concat', 'uglify', 'imagemin', 'watch']);

};