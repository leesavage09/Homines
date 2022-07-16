import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';

const Header = (props) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)


  return (
    <header className="bg-olive h-28 flex justify-center items-center">
      <nav className="flex flex-row space-x-16 items-center text-xl">
        <h1>
          <MenuItem to="/">HOMINES</MenuItem>
        </h1>
        <MenuItem to="/manuele-fysiotherapie">MANUELE- &amp;<br />FYSIOTHERAPIE</MenuItem>
        <MenuItem to="/liveliness-trajecten">LIVELINESS<br />TRAJECTEN</MenuItem>
        <MenuItem to="/over">OVER MIJ</MenuItem>
        <MenuItem to="/contact">CONTACT</MenuItem>
      </nav>
    </header>
  )
};

export default Header

const MenuItem = ({ to, children, className }) => {
  const { pathname } = useLocation();

  const linkStyle = pathname === to ? "text-white" : ""
  const style = className + " " + linkStyle

  return (
    <Link className={style} to={to}>{children}</Link>
  )
}
