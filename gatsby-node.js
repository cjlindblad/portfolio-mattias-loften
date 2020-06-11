/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fastExif = require("fast-exif")
const get = require("lodash/get")

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.dir && node.dir.includes("/src/images")) {
    fastExif
      .read(node.absolutePath)
      .then(exifData => {
        const description = get(exifData, ["image", "ImageDescription"], null)
        console.log("----- CREATING NODE FIELD -----")
        createNodeField({
          node,
          name: "exif",
          value: { description },
        })
      })
      .catch(err => console.error(err))
  }
}
