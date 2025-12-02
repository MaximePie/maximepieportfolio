import Image from "next/image";
import { Experiences } from "./components/Experiences";
import { Networks } from "./components/Networks";
import { Pillars } from "./components/Pillars";
import { SkillsChart } from "./components/SkillsChart";

function Hero() {
  return (
    <section className="text-gray-600 body-font h-screen flex bg-gray-900 bg-svg-constellation-gray-100 relative">
      <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
        <div className="w-full animate-fade-in-down">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            <div className="lg:w-1/2">
              <h1 className="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
                Bienvenue, je suis Maxime,
              </h1>
              <h1 className="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight">
                et je serai votre prochain héros du code !
              </h1>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full aspect-video">
                <iframe
                  allowFullScreen={true}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/BGFPaiJ-Zv4"
                  id="widget2"
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-16">
            <Image
              src="/magrossetete.jpg"
              alt="Photo de Maxime Pie"
              width={192}
              height={192}
              className="rounded-full"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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

const colorClasses = {
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  yellow:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  purple:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
};
export function Chip({
  text,
  color,
}: {
  text: string;
  color: keyof typeof colorClasses;
}) {
  return (
    <span
      className={
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-1 " +
        colorClasses[color]
      }
    >
      {text}
    </span>
  );
}

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-sky-200 via-yellow-200 to-red-200">
      <Hero />
      <Pillars />
      <Experiences />
      <SkillsChart />
      <Networks />
    </div>
  );
}
