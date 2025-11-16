import Image from "next/image";

export function Networks() {
  return (
    <div className="relative py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <div className="flex items-center justify-center -space-x-2">
        <Image
          loading="lazy"
          width={400}
          height={400}
          src="/12.jpg"
          alt="member photo"
          className="h-8 w-8 rounded-full object-cover"
        />
        <Image
          loading="lazy"
          width={200}
          height={200}
          src="/45.jpg"
          alt="member photo"
          className="h-12 w-12 rounded-full object-cover"
        />
        <Image
          loading="lazy"
          width={200}
          height={200}
          src="/magrossetete2.jpg"
          alt="member photo"
          className="z-10 h-24 w-24 rounded-full object-cover"
        />
        <Image
          loading="lazy"
          width={200}
          height={200}
          src="/4.jpg"
          alt="member photo"
          className="relative h-12 w-12 rounded-full object-cover"
        />
        <Image
          loading="lazy"
          width={200}
          height={200}
          src="/60.jpg"
          alt="member photo"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>

      <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
        <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
          Votre équipe n&apos;attend plus que moi
        </h1>
        <p className="text-center text-xl text-gray-600 dark:text-gray-300">
          Elevez vos projets à un tout autre niveau en m&apos;intégrant à votre
          équipe. Ensemble, nous pouvons transformer vos idées en réalisations
          concrètes et innovantes.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
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
  );
}
