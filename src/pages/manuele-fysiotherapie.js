import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Jumbotron from '../components/jumbotron'
import Section from '../components/section'
import { WhiteLinkButton } from '../components/LinkButton'
import Prices from '../components/prices'

const FysiotherapiePage = ({
    data: { JumbotronImage, FysiotherapiePhoto },
}) => (
    <Layout>
        <Seo title="Manuele & Fysiotherapie" />
        <Jumbotron
            title="Manuele therapie & het MyO Concept"
            imageSrc={JumbotronImage.image.url + '?w=485&fm=gif&q=1'}
            imageAlt={JumbotronImage.altText}
            quote="“Listen to your body. It’s smarter than you are.“"
        />

        <Section className="text-left">
            <div className="flex flex-col lg:flex-row lg:space-x-11">
                <p>
                    De afgelopen jaren heb ik een enorme transformatie
                    doorgemaakt, zowel in mijn persoonlijke leven als in mijn
                    werk. Waar ik ooit werkte volgens vaste protocollen als
                    fysiotherapeut, ontdekte ik steeds meer dat echte, blijvende
                    resultaten vaak buiten deze kaders liggen. Deze zoektocht
                    heeft mij gebracht naar een holistische aanpak, waarin ik
                    lichaam, geest en omgeving als één geheel zie.
                    <br />
                    <br />
                    Mijn eigen proces - met name het behandelen van mijn knieën
                    en het dieper in mijn lichaam zakken - heeft mij meer laten
                    voelen. Niet alleen fysiek maar ook intuïtief. Wat ik leerde
                    door middel van opleidingen zoals Mylogenics, Physis Academy
                    en het MyO Concept, begon zich steeds meer te vertalen naar
                    mijn werk. Ik luister nu niet alleen naar wat cliënten
                    vertellen, maar ook naar wat ik fysiek voel, tussen de
                    regels door hoor, zie of zelfs intuïtief aanvoel.
                    <br />
                    <br />
                    In mijn behandelingen werk ik vanuit een diep begrip van de
                    samenhang in het lichaam. Fysieke klachten zijn vaak meer
                    dan een geïsoleerd probleem; ze kunnen hun oorsprong vinden
                    in organen, bindweefsel, compensaties in andere delen van
                    het lichaam, of zelfs in energetische blokkades en
                    disbalans. Door verbanden te leggen tussen deze elementen -
                    manuele therapie, osteopathie, bindweefsel en het lichaam
                    als keten - kan ik samen met jou puzzelen om tot de kern van
                    jouw klachten te komen.
                    <br />
                    <br />
                </p>
                <img
                    className="z-10 lg:relative -top-10 w-4/6 p-2 sm:p-6 md:p-8 lg:p-10 border-solid border-4 border-olive bg-white self-center object-contain"
                    src={FysiotherapiePhoto.photo.url + '?w=308&fm=jpg&q=80'}
                    alt={FysiotherapiePhoto.altText}
                />
            </div>
            <h2>Het resultaat?</h2>
            <p className="mb-0">
                Geen standaard oplossingen, maar een behandeling die aansluit
                bij jouw unieke verhaal en het bewustworden van jezelf.
                Uiteindelijk zit alles al in jou, maar soms heb je even een
                vertaler nodig om uit je eigen perceptie te komen. Ben jij klaar
                voor een aanpak die verder gaat dan symptoombestrijding? Laten
                we samen ontdekken wat jouw lichaam je te vertellen heeft.
            </p>
            <h2>Het MyO-concept</h2>
            <p className="mb-0">
                Het MyO-concept is een uniek 'hands-on' behandelingsconcept in
                de fysiotherapie en osteopathie. Het verbindt de functie van
                alle gewrichten met elkaar en laat op een uiterst eenvoudige
                manier zien dat bijvoorbeeld hoofdpijnklachten het gevolg kunnen
                zijn van een trauma aan de enkel. Het gevolg is vaak een
                dysfunctie die op een zeer specifieke manier wordt
                gecompenseerd. Het MyO-concept richt zich altijd als eerste op
                de oorzaak van het probleem en de gevolgen in het kader van de
                systematische compensatie. Het pijngebied is dus niet de eerste
                regio waar we kunnen behandelen om snel en effectief resultaat
                te kunnen boeken.
            </p>
        </Section>

        <Prices items={['Intake: €66', 'Behandeling: €55']} />

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

export default FysiotherapiePage

export const pageQuery = graphql`
    query FysiotherapiePageQuery {
        JumbotronImage: contentfulImages(
            name: { eq: "Manuele- & fysiotherapie header" }
        ) {
            image {
                url
            }
            altText
        }
        FysiotherapiePhoto: contentfulPhotos(
            name: { eq: "Selina Fysiotherapie" }
        ) {
            photo {
                url
            }
            altText
        }
    }
`
