// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `ReviewMate`,
    author: `Pickerson Solutions LLC.`,
    description: `The quintessential medical auditing tool. ReviewMate maximizes auditor capabilities by streamlining findings, audits, communications, and reports.`,
    keywords: [
      "medical coding audit",
      "medical coding auditing",
      "medical coding auditor salary",
      "medical coding auditor",
      "medical coding audit",
      "medical coding audit worksheet",
      "medical coding audit template",
      "reports excel",
      "medical coding audit software",
      "medical coding auditing companies",
      "medical coding auditing workbook",
      "medical coding auditing jobs",
      "medical coding auditing jobs",
      "medical coding audit forms",
      "medical coding audit tool",
      "medical coding audit tool",
      "medical coding auditor",
      "medical coding audit excel",
      "medical coding audit form",
      "medical coding audit sheet",
      "medical coding audit tool",
      "medical coding audit services",
      "medical coding",
      "audit",
      "coding audit",
      "coding auditing",
      "ICD-9",
      "ICD-9-CM",
      "ICD-10",
      "ICD-10-CM",
      "ICD-10-PCS",
      "IPPS",
      "OPPS",
      "CMS-HCC",
      "Profee",
      "ASC",
      "ICD-9-CM",
      "code look-up",
      "MS-DRG",
      "APR-DRG",
      "CPT/HCPCS",
      "AHA",
      "AHA coding",
      "Epic",
      "Cerner",
      "HL7 interfaces",
      "HL7",
      "EDI 837",
      "findings",
      "reporting",
      "audit findings",
      "audit quicker",
      "coding quicker",
      "code quicker",
      "medical code quicker",
      "audit fast",
      "code fast",
      "risk assessment",
      "risk adjustment",
      "tracker",
      "coding excel",
      "excel alternative coding",
      "excel alternative auditing",
    ],
    siteUrl: "https://review-mate.com",
    social: {
      linkedin:
        "https://www.linkedin.com/company/reviewmate-powered-by-pickerson-solutions-llc/",
      email: "info@pickerson.com",
    },
    lang: "en",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Overpass",
              variants: ["400", "700"],
              //subsets: ['latin']
              //text: 'Hello'
              fontDisplay: "swap",
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
            {
              family: "Arvo",
              variants: ["400", "700"],
              //subsets: ['latin']
              //text: 'Hello'
              fontDisplay: "swap",
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
        // formatAgents: {
        //   eot: `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)`,
        //   ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
        //   woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
        //   woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
        // },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
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
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
        disable: true,
      },
    },
    {
      resolve: "gatsby-remark-normalize-paths",
      options: {
        pathFields: ["image", "cover"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/img`,
      },
    },
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
        name: `cms`,
        path: `${__dirname}/cms`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.review-mate.com`,
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/fonts/*": [
            "Cache-Control: public",
            "Cache-Control: max-age=365000000",
            "Cache-Control: immutable",
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-M7NC8J5NMG`,
      },
    },
    `gatsby-plugin-emotion`,
    "gatsby-plugin-react-svg",
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
