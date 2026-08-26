"use-client";
import FloatingPhotos from "./FloatingPic";
import { Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <section id="about" className="overflow-hidden pt-10 md:pt-28 lg:pt-32">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6  md:gap-8 md:px-7">
        {/*  Two Bending Pictures of Me */}
        <div className="">
          <FloatingPhotos />
        </div>
        <div className="flex w-full max-w-3xl flex-col items-start py-8">
          <h2 className="text-[clamp(1.5rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] ">
            About Me
          </h2>

          <p className="mt-4 text-base text-neutral-600 ">
            I am a passionate web developer with a strong focus on creating
            responsive and user-friendly websites. With a keen eye for design
            and a solid understanding of front-end technologies, I strive to
            deliver high-quality web solutions that meet the needs of clients
            and users alike.
          </p>
          <p className="mt-4 text-base text-neutral-600 ">
            My expertise lies in HTML, CSS, JavaScript, and modern frameworks
            like React and Next.js. I enjoy collaborating with clients to bring
            their ideas to life and continuously learning new technologies to
            stay ahead in the ever-evolving web development landscape.
          </p>
          <p className="mt-4 text-base text-neutral-600 ">
            Beyond Coding, I am a problem solver who enjoys tackling challenges
            and finding innovative solutions. I am committed to delivering
            projects on time and ensuring that the end product exceeds
            expectations. Let&apos;s work together to create something amazing!
          </p>
        </div>
        {/* Progress */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 md:mb-18 lg:mb-20"
          style={{ opacity: 1 }}
        >
          <div
            className="text-center duration-300 group cursor-pointer"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="flex   justify-center mb-4 text-slate-900  group-hover:scale-125 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900  mb-2">
              <span>5+</span>
            </div>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Projects Completed
            </p>
          </div>
          <div
            className="text-center duration-300 group cursor-pointer"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="flex justify-center mb-4 text-slate-900 group-hover:scale-125 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <span>30+</span>
            </div>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Contributions on Github
            </p>
          </div>
          <div
            className="text-center duration-300 group cursor-pointer"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="flex justify-center mb-4 text-slate-900  group-hover:scale-125 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900  mb-2">
              <span>1+</span>
            </div>
            <p className="text-sm md:text-base text-gray-600  font-medium">
              Years Experience
            </p>
          </div>
          <div
            className="text-center duration-300 group cursor-pointer"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="flex justify-center mb-4 text-slate-900 group-hover:scale-125 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <span>3.8</span>
            </div>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Review
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
