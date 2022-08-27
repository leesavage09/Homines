import * as React from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = (props) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <>
      <header className="bg-olive h-28 flex xl:justify-center">
        <nav className="hidden xl:flex space-x-16  items-center text-xl  ">
          <h1 className="text-4xl text-white">
            <MenuItem to="/">HOMINES</MenuItem>
          </h1>
          <MenuItem to="/manuele-fysiotherapie">MANUELE- &amp;<br />FYSIOTHERAPIE</MenuItem>
          <MenuItem to="/liveliness-trajecten">LIVELINESS<br />TRAJECTEN</MenuItem>
          <MenuItem to="/over">OVER MIJ</MenuItem>
          <MenuItem to="/contact">CONTACT</MenuItem>
        </nav>
        <nav className="flex xl:hidden items-center text-4xl text-white pl-10">
          <a onClick={() => setShowMobileMenu(!showMobileMenu)}><FontAwesomeIcon className="pr-8" icon={faBars} /></a>
          <h1 className="">
            <MenuItem to="/">HOMINES</MenuItem>
          </h1>
        </nav>
      </header>
      {showMobileMenu && <MobileMenu />}
    </>
  )
};

export default Header

const MenuItem = ({ to, children, className }) => {
  const { pathname } = useLocation();

  const linkStyle = pathname === to ? "text-white no-underline" : "no-underline"
  const style = className + " " + linkStyle

  return (
    <Link className={style} to={to}>{children}</Link>
  )
}

const MobileMenu = () => (
  <menu className="block xl:hidden flex flex-col space-y-10 text-xl p-10 border-solid border-4 border-olive ">
    <Link className="no-underline" to="/manuele-fysiotherapie">MANUELE- &amp; FYSIOTHERAPIE</Link>
    <Link className="no-underline" to="/liveliness-trajecten">LIVELINESS TRAJECTEN</Link>
    <Link className="no-underline" to="/over">OVER MIJ</Link>
    <Link className="no-underline" to="/contact">CONTACT</Link>
  </menu>
)
