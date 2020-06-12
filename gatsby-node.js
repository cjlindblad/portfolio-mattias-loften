/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fastExif = require("fast-exif")
const get = require("lodash/get")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (
    node.dir &&
    node.internal.type === "File" &&
    node.internal.mediaType.includes("image") &&
    node.dir.includes("/src/images")
  ) {
    fastExif
      .read(node.absolutePath)
      .then(exifData => {
        const description = get(exifData, ["image", "ImageDescription"], "")
        createNodeField({
          node,
          name: "exif",
          value: { description },
        })
      })
      .catch(err => console.error(err))
  }
}
