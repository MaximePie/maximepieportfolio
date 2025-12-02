import Image from "next/image";
import { PillarsChip } from "./PillarsChip";

export function Pillars() {
  return (
    <div>
      <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
              Mes piliers de développement
            </h2>
            <p className="mb-4">
              5 axes fondamentaux guident mon approche du développement web : la
              performance, l&apos;expérience utilisateur, la sécurité et la
              maintenabilité, et l&apos;amélioration continue.
            </p>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
              <div className="absolute -inset-1"></div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                  <Image
                    src="/quality.svg"
                    alt="Assurance qualité"
                    width={48}
                    height={48}
                    className="mx-auto sm:mx-0"
                  />
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Assurance qualité
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    J&apos;utilise des tests automatisés avec{" "}
                    <strong>Jest et React Testing Library</strong> et des revues
                    de code pour garantir que chaque fonctionnalité fonctionne
                    comme prévu et reste fiable au fil du temps.
                  </p>
                  <PillarsChip
                    chips={[
                      { text: "Typescript", color: "blue" },
                      { text: "Playwright", color: "purple" },
                      { text: "Jest", color: "yellow" },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-white shadow-md rounded-xl">
              <div className="p-9">
                <Image
                  src="/performance.svg"
                  alt="Performance"
                  width={48}
                  height={48}
                  className="mx-auto sm:mx-0"
                />
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Performance
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  Je m&apos;assure de maintenir un code optimisé pour garantir
                  des performances maximales et une expérience utilisateur
                  fluide.
                </p>
                <PillarsChip
                  chips={[
                    { text: "TanstackQuery", color: "blue" },
                    { text: "Lighthouse", color: "green" },
                    { text: "Next.Js", color: "yellow" },
                  ]}
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                  <Image
                    src="/security.svg"
                    alt="Sécurité"
                    width={48}
                    height={48}
                    className="mx-auto sm:mx-0"
                  />
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Sécurité
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    La sécurité est une priorité dans mes développements, en
                    intégrant les meilleures pratiques pour protéger les données
                    des utilisateurs.
                  </p>
                  <PillarsChip
                    chips={[
                      { text: "JWT/Oauth 2.0", color: "blue" },
                      { text: "Helmet.js", color: "green" },
                      { text: "Zod", color: "yellow" },
                      { text: "bcrypt", color: "yellow" },
                      { text: "Snyk", color: "purple" },
                      { text: "Renovate", color: "purple" },
                      { text: "HTTPS", color: "yellow" },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                  <Image
                    src="/delivery.svg"
                    alt="Livraison rapide"
                    width={48}
                    height={48}
                    className="mx-auto sm:mx-0"
                  />
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Livraison rapide
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    Mes capacités de chef de projet me permettent de gérer
                    efficacement les délais et de livrer des projets de haute
                    qualité dans les temps impartis.
                  </p>
                  <PillarsChip
                    chips={[
                      {
                        text: "50+ katas sur CodeWars et Coding Game",
                        color: "green",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                  <Image
                    src="/continuous.svg"
                    alt="Amélioration continue"
                    width={48}
                    height={48}
                    className="mx-auto sm:mx-0"
                  />
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Amélioration continue
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    Je m&apos;engage dans une démarche d&apos;apprentissage
                    constant pour rester à jour avec les dernières technologies
                    et améliorer continuellement mes pratiques de développement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
