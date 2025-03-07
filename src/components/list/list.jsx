import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const List = ({ children }) => {
    return <ul className="pb-4">{children}</ul>
}

export const ListItem = ({ children }) => {
    return (
        <li>
            <FontAwesomeIcon className="pr-4" icon={faStarOfLife} />
            {children}
        </li>
    )
}
