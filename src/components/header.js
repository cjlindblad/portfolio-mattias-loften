import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export const links = [
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

const Header = ({ siteTitle, onMobileMenuClick }) => (
  <header className="w-full md:w-64 h-24">
    <div className="md:fixed pt-4 pl-4 pr-4 md:pr-0 md:pt-8 md:pl-8 relative">
      <div className="flex flex-row justify-between">
        <h2 className="mb-1">Mattias Loftén</h2>
        <span
          className="block md:hidden cursor-pointer"
          onClick={onMobileMenuClick}
        >
          Menu
        </span>
      </div>
      <h3 className="mb-0">Portfolio</h3>
      <a href="mailto:contact@mattiasloften.com">contact@mattiasloften.com</a>
      <div className="hidden md:block mt-8">
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
