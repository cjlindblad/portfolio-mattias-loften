import React from "react"
import Gallery from "../../components/gallery"

import { useStaticQuery, graphql } from "gatsby"

const Page = React.memo(() => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/books/" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
                ...GatsbyImageSharpFluid
              }
              internal {
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
