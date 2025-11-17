import { Chip } from "../page";

export function Experiences() {
  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center mt-8">Experiences</h2>
      <div className="max-w-xl mx-auto p-8">
        <div className="flow-root">
          <ul className="-mb-8">
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg
                          className="text-white h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-0">
                    <div className="text-md text-gray-500">
                      <div>
                        <a href="#" className="font-medium text-gray-900 mr-2">
                          Développeur Full Stack
                        </a>

                        <a
                          href="#"
                          className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                        >
                          <div className="absolute flex-shrink-0 flex items-center justify-center">
                            <span
                              className="h-1.5 w-1.5 rounded-full bg-green-500"
                              aria-hidden="true"
                            ></span>
                          </div>
                          <div className="ml-3.5 font-medium text-gray-900">
                            Lyon
                          </div>
                        </a>
                      </div>
                      <span className="whitespace-nowrap text-sm">
                        Mai 2024 - Présent
                      </span>
                    </div>
                    <div className="mt-2 text-gray-700">
                      <p>
                        - Conception et Création de{" "}
                        <a href="https://cardoon-front.onrender.com/">
                          Cardoon
                        </a>
                        , une application de flashcard gamifiée boostée à
                        l&apos;IA pour apprendre n&apos;importe quel sujet de
                        manière ludique.
                        <br />- Tanstack Query, React Hook Form, Zod pour une
                        gestion efficace des données et des formulaires. <br />-
                        React Router, Context API, Helmet.js
                        <br />- Déploiement sur Render et Netlify avec CI/CD
                        (Husky, Renovate). (+350 tests Vitests et Jest)
                      </p>
                    </div>
                    <Chip text="React" color="blue" />
                    <Chip text="Node.js" color="green" />
                    <Chip text="TypeScript" color="yellow" />
                    <Chip text="MongoDB" color="purple" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg
                          className="text-white h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-0">
                    <div className="text-md text-gray-500">
                      <div>
                        <a href="#" className="font-medium text-gray-900 mr-2">
                          Développeur Full Stack
                        </a>

                        <a
                          href="#"
                          className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                        >
                          <div className="absolute flex-shrink-0 flex items-center justify-center">
                            <span
                              className="h-1.5 w-1.5 rounded-full bg-green-500"
                              aria-hidden="true"
                            ></span>
                          </div>
                          <div className="ml-3.5 font-medium text-gray-900">
                            Paris
                          </div>
                        </a>
                      </div>
                      <span className="whitespace-nowrap text-sm">
                        Mistertemp - Aout 2022 - Mai 2024
                      </span>
                    </div>
                    <div className="mt-2 text-gray-700">
                      <p>
                        - Création d&apos;une plateforme interne de gestion des
                        candidatures et des clients, améliorant
                        l&apos;efficacité des processus RH de 30%. <br />
                        - 60% AWS incluant : EC2, S3, DynamoDB, Lambda,
                        <br />
                        CloudFront, CloudWatch, API Gateway, CodePipeline, IAM -
                        <br />
                        - 40% React Typescript avec DesignSystem et Playwright
                        <br />- 80 Développeurs splités en squads Agile de 8
                        personnes,
                      </p>
                    </div>
                    <Chip text="React" color="blue" />
                    <Chip text="AWS" color="green" />
                    <Chip text="TypeScript" color="yellow" />
                    <Chip text="DynamoDB" color="purple" />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg
                          className="text-white h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-0">
                    <div className="text-md text-gray-500">
                      <div>
                        <a href="#" className="font-medium text-gray-900 mr-2">
                          Formateur Concepteur Développeur d&apos;Applications
                        </a>

                        <a
                          href="#"
                          className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                        >
                          <div className="absolute flex-shrink-0 flex items-center justify-center">
                            <span
                              className="h-1.5 w-1.5 rounded-full bg-red-500"
                              aria-hidden="true"
                            ></span>
                          </div>
                          <div className="ml-3.5 font-medium text-gray-900">
                            Lyon
                          </div>
                        </a>
                      </div>
                      <span className="whitespace-nowrap text-sm">
                        Prium Formation - 09/2020 - 08/2022
                      </span>
                    </div>
                    <div className="mt-2 text-gray-700">
                      <p>
                        Création et animation de formations qui emmènent les
                        apprenants des bases de l&apos;algorithmie à la création
                        de projets modernes (Redux, React Query, API Rest, clean
                        code)
                        <br />+ 150 apprenants formés au niveau Dev Junior en
                        React JS, JavaScript, Symfony et PHP <br />+ 100
                        exercices créés de zéro <br />+ 10 projets de fin de
                        cursus animés Presque 10h de vidéos de cours produits
                        sur Udemy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg
                          className="text-white h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-0">
                    <div className="text-md text-gray-500">
                      <div>
                        <a href="#" className="font-medium text-gray-900 mr-2">
                          Développeur Web Junior
                        </a>

                        <a
                          href="#"
                          className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                        >
                          <div className="absolute flex-shrink-0 flex items-center justify-center">
                            <span
                              className="h-1.5 w-1.5 rounded-full bg-green-500"
                              aria-hidden="true"
                            ></span>
                          </div>
                          <div className="ml-3.5 font-medium text-gray-900">
                            Lyon
                          </div>
                        </a>
                      </div>
                      <span className="whitespace-nowrap text-sm">
                        Human Predictive Intelligence 09/2017 - 06-2020
                      </span>
                    </div>
                    <div className="mt-2 text-gray-700">
                      <p>
                        - Création d&apos;une application de Gestion de RH en
                        React en Scrum Agile
                        <br />
                        - GraphQL et Prisma avec Insomnia pour la gestion des
                        API
                        <br />- React Typescript en front, Laravel PHP en back
                      </p>
                    </div>
                    <Chip text="React" color="blue" />
                    <Chip text="GraphQL" color="green" />
                    <Chip text="TypeScript" color="yellow" />
                    <Chip text="Laravel" color="purple" />
                    <Chip text="PHPUnit" color="red" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
