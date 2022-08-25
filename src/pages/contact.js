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
            Neem contact met mij op om een afspraak te maken voor manuele- &amp; fysiotherapie of om een liveliness traject te starten. Daarnaast kun je ook bij mij terecht voor meer informatie over voeding &amp; suppletie en fysiek fit.
          </p>
        </div>
        <div className="w-3/6 flex justify-center items-start">
          <div className="border-solid border-4 border-olive p-4">
            <h2 className="my-4">
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

      <Section colour="bg-olive">
          <div className="flex justify-center">
            <div className="relative -top-20 w-3/6 flex justify-center ">
              <img className="z-10 w-4/6 p-10 border-solid border-4 border-olive bg-white" src={MainImageSrc} alt={MainImageAlt} />
            </div>
            <div className="w-3/6 flex flex-col -mb-20">
              <h2 className="py-6">Haai!</h2>
              <p>
                Ik ben Selina en ik heb een enorme fascinatie voor mens, ziel en lichaam. Het is dan ook niet voor niets dat ik gepassioneerd ben in wat ik doe: Ervoor zorgen dat jij de beste versie van jezelf bent. Je zult merken dat ik net even iets anders aan de slag ga dan je wellicht gewend bent. Dat is misschien even wennen, maar ik beloof je dat ik je daarmee juist beter kan helpen. Het is namelijk niet alleen het pijntje waar je last van hebt. Jouw klacht ontstaat met een reden en ik wil de oorzaak daarvan weten. Alleen op die manier kunnen we er samen voor zorgen dat we niet alleen de pijn verlichten, maar ook dat die pijn niet meer terugkomt.
              </p>
            </div>
          </div>
          <p className="text-xl">
            Dus, ben jij het zat steeds weer met dezelfde klachten terug te moeten? Neem dan contact met mij op en we werken samen aan een blijvende oplossing.
          </p>
      </Section>

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
