import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Jumbotron from "../components/jumbotron"
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Section from "../components/section"
import ContactSection from "../components/contactSection"

const ContactPage = (props) => {
  const ContactHeaderSrc = props.data.contentfulImages.image.url + '?w=444&fm=gif&q=1'
  const ContactHeaderAlt = props.data.contentfulImages.altText
  const quote = `“I make it a point to practice self-care. I make an appointment with myself”`
  const MainImageSrc = props.data.contentfulPhotos.photo.url + '?w=377&fm=jpg&q=80'
  const MainImageAlt = props.data.contentfulPhotos.altText

  return (
    <Layout>
      <Seo title="Contact" />
      <Jumbotron title="Contact" imageSrc={ContactHeaderSrc} imageAlt={ContactHeaderAlt} quote={quote} />

      <Section className="flex justify-center">
        <div className="w-3/6 flex items-center">
          <p className="px-20">
            Neem contact met mij op om een afspraak te maken voor manuele- &amp; fysiotherapie of om een liveliness traject te starten.<br/><br/>
            Daarnaast kun je ook bij mij terecht voor meer informatie over voeding &amp; suppletie en fysiek fit.
          </p>
        </div>
        <div className="w-3/6 flex justify-center items-start">
          <div className="border-solid border-4 border-olive p-4">
            <h2>
              HominesBoZ
            </h2>
            <ul className="flex flex-col justify-start items-start">
              <li className="my-2  flex flex-row">
                <a href="tel:0653505456">
                  <FontAwesomeIcon className="text-xl pr-4 text-olive" icon={faMobileScreen} />0653505456</a>
              </li>
              <li className="my-2">
                <a href="mailto:Hominesboz@gmail.com">
                  <FontAwesomeIcon className="text-xl pr-4 text-olive" icon={faEnvelope} />Hominesboz@gmail.com</a>
              </li>
              <li className="my-2">
                <FontAwesomeIcon className="text-xl pr-4 text-olive" icon={faLocationDot} />
                <a href="https://www.google.com/maps/place/Bergen+op+Zoom,+Netherlands/@51.4850255,4.2192038,11.74z/data=!4m5!3m4!1s0x47c413332081048f:0x1dd39c8b40e3b686!8m2!3d51.4945758!4d4.2871622">Bergen op Zoom</a>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <ContactSection />



    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery {
    contentfulImages(name: {eq: "Homines contact header"}) {
      image {
        url
      }
      altText
    }
    contentfulPhotos(name: {eq: "Selina"}) {
    photo {
      url
    }
    altText
  }
}
`
