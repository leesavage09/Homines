import * as React from "react"
import Section from "./section"

const Jumbotron = ({ title, imageSrc, imageAlt, quote }) => {
    return (
        <>
            <Section className="flex flex-row justify-center items-end">
                <div className="flex flex-col ml-8">
                    <h1 className="mb-8">{title}</h1>
                    <img className="z-10" src={imageSrc} alt={imageAlt} />
                </div>
                <p className="flex basis-8/12 self-center justify-center ml-8 mr-8 mb-10 text-3xl ">{quote}</p>
            </Section>
            <div className="relative left-0 w-screen -top-20 border-solid border-t-4 border-olive" />
        </>
    )
}

export default Jumbotron
