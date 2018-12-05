const environment = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';
require("dotenv").config({path: `.env.${environment}`});

const plugins = [
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-offline",
  "gatsby-plugin-sass",
];

if (environment === "production") {
  plugins.push({
    options: {
      accessToken: process.env.ACCESS_TOKEN,
      homeSlug: "home",
      version: "published",
    },
    resolve: "gatsby-source-storyblok",
  });
}

module.exports = {
  plugins,
  siteMetadata: {
    environment,
    title: "Gatsby Default Starter",
    spaceId: process.env.SPACE_ID,
    oauthToken: process.env.OAUTH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
  },
}
