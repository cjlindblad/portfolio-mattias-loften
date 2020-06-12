import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export const links = [
  {
    to: "/work/books",
    name: "Illustrations - Books",
  },
  {
    to: "/work/magazine-illustration",
    name: "Illustrations - Magazines",
  },
  {
    to: "/work/royality-tv",
    name: "Photoshop Artwork Series\n- Royality-TV",
  },
  {
    to: "/work/valharet",
    name: "Photoshop Artwork Series\n- Valhåret 2018",
  },
  {
    to: "/work/magazine-layout",
    name: "Magazine layout / design",
  },
]

const Header = ({ siteTitle, onMobileMenuClick }) => (
  <header className="w-full md:w-64 h-32 md:h-24">
    <div className="md:fixed pt-4 pl-4 pr-4 md:pr-0 md:pt-8 md:pl-8 relative">
      <div className="flex flex-row justify-between">
        <h2 className="mb-1 font-normal">Mattias Loftén</h2>
        <span
          className="block md:hidden cursor-pointer font-semibold text-orange-500 absolute top-0 right-0 p-4"
          onClick={onMobileMenuClick}
        >
          Menu
        </span>
      </div>
      <h2 className="mb-2 font-normal text-xl">Portfolio</h2>
      <a href="mailto:contact@mattiasloften.com">contact@mattiasloften.com</a>
      <div className="hidden md:block mt-8">
        {links.map(link => (
          <h3 key={link.to} className="mb-3 text-lg">
            <Link
              className="whitespace-pre"
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
