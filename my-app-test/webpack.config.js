const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    host: "localhost",
    port: 3001,
    static: path.join(__dirname, "dist"),
    open: true,
  },
  entry: ["@babel/polyfill", path.join(__dirname, "src", "index.jsx")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "http://localhost:3001/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  target: "web",
  resolve: {
    extensions: [".jsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "microfront", // название, которое будет указано при импорте (подобно названию папки)
      filename: "remoteEntry.js",
      exposes: {
        "./MyButton": "./src/MyButton", // показывает, как мы можем обратиться, чтобы получить наш компонент
      },
      shared: {
        react: {
          singleton: true, // для того, чтобы загружалась только одна версия реакта
          requiredVersion: "^18.2.0",
          eager: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0",
          eager: true,
        },
      },
    }),
  ],
};
