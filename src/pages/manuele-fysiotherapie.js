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
        <Seo title="Manuele- &amp; Fysiotherapie" />
        <Jumbotron
            title="MANUELE- &amp; FYSIOTHERAPIE"
            imageSrc={JumbotronImage.image.url + '?w=485&fm=gif&q=1'}
            imageAlt={JumbotronImage.altText}
            quote="“Listen to your body. It’s smarter than you are.“"
        />

        <Section className="text-left">
            <div className="flex flex-col lg:flex-row lg:space-x-11">
                <p>
                    Binnen de fysiotherapie is manuele therapie een
                    specialisatie die zich richt op het vertalen van klachten in
                    gewrichten, spieren en zenuwfuncties en gerelateerde
                    beperkingen in de dagelijkse activiteiten. Als je dergelijke
                    klachten ervaart, heeft dit vaak met persoonlijke en externe
                    factoren te maken. Samen met jou kijk ik naar deze factoren
                    om te kunnen vertalen wat jouw lichaam je wil vertellen.
                    <br />
                    <br />
                    Als manueel therapeut ben ik altijd bezig om verbanden te
                    leggen tussen wat het lichaam jou vertelt en wat er binnen
                    in jou gebeurt, zowel fysiek als mentaal. Deze verbanden
                    zijn belangrijk omdat alles met elkaar in verbinding staat.
                    Zo hoeft de plek waar jij pijn voelt, bijvoorbeeld niet per
                    se de plek of oorzaak van de pijn te zijn.
                </p>
                <p className="lg:hidden">
                    Daarbij is ieder persoon uniek en is het totale plaatje
                    nodig om de puzzel op te lossen. Wanneer je jezelf en je
                    lichaam leert begrijpen kun je actief bijdragen aan jouw
                    herstel met behulp van je eigen bewustwording.
                </p>
                <img
                    className="z-10 lg:relative -top-10 w-4/6 p-2 sm:p-6 md:p-8 lg:p-10 border-solid border-4 border-olive bg-white self-center object-contain"
                    src={FysiotherapiePhoto.photo.url + '?w=308&fm=jpg&q=80'}
                    alt={FysiotherapiePhoto.altText}
                />
            </div>
            <p className="hidden lg:block mb-0">
                Daarbij is ieder persoon uniek en is het totale plaatje nodig om
                de puzzel op te lossen. Wanneer je jezelf en je lichaam leert
                begrijpen kun je actief bijdragen aan jouw herstel met behulp
                van je eigen bewustwording.
            </p>
        </Section>

        <Prices items={['Intake: € 60', 'Behandeling: € 50']} />

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
