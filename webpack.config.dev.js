const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const workingOnBooking = env.booking;

    return {
        mode: 'development',
        devtool: 'eval',
        entry: workingOnBooking ? './resources/js/booking/index.js' : './resources/js/site/index.js',
        output: {
            path: path.resolve('./public'),
            filename: workingOnBooking ? 'js/booking.js' :  'js/index.js',
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: workingOnBooking ? 'css/booking.css' : 'css/style.css'
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                },
                {
                    test: /\.(scss|css)$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                }
            ]
        },
        resolve: { extensions: ['.js', '.jsx'] } // enable imports without writing .js/.jsx file extensions
    }
};