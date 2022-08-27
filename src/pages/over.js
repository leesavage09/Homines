import * as React from "react"
import { graphql } from "gatsby"
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Section from "../components/section"

const OverPage = ({ data: { JumboImage, SelinaPhoto, SelinaQualifications } }) => (
  <Layout>
    <Seo title="Over Selina" />
    <Jumbotron title="OVER MIJ" imageSrc={JumboImage.image.url + '?w=400&fm=gif&q=1'} imageAlt={JumboImage.altText} quote={(<>'I AM' <br /> “Two of the most powerful words in existence, because you become what you put after them.”</>)} />

    <Section className="flex flex-col xl:flex-row xl:space-x-11">
      <p className="text-left">
        Waarom? Is dat zo? Dit zijn twee vragen die als een rode draad door mijn leven lopen. Ik kan mij nog van de middelbare school herinneren dat een docent tegen zei: “Selina neem dit nu maar gewoon aan, het is zo en hierop gaan we verder. Je kunt niet alles uitleggen, sommige dingen moet je gewoon aannemen.”<br /><br />
        Eigen-wijs en kritisch zijn eigenschappen die maken dat ik altijd op zoek ben naar nieuwe informatie om mijn kijk op dingen te verbreden en te zoeken naar het complete plaatje.<br /><br />
        Tijdens mijn eerste werkjaren als fysiotherapeut kwam ik er achter dat ik het een en ander miste om mensen echt te kunnen helpen. Ik wist dat het plaatje niet compleet was, al kon ik niet precies vertellen wat eraan ontbrak. Jarenlang ben ik op zoek gegaan naar de missende informatie en inmiddels heb ik de verdieping gevonden in voeding &amp; suppletie, mindset, ademhaling en andere domeinen. Hoewel ik inmiddels heel veel missende informatie heb gevonden, weet ik dat er nog een hoop te ontdekken is en blijf ik mij verder in de materie verdiepen. De fascinatie voor mens, ziel en lichaam zorgt bij mij nu eenmaal voor een hongerigheid naar informatie.<br /><br />
        De momenten dat ik niet gepassioneerd bezig ben met ‘werkzaamheden’ zoek ik graag de rust op in het bos of op het strand en verzamel ik informatie uit boeken, podcasts, artikelen, cursussen etc. Daarnaast heeft tijd spenderen met mijn man en vrienden ook een hoge prioriteit. En zoals mijn man zegt, is slapen een hobby van mij, maar wel onder het motto van selfcare ;).
      </p>

      <img
        className="z-10 w-4/6 mx-auto p-4 sm:p-6 md:p-8 border-solid border-4 border-olive bg-white self-center object-contain"
        src={SelinaPhoto.photo.url + '?w=308&fm=jpg&q=80'}
        alt={SelinaPhoto.altText}
      />

    </Section>

    <Section colour="bg-olive" className="text-white">
      <h2 className=" text-2xl">Opleidingen &amp; Cursussen</h2>
      <ul className="text-left inline-block">
        {SelinaQualifications.list.map((item) => (
          <li key={item} className="pb-2"><FontAwesomeIcon className="text-xl pr-4" icon={faGraduationCap} />{item}</li>
        ))}
      </ul>
    </Section>
  </Layout>
)

export default OverPage

export const pageQuery = graphql`
  query OverPageQuery {
    JumboImage: contentfulImages(name: {eq: "Over Selina Header"}) {
      image {
        url
      }
      altText
    }
    SelinaPhoto: contentfulPhotos(name: {eq: "Selina"}) {
      photo {
        url
      }
      altText
    }
    SelinaQualifications: contentfulLists(name: {eq: "Opleidingen & Cursussen"}) {
      list
    }
}
`