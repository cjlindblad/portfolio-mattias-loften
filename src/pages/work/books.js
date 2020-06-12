import React from "react"
import Gallery from "../../components/gallery"

import { useStaticQuery, graphql } from "gatsby"

const Page = React.memo(() => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { regex: "/books/" } }
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

  return <Gallery data={data} />
})

export default Page
