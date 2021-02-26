const path = require("path");

module.exports = {
	siteMetadata: {
		title: "frontend",
	},
	plugins: [
		"gatsby-plugin-sass",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "assets",
				path: path.join(__dirname, "src", "assets"),
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
