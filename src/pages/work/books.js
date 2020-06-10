import React, { useState } from "react"
import Img from "gatsby-image"
import Lightbox from "react-image-lightbox"
import { useStaticQuery, graphql } from "gatsby"

const Page = () => {
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

  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const images = data.allFile.edges.map(
    edge => edge.node.childImageSharp.fluid.src
  )

  const Image = ({ fluid, index }) => {
    return (
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setIsOpen(true)
          setPhotoIndex(index)
        }}
      >
        <Img fluid={fluid} />
      </div>
    )
  }

  return (
    <div style={{ margin: "0 auto", maxWidth: "800px" }}>
      {data.allFile.edges.map((edge, index) => {
        return <Image fluid={edge.node.childImageSharp.fluid} index={index} />
      })}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % images.length)
          }}
          enableZoom={false}
        />
      )}
    </div>
  )
}

export default Page
