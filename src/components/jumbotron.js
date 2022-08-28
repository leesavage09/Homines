import * as React from "react"
import Section from "./section"

const Jumbotron = ({ title, imageSrc, imageAlt, quote }) => {
    return (
        <>
            <Section padding="" className="hidden lg:flex flex-row justify-center items-end">
                <div className="flex flex-col ml-8">
                    <h1>{title}</h1>
                    <img
                        className="z-10 self-center object-contain"
                        src={imageSrc}
                        alt={imageAlt}
                    />
                </div>
                <p className="flex basis-8/12 self-center justify-center ml-8 mr-8 text-3xl ">{quote}</p>
            </Section>

            <Section padding="" className="lg:hidden flex-row justify-center items-end">
                <div className="flex flex-col ml-8">
                    <h1>{title}</h1>
                    <p className="flex basis-8/12 self-center justify-center ml-8 mr-8 text-3xl ">{quote}</p>
                    <img
                        className="z-10 px-20 sm:px-30 md:px-60 self-center object-contain"
                        src={imageSrc}
                        alt={imageAlt} />
                </div>

            </Section>
            <div className="w-screen border-solid border-t-4 border-olive" />
        </>
    )
}

export default Jumbotron
