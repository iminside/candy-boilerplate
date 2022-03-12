const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    stats: 'errors-only',
    output: {
        publicPath: '/',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            title: 'Development',
            templateContent: `
                <html>
                    <body>
                        <div id="root"></div>
                    </body>
                </html>
            `,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'candy-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: ['file-loader'],
            },
        ],
    },
    devServer: {
        static: './dist',
        port: 3000,
    },
}
