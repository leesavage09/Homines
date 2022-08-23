import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      contentfulImages(name: {eq: "Homines Logo"}) {
        image {
          url
        }
      }
    }
  `)

  console.log(data)

  return (
    <>
      <Header />
      <main className="mt-10 text-center">
        {children}
      </main>
      <footer className="">
        <div className="flex flex-row justify-between ml-20 mr-20 mt-20">
          <div className="w-1/6">
            <h3>DIENSTEN</h3>
            <p>Manuele- &amp; Fysiotherapie Liveliness Trajecten Voeding &amp; Supplementen Fysiek Fit</p>
          </div>
          <div className="w-1/6">
            <h3>OVER</h3>
            <p>
            Homines wordt beheerd door Selina Nouwt, een erkend opgeleide manueel- en fysiotherapeut.
            </p>
          </div>
          <div className="w-1/6">
            <h3>CONTACT</h3>
            <p>
            HominesBoZ<br/>
            Bergen op Zoom<br/>
            <a href="tel:0653505456">0653505456</a><br/>
            <a href="mailto:Hominesboz@gmail.com">Hominesboz@gmail.com</a>
            </p>
          </div>
          <div className="w-1/6">
            <img className="z-10" src={data.contentfulImages.image.url + '?w=100&fm=gif&q=1'} />
          </div>
        </div>
        <div className="flex justify-center items-end bg-olive text-white h-12 mt-10 pb-2">
          {`© ${new Date().getFullYear()} - Alle rechten voorbehouden `}
        </div>
        <div className="flex justify-center text-center mt-8 mb-8">
          {`Description: Homines Bergen op Zoom - Neem contact op om een afspraak te maken voor`}
          <br />
          {`manuele- & fysiotherapie of om een liveliness traject te starten.`}
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
