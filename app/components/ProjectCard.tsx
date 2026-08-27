import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";


interface Project {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  category?: string;
  technologies: string[];
  live:string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-black/[0.12]
        bg-white
        transition
        duration-300
        hover:border-black/20
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]
      "
    >

      {/* Project Image */}
      <Link
        href={`/projects/${project.slug}`}
        className="block p-3 pb-0"
      >
        <div
          className="
            relative
            aspect-[16/9]
            overflow-hidden
            rounded-xl
            bg-[#f5f5f5]
            border
            border-black/[0.06]
          "
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-500
              ease-out
              group-hover:scale-[1.02]
            "
          />
        </div>
      </Link>


      {/* Content */}
      <div className="px-5 pb-5 pt-5 md:px-5 md:pb-6">

        {/* Title */}
        <Link href={`/projects/${project.slug}`}>
          <h2 className="text-lg font-semibold tracking-[-0.02em] transition group-hover:text-black/70">
            {project.title}
          </h2>
        </Link>


        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/50">
          {project.description}
        </p>

         {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600"
            >
              {technology}
            </span>
          ))}
        </div>


        {/* View Project */}
        {/* Actions */}
        <div className="mt-5 flex items-center gap-8">

          {/* View Project */}
          <Link
            href={`/projects/${project.slug}`}
            className="
              inline-flex
              items-center
              gap-1
              rounded-xl
              border
              border-black/[0.12]
              px-4
              py-2.5
              text-xs
              font-medium
              text-black/80
              transition
              hover:border-black/30
              hover:bg-black
              hover:text-white
            "
          >
            View Project
            <ArrowRight size={15} />
          </Link>


          {/* Live Demo */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} demo`}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-black/[0.12]
              text-black/60
              transition
              duration-200
              hover:border-black
              hover:bg-black
              hover:text-white
            "
          >
            <ArrowUpRight size={18} />
          </a>

        </div>
       

      </div>

    </article>
  );
}