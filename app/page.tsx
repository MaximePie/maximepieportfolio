import Image from "next/image";

function PillarCard({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div
      className="bg-linear-to-b from-white to-indigo-50
     h-80 relative border p-4 m-4 rounded-lg border-sky-200/50 shadow-lg w-2xs overflow-hidden"
    >
      <div
        className="absolute bottom-0 right-0 w-32 h-32 opacity-50 bg-no-repeat bg-contain bg-bottom bg-right pointer-events-none"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="relative z-10">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const pillars = [
    {
      title: "Performance",
      description:
        "Je m'efforce de créer des applications web rapides et réactives pour offrir une expérience utilisateur optimale.",
      imageUrl: "/performance.svg",
    },
    {
      title: "Accessibilité",
      description:
        "Je veille à ce que mes applications soient accessibles à tous, en respectant les normes d'accessibilité web.",
      imageUrl: "/accessibility.svg",
    },
    {
      title: "Sécurité",
      description:
        "La sécurité est une priorité dans mes développements, en intégrant les meilleures pratiques pour protéger les données des utilisateurs.",
      imageUrl: "/security.svg",
    },
  ];
  return (
    <div className="p-8 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-bold">Maxime Pie</h1>
          <h2 className="text-2xl">Développeur passioné</h2>
          <p className="mt-4">
            Bonjour je m&apos;appelle Maxime Pie et je suis ravi de vous
            accueillir sur mon portfolio.
          </p>
        </div>
        <Image
          src="/magrossetete.jpg"
          alt="Photo de Maxime Pie"
          width={192}
          height={192}
          className="rounded-full mt-4"
        />
      </div>

      <h2 className="text-3xl">Pilliers de développement</h2>

      <div className="flex flex-wrap">
        {pillars.map((pillar) => (
          <PillarCard
            key={pillar.title}
            title={pillar.title}
            description={pillar.description}
            imageUrl={pillar.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
