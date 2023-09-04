const config = {
	mode: 'production',//получаю готовый js для продакшена
	entry: {
		index: './src/js/index.js'//забирает js из точки входа index js
		// contacts: './src/js/contacts.js',
		// about: './src/js/about.js',
	},
	output: {
		filename: '[name].bundle.js',//точка выхода index.bundle.js
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],//использует эти модули для обработки стилей когда подключаю пакеты со стилизацией
			},
		],
	},
};

module.exports = config;
