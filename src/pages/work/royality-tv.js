import React from "react"
import { Helmet } from "react-helmet"
import Gallery from "../../components/gallery"

import { useStaticQuery, graphql } from "gatsby"

const Page = React.memo(() => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { regex: "/royality-tv/" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1500) {
                src
                ...GatsbyImageSharpFluid_noBase64
              }
            }
            fields {
              exif {
                description
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>Mattias Loftén - Royality-TV</title>
      </Helmet>
      <Gallery data={data} />
    </>
  )
})

export default Page
