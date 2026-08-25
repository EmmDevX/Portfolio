"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="fixed top-[28px] inset-x-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto relative isolate rounded-[18px] md:rounded-3xl p-1.5 md:p-2 ">
        <div
          className="absolute inset-0 -z-10 rounded-[18px] md:rounded-3xl backdrop-blur-[18px] bg-white/[0.01]"
          style={{ filter: "url(#liquid-glass)", backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.0) 100%)" }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 rounded-[18px] md:rounded-3xl border border-black pointer-events-none"
          aria-hidden="true"
        ></div>
        <nav className="relative z-10 flex items-center">
          <Link
            target="_self"
            aria-label="Home"
            className="relative flex items-center justify-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-xl md:rounded-2xl mx-[1px] text-zinc-600 hover:text-zinc-900 transition-colors duration-150 overflow-visible"
            href="/"
          >
            <span
              className="relative z-10 flex items-center justify-center"
              style={{ transform: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                color="currentColor"
                className=""
                strokeWidth="1.6"
                stroke="currentColor"
              >
                <path
                  d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                ></path>
                <path
                  d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                ></path>
              </svg>
            </span>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="relative flex items-center justify-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-xl md:rounded-2xl mx-[1px] text-zinc-600 hover:text-zinc-900 transition-colors duration-150 overflow-visible"
            href="https://x.com/emmanuel_t98185"
          >
            <span
              className="relative z-10 flex items-center justify-center"
              style={{ transform: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                color="currentColor"
                className=""
                strokeWidth="1.6"
                stroke="currentColor"
              >
                <path
                  d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                ></path>
              </svg>
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="relative flex items-center justify-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-xl md:rounded-2xl mx-[1px] text-zinc-600 hover:text-zinc-900 transition-colors duration-150 overflow-visible"
            href="https://github.com/EmmDevX"
          >
            <span
              className="relative z-10 flex items-center justify-center"
              style={{ transform: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                color="currentColor"
                className=""
                strokeWidth="1.6"
                stroke="currentColor"
              >
                <path
                  d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                ></path>
              </svg>
            </span>
          </a>
          <a
            target="_blank"
            download=""
            aria-label="Resume"
            className="relative flex items-center justify-center w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-xl md:rounded-2xl mx-[1px] text-zinc-600 hover:text-zinc-900 transition-colors duration-150 overflow-visible"
            href="/resume.pdf"
          >
            <span
              className="relative z-10 flex items-center justify-center"
              style={{ transform: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                color="currentColor"
                className=""
                strokeWidth="1.6"
                stroke="currentColor"
              >
                <path
                  d="M8 7L16 7"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                ></path>
                <path
                  d="M8 11L12 11"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                ></path>
                <path
                  d="M13 21.5V21C13 18.1716 13 16.7574 13.8787 15.8787C14.7574 15 16.1716 15 19 15H19.5M20 13.3431V10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2C8.22877 2 6.34315 2 5.17157 3.17157C4 4.34314 4 6.22876 4 10L4 14.5442C4 17.7892 4 19.4117 4.88607 20.5107C5.06508 20.7327 5.26731 20.9349 5.48933 21.1139C6.58831 22 8.21082 22 11.4558 22C12.1614 22 12.5141 22 12.8372 21.886C12.9044 21.8623 12.9702 21.835 13.0345 21.8043C13.3436 21.6564 13.593 21.407 14.0919 20.9081L18.8284 16.1716C19.4065 15.5935 19.6955 15.3045 19.8478 14.9369C20 14.5694 20 14.1606 20 13.3431Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                ></path>
              </svg>
            </span>
          </a>
          <div className="w-[1px] h-[20px] md:h-[24px] bg-black/10 mx-1 md:mx-2 shrink-0 rounded-sm"></div>
          <div tabIndex="0" style={{ transform: "none" }}>
            <a
              className="inline-flex items-center justify-center bg-[#111] text-white font-medium tracking-tight whitespace-nowrap text-sm md:text-sm h-[40px] md:h-[46px] px-[16px] md:px-[22px] rounded-[16px] md:rounded-[18px] mx-[2px] md:mx-[4px] shadow-none"
              href="/projects"
            >
              Projects
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
