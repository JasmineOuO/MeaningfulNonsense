import React from 'react';
import startCase from 'lodash/startCase';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;

function SEO({ description, lang, meta, keywords, title, image, pagePath }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description;
        const baseUrl = data.site.siteMetadata.siteUrl;
        const metaImage =
          image && image.originalName ? `${baseUrl}/images/${image.originalName}` : null;
        const url = pagePath ? `${baseUrl}${pagePath}` : baseUrl;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={startCase(title)}
            titleTemplate={`${data.site.siteMetadata.title} | %s`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:url',
                content: url
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:description',
                content: metaDescription
              },
              {
                name: 'google-site-verification',
                content: 'bJGTTPCNBMQi-Eu7Lf_HPeQUZid1X8GXnUj2OJhCxoo'
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', ')
                    }
                  : []
              )
              .concat(
                image
                  ? [
                      {
                        property: 'og:image',
                        content: metaImage
                      },
                      {
                        property: 'og:image:width',
                        content: image.width
                      },
                      {
                        property: 'og:image:height',
                        content: image.height
                      },
                      {
                        name: 'twitter:card',
                        content: 'summary_large_image'
                      }
                    ]
                  : [
                      {
                        name: 'twitter:card',
                        content: 'summary'
                      }
                    ]
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;
