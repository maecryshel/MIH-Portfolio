import type { Metadata } from "next";
import { getAllProjects, getAllCategories, getAllTechStacks } from "@/lib/data";
import { WorkClient } from "./WorkClient";

export const metadata: Metadata = {
  title: "Work",
  description: "All projects and activities completed during the OJT practicum at Makerspace Innovhub.",
};

export default function WorkPage() {
  const projects = getAllProjects();
  const categories = getAllCategories();
  const techStacks = getAllTechStacks();

  return (
    <div className="max-w-4xl mx-auto px-6 py-14 fade-up">
      <div style={{ marginBottom: "2.75rem" }}>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2.75rem",
            fontWeight: 400,
            color: "var(--ink)",
            marginBottom: "0.6rem",
            lineHeight: 1.08,
          }}
        >
    </h1>

      </div>

      <WorkClient projects={projects} categories={categories} techStacks={techStacks} />
    </div>
  );
}
