import * as React from "react"
import Section from "./section"

const Prices = ({ items = [] }) => {
    return (
        <>
            <div className="w-screen border-solid border-t-4 border-olive" />
            <Section>
                <h2 className="mt-0">Prijzen</h2>
                <ul>
                    {items.map((item)=>(
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Section>
        </>
    )
}

export default Prices
