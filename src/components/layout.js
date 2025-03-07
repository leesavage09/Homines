import * as React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="mt-10 text-center">{children}</main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
