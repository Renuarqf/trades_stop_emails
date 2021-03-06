module.exports = {
	paths: {
		html: {
			inline: {
				src: [ 'src/**/*.html' ],
				dest: [ 'dist' ],
			},
			clean: {
				src: [ 'dist/**/*.html' ],
				dest: [ 'dist' ],
				options: {
					collapseWhitespace: true,
					keepClosingSlash: true,
					minifyCSS: true,
					removeComments: true,
					processConditionalComments: false,
					ignoreCustomComments: [ /\[if.*|\[endif/ ]
				},
			},
		},
		sass: {
			lint: {
				src: [ 'src/sass/**/*.scss' ],
				configFile: '.stylelintrc',
			},
			build: {
				src: [ 'src/sass/**/*.scss' ],
				dest: [ 'dist/css' ],
			},
			clean: {
				src: [ 'dist/css' ],
			},
		},
		watch: {
			src: [
				'src/sass/**/*.scss',
				'src/**/*.html',
			],
		},
		assets: {
			clean: {
				src: [ 'dist/assets/**/*' ],
			},
			copy: {
				src: [ 'src/assets/**/*' ],
				dest: [ 'dist/assets' ],
			},
		},
		release: {
			versionedFiles: [
				'README.md',
			],
		},
	},
};
