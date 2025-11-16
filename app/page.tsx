import Image from "next/image";
import { Networks } from "./components/Networks";
import { SkillsChart } from "./components/SkillsChart";

function Hero() {
  return (
    <section className="text-gray-600 body-font h-screen flex bg-gray-900 bg-svg-constellation-gray-100 relative">
      <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
        <div className="lg:w-2/3 w-full animate-fade-in-down">
          <h1 className="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
            Bienvenue, je suis Maxime.
          </h1>
          <h1 className="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight">
            et je serai votre prochain héros du code.
          </h1>
          <Image
            src="/magrossetete.jpg"
            alt="Photo de Maxime Pie"
            width={192}
            height={192}
            className="rounded-full mt-4"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-left">
            <a
              href="mailto:maxime.pie.mail@gmail.com"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-teal-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white dark:text-dark">
                Contactez-moi
              </span>
            </a>
            <a
              href="https://github.com/MaximePie"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-black before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max gap-2"
            >
              <svg
                className="w-5 h-5 relative text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="relative text-base font-semibold text-white">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about-me"
        className="absolute block mx-auto text-xl md:mt-96 bottom-0 left-1/2 -ml-10 mt-80"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.1716 29.1716C22.7337 27.6095 25.2663 27.6095 26.8284 29.1716L40 42.3431L53.1716 29.1716C54.7337 27.6095 57.2663 27.6095 58.8284 29.1716C60.3905 30.7337 60.3905 33.2663 58.8284 34.8284L42.8284 50.8284C41.2663 52.3905 38.7337 52.3905 37.1716 50.8284L21.1716 34.8284C19.6095 33.2663 19.6095 30.7337 21.1716 29.1716Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </a>
    </section>
  );
}

function Pillars() {
  return (
    <div className="my-12">
      <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
              Mes piliers de développement
            </h2>
            <p className="mb-4">
              Trois axes fondamentaux guident mon approche du développement web
              : la performance, l&apos;expérience utilisateur et la
              maintenabilité.
            </p>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
              <div className="absolute -inset-1"></div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                  <svg
                    className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 8L20 8"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M4 16L14 16"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                    <ellipse
                      cx="7"
                      cy="8"
                      rx="3"
                      ry="3"
                      transform="rotate(90 7 8)"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></ellipse>
                    <ellipse
                      cx="17"
                      cy="16"
                      rx="3"
                      ry="3"
                      transform="rotate(90 17 16)"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></ellipse>
                  </svg>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Assurance qualité
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    Je m&apos;assure que chaque ligne de code est testée et
                    optimisée pour garantir des performances maximales et une
                    expérience utilisateur fluide.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-white shadow-md rounded-xl">
              <div className="p-9">
                <svg
                  className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="13"
                    y="14"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#111827"
                  ></rect>
                  <rect
                    x="7"
                    y="11"
                    width="2"
                    height="6"
                    rx="1"
                    fill="#111827"
                  ></rect>
                  <rect
                    x="11"
                    y="13"
                    width="2"
                    height="6"
                    rx="1"
                    transform="rotate(90 11 13)"
                    fill="#111827"
                  ></rect>
                  <rect
                    x="16"
                    y="12"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#111827"
                  ></rect>
                  <path
                    d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                    stroke="#111827"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                    stroke="#111827"
                    stroke-width="2"
                  ></path>
                </svg>
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Performance
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  Je m&apos;assure que chaque ligne de code est testée et
                  optimisée pour garantir des performances maximales et une
                  expérience utilisateur fluide.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                  <svg
                    className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 8L20 8"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M4 16L14 16"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                    <ellipse
                      cx="7"
                      cy="8"
                      rx="3"
                      ry="3"
                      transform="rotate(90 7 8)"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></ellipse>
                    <ellipse
                      cx="17"
                      cy="16"
                      rx="3"
                      ry="3"
                      transform="rotate(90 17 16)"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></ellipse>
                  </svg>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Sécurité
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    La sécurité est une priorité dans mes développements, en
                    intégrant les meilleures pratiques pour protéger les données
                    des utilisateurs.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                  <svg
                    className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 8L20 8"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M4 16L14 16"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                    <ellipse
                      cx="7"
                      cy="8"
                      rx="3"
                      ry="3"
                      transform="rotate(90 7 8)"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></ellipse>
                    <ellipse
                      cx="17"
                      cy="16"
                      rx="3"
                      ry="3"
                      transform="rotate(90 17 16)"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></ellipse>
                  </svg>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Livraison rapide
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    Mes capacités de chef de projet me permettent de gérer
                    efficacement les délais et de livrer des projets de haute
                    qualité dans les temps impartis.
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

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-sky-200 via-yellow-200 to-red-200">
      <Hero />
      <Pillars />
      <SkillsChart />
      <Networks />
    </div>
  );
}
