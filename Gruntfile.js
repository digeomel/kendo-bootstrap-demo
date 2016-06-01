/*
 *  @file Gruntfile.js
 *  @author Dimitrios Geomelas <dimitrios.geomelas@ext.ec.europa.eu>
 *  @since 27-May-2016
 *  @copyright European Anti-Fraud Office/Anti-Fraud Information System (OLAF/AFIS)
 */
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		watch: {
			files: ['html/**'],
			tasks: ['sync'],
			options: {
				debounceDelay: 1000
			}
		},
		sync: {
			main: {
				files: [{
					cwd: 'html', src: '**', dest: '/exports/home/geomedi/htdocs/afis-kendo-bootstrap'
				}],
				verbose: true,
				failOnError: true,
				updateAndDelete: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sync');

	grunt.registerTask('default', ['watch', 'sync']);
};
