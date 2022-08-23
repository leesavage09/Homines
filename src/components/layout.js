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
      <main className="mt-10 text-center">
        {children}
      </main>
      <footer className="">
        <div className="flex justify-center items-end bg-olive text-white h-12 mt-10 pb-2">
          {`© ${new Date().getFullYear()} - Alle rechten voorbehouden `}
        </div>
        <div className="flex justify-center text-center mt-8 mb-8">
          {`Description: Homines Bergen op Zoom - Neem contact op om een afspraak te maken voor`}
          <br />
          {`manuele- & fysiotherapie of om een liveliness traject te starten.`}
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
