import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Section from "../components/section"
import ButtonLink from "../components/buttonLink"

const IndexPage = ({ data: { jumboImage, fysiotherapieImage, LivelinessImage, BeyunaImage, HeroesImage } }) => (
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

    <Section colour="bg-grey" className="text-white py-8">
      <h2 className="pb-6 text-2xl">Voeding &amp; Supplementen</h2>
      <p className="text-xl pb-6">“The body is both a temple and a perfect machine. Our bodies have within them a healing potential, and we nourish this potential with the pure and simple foods found in nature.” - Angela Lindvall</p>

      <div className="w-4/5 border-solid border-t-4 border-white m-auto pb-8" />

      <div className="flex pb-16">
        <p className="w-4/6">Je bent wat je eet en voor mij is dat heel simpel: “Wij zijn natuur, een levend wezen en dat betekent dat we ons ook moeten voeden met leven.” De juiste voeding helpt je om aan voldoende nutriënten te komen en zo ziektes en kwaaltjes te voorkomen. De kwaliteit van voedsel in de huidige maatschappij is echter een stuk lager dan 50 jaar gelden. Dit heeft te maken met de overvoed aan voedsel die we tegenwoordig kennen en bodemverarming door het overmatig gebruik van onze aarde. Hierdoor is het nemen van supplementen belangrijker dan ooit. Helaas zitten de meeste supplementen ook vol met meuk, waardoor je lichaam de nutriënten niet goed kan opnemen en het dus nog steeds niet het gewenste effect heeft. Het word je dus niet makkelijk gemaakt, maar ik help je er graag bij om jezelf gezonder te voeden. Neem contact met mij op als jij gezonder wil eten of een van mijn presentaties bij wil wonen voor meer informatie.</p>
        <div className="flex flex-col justify-center text-center w-2/6 border-solid border-4 border-white p-8 ml-8" >
          <p>In Samenwerking Met</p>
          <img className="m-auto my-0" width="200px" src={BeyunaImage.image.url} alt={BeyunaImage.altText} />
        </div>
      </div>

      <ButtonLink className="pb-6" linkTo="/contact">NEEM CONTACT OP</ButtonLink>
    </Section>

    <Section className="py-8">
      <h2 className="pb-6 text-2xl">Fysiek Fit</h2>
      <p className="text-xl pb-6">“Movement is a medicine for creating change in a human’s physical, emotional and mental state.”</p>

      <div className="w-4/5 border-solid border-t-4 border-grey m-auto pb-8" />

      <div className="flex pb-16">
        <p className="w-4/6">Mensen in beweging krijgen; niet alleen fysiek maar ook mentaal. Bewegen is een vorm van ontladen & opladen, je lijf leren kennen en je grenzen opzoeken. Omdat ik geloof dat zowel lichaam en geest in beweging moeten zijn om gezond en fit te worden en te blijven heb ik samen met mijn man Home of Heroes opgericht. Het is een plek waar iedereen die aan zichzelf werkt zijn of haar eigen Hero is. Met functional fitness, fysieke uitdagingen en vooral heel veel motivatie willen wij jou helpen fitter, sterker en gezonder te worden. Wil jij deel uitmaken van deze community of checken wat de opties zijn voor jou? Schroom niet om contact met mij op te nemen voor meer informatie over groepstrainingen of revalidatie.</p>
        <div className="flex flex-col justify-center text-center w-2/6 border-solid border-4 border-olive p-8 ml-8" >
          <p>In Samenwerking Met</p>
          <img className="m-auto my-0" width="200px" src={HeroesImage.image.url} alt={HeroesImage.altText} />
        </div>
      </div>

      <ButtonLink className="pb-6" linkTo="/contact">NEEM CONTACT OP</ButtonLink>
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
    BeyunaImage: contentfulImages(name: {eq: "Beyuna logo"}) {
      image {
        url
      }
      altText
    }
    HeroesImage: contentfulImages(name: {eq: "Home of Heroes Logo"}) {
      image {
        url
      }
      altText
    }
  }
`