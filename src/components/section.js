import * as React from 'react'

const Section = ({
    colour,
    padding = 'py-10 px-6 sm:px-10 md:px-32',
    className,
    children,
    id,
}) => {
    return (
        <section className={colour}>
            <div className={`${padding} mx-auto max-w-7xl`}>
                <div className={className} id={id}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Section
