"use client";

export default function cta() {
  return (
    <div
      className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat bg-black dark:bg-white/5"
      style={{ backgroundImage: "url('/images/cta.jpg')" }}
    >
      <div className="bg-[rgba(1,1,1,0.9)]  relative z-10 px-6 sm:px-6 md:px-10 lg:px-14 py-12 md:py-20 lg:py-24 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
          Have an Idea? Let’s Bring It to Life.
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
       Let’s work together to turn your ideas into modern, engaging digital experiences. Whether you need a website, a polished interface, or a complete digital experience, I’m ready to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-medium bg-white text-slate-900 border border-white transition-all duration-300 hover:bg-slate-100 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Get In Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.449 13.5h-13.449v-3h13.449l-4.449-4.449 2.121-2.121 7.879 7.879-7.879 7.879-2.121-2.121z"></path>
            </svg>
          </a>
          <a
            href="#projects"
            className="px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-medium bg-transparent text-white border-2 border-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}
