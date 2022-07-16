/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main className="text-center mt-10">{children}</main>
        <footer className="flex justify-center items-end bg-olive text-white h-12 mt-10 pb-2">
          {`© ${new Date().getFullYear()}`}
          {` - Alle rechten voorbehouden `}
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
