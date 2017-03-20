const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const METADATA = {
    title: "jquery-plugin-ts-starter",
    description: "A simple starter project for developing jQuery plugins with Typescript under NodeJS",
    host: "localhost",
    port: 3000
};

module.exports = {
    entry: "./src/index.ts",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "plugin.bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: "pre",
                test: /\.tsx?$/,
                use: "source-map-loader"
            }
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    devtool: 'inline-source-map',

    plugins: [
        // static assets
        new CopyWebpackPlugin([
            {from: "./node_modules/jquery/dist/jquery.js", to: "./lib/jquery.js"}
        ]),

        // insert bundled script and metadata into index.html
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            metadata: METADATA
        })
    ],

    // Webpack Development Server config
    devServer: {
        port: METADATA.port,
        host: METADATA.host,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        }
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     // require("jquery") is external and available
    //     //  on the global var jQuery
    //     "jquery": "jQuery",
    //     "$": "jQuery"
    // }
};