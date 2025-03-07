import * as React from 'react'
import Section from './section'

const Jumbotron = ({ title, imageSrc, imageAlt, quote }) => {
    return (
        <>
            <Section
                padding=""
                className="my-10 hidden lg:flex flex-row justify-center items-end"
            >
                <div className="flex flex-col ml-8">
                    <img
                        className="z-10 self-center object-contain"
                        src={imageSrc}
                        alt={imageAlt}
                    />
                </div>
                <p className="flex flex-col basis-8/12 self-center justify-center ml-8 mr-8 text-3xl ">
                    <h1>{title}</h1>
                    {quote}
                </p>
            </Section>

            <Section
                padding=""
                className="my-10 lg:hidden flex-row justify-center items-end"
            >
                <div className="flex flex-col ml-8">
                    <h1>{title}</h1>
                    <p className="flex basis-8/12 self-center justify-center ml-8 mr-8 text-3xl ">
                        {quote}
                    </p>
                    <img
                        className="z-10 px-20 sm:px-30 md:px-60 self-center object-contain"
                        src={imageSrc}
                        alt={imageAlt}
                    />
                </div>
            </Section>
        </>
    )
}

export default Jumbotron
