import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Section from "../components/section"
import ButtonLink from "../components/buttonLink"

const IndexPage = ({ data: { jumboImage, fysiotherapieImage, LivelinessImage } }) => (
  <Layout>
    <Seo title="Home" />
    <Jumbotron imageSrc={jumboImage.image.url + '?w=308&fm=gif&q=1'} imageAlt={jumboImage.altText} quote={`“In ons organisme is er een complexe wisselwerking tussen lichaam, geest en ziel; alles is voortdurend en niets staat ooit stil. Het gaat om het doelgericht activeren van de basisregulatie en de zelfhelende krachten van het lichaam.”`} />

    <Section className="flex space-x-7">
      <div>
        <div className="border-solid border-4 border-olive mb-6 flex justify-center" >
          <img src={fysiotherapieImage.image.url + '?h=265&fm=gif&q=1'} alt={fysiotherapieImage.altText} />

        </div>
        <h2 className="pb-6">Manuele- en Fysiotherapie</h2>
        <p className="pb-6">
          Manuele therapie is een specialisatie van fysiotherapie. Bij Homines behandel ik je niet alleen, maar achterhaal ik ook de oorzaak van de klachten in je gewrichten, spieren en zenuwfuncties. Daarbij houd ik rekening met gerelateerde beperkingen tijdens de dagelijkse activiteiten. Mijn doel is om jou zo te behandelen, dat je niet meer terugkomt met dezelfde klachten.
        </p>
        <ButtonLink linkTo="/manuele-fysiotherapie">MEER INFO</ButtonLink>
      </div>
      <div>

        <div className="border-solid border-4 border-olive mb-6 flex justify-center" >
          <img src={LivelinessImage.image.url + '?h=265&fm=gif&q=1'} alt={LivelinessImage.altText} />
        </div>
        <h2 className="pb-6">Liveliness Trajecten</h2>
        <p className="pb-6">
          Met een liveliness traject investeer je in jezelf en sta jij op nummer 1. In korte gaan we samen aan de slag en zal je kennis opdoen, verbanden leggen en resultaten behalen, zodat jij je optimale zelf kunt zijn. Het resultaat zijn een gezonde lichaam en geest en voldoende energie om het leven aan te kunnen. Gun jij jezelf de beste versie van jezelf? Ga dan de uitdaging met mij aan.
        </p>
        <ButtonLink linkTo="/liveliness-trajecten">MEER INFO</ButtonLink>
      </div>
    </Section>


  </Layout >
)


export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    jumboImage: contentfulImages(name: {eq: "Homines Text Logo"}) {
      image {
        url
      }
      altText
    }
    fysiotherapieImage: contentfulImages(name: {eq: "Manuele- & fysiotherapie header"}) {
      image {
        url
      }
      altText
    }
    LivelinessImage: contentfulImages(name: {eq: "Liveliness trajecten header"}) {
      image {
        url
      }
      altText
    }
  }
`