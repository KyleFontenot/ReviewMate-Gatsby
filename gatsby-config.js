// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `ReviewMate`,
    author: `Kyle Fontenot`,
    description: `ReviewMate is`,

  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/cms/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faqs`,
        path: `${__dirname}/cms/faqs`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-M7NC8J5NMG`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ReviewMate`,
        short_name: `ReviewMate`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#9a2a24`,
        display: `minimal-ui`,
        icon: `src/images/reviewmate-favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: ['/', '*'],
    //   },


],
}
