"use client";
import { useState } from "react";
export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  return (
    <section className="overflow-hidden mb-12 md:mb-14 lg:mb-16 pt-10 md:pt-28 lg:pt-32">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6  md:gap-8 md:px-7">
        <div className="flex w-full max-w-3xl flex-col items-start py-8">
          <h2 className="text-[clamp(1.5rem,3.2vw,3.5rem)] font-bold leading-[1.07] tracking-[-0.03em] text-[#0a0a0a] ">
            Send me a Message
          </h2>
          <form onSubmit={async (e) => {
              e.preventDefault();

              setSending(true);
              setStatus("");

              const form = e.currentTarget;
              const formData = new FormData(form);

              formData.append("access_key", "cae29f66-1ea0-4ef6-bd48-c933a962c878");
              formData.append("subject", "Contact-Form");
              formData.append("from_name", "Project Inquiry");

              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData,
                });

                const result = await response.json();

                if (result.success) {
                  setStatus("Message sent successfully!");
                  form.reset();
                } else {
                  setStatus(
                    result.message || "Something went wrong. Please try again."
                  );
                }
              } catch (error) {
                console.error("Form error:", error);
                setStatus("Something went wrong. Please try again.");
              } finally {
                setSending(false);
              }
            }}
            >
            {/* Firstname and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center justify-between mb-4 md:mb-8 lg:mb-12">
             <div className="flex flex-col gap-2 px-6 mt-8 md:gap-4 md:px-7">
                 <label className="text-2xl font-medium text-neutral-500 ">First-Name</label>
                 <input type="text" placeholder="Emmanuel" name="First-name" required className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-4 text-base text-neutral-900 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 md:px-6 md:py-5"/>
              </div>
               <div className="flex flex-col gap-2 px-6 mt-8 md:gap-4 md:px-7">
                 <label className="text-2xl font-medium text-neutral-500" >Last-Name</label>
                 <input type="text" placeholder="Taiwo" name="Last-name" required className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-4 text-base text-neutral-900 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 md:px-6 md:py-5"/>
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2 px-6 mt-2 md:gap-4 md:px-7 mb-4 md:mb-8 lg:mb-12">
                <label className="text-2xl font-medium text-neutral-500" >Email:</label>
                <input type="email" placeholder="emmanueltaiwo@example.com" required  name="Email"  className="w-full rounded-xl border border-neutral-200 bg-white px-5 py-4 text-base text-neutral-900 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 md:px-6 md:py-5"/>
            </div>
            {/* Subject */}
                 <div className="flex flex-col gap-2 px-6 mt-2 md:gap-4 md:px-7 mb-4 md:mb-8 lg:mb-12">
                <label className="text-2xl font-medium text-neutral-500" >Subject:</label>
                <textarea placeholder="Tell me a little about your project" required name="Message" rows={6} className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-5 py-4 text-base text-neutral-900 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 md:px-6 md:py-5"/>
            </div>
            {/* Submit Form */}
            <div className="flex items-center justify-center p-8 mt-4 md:p-10 lg:mt-8">

              <button
                type="submit"
                disabled={sending}
                className="group relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black px-12 py-5 text-xl font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70 md:text-2xl lg:text-3xl"
                style={{ backgroundImage: "url('/images/cta.jpg')" }}
              >
                {/* Black Overlay */}
                <span className="absolute inset-0 bg-black/75 transition-all duration-300 group-hover:bg-black/65"></span>

                {/* Button Text */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {sending ? "Sending..." : "Send Message"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
