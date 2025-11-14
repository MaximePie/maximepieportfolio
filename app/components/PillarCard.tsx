import * as motion from "motion/react-client";

export function PillarCard({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.5 }}
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
    </motion.div>
  );
}
