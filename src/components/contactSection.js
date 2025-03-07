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
                <div className="w-full sm:5/6  md:w-4/6 lg:3/6 flex justify-center ">
                    <img
                        className="z-10 w-4/6 p-4 sm:p-6 md:p-8 lg:p-10 border-solid border-4 border-olive bg-white self-center object-contain"
                        src={data.SelinaPhoto.photo.url + '?w=377&fm=jpg&q=80'}
                        alt={data.SelinaPhoto.altText}
                    />
                </div>
                <div className="w-5/6 sm:w-4/6 md:w-3/6 flex flex-col">
                    <h2> Haai lieve jij, welkom!!</h2>
                    <p>
                        Mijn naam is Selina, gepassioneerd door de unieke
                        verbinding tussen lichaam, geest & ziel. Mijn missie?
                        Jou helpen om een bewustere versie van jezelf te zijn.
                        <br />
                        <br />
                        “Mijn passie voor de verbinding tussen lichaam, geest en
                        ziel komt voort uit mijn eigen zoektocht naar balans &
                        gezondheid.”
                        <br />
                        <br />
                        Door mijn ervaringen, opleidingen en persoonlijke
                        inzichten werk ik net even anders dan je misschien
                        gewend bent. Mijn aanpak kijkt namelijk verder dan de
                        standaard aanpak. Dat kan even wennen zijn, maar juist
                        daardoor kunnen we samen de kern van jouw klachten
                        ontdekken.
                        <br />
                        <br />
                        Het gaat niet alleen om de klacht, maar om het begrijpen
                        van wat de klacht je vertelt en het lichaam écht nodig
                        heeft. Want pijn is niet zomaar pijn—het vertelt een
                        verhaal. Samen puzzelen we naar de oorzaak, zodat we die
                        bij de wortels kunnen aanpakken en duurzame verandering
                        kunnen creëren voor jouw klacht(en).
                        <br />
                        <br />
                        Welkom in jouw reis naar groei, balans & verbinding!
                    </p>
                </div>
            </div>
            <p className="text-xl">
                Dus, ben jij klaar om de diepte in te gaan en écht verandering
                te creëren?
            </p>
            <p>
                Laten we samen puzzelen naar een duurzame “oplossing” die verder
                gaat dan symptoombestrijding of standaard protocollen. Neem
                vrijblijvend contact op voor je vragen en zet de eerste stap
                naar een sterkere verbinding met jouw lijf & jezelf.
            </p>
            {children}
        </Section>
    )
}

export default ContactSection
