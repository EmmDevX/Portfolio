import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-white px-5 py-20 text-black md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            What I&apos;ve Been Building
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}