import { Bundler, defineConfig, hooks } from '@stylify/bundler';

hooks.addListener('compiler:newMacroMatch', ({ selectorProperties }) => {
	const pixelUnit = selectorProperties['font-size'];

	if (typeof pixelUnit === 'undefined' || !pixelUnit.endsWith('px')) {
		return;
	}

	const pixelFontSize = Number(pixelUnit.slice(0, -2));
	const remFontSize = pixelFontSize / 10;

	selectorProperties['font-size'] = `${remFontSize}rem`;
	selectorProperties['line-height'] = `${remFontSize * (pixelFontSize >= 28 ? 1.2 : 1.7)}rem`;
});

const stylifyConfig = defineConfig({
	compiler: {
		externalVariables: ['summaryTextColor'],
		ignoredAreas: [
			// Ignore code areas in docs
			/`{3}(?:\S+)?([\s\S]+)?`{3}/,
			/-{3}([\s\S]+?)-{3}/
		],
		variables: {
			red: '#E42024',
			shadow: '0 1px 3px 0 rgba(0,0,0,.18)',
			grey: '#565454',
			border: '#dddddd',
			background: '#fff',
		},
		customSelectors: {
			// Global
			'::selection': `
				color:#fff
				background:darken($red,20)
			`,
			html: `
				font-size:62.5%
				font-family:-apple-system,BlinkMacSystemFont,^Segoe_UI^,Roboto,Oxygen-Sans,Ubuntu,Cantarell,^Helvetica_Neue^,sans-serif
			`,
			'*': `box-sizing:border-box scroll-behavior:smooth scroll-margin-top:80px`,
			'body': 'background:$background margin:0 color:#222 font-size:16px',
			'img,video': 'max-width:100% object-fit:contain',
			'a': 'color:$red cursor:pointer',
			dialog: `
				background:#fff
				&:not([open]){display:none}
			`,
			details: `& summary::-webkit-details-marker { display:none }`,
			textarea: 'outline:none',
			hr: 'border:0 height:1px background:#eee',
			table: `
				min-width:100% border-spacing:0
				td, th {
					word-break:keep-all border-bottom:1px_solid_#f1f1f1 padding:8px md:padding:8px_12px
				}
				th { text-align:left padding:4px }
				tr:last-of-type td { border-bottom:0 }
				thead { position:sticky top:0 left:0 backdrop-filter:blur(12px) }
				pre, code { background:#ddd }
			`,
			'li': `
				p {
					&:first-of-type { margin-top:0 }
					&:last-of-type { margin-bottom:0 }
				}
			`,
			'h1,h2,h3,h4,h5,h6': `
				scroll-margin-top:50px
				margin-top:32px
				a { text-decoration:none }
			`,
			'input::placeholder': 'opacity:1',
			'article': `
				margin-top:0 font-size:16px word-break:break-word
				img { max-width:100% filter:brightness(.8)_contrast(1.2) }
				h1 { margin-top:0 margin-bottom:8px font-size:30px md:font-size:34px }
				h2 { font-size:26px margin-top:48px margin-bottom:0 }
				h3 { font-size:20px margin-top:32px margin-bottom:0 }
				h4 { margin-top:24px margin-bottom:0 }
				h1, h2, h3, h4, h5, h6 {
					cursor:pointer
					+ p { margin-top:0 }
					a { color:#fefefe }
					&:hover a { color:red }
				}
				pre { margin-top:0 }
				.note { margin:16px_0 }
				.note, note * { font-size:14px }
				.example-editor { margin:24px_0 }
			`,
		},
		components: {
			container: `
				max-width:1400px margin-left:auto scroll-margin-top:50px margin-right:auto padding-left:8px padding-right:8px
				md:padding-left:12px md:padding-right:12px
				lg:padding-left:24px lg:padding-right:24px
				&--sm { max-width:1000px!important }
				&--lg { max-width:1600px!important }
				&--xl { max-width:1920px!important }
			`,
			button: `
				display:inline-flex justify-content:center align-items:center padding:8px_12px md:padding:12px_24px white-space:nowrap line-height:1 border:none font-weight:700 letter-spacing:0.1px outline:none cursor:pointer font-size:16px color:$red user-select:none text-decoration:none background:none transition:background_0.3s hover:background:colorToRgb($red,0.10) focus:background:colorToRgb($red,0.10) border:2px_solid_transparent
				&.button--solid {
					background:$red color:#fff hover:background:darken($red,50) focus:background:lighten($red,20)
					&.button--disabled { cursor:default background:#e3dfe3 color:#aaa7ab }
				}
				&.button--white {
					background:#fff!important color:#222 hover:background:darken(#fff,50) focus:background:lighten(#fff,50)
					&.button--disabled { cursor:default background:#eee color:#888 }
				}
				&.button--outline {
					color:$red border-color:$red hover:background:colorToRgb($red,0.10) focus:background:colorToRgb($red,0.10)
					&.button--disabled { cursor:default border:#e4e0e3 color:#aaa7ab }
				}
				&.button--disabled { cursor:default background:none color:#aaa7ab }
				&__icon { display:inline-flex width:20px min-width:20px font-size:24px margin-right:4px line-height:20px justify-content:center align-items:center }
			`,
		},
		keyframes: {

		}

	}
});

const isDev = process.argv[process.argv.length - 1] === '--w';

// http://stylifycss.com/docs/bundler#configuration
const bundler = new Bundler({
	watchFiles: isDev,
	logsDir: './var',
	bundles: [{ outputFile: './src/assets/css/stylify.css', files: ['./src/**/*.astro'] }],
	// Optional
	...stylifyConfig
});

bundler.bundle();

await bundler.waitOnBundlesProcessed();
