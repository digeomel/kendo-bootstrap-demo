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
			options: {
				debounceDelay: 1000
			},
			copyToApache: {
				files: ['html/**'],
				tasks: ['sync']
			},
			compileSass: {
				files: ['afis/styles/**'],
				tasks: ['sass']
			}
		},
		sync: {
			main: {
				files: [{
					cwd: 'html',
					src: '**',
					dest: '/exports/home/geomedi/htdocs/afis-kendo-bootstrap'
				}],
				verbose: true,
				failOnError: true,
				updateAndDelete: true
			}
		},
		sass: {
			options: {
				noCache: true,
				debugInfo: false,
				sourcemap: false,
				style: 'expanded'
			},
			dist: {
				files: [{
//					cwd: 'afis/styles',
					src: 'afis/styles/afis.scss',
					dest: 'html/styles/afis.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-sync');

	grunt.registerTask('default', ['watch', 'sass', 'sync']);
};
