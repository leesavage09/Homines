import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "./section"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      contentfulImages(name: {eq: "Homines Logo"}) {
        image {
          url
        }
        altText
      }
    }
  `)

  return (
      <footer className="">
        <Section className="flex flex-row justify-between">
          <div className="w-1/6">
            <h2>DIENSTEN</h2>
            <p>Manuele- &amp; Fysiotherapie Liveliness Trajecten Voeding &amp; Supplementen Fysiek Fit</p>
          </div>
          <div className="w-1/6">
            <h2>OVER</h2>
            <p>
            Homines wordt beheerd door Selina Nouwt, een erkend opgeleide manueel- en fysiotherapeut.
            </p>
          </div>
          <div className="w-1/6">
            <h2>CONTACT</h2>
            <p>
            HominesBoZ<br/>
            <a href="https://www.google.com/maps/place/Bergen+op+Zoom,+Netherlands/@51.4850255,4.2192038,11.74z/data=!4m5!3m4!1s0x47c413332081048f:0x1dd39c8b40e3b686!8m2!3d51.4945758!4d4.2871622">Bergen op Zoom</a><br/>
            <a href="tel:0653505456">0653505456</a><br/>
            <a href="mailto:Hominesboz@gmail.com">Hominesboz@gmail.com</a>
            </p>
          </div>
          <div>
            <img className="z-10" alt={data.contentfulImages.altText} src={data.contentfulImages.image.url + '?w=100&fm=gif&q=1'} />
          </div>
        </Section>
        <Section colour="bg-olive" padding="px-32" className="flex justify-center items-center text-white h-12">
          {`© ${new Date().getFullYear()} - Alle rechten voorbehouden `}
        </Section>
        <Section padding="pt-6 pb-20" className="flex justify-center text-center">
          {`Description: Homines Bergen op Zoom - Neem contact op om een afspraak te maken voor`}
          <br />
          {`manuele- & fysiotherapie of om een liveliness traject te starten.`}
        </Section>
      </footer>
  )
}

export default Footer
