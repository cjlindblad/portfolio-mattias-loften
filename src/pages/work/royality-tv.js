import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Page = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/royality-tv/" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div style={{ margin: "0 auto", maxWidth: "800px" }}>
      {data.allFile.edges.map(edge => {
        console.log(edge)
        return <Img fluid={edge.node.childImageSharp.fluid} />
      })}
    </div>
  )
}

export default Page
