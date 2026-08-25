"use client";

import Image from "next/image";

const projects = [
  "/images/halaga.png",
  "/images/velvet.png",
  "/images/planora.png",
  "/images/zenith.png",
  "/images/medivault.png",
];

export default function ProjectMarquee() {
  return (
    <section className="relative w-full overflow-hidden py-12">
      {/* Left fade */}
      <div
        className="
          pointer-events-none
          absolute left-0 top-0 z-10
          h-full w-24
          bg-gradient-to-r
          from-white
          to-transparent
         
        "
      />

      {/* Right fade */}
      <div
        className="
          pointer-events-none
          absolute right-0 top-0 z-10
          h-full w-24
          bg-gradient-to-l
          from-white
          to-transparent
        
        "
      />

     {/* Project Mapping */}
      <div className="marquee-track">
        {[...projects, ...projects].map((image, index) => (
          <div
            key={index}
            className="
              group
              relative
              h-[300px]
              w-[430px]
              shrink-0
              rounded-[25px]

              border
              border-black/[0.08]
            

              bg-white
             

              p-3

              shadow-[0_10px_35px_rgba(0,0,0,0.08)]
              dark:shadow-[0_10px_35px_rgba(0,0,0,0.35)]

              transition-transform
              duration-300

              hover:-translate-y-1
            "
          >
            {/* Small corner dot */}
            <div
              className="
                absolute
                left-3
                top-3
                z-20
                h-2.5
                w-2.5
                rounded-full
                bg-black/10
               
              "
            />

            {/* Small corner dot */}
            <div
              className="
                absolute
                right-3
                top-3
                z-20
                h-2.5
                w-2.5
                rounded-full
                bg-black/10
             
              "
            />

            {/* Project image */}
            <div
              className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-[19px]
              "
            >
              <Image
                src={image}
                alt="Project"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-[1.03]
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}