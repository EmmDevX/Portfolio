"use client";

export default function FloatingPhotos() {
  return (
    <section className="relative flex min-h-[550px] w-full items-center justify-center overflow-hidden  px-4 ">
      
      {/* Soft shadow underneath the photos */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[250px]
          w-[250px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
         
          blur-[70px]
        "
      />

      {/* CENTERED PHOTO GROUP */}
      <div
        className="
          relative
          flex
          h-[400px]
          w-[330px]
          items-center
          justify-center

          sm:h-[450px]
          sm:w-[400px]

          lg:h-[500px]
          lg:w-[500px]
        "
      >

        {/*  LEFT PHOTO */}
        <div
          className="
            floating-left
            absolute
            left-[5px]
            top-1/2
            z-10
            w-[180px]
            -translate-y-1/2
            rounded-[5px]
            bg-white
            p-[9px]
            pb-[38px]
            shadow-[0_18px_40px_rgba(0,0,0,0.15)]

            sm:left-[20px]
            sm:w-[215px]
            sm:p-[11px]
            sm:pb-[45px]

            lg:left-[45px]
            lg:w-[245px]
            lg:p-[13px]
            lg:pb-[50px]
          "
        >
          {/* Photo */}
          <div className="overflow-hidden">
            <img
              src="/images/pic.jpg"
              alt="Portfolio photo"
              className="
                aspect-[4/5]
                w-full
                object-cover
              "
            />
          </div>

          {/* Username */}
          <p
            className="
              absolute
              bottom-[10px]
              left-0
              w-full
              text-center
              text-[9px]
              font-medium
              tracking-tight
              text-black

              sm:bottom-[11px]
              sm:text-[10px]

              lg:bottom-[13px]
              lg:text-[11px]
            "
          >
            @mechadev
          </p>
        </div>

        {/* ================= RIGHT PHOTO ================= */}
        <div
          className="
            floating-right
            absolute
            right-[5px]
            top-1/2
            z-20
            w-[180px]
            -translate-y-[42%]
            rounded-[5px]
            bg-white
            p-[9px]
            pb-[38px]
            shadow-[0_20px_45px_rgba(0,0,0,0.18)]

            sm:right-[20px]
            sm:w-[215px]
            sm:p-[11px]
            sm:pb-[45px]

            lg:right-[45px]
            lg:w-[245px]
            lg:p-[13px]
            lg:pb-[50px]
          "
        >
          {/* Photo */}
          <div className="overflow-hidden">
            <img
              src="/images/profile.jpg"
              alt="Portfolio photo"
              className="
                aspect-[4/5]
                w-full
                object-cover
              "
            />
          </div>

          {/* Username */}
          <p
            className="
              absolute
              bottom-[10px]
              left-0
              w-full
              text-center
              text-[9px]
              font-medium
              tracking-tight
              text-black

              sm:bottom-[11px]
              sm:text-[10px]

              lg:bottom-[13px]
              lg:text-[11px]
            "
          >
            @emmdevx
          </p>
        </div>

      </div>
    </section>
  );
}