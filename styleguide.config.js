module.exports = {
    components: 'src/components/**/*.tsx',
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader'
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        }
    }
};
