import * as React from "react"
import { navigate, Link } from "gatsby"

const ButtonLink = ({ linkTo, children }) => {
    return (
        <Link
            className="bg-olive text-white px-6 py-2 rounded-3xl border-solid border-2 border-grey no-underline"
            to={linkTo}
        >
            {children}
        </Link>
    )
}

export default ButtonLink
