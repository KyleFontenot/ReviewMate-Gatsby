import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title, slug, pathName}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            lang
          }
        }
      }
    `
  )

  // const description = site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  // const canonical = site.siteMetadata.siteUrl || null
  // const title = site.siteMetadata.title;
  const descriptionSet = description ||  site.siteMetadata.description;
  // const lang = site.siteMetadata.lang;


  return (
    <Helmet
      htmlAttributes={{
        lang, title, meta, descriptionSet
      }}
      meta={[
        {
          name: `description`,
          content: descriptionSet,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: descriptionSet,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: "twitter:card",
          content: "summary",
        },]
      .concat(meta)}
    >
      <title>{slug ? `${defaultTitle} | ${slug}` : defaultTitle}</title>
      <meta name="description" content={descriptionSet} />
      {/*{pathName ? <link rel='canonical' href={`${canonical}${pathName}`}/> : <link rel='canonical' href={`${canonical}`}/>}*/}
      {/*Preloading fonts*/}
      <link
        rel="preload"
        href="/fonts/Overpass-Regular.ttf"
        as="font"
        crossorigin="anonymous"
        type="font/ttf"
      />
      <link
        rel="preload"
        href="/fonts/Arvo-Regular.ttf"
        as="font"
        crossorigin="anonymous"
        type="font/ttf"
      />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)

}
// title: PropTypes.string.isRequired,
export default Seo
