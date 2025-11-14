"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ToggleButtons({
  options,
  activeOption,
  onToggle,
}: {
  options: string[];
  activeOption: string;
  onToggle: (option: string) => void;
}) {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      {options.map((option) => (
        <button
          key={option}
          className={`px-4 py-2 rounded ${
            activeOption === option ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onToggle(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

const categories = [
  "React",
  "Frontend",
  "Backend",
  "DevOps",
  "Gestion de projet",
  "Autres",
  "AWS",
];
export function SkillsChart() {
  const [activeChart, setActiveChart] =
    useState<(typeof categories)[number]>("Frontend");
  const frontSkills = [
    { skill: "JavaScript", value: 5 },
    { skill: "TypeScript", value: 5 },
    { skill: "React", value: 5 },
    { skill: "OWASP", value: 3 },
    { skill: "Storybook", value: 3 },
    { skill: "CORS", value: 3 },
    { skill: "Next.js", value: 1 },
    { skill: "Redux", value: 1 },
    { skill: "Tailwind", value: 1 },
    { skill: "Vue.js", value: 1 },
    { skill: "Svelte.js", value: 1 },
    { skill: "GraphQL, Prisma", value: 1 },
  ];
  const backSkills = [
    { skill: "Node.js", value: 4 },
    { skill: "JWT", value: 4 },
    { skill: "MongoDB", value: 4 },
    { skill: "Express", value: 4 },
    { skill: "PHP", value: 3 },
    { skill: "Helmet", value: 2 },
    { skill: "SQL", value: 2 },
    { skill: "DynamoDB", value: 2 },
    { skill: "Laravel", value: 2 },
    { skill: "Symfony", value: 2 },
    { skill: "Python", value: 1 },
    { skill: "SocketIO", value: 1 },
    { skill: "Firebase", value: 1 },
  ];

  const devOpsSkills = [
    { skill: "CI/CD", value: 4 },
    { skill: "yarn/npm", value: 5 },
    { skill: "Vite", value: 3 },
    { skill: "React Create App", value: 3 },
    { skill: "Husky", value: 1 },
  ];

  const AWSSkills = [
    { skill: "S3", value: 3 },
    { skill: "Cloudfront", value: 2 },
    { skill: "Cloudwatch", value: 2 },
    { skill: "DynamoDB", value: 2 },
    { skill: "Lambda", value: 2 },
    { skill: "Stepfunction", value: 2 },
  ];

  const otherSkills = [
    { skill: "Prettier", value: 5 },
    { skill: "EsLint", value: 5 },
    { skill: "Jest", value: 3 },
    { skill: "GitHub Copilot", value: 2 },
    { skill: "Playwright", value: 2 },
    { skill: "Cypress", value: 1 },
    { skill: "PHPUnit", value: 1 },
    { skill: "Zod", value: 1 },
    { skill: "React Testing Library", value: 1 },
    { skill: "Vitest", value: 1 },
  ];

  const reactSkills = [
    { skill: "Hooks", value: 5 },
    { skill: "React Router", value: 5 },
    { skill: "Axios", value: 5 },
    { skill: "Material-ui", value: 3 },
    { skill: "Context API", value: 3 },
    { skill: "React Query", value: 2 },
    { skill: "React-hook-form", value: 2 },
    { skill: "Class Components", value: 2 },
    { skill: "React Motion", value: 1 },
    { skill: "Redux", value: 1 },
    { skill: "TanStack Query", value: 1 },
  ];
  const projectManagementSkills = [
    { skill: "GIT", value: 5 },
    { skill: "Gestion de projet", value: 4 },
    { skill: "Communication", value: 5 },
    { skill: "Travail en équipe", value: 5 },
    { skill: "Scrum", value: 4 },
    { skill: "Risk Management", value: 3 },
  ];
  const chartData =
    activeChart === "Frontend"
      ? frontSkills
      : activeChart === "Backend"
      ? backSkills
      : activeChart === "DevOps"
      ? devOpsSkills
      : activeChart === "React"
      ? reactSkills
      : activeChart === "Gestion de projet"
      ? projectManagementSkills
      : activeChart === "AWS"
      ? AWSSkills
      : otherSkills;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-white rounded-lg shadow-lg mt-12"
    >
      <h2 className="text-3xl font-semibold text-center mb-6">Compétences</h2>
      <p className="text-center mb-4">
        J&apos;apprends ces compétences depuis ...
      </p>
      <ToggleButtons
        options={categories}
        activeOption={activeChart}
        onToggle={(option) =>
          setActiveChart(option as (typeof categories)[number])
        }
      />
      <div
        style={{ width: "1200px", height: "450px" }}
        className="mx-auto my-12"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              domain={[0, 5]}
              label={{ value: "Ans", position: "insideBottom" }}
            />
            <YAxis type="category" dataKey="skill" width={150} />
            <Tooltip />
            <Bar dataKey="value" fill="#0f83ab" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
