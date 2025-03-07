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
import { List, ListItem } from '../components/list/list'

const LivelinessPage = ({
    data: { JumbotronImage, SelinaLivelinessPhoto, Testimonials },
}) => (
    <Layout>
        <Seo title="Liveliness Trajecten" />
        <Jumbotron
            title="Liveliness traject: Terug naar balans"
            imageSrc={JumbotronImage.image.url + '?w=485&fm=gif&q=1'}
            imageAlt={JumbotronImage.altText}
            quote="“The body is a self-healing organism, so it’s your job to nurture it and clearing things out of the way so the body can heal itself.”"
        />

        <Section className="mb-20">
            <p>
                Het menselijk lichaam is een prachtig systeem dat mij blijft
                fascineren. Hoe alles samenwerkt, hoe kleine veranderingen grote
                effecten kunnen hebben en hoe ons lichaam signalen geeft om ons
                te helpen - het blijft me keer op keer boeien. Vanuit die passie
                wil ik je meenemen in een traject waarin we samen terugkeren
                naar balans door te puzzelen en te veranderen. Want als lichaam,
                geest & omgeving samenwerken, ontstaat er ruimte voor herstel en
                groei.
            </p>
            <div className="text-left">
                <h2>Terug naar de basis</h2>
                <p>
                    Tijdens het Liveliness Traject gaan we terug naar de kern:
                    de B.A.S.I.S. van jouw welzijn. Aan de hand van het
                    6-domeinenmodel kijken we naar:
                    <List>
                        <ListItem>Bewegen</ListItem>
                        <ListItem>Ademhalen</ListItem>
                        <ListItem>Slapen</ListItem>
                        <ListItem>Immuunsysteem</ListItem>
                        <ListItem>Stress</ListItem>
                        <ListItem>Voeding</ListItem>
                    </List>
                    Deze zes domeinen zijn nauw met elkaar verbonden. Het
                    lichaam heeft een ongelofelijk zelfherstellend vermogen, en
                    soms is een kleine verandering, die we stap voor stap
                    invoeren in één domein, al genoeg om een positieve
                    verandering in de rest teweeg te brengen. Bijvoorbeeld: je
                    past je voeding aan, je immuunsysteem herstelt, je slaapt
                    beter, en je energie neemt toe. Deze verbindingen blijven me
                    inspireren en vormen de basis van mijn aanpak.
                </p>
                <h2>Samen op zoek naar balans</h2>
                <p>
                    Mijn werk draait om het zien van verbanden, het luisteren
                    naar de signalen van het lichaam, en het onderzoeken van wat
                    er nodig is om die balans te herstellen. Elk traject is
                    uniek, omdat ieder mens uniek is. Samen kijken we naar jouw
                    specifieke situatie en ontdekken we hoe stap voor stap,
                    haalbare aanpassingen een groot verschil kunnen maken.
                </p>
                <h2>Wat betekent balans?</h2>
                <p>
                    Balans is niet hetzelfde als perfectie! I know from
                    experience. Het gaat om een gezonde wisselwerking tussen
                    lichaam, geest & ziel, waarin je:
                    <List>
                        <ListItem>
                            Voldoende energie hebt om te doen wat je wilt.
                        </ListItem>
                        <ListItem>
                            Minder last hebt van fysieke of mentale klachten.
                        </ListItem>
                        <ListItem>
                            Een ritme vindt waarin je je goed voelt en in je
                            kracht komt te staan.
                        </ListItem>
                    </List>
                    Misschien ervaar je op dit moment iets anders:
                    <List>
                        <ListItem>Geen energie.</ListItem>
                        <ListItem>Terugkerende klachten of kwaaltjes.</ListItem>
                        <ListItem>
                            Simpelweg niet goed in je vel zitten.
                        </ListItem>
                        <ListItem>
                            Darmklachten of andere fysieke signalen.
                        </ListItem>
                    </List>
                    Dat zijn tekenen dat je lichaam je iets wil vertellen. Samen
                    gaan we op zoek naar wat er achter die signalen zit.
                </p>
            </div>
        </Section>

        <Section
            colour="bg-grey text-white"
            className="flex flex-col lg:flex-row items-center justify-center text-left"
            padding="pt-10 pb-0 px-6 sm:px-10 md:px-32"
        >
            <div>
                <h2>Wat kun je verwachten?</h2>
                <p>
                    Tijdens het Liveliness Traject werk ik samen met jou aan een
                    aanpak die past bij jouw behoeften en ritme. Dit traject
                    biedt:
                    <List>
                        <ListItem>
                            Een uitgebreid intakegesprek om jouw situatie &amp;
                            behoeften in kaart te brengen.
                        </ListItem>
                        <ListItem>
                            Drie één-op-één sessies waarin we jouw unieke
                            domeinen onderzoeken, afhankelijk van de doelen.
                        </ListItem>
                        <ListItem>
                            Persoonlijke begeleiding waarin we samen verbanden
                            leggen, het zit namelijk al in jou.
                        </ListItem>
                        <ListItem>
                            Advies op maat dat aansluit bij jouw unieke
                            behoeften en welke je mee kunt nemen om jouw
                            transformatie voort te zetten.
                        </ListItem>
                        <ListItem>
                            Stap voor stap, praktische aanpassingen die haalbaar
                            zijn en impact maken.
                        </ListItem>
                    </List>
                    Ben je nieuwsgierig naar wat jouw lichaam je te vertellen
                    heeft? Neem gerust contact op. Ik kijk ernaar uit om samen
                    met jou die balans te vinden.
                </p>
            </div>
            <img
                className="order-first lg:order-last lg:relative ml-10 lg:-mb-32 lg:-top-32 z-10 w-4/6 p-4 sm:p-6 md:p-8 lg:p-10 border-solid border-4 border-olive bg-white self-center object-contain"
                src={SelinaLivelinessPhoto.photo.url + '?w=377&fm=jpg&q=80'}
                alt={SelinaLivelinessPhoto.altText}
            />
        </Section>
        <Section
            colour="bg-grey text-white"
            padding="pt-10 pb-10 px-6 sm:px-10 md:px-32"
        >
            <h2 className="mt-0">Een traject vanuit mijn passie</h2>
            <p>
                Mijn eigen zoektocht naar balans begon in 2017, toen ik in
                aanraking kwam met Beyuna. Voor het eerst leerde ik écht
                etiketten lezen en buiten de gebaande paden denken. Dit inzicht
                inspireerde me om stap voor stap aanpassingen te maken in mijn
                voeding & leefstijl. <br />
                <br />
                Het werd een reis van experimenteren, leren en ontdekken, die me
                uiteindelijk bracht van vegan naar een carnivore aanpak en alles
                er tussenin. En dan heb ik het alleen nog over de voeding en
                niet alle sidetracks. In 2019 ging die zoektocht dieper, toen ik
                bij een leefstijlcoach terechtkwam. Ik zat onder de witte
                vlekken en mijn lichaam gaf me duidelijke signalen dat er iets
                moest veranderen. Tijdens die sessies werd ik geconfronteerd met
                mijn gewoonte om alles weg te lachen. Dat moment was voor mij
                een keerpunt. Ik begon in te zien hoe mijn patronen, keuzes en
                emoties samenwerkten met mijn fysieke gezondheid. Vanaf daar
                begon het allemaal écht. <br />
                <br />
                Die ervaring heeft niet alleen mijn persoonlijke leven
                veranderd, maar ook mijn werk. Het heeft me laten zien hoe
                belangrijk het is om verder te kijken dan symptomen en te
                luisteren naar de verhalen die ons lichaam ons vertelt. Het is
                mijn passie geworden om anderen te helpen hun eigen signalen te
                begrijpen, verbanden te leggen en stap voor stap de weg terug te
                vinden naar balans middel fysieke behandeling als de trajecten.{' '}
                <br />
                <br />
                Het liveliness traject is een weerspiegeling van mijn reis. Geen
                snelle oplossingen, geen quick fix, maar een gezamenlijke
                zoektocht, waarin we ontdekken wat jouw lichaam nodig heeft om
                weer meer in harmonie te komen.
            </p>
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
            <WhiteLinkButton to="/contact">Neem contact op</WhiteLinkButton>
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
