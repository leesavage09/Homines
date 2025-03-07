require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Homines`,
        description: `Homines webapp`,
        author: `Lee Savage`,
        siteUrl: `https://portfolio.leesavage.co.uk/`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-remove-serviceworker`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#BDC6AB`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`,
            },
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: 'gatsby-plugin-anchor-links',
            options: {
                offset: -100,
            },
        },
    ],
}
