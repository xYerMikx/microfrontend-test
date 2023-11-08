const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", path.join(__dirname, "src", "index.jsx")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    host: "localhost",
    port: 3000,
    static: path.join(__dirname, "dist"),
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  target: "web",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "hostContainer",
      remotes: {
        microfront: "microfront@http://localhost:3001/remoteEntry.js", //здесь указываем перед @ то самое название name из того микрофронта, который экспортируем
      },
      shared: {
        react: {
          eager: true,
        },
        "react-dom": {
          eager: true,
        },
      },
    }),
  ],
};
