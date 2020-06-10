import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="w-64 h-24">
    <div className="md:fixed pt-4 pl-4 md:pt-8 md:pl-8">
      <h2 className="mb-1">Mattias Loftén</h2>
      <h3>Portfolio</h3>
      <div className="hidden md:block">
        <h3 style={{ margin: 0 }}>
          <Link
            to="/work/books"
            style={{
              textDecoration: `none`,
            }}
          >
            books
          </Link>
        </h3>
        <h3>
          <Link
            to="/work/royality-tv"
            style={{
              textDecoration: `none`,
            }}
          >
            royality-tv
          </Link>
        </h3>
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
