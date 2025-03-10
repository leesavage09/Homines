import * as React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// load fortawesome styles to fix SSG
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false)
    const onShowMobileMenu = () => setShowMobileMenu(!showMobileMenu)

    return (
        <>
            <header className="bg-olive h-28 flex md:justify-center">
                <nav className="hidden md:flex space-x-6 lg:space-x-16 items-center text-xl  ">
                    <h1 className="text-xl lg:text-4xl">
                        <MenuItem to="/">HOMINES</MenuItem>
                    </h1>
                    <MenuItem to="/manuele-fysiotherapie">
                        MANUELE <br />
                        THERAPIE
                    </MenuItem>
                    <MenuItem to="/liveliness-trajecten">
                        LIVELINESS
                        <br />
                        TRAJECTEN
                    </MenuItem>
                    <MenuItem to="/over">OVER MIJ</MenuItem>
                    <MenuItem to="/contact">CONTACT</MenuItem>
                </nav>
                <nav className="flex md:hidden items-center text-4xl text-white pl-10">
                    <button
                        onKeyDown={onShowMobileMenu}
                        onClick={onShowMobileMenu}
                    >
                        <FontAwesomeIcon className="pr-8" icon={faBars} />
                    </button>
                    <h1 className="">
                        <MenuItem to="/">HOMINES</MenuItem>
                    </h1>
                </nav>
            </header>
            {showMobileMenu && <MobileMenu />}
        </>
    )
}

export default Header

const MenuItem = ({ to, children, className }) => {
    const { pathname } = useLocation()

    const linkStyle =
        pathname === to ? 'text-white no-underline' : 'no-underline'
    const style = className + ' ' + linkStyle

    return (
        <Link className={style} to={to}>
            {children}
        </Link>
    )
}

const MobileMenu = () => (
    <menu className="block xl:hidden flex flex-col space-y-10 text-xl p-10 border-solid border-4 border-olive ">
        <Link className="no-underline" to="/manuele-fysiotherapie">
            MANUELE THERAPIE
        </Link>
        <Link className="no-underline" to="/liveliness-trajecten">
            LIVELINESS TRAJECTEN
        </Link>
        <Link className="no-underline" to="/over">
            OVER MIJ
        </Link>
        <Link className="no-underline" to="/contact">
            CONTACT
        </Link>
    </menu>
)
