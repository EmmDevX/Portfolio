"use-client"
import FloatingPhotos from "./FloatingPic"


export default function AboutPage(){
    return(
        <section id="about" className="overflow-hidden pt-10 md:pt-28 lg:pt-32">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6  md:gap-8 md:px-7">
                <div className="flex w-full max-w-3xl flex-col items-start">
                    <h2 className="text-[clamp(1.5rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0a0a0a]">
                        About Me
                    </h2>
                  
                    <p className="mt-4 text-base text-neutral-600">
                        I am a passionate web developer with a strong focus on creating responsive and user-friendly websites. With a keen eye for design and a solid understanding of front-end technologies, I strive to deliver high-quality web solutions that meet the needs of clients and users alike.
                    </p>
                    <p className="mt-4 text-base text-neutral-600">
                        My expertise lies in HTML, CSS, JavaScript, and modern frameworks like React and Next.js. I enjoy collaborating with clients to bring their ideas to life and continuously learning new technologies to stay ahead in the ever-evolving web development landscape.
                    </p>
                    <p className="mt-4 text-base text-neutral-600">
                        Beyond Coding, I am a problem solver who enjoys tackling challenges and finding innovative solutions. I am committed to delivering projects on time and ensuring that the end product exceeds expectations. Let's work together to create something amazing!
                    </p>
                </div>

                {/*  Two Bending Pictures of Me */}
                  <div className="">
                    <FloatingPhotos/>
                  </div>
                </div>
        </section>
    )
}