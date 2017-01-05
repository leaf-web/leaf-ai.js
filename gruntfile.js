module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files: ['src/leaf-ai.js']
		},
		uglify: {
			js: {
				src: 'src/leaf-ai.js',
				dest: 'builds/leaf-ai.min.js'
			}
		},
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default', ['jshint', 'uglify']);
	grunt.registerTask('test', ['jshint', 'uglify', 'karma']);
}