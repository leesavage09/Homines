import * as React from 'react'
import { graphql } from 'gatsby'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Jumbotron from '../components/jumbotron'
import Section from '../components/section'

const OverPage = ({
    data: { JumboImage, SelinaPhoto, SelinaQualifications },
}) => (
    <Layout>
        <Seo title="Over Selina" />
        <Jumbotron
            title="Over mij"
            imageSrc={JumboImage.image.url + '?w=400&fm=gif&q=1'}
            imageAlt={JumboImage.altText}
            quote={
                <>
                    'I AM' <br /> “Two of the most powerful words in existence,
                    because you become what you put after them.”
                </>
            }
        />

        <Section
            className="flex flex-col lg:flex-row xl:space-x-11"
            padding="pt-10 pb-0 px-6 sm:px-10 md:px-32"
        >
            <div>
                <p className="text-left">
                    Waarom? Is dat zo? Twee simpele vragen, maar voor mij zijn
                    ze de rode draad door mijn leven. Al sinds de middelbare
                    school is mijn nieuwsgierigheid mijn drijvende kracht. Ik
                    herinner me nog een docent die zei: “Selina, neem dit nu
                    maar gewoon aan. Je kunt niet alles uitleggen, sommige
                    dingen moet je gewoon aannemen.” Dat antwoord liet me
                    destijds niet los, en eerlijk gezegd doet het dat nog steeds
                    niet.{' '}
                </p>
                <p className="text-left">
                    Eigenwijs en kritisch zijn misschien niet altijd de
                    makkelijkste eigenschappen, maar ze hebben me wel gebracht
                    waar ik nu ben. Ik ben altijd op zoek naar nieuwe inzichten,
                    met een honger naar het complete plaatje. Wat ligt er achter
                    de klacht? Hoe werkt het lichaam écht? Die vragen blijven me
                    inspireren en uitdagen.
                </p>
                <h2>Een zoektocht naar dieper begrip</h2>
                <p className="text-left">
                    Tijdens mijn eerste jaren als fysiotherapeut voelde ik al
                    dat er iets ontbrak. Het leek alsof ik niet alle
                    puzzelstukjes in handen had om mensen écht te kunnen helpen.
                    Dat gevoel bracht me op een pad van ontdekken & leren. Ik
                    dook dieper in domeinen zoals voeding, suppletie, mindset,
                    ademhaling, bindweefsel en energetische verbindingen. Dit
                    proces, gecombineerd met mijn eigen ervaringen - in mijn
                    persoonlijke reis met o.a. darm- & huidklachten en voeding -
                    heeft niet alleen mijzelf veranderd, maar ook mijn werk als
                    therapeut.
                </p>
                <p className="text-left">
                    Wat ik ontdekte, is dat alles met elkaar in verbinding
                    staat. Het lichaam vertelt een verhaal, en het begrijpen van
                    dat verhaal vraagt om een bredere blik. Het heeft me geleerd
                    om buiten de protocollen te denken en met intuïtie en
                    nieuwsgierigheid te werken aan échte oplossingen.
                </p>
            </div>

            <img
                className="z-10 w-6/6 mx-auto p-4 sm:p-6 md:p-8 border-solid border-4 border-olive bg-white self-center object-contain"
                src={SelinaPhoto.photo.url + '?w=308&fm=jpg&q=80'}
                alt={SelinaPhoto.altText}
            />
        </Section>

        <Section className="pt-0" padding="pt-0 pb-10 px-6 sm:px-10 md:px-32">
            <p className="text-left">
                <h2>Passie voor mens, ziel en lichaam</h2>
                Mijn fascinatie voor de verbinding tussen mens, ziel en lichaam
                is onuitputtelijk. Ik blijf mezelf verdiepen, of dat nu is via
                cursussen, boeken, podcasts of simpelweg door mijn eigen lichaam
                te observeren en nog beter te leren kennen. Die passie vertaalt
                zich in mijn werk, waar ik verbanden leg en mensen begeleid naar
                meer balans & herstel.
                <br />
                <br />
                <h2>Rust en zelfzorg</h2>
                Wanneer ik niet bezig ben met mijn werk, zoek ik graag de natuur
                op. Het bos en het strand zijn mijn plekken van rust en
                reflectie. Ook tijd doorbrengen met mijn man lekker cosy thuis
                is voor mij waardevol. En zoals mijn man vaak zegt: slapen is
                mijn hobby. Maar dat zie ik meer als een ultieme vorm van
                selfcare ;) Elke dag is voor mij een kans om te leren en te
                groeien—zowel voor mezelf als voor iedereen. Mijn missie is om
                anderen te helpen de kracht en wijsheid van hun eigen lichaam te
                herontdekken, en dat geeft mij de meeste voldoening.
            </p>
        </Section>

        <Section colour="bg-olive" className="text-white">
            <h2 className=" text-2xl">Opleidingen &amp; Cursussen</h2>
            <ul className="text-left inline-block">
                {SelinaQualifications.list.reverse().map(item => (
                    <li key={item} className="pb-2">
                        <FontAwesomeIcon
                            className="text-xl pr-4"
                            icon={faGraduationCap}
                        />
                        {item}
                    </li>
                ))}
            </ul>
        </Section>
    </Layout>
)

export default OverPage

export const pageQuery = graphql`
    query OverPageQuery {
        JumboImage: contentfulImages(name: { eq: "Over Selina Header" }) {
            image {
                url
            }
            altText
        }
        SelinaPhoto: contentfulPhotos(name: { eq: "Selina" }) {
            photo {
                url
            }
            altText
        }
        SelinaQualifications: contentfulLists(
            name: { eq: "Opleidingen & Cursussen" }
        ) {
            list
        }
    }
`
