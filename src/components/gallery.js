import React, { useState } from "react"
import Img from "gatsby-image"
import Lightbox from "react-image-lightbox"
import Masonry from "react-masonry-component"

const Gallery = ({ data }) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const images = data.allFile.edges.map(
    edge => edge.node.childImageSharp.fluid.src
  )

  const Image = ({ fluid, index }) => {
    return (
      <div
        className="sm: w-full lg:w-1/2 overflow-hidden my-1 px-1"
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
    <div>
      <Masonry
        className="flex flex-wrap overflow-hidden -mx-1"
        options={{
          transitionDuration: 0,
        }}
      >
        {data.allFile.edges.map((edge, index) => {
          return <Image fluid={edge.node.childImageSharp.fluid} index={index} />
        })}
      </Masonry>
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

export default Gallery