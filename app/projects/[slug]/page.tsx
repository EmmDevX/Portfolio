import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Icon } from "@iconify/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/app/components/Navbar";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
        <Navbar/>
      {/*  NAVIGATION*/}
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-5 md:px-8">
        {/* Back */}
        <Link
          href="/#projects"
          className="group flex items-center gap-2 text-sm text-black/50 transition hover:text-black"
        >
          <ArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to work
        </Link>
      </nav>

      {/*  HERO  */}
      <section className="mx-auto max-w-[1100px] px-6 pb-12 pt-10 md:px-8 md:pt-14">
        {/* Category */}
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-black/40">
          {project.category}
        </p>
        {/* Title */}
        <h1 className="text-5xl font-bold tracking-[-0.04em] md:text-7xl">
          {project.title}
        </h1>
        {/* Description */}
        <p className="mt-5 max-w-[760px] text-base leading-7 text-black/50 md:text-lg">
          {project.description}
        </p>
      </section> 
      {/*  MAIN CONTENT  */}
      <section className="mx-auto max-w-[1100px] px-6 pb-20 md:px-8">
        {/* Main information card */}
        <div className="rounded-2xl border border-black/[0.12] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] md:p-8">
        {/* Description */}
          <div>
            <h2 className="text-base font-semibold">Description</h2>
             <p className="mt-4 max-w-[900px] text-[15px] leading-7 text-black/60">
              {project.description}
             </p>
          </div>
               {/* Divider */}
            <div className="my-7 h-px bg-black/[0.08]" />
                {/* Technologies */}
                <div>
                 <h2 className="text-base font-semibold">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-blue-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
              {/* Divider */}
          <div className="my-7 h-px bg-black/[0.08]" />
            {/* Project Stack */}
          <div>
            <h2 className="text-base font-semibold">Project Stack</h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {Object.entries(project.stack).map(([name, value]) => (
                <div key={name}>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-black/35">
                    {name}
                  </p>
               <p className="mt-1.5 text-sm text-black/65">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*  COVER IMAGE*/}
        {project.coverImage && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-black/[0.1] bg-white">
            <img
              src={project.coverImage}
              alt={project.title}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        {/*  CHALLENGES */}
        {project.challenges?.length > 0 && (
          <div className="mt-20">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
              The Process
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Challenges I Faced
            </h2>

            <div className="mt-8 overflow-hidden rounded-2xl border border-black/[0.1] bg-white">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className={`grid gap-4 p-6 md:grid-cols-[70px_1fr] ${
                    index !== project.challenges.length - 1
                      ? "border-b border-black/[0.08]"
                      : ""
                  }`}
                >
                  <span className="text-xs font-medium text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-3xl text-[15px] leading-7 text-black/60">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/*  LEARNED  */}
        {project.learned?.length > 0 && (
          <div className="mt-20">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
              Takeaways
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              What I Learned
            </h2>

            <div className="mt-8 overflow-hidden rounded-2xl border border-black/[0.1] bg-white">
              {project.learned.map((learning, index) => (
                <div
                  key={index}
                  className={`grid gap-4 p-6 md:grid-cols-[70px_1fr] ${
                    index !== project.learned.length - 1
                      ? "border-b border-black/[0.08]"
                      : ""
                  }`}
                >
                  <span className="text-xs font-medium text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-3xl text-[15px] leading-7 text-black/60">
                    {learning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/*  PROJECT LINKS  */}
        <div className="mt-16 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium transition hover:border-black/30 hover:bg-black hover:text-white"
          >
            <Icon icon="tabler:brand-github" />
            GitHub
            <ExternalLink size={14} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80"
          >
            Live Project
            <ExternalLink size={14} />
          </a>
        </div>
      </section>
</main>
  );
}
