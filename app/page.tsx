import Image from "next/image";
import Navbar from "./components/Navbar";
import Language from "./components/ProgrammingLang";
import About from "./components/About";
import Footer from "./components/Footer";
import MovingProject from "./components/Project";
import CTA from "./components/cta";
import ScrollEffects from "./components/ScrollEffects";
import Contact from "./components/Contact"

export default function Home() {
  return (
    <>
    <ScrollEffects/>
    <div className="min-h-screen bg-white font-sans ">
      <Navbar />

      <main>
        <section id="hero" className="overflow-hidden pt-24 md:pt-28 lg:pt-32">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 md:gap-10 md:px-10">
            <div className="flex w-full max-w-3xl flex-col items-start">
              {/* Profile Picture */}
              <div className="relative mb-10 h-24 w-24 overflow-hidden rounded-full md:h-32 md:w-32">
                <Image
                  src="/images/profile.jpg"
                  alt="Emmanuel's picture"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Introduction */}
              <p className="text-base font-bold uppercase tracking-widest text-neutral-400 ">
                Hi, I&apos;m <span className="text-[#0a0a0a]">Emmanuel</span>
              </p>

              {/* Hero Heading */}
              <h1 className="text-[clamp(1.5rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a] ">
                I build responsive and smart
                <br />
                <span className="text-neutral-500 dark:text-neutral-400">
                  websites for clients.
                </span>
              </h1>
              <div
                className="mt-8 flex flex-wrap items-center gap-3"
                style={{ opacity: 1, transform: "none" }}
              >
                <a
                  target="_blank"
                  className="inline-flex min-h-11 items-center gap-2 rounded-[12px] bg-foreground px-5 text-[15px] font-semibold leading-none text-background transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-black hover:text-white"
                  href="/Resume.pdf"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"></path>
                  </svg>
                  View Resume
                </a>
              </div>
              {/* Programming Language I use */}
              <Language />
            </div>
          </div>
        </section>
        {/* Moving Projects*/}
        <MovingProject />
        {/* About Section */}
        <About />
        {/* Services Section */}
        {/* Footer */}
        
        {/* CTA Section */}
        <CTA />
        {/* Contact Section */}
        <Contact/>
        <Footer />
      </main>
    </div>
    </>
  );
}
