import * as React from "react"

const Jumbotron = ({ title, imageSrc, quote }) => {
    return (
        <>
            <div className="flex flex-row justify-center items-end">
                <div className="flex flex-col">
                    <h1 className="mb-8">{title}</h1>
                    <img className="z-10" src={imageSrc} />
                </div>
                <p className="flex basis-8/12 self-center justify-center ml-8 mb-10 text-3xl ">{quote}</p>
            </div>
            <div className="relative left-0 w-screen -top-10 border-solid border-t-4 border-olive" />
        </>
    )
}

export default Jumbotron