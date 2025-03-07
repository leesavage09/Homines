import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Jumbotron from '../components/jumbotron'
import Section from '../components/section'
import { WhiteLinkButton, OliveLinkButton } from '../components/LinkButton'
import ContactSection from '../components/contactSection'

const IndexPage = ({
    data: {
        jumboImage,
        fysiotherapieImage,
        LivelinessImage,
        BeyunaImage,
        HeroesImage,
        SelinaPhoto,
    },
}) => (
    <Layout>
        <Seo title="Home" />
        <Jumbotron
            title="Homines"
            imageSrc={jumboImage.image.url + '?w=308&fm=gif&q=1'}
            imageAlt={jumboImage.altText}
            quote={`“In ons organisme is er een complexe wisselwerking tussen lichaam, geest en ziel; alles is voortdurend en niets staat ooit stil. Het gaat om het doelgericht activeren van de basisregulatie en de zelfhelende krachten van het lichaam.”`}
        />

        <ContactSection>
            <WhiteLinkButton to="/contact">Neem contact op</WhiteLinkButton>
        </ContactSection>

        <Section className="flex flex-col sm:flex-row sm:space-x-7">
            <div className="mb-10">
                <div className="border-solid border-4 border-olive mb-6 flex justify-center">
                    <img
                        className="self-center object-contain"
                        src={fysiotherapieImage.image.url + '?h=265&fm=gif&q=1'}
                        alt={fysiotherapieImage.altText}
                    />
                </div>
                <h2>Manuele Therapie & het MyO Concept</h2>
                <p className="text-center">
                    <em>"Listen to your body. It’s smarter than you are."</em>
                </p>
                <p className="text-left">
                    Ik combineer manuele therapie, osteopathie en
                    bindweefselwerk met intuïtieve inzichten om klachten bij de
                    kern aan te pakken. Met het MyO Concept kijk ik naar de
                    samenhang in het lichaam, waar klachten vaak een
                    dieperliggende oorzaak hebben, zoals in de organen, het
                    bindweefsel of in energetische blokkades.
                </p>
                <p className="text-left">
                    Voor mij bestaat er geen standaard oplossingen, maar een
                    behandeling die past bij jouw unieke verhaal. Samen
                    ontdekken we wat jouw lichaam je wil vertellen en werken we
                    aan een duurzame balans.
                </p>
                <p className="text-left">
                    Ben jij klaar om de diepte in te gaan?
                </p>
                <OliveLinkButton to="/manuele-fysiotherapie">
                    MEER INFO
                </OliveLinkButton>
            </div>
            <div className="mb-10">
                <div className="border-solid border-4 border-olive mb-6 flex justify-center">
                    <img
                        className="self-center object-contain"
                        src={LivelinessImage.image.url + '?h=265&fm=gif&q=1'}
                        alt={LivelinessImage.altText}
                    />
                </div>
                <h2>Liveliness Traject: Terug naar balans</h2>
                <p className="text-center">
                    <em>
                        “The body is a self-healing organism, so it’s your job
                        to nurture it and clearing things out of the way so the
                        body can heal itself.”
                    </em>
                </p>
                <p className="text-left">
                    Het lichaam fascineert me - hoe alles samenwerkt, hoe kleine
                    veranderingen grote effecten hebben, en hoe het ons signalen
                    geeft om te helpen. Met het Liveliness Traject neem ik je
                    mee op een reis terug naar balans, waarin we kijken naar de
                    kern van jouw welzijn.
                </p>

                <p className="text-left">
                    Domeinen werken nauw samen, dus een kleine aanpassing in één
                    domein kan al een sneeuwbaleffect veroorzaken in de rest.
                    Samen leggen we verbanden, luisteren we naar de signalen van
                    jouw lichaam, en ontdekken we welke stap voor stap haalbare
                    aanpassingen jij kunt maken in de reis naar jouw welzijn.
                </p>

                <p className="text-left">
                    Dit traject is geen quick fix, maar een gezamenlijke
                    zoektocht naar wat jouw lichaam nodig heeft om meer in
                    harmonie te komen. Het is geïnspireerd door mijn eigen reis,
                    waarin ik leerde hoe voeding, emoties en keuzes samenhangen
                    met (fysieke) gezondheid.
                </p>

                <p className="text-left">
                    Ben jij klaar om te ontdekken wat jouw lichaam je vertelt?
                    Neem contact op en dan gaan we samen aan de slag.
                </p>

                <OliveLinkButton to="/liveliness-trajecten">
                    MEER INFO
                </OliveLinkButton>
            </div>
        </Section>

        <Section colour="bg-grey" className="text-white py-8" id="voeding">
            <h2 className="text-2xl">Voeding &amp; Supplementen</h2>
            <p className="text-xl">
                “The body is both a temple and a perfect machine. Our bodies
                have within them a healing potential, and we nourish this
                potential with the pure and simple foods found in nature.” -
                Angela Lindvall
            </p>

            <div className="w-4/5 border-solid border-t-4 border-white m-auto pb-8" />

            <div className="flex flex-col md:flex-row pb-16 items-center">
                <div className="w-4/6 text-left">
                    De juiste voeding geeft je lichaam de bouwstoffen die het
                    nodig heeft om gezond te blijven, ziektes te voorkomen en
                    optimaal te functioneren. Helaas is de kwaliteit van ons
                    voedsel vandaag de dag niet meer zoals vroeger. Onze huidige
                    maatschappij is gericht op kwantiteit in plaats van
                    kwaliteit, met bodemuitputting en massaproductie als gevolg.
                    Veel voedingsmiddelen en supplementen bevatten onnatuurlijke
                    toevoegingen, waardoor je lichaam de benodigde nutriënten
                    niet goed kan opnemen. En dan heb ik het nog niet eens over
                    de chemicaliën die worden gebruikt of hoe lang een product
                    onderweg is. Dit maakt het lastig om écht goed voor jezelf
                    te zorgen, terwijl het juist belangrijker is dan ooit om
                    bewuster te kiezen voor wat je jouw lichaam voedt! Wij zijn
                    natuur, dus ons lichaam heeft het nodig dat we haar
                    natuurlijk voeden en haar zien als onze tempel.
                    <br />
                    <br />
                    Wil je bewuster leren eten of meer weten over voedingskeuzes
                    & supplementen? Neem contact op om samen jouw behoefte te
                    ontdekken. Samen maken we voeding weer een bron van leven,
                    plezier & dankbaarheid.
                    <br />
                    <br />
                    Weet je al dat je met de voeding aan de slag wilt, maar zie
                    je door de bomen het bos niet meer? Laten we dan een moment
                    plannen waarin we samen terug gaan naar de basis. Ik deel
                    tijdens dit moment kennis en praktische toepassingen
                    (investering in jezelf 155 euro).
                </div>

                <div className="mt-10 md:mt-0 flex flex-col justify-center self-center text-center w-4/6 sm:w-3/6 md:w-2/6 border-solid border-4 border-white p-2 sm:p-4 md:p-8 ml-8">
                    <p>Independent sales representative</p>
                    <img
                        className="m-auto my-0 self-center object-contain"
                        width="200px"
                        src={BeyunaImage.image.url}
                        alt={BeyunaImage.altText}
                    />
                </div>
            </div>

            <OliveLinkButton to="/contact">NEEM CONTACT OP</OliveLinkButton>
        </Section>

        <Section className="py-8 mb-10" id="fysiek">
            <h2 className="text-2xl">Fysiek Fit</h2>
            <p className="text-xl">
                “Movement is a medicine for creating change in a human’s
                physical, emotional and mental state.”
            </p>

            <div className="w-4/5 border-solid border-t-4 border-grey m-auto pb-8" />

            <div className="flex flex-col md:flex-row pb-16 items-center">
                <p className="w-4/6 text-left">
                    Beweging is zoveel meer dan fysieke inspanning. Het is een
                    manier om spanning los te laten, energie op te laden, jezelf
                    te leren kennen en je grenzen te verleggen. Het helpt je
                    verbinding te maken met je lichaam en de signalen ervan écht
                    te begrijpen.
                    <br />
                    <br />
                    Bij Home of Heroes, opgericht door mij en mijn man, geloven
                    we dat gezondheid draait om de harmonie tussen lichaam &
                    geest. Onze community is een plek waar jij jouw innerlijke
                    Hero ontdekt en groeit. Door functionele fitness, uitdagende
                    fysieke prikkels en een ondersteunende omgeving helpen we je
                    niet alleen sterker en fitter te worden, maar ook meer in
                    balans te komen en veerkrachtig in het leven te staan.
                    <br />
                    <br />
                    Ben je klaar om de verbinding met je lijf te verdiepen, in
                    beweging te komen en jouw kracht te ontdekken? Neem contact
                    op om een gratis proefles te plannen of de mogelijkheden te
                    bespreken, of het nu gaat om de groepstrainingen of jouw
                    persoonlijke reis naar een gezonder & bewuster leven.
                </p>
                <div className="flex flex-col justify-center self-center text-center w-4/6 sm:w-3/6 md:w-2/6 border-solid border-4 border-olive p-2 sm:p-4 md:p-8 ml-8">
                    <p>In Samenwerking Met</p>
                    <img
                        className="m-auto my-0 self-center object-contain"
                        width="200px"
                        src={HeroesImage.image.url}
                        alt={HeroesImage.altText}
                    />
                </div>
            </div>

            <OliveLinkButton to="/contact">NEEM CONTACT OP</OliveLinkButton>
        </Section>

        <div className="w-screen border-solid border-t-4 border-olive" />
    </Layout>
)

export default IndexPage

export const pageQuery = graphql`
    query IndexPageQuery {
        jumboImage: contentfulImages(name: { eq: "Homines Text Logo" }) {
            image {
                url
            }
            altText
        }
        fysiotherapieImage: contentfulImages(
            name: { eq: "Manuele- & fysiotherapie" }
        ) {
            image {
                url
            }
            altText
        }
        LivelinessImage: contentfulImages(
            name: { eq: "Liveliness trajecten header" }
        ) {
            image {
                url
            }
            altText
        }
        BeyunaImage: contentfulImages(name: { eq: "Beyuna logo" }) {
            image {
                url
            }
            altText
        }
        HeroesImage: contentfulImages(name: { eq: "Home of Heroes Logo" }) {
            image {
                url
            }
            altText
        }
    }
`
