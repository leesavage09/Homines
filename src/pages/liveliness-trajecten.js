import * as React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Jumbotron from '../components/jumbotron'
import Section from '../components/section'
import { WhiteLinkButton } from '../components/LinkButton'
import Prices from '../components/prices'

const LivelinessPage = ({
    data: { JumbotronImage, SelinaLivelinessPhoto, Testimonials },
}) => (
    <Layout>
        <Seo title="Liveliness Trajecten" />
        <Jumbotron
            title="LIVELINESS TRAJECTEN"
            imageSrc={JumbotronImage.image.url + '?w=485&fm=gif&q=1'}
            imageAlt={JumbotronImage.altText}
            quote="“The body is a self-healing organism, so it’s your job to nurture it and clearing things out of the way so the body can heal itself.”"
        />

        <Section className="mb-20">
            <p>
                Even tijd voor jezelf, zorgen dat jij op nummer 1 staat.
                Investeren in jezelf omdat jij het waard bent. Kijkend vanuit
                een totaal plaatje en jou als uniek persoon wil ik je graag
                kennis laten maken met mijn Liveliness Traject. Tijdens zo’n
                traject zullen we in een korte tijd kennis opdoen, verbanden
                leggen en resultaat behalen zodat jij je optimale zelf kunt
                zijn.
            </p>
            <div className="text-left">
                <h2>Terug naar de basis</h2>
                <p>
                    Tijdens het liveliness traject gaan we terug naar de
                    B.A.S.I.S. Deze bekijken we vanuit het 6 domeinenmodel. We
                    gaan hierbij dieper in op Bewegen, Ademhalen, Slapen,
                    Immuunsysteem, Stress en zeker niet onbelangrijk is nummer
                    zes; Voeding. Ons lichaam is mega fascinerend, omdat al deze
                    6 domeinen met elkaar samenwerken. Het kun dus zomaar zijn
                    dat je bewust slechts een van deze domeinen aan hoeft te
                    pakken, waardoor de overige domeinen zichzelf herstellen.
                    Hoe ingenieus?!
                    <br />
                    <br />
                    Dit ziet er bijvoorbeeld als volgt uit: Je stopt met het
                    eten van bewerkt voedsel, waardoor je immuunsysteem
                    herstelt. Je kunt vervolgens beter slapen en ervaart
                    hierdoor meer energie. Door het sneeuwbaleffect in
                    verschillende domeinen herstel je sneller en beter.
                    <br />
                    <br />
                    Met de nieuwste inzichten, ondersteund door onderzoek, is de
                    unieke aanpak van het 6 domeinen model ontstaan. Ik pas dit
                    model toe in de liveliness trajecten, om samen met jou een
                    omkeer in je leven te maken zodat jij je optimale zelf kunt
                    zijn.
                </p>
                <h2>Wat is je optimale zelf?</h2>
                <p>
                    Je optimale zelf heeft een gezond lichaam &amp; geest met
                    voldoende energie, weinig tot geen kwaaltjes of ziektes, is
                    dagelijks in beweging en slaapt goed.
                    <br />
                    <br />
                    Wanneer je niet je optimale zelf bent kun je bijvoorbeeld
                    het volgende ervaren:
                    <br />
                    - Geen energie
                    <br />
                    - Veel ziek, fysieke klachten of van kwaal in kwaal stappen
                    <br />- Darmklachten en huidproblemen
                </p>
            </div>
        </Section>

        <Section
            colour="bg-grey text-white"
            className="flex flex-col lg:flex-row items-center justify-center text-left"
        >
            <div>
                <h2>Wat kun je van een liveliness traject verwachten?</h2>
                <p>
                    Tijdens een liveliness traject sta je er niet alleen voor.
                    Ik begeleid je tijdens het gehele proces en we stellen een
                    plan op dat bij jou past en waar jij je in kunt vinden. Met
                    een liveliness traject krijg je:
                </p>
                <ul className="text-left">
                    <li>
                        <FontAwesomeIcon className="pr-4" icon={faStarOfLife} />
                        Een intakegesprek
                    </li>
                    <li>
                        <FontAwesomeIcon className="pr-4" icon={faStarOfLife} />
                        3 één op één meetings
                    </li>
                    <li>
                        <FontAwesomeIcon className="pr-4" icon={faStarOfLife} />
                        Een uitgebreid onderzoek in jouw verschillende domeinen
                    </li>
                    <li>
                        <FontAwesomeIcon className="pr-4" icon={faStarOfLife} />
                        Eén op één begeleiding naar jouw optimale zelf
                    </li>
                    <li>
                        <FontAwesomeIcon className="pr-4" icon={faStarOfLife} />
                        Een op maat gemaakt advies waarbij rekening wordt
                        gehouden met jouw persoonlijke behoeften
                    </li>
                    <li>
                        <FontAwesomeIcon className="pr-4" icon={faStarOfLife} />
                        Relatief kleine aanpassingen om in korte tijd te
                        verbeteren
                    </li>
                </ul>
            </div>
            <img
                className="order-first lg:order-last lg:relative ml-10 lg:-mb-32 lg:-top-32 z-10 w-4/6 p-4 sm:p-6 md:p-8 lg:p-10 border-solid border-4 border-olive bg-white self-center object-contain"
                src={SelinaLivelinessPhoto.photo.url + '?w=377&fm=jpg&q=80'}
                alt={SelinaLivelinessPhoto.altText}
            />
        </Section>

        <Section>
            <h2>Wat anderen zeggen</h2>
            <div className="flex flex-col md:flex-row md:space-x-4 justify-center">
                {Testimonials.edges.map(({ node }) => (
                    <div
                        key={node.id}
                        className="border-solid border-4 border-olive w-100 mb-8 md:w-2/6 p-4"
                    >
                        <FontAwesomeIcon
                            className="text-olive text-mega mb-8"
                            icon={faComments}
                        />
                        {renderRichText(node.testimonial)}
                        <p>{node.customerName}</p>
                    </div>
                ))}
            </div>
        </Section>

        <Prices items={['Intake: € 55*', 'Liveliness Traject: € 511']} />
        <p className="-mt-6 mb-10">
            * Als je na de intake besluit om het liveliness traject samen met
            mij te starten, wordt dit bedrag in mindering gebracht op de kosten
            van het traject.
        </p>

        <Section colour="bg-olive">
            <h2>Maak een afspraak</h2>
            <p>
                Heb jij fysieke klachten? En wil je er nu echt van af?
                <br />
                Maak een afspraak en dan gaan we samen met die puzzel aan de
                slag.
            </p>
            <WhiteLinkButton to="/contact">CONTACT</WhiteLinkButton>
        </Section>
    </Layout>
)

export default LivelinessPage

export const pageQuery = graphql`
    query LivelinessPageQuery {
        JumbotronImage: contentfulImages(
            name: { eq: "Liveliness trajecten header" }
        ) {
            image {
                url
            }
            altText
        }
        SelinaLivelinessPhoto: contentfulPhotos(
            name: { eq: "Selina Liveliness Traject" }
        ) {
            photo {
                url
            }
            altText
        }
        Testimonials: allContentfulTestimonials(limit: 3) {
            totalCount
            pageInfo {
                currentPage
                hasNextPage
                hasPreviousPage
                perPage
            }
            edges {
                node {
                    id
                    customerName
                    testimonial {
                        raw
                    }
                }
            }
        }
    }
`
