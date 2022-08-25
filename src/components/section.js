import * as React from "react"

const Section = ({ colour, padding="py-10 px-32", className, children }) => {
    return (
        <section className={colour}>
            <div className={`${padding} mx-auto max-w-7xl`}>
                <div className={className}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Section
