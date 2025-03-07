import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from './section'

const ContactSection = ({ children }) => {
    const data = useStaticQuery(graphql`
        query PageQuery {
            SelinaPhoto: contentfulPhotos(name: { eq: "Selina" }) {
                photo {
                    url
                }
                altText
            }
        }
    `)

    return (
        <Section colour="bg-olive">
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="relative -top-28 -mb-28 w-3/6 flex justify-center ">
                    <img
                        className="z-10 w-4/6 p-4 sm:p-6 md:p-8 lg:p-10 border-solid border-4 border-olive bg-white self-center object-contain"
                        src={data.SelinaPhoto.photo.url + '?w=377&fm=jpg&q=80'}
                        alt={data.SelinaPhoto.altText}
                    />
                </div>
                <div className="w-5/6 sm:w-4/6 md:w-3/6 flex flex-col">
                    <h2>Haai!</h2>
                    <p>
                        Ik ben Selina en ik heb een enorme fascinatie voor mens,
                        ziel en lichaam. Het is dan ook niet voor niets dat ik
                        gepassioneerd ben in wat ik doe: Ervoor zorgen dat jij
                        de beste versie van jezelf bent.
                        <br />
                        <br />
                        Je zult merken dat ik net even iets anders aan de slag
                        ga dan je wellicht gewend bent. Dat is misschien even
                        wennen, maar op die manier kan ik je juist beter helpen.
                        <br />
                        <br />
                        Het is namelijk niet alleen het pijntje waar je last van
                        hebt. Jouw klacht ontstaat met een reden en ik wil de
                        oorzaak daarvan weten. Alleen op die manier kunnen we er
                        samen voor zorgen dat we niet alleen de pijn verlichten,
                        maar ook dat die pijn niet meer terugkomt.
                    </p>
                </div>
            </div>
            <p className="text-xl">
                Dus, ben jij het zat steeds weer met dezelfde klachten terug te
                moeten? Neem dan contact met mij op en we werken samen aan een
                blijvende oplossing.
            </p>
            {children}
        </Section>
    )
}

export default ContactSection
