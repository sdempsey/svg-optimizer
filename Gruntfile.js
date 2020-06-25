module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        svgmin: {
            options: {
                plugins: [
                    {
                        removeViewBox: false
                    }
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.svg',
                    dest: 'dist/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-svgmin');

    grunt.registerTask('default', ['svgmin']);
};

