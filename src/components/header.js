import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const links = [
  {
    to: "/work/books",
    name: "books",
  },
  {
    to: "/work/magazine-illustration",
    name: "magazine illustration",
  },
  {
    to: "/work/royality-tv",
    name: "royality-tv",
  },
  {
    to: "/work/valharet",
    name: "valhåret 2018",
  },
  {
    to: "/work/magazine-layout",
    name: "magazine layout",
  },
]

const Header = ({ siteTitle }) => (
  <header className="w-64 h-24">
    <div className="md:fixed pt-4 pl-4 md:pt-8 md:pl-8">
      <h2 className="mb-1">Mattias Loftén</h2>
      <h3>Portfolio</h3>
      <div className="hidden md:block">
        {links.map(link => (
          <h3 style={{ margin: 0 }}>
            <Link
              to={link.to}
              style={{
                textDecoration: `none`,
              }}
            >
              {link.name}
            </Link>
          </h3>
        ))}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
