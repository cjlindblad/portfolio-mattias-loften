/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Header, { links } from "./header"

import "./layout.css"

const Layout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <>
      <nav
        className={`${
          showMobileMenu ? "h-64" : "h-0"
        } overflow-hidden transition-all duration-150 ease-in-out bg-gray-600 flex flex-col items-center justify-center`}
      >
        {links.map(link => (
          <div key={link.to} className="text-2xl text-gray-100 leading-relaxed">
            <Link
              to={link.to}
              style={{
                textDecoration: `none`,
              }}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </nav>
      <div className="flex flex-col md:flex-row">
        <Header onMobileMenuClick={() => setShowMobileMenu(!showMobileMenu)} />
        <main className="flex-1 md:mt-4 md:mr-6">{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
