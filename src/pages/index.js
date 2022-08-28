import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Section from "../components/section"
import { WhiteLinkButton, OliveLinkButton } from "../components/LinkButton"
import ContactSection from "../components/contactSection"

const IndexPage = ({ data: { jumboImage, fysiotherapieImage, LivelinessImage, BeyunaImage, HeroesImage, SelinaPhoto } }) => (
  <Layout>
    <Seo title="Home" />
    <Jumbotron imageSrc={jumboImage.image.url + '?w=308&fm=gif&q=1'} imageAlt={jumboImage.altText} quote={`“In ons organisme is er een complexe wisselwerking tussen lichaam, geest en ziel; alles is voortdurend en niets staat ooit stil. Het gaat om het doelgericht activeren van de basisregulatie en de zelfhelende krachten van het lichaam.”`} />

    <Section className="flex flex-col sm:flex-row sm:space-x-7">
      <div className="mb-10">
        <div className="border-solid border-4 border-olive mb-6 flex justify-center" >
          <img className="self-center object-contain" src={fysiotherapieImage.image.url + '?h=265&fm=gif&q=1'} alt={fysiotherapieImage.altText} />

        </div>
        <h2>Manuele- en Fysiotherapie</h2>
        <p className="text-left">
          Manuele therapie is een specialisatie binnen de fysiotherapie waarbij er voornamelijk vanuit de wervelkolom wordt gekeken naar complexe pijnklachten. Bij Homines behandel ik je niet alleen, maar ga ik samen met jou aan de slag om vanuit een holistisch perspectief te achterhalen waar de oorzaak vandaan komt.<br /><br />
          Mijn doel is om jou zo te behandelen, dat je niet meer terugkomt met dezelfde klachten.
        </p>
        <OliveLinkButton to="/manuele-fysiotherapie">MEER INFO</OliveLinkButton>
      </div>
      <div className="mb-10">
        <div className="border-solid border-4 border-olive mb-6 flex justify-center" >
          <img className="self-center object-contain" src={LivelinessImage.image.url + '?h=265&fm=gif&q=1'} alt={LivelinessImage.altText} />
        </div>
        <h2>Liveliness Trajecten</h2>
        <p className="text-left">
          Met een liveliness traject investeer je in jezelf en sta jij op nummer 1. In een korte periode gaan we samen aan de slag en zal je kennis opdoen, verbanden leggen en resultaten behalen, zodat jij je optimale zelf kunt zijn. Het resultaat is balans, zodat jij voldoende energie hebt om het leven te leven.<br /><br />
          Gun jij jezelf de beste versie van jezelf? Ga dan de uitdaging met mij aan.
        </p>
        <OliveLinkButton to="/liveliness-trajecten">MEER INFO</OliveLinkButton>
      </div>
    </Section>

    <Section colour="bg-grey" className="text-white py-8">
      <h2 className="text-2xl">Voeding &amp; Supplementen</h2>
      <p className="text-xl">“The body is both a temple and a perfect machine. Our bodies have within them a healing potential, and we nourish this potential with the pure and simple foods found in nature.” - Angela Lindvall</p>

      <div className="w-4/5 border-solid border-t-4 border-white m-auto pb-8" />

      <div className="flex flex-col md:flex-row pb-16 items-center">
        <p className="w-4/6 text-left">
        Je bent wat je eet is voor mij heel simpel: “Wij zijn natuur, een levend wezen en dat betekent dat we ons ook moeten voeden met leven.”<br /><br />
        De juiste voeding helpt je om aan voldoende nutriënten te komen en zo ziektes en kwaaltjes te voorkomen. De kwaliteit van voedsel in de huidige maatschappij is echter een stuk lager dan 50 jaar gelden. Dit heeft te maken met de overvoed aan voedsel die we tegenwoordig kennen. Er wordt veel geproduceerd en nagemaakt in de fabriek en daarbij hebben we te maken met bodemverarming doordat we kwantiteit verkiezen over kwaliteit. Hierdoor is het belangrijker dan ooit om ons bewuster te voeden en niet alleen te vullen.<br /><br />
        Helaas zit zowel onze voeding als de meeste supplementen vol met meuk, waardoor je lichaam de nodige nutriënten niet goed kan opnemen en het dus nog steeds niet het gewenste effect heeft. Het word je dus niet makkelijk gemaakt, maar ik help je er graag bij.<br /><br />
        Neem contact met mij op als jij bewuster wil eten of een van mijn presentaties bij wil wonen voor meer informatie.
        </p>
        <div className="flex flex-col justify-center self-center text-center w-4/6 sm:w-3/6 md:w-2/6 border-solid border-4 border-white p-2 sm:p-4 md:p-8 ml-8" >
          <p>Independent sales representative</p>
          <img className="m-auto my-0 self-center object-contain" width="200px" src={BeyunaImage.image.url} alt={BeyunaImage.altText} />
        </div>
      </div>

      <OliveLinkButton to="/contact">NEEM CONTACT OP</OliveLinkButton>
    </Section>

    <Section className="py-8 mb-10">
      <h2 className="text-2xl">Fysiek Fit</h2>
      <p className="text-xl">“Movement is a medicine for creating change in a human’s physical, emotional and mental state.”</p>

      <div className="w-4/5 border-solid border-t-4 border-grey m-auto pb-8" />

      <div className="flex flex-col md:flex-row pb-16 items-center">
        <p className="w-4/6 text-left">
          Mensen in beweging krijgen; niet alleen fysiek maar ook mentaal. Bewegen is een vorm van ontladen &amp; opladen, je lijf leren kennen en je grenzen opzoeken.<br /><br />
          Omdat ik geloof dat zowel lichaam en geest in beweging moeten zijn om gezond en fit te worden en te blijven heb ik samen met mijn man Home of Heroes opgericht. Het is een plek waar iedereen die aan zichzelf werkt zijn of haar eigen Hero is. Met functional fitness, fysieke uitdagingen en vooral heel veel motivatie willen wij jou helpen fitter, sterker en gezonder te worden.<br /><br />
          Wil jij deel uitmaken van deze community of checken wat de opties zijn voor jou? Schroom niet om contact met mij op te nemen voor meer informatie over groepstrainingen of revalidatie.
        </p>
        <div className="flex flex-col justify-center self-center text-center w-4/6 sm:w-3/6 md:w-2/6 border-solid border-4 border-olive p-2 sm:p-4 md:p-8 ml-8" >
          <p>In Samenwerking Met</p>
          <img className="m-auto my-0 self-center object-contain" width="200px" src={HeroesImage.image.url} alt={HeroesImage.altText} />
        </div>
      </div>

      <OliveLinkButton to="/contact">NEEM CONTACT OP</OliveLinkButton>
    </Section>

    <ContactSection>
      <WhiteLinkButton to="/contact">CONTACT</WhiteLinkButton>
    </ContactSection>


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
    fysiotherapieImage: contentfulImages(name: {eq: "Manuele- & fysiotherapie"}) {
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