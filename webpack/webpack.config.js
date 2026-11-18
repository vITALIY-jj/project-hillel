
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const isAnalyze = Boolean(env && env.analyze);

    const styleLoaders = [
        isProduction
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
        'css-loader',
    ];

    return {
        mode: isProduction ? 'production' : 'development',

        entry: {
            main: './src/index.js',
            typescript: './src/index.ts',
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'assets/js/[name].[contenthash].js',
            assetModuleFilename: 'assets/[name].[contenthash][ext]',
            clean: true,
        },

        devtool: isProduction ? false : 'source-map',

        devServer: {
            static: './dist',
            port: 3000,
            open: true,
            hot: true,
            watchFiles: ['src/**/*'],
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },

                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },

                {
                    test: /\.css$/,
                    use: styleLoaders,
                },

                {
                    test: /\.scss$/,
                    use: [
                        ...styleLoaders,
                        'sass-loader',
                    ],
                },

                {
                    test: /\.less$/,
                    use: [
                        ...styleLoaders,
                        'less-loader',
                    ],
                },

                {
                    test: /\.(png|jpe?g|gif|svg|webp)$/i,
                    type: 'asset/resource',
                },

                {
                    test: /\.(woff2?|ttf|otf|eot)$/i,
                    type: 'asset/resource',
                },
            ],
        },

        resolve: {
            extensions: ['.js', '.ts'],
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                chunks: ['main', 'typescript'],
            }),

            new ESLintPlugin({
                extensions: ['js', 'ts'],
                failOnError: false,
            }),

            ...(isProduction
                ? [
                    new MiniCssExtractPlugin({
                        filename: 'assets/css/[name].[contenthash].css',
                    }),
                ]
                : []),

            ...(isAnalyze
                ? [new BundleAnalyzerPlugin()]
                : []),
        ],

        optimization: {
            usedExports: true,

            splitChunks: {
                chunks: 'all',
            },

            minimize: isProduction,
        },
    };
};
