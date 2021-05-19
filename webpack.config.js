const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	
	/* tells server what has to be compiled and from where. Also tells the server where the compiled version should be outputted */
	entry: path.join(__dirname, "src", "index.js"),
	output: {
		path: path.join(__dirname, "build"),
		filename: "index.bundle.js"
	},

	/* should be changed to `production` when the app is build and ready to deploy */
	mode: process.env.NODE_ENV || "development", // different mode will apply to different config

	/* used so that we can import anything from the src folder in relative paths rather than the absolute ones */
	resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },

	/* tells the webpack-dev-server what files are needed to be served. Everything from our src folder needs to be served (outputted) in the browser */
	devServer: { contentBase: path.join(__dirname, "src") },

	/* babel configurations within webpack */
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"] 
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      { 
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"] 
      },
    ],
  },

	/**
	* Here we set what plugins we need in our app.
	*
	* for now, we only need the html-webpack-plugin which tells the server that the index.bundle.js 
	* should be injected (or added if you will) to our index.html file.
	*/
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html")
		})
	]
};
