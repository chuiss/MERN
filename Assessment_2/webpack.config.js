//CREATE A PATH
let path = require("path"), //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin'), //to load the index html file on request

config = {
    output: {
        path: path.join(__dirname, '/dist'), //dist - distribution ---- create a path with dist name
        filename: 'bundle.js' //the file name will be bundle.js
    },

//DEVSERVER
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 9090, //localhost:9090
        historyApiFallback : true //localhost:9090/user
    },
      
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })] //localhost:9090 - loads this html
}

module.exports = config;