import * as React from "react"
import { Link } from "gatsby"

const LinkButton = ({ to, children, className }) => {
    return (
        <Link
            className={`${className} px-6 py-3 rounded-3xl border-solid border-2 border-grey no-underline`}
            to={to}
        >
            {children}
        </Link>
    )
}

export const OliveLinkButton = ({ to, children }) => {
    return (
        <LinkButton
            className={`bg-olive text-white`}
            to={to}
        >
            {children}
        </LinkButton>
    )
}

export const WhiteLinkButton = ({ to, children }) => {
    return (
        <LinkButton
            className={`bg-white text-grey`}
            to={to}
        >
            {children}
        </LinkButton>
    )
}
