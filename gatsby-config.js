// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

const contentfulConfig = {
  spaceId: 'vp8e9rc0k1f3',
  accessToken: '0vbm_0uGnIIPy2z4CIlsDYcDYXtTlyLhQNoyk5Bsg0M',
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
// if (process.env.CONTENTFUL_HOST) {
//   contentfulConfig.host = process.env.CONTENTFUL_HOST
// }

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
