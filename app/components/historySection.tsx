"use client";

import Image from "next/image";

export default function FlavourAmbassadorSection() {
  return (
    <section
      className="bg-[#f7f2e8]"
      style={{
        backgroundImage: "url('/paper.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1720px] mx-auto px-6 lg:px-[55px] py-[20px]">
        {/* HEADING + TAGLINE */}
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[#4b250f] text-[32px] sm:text-[40px] md:text-[48px] leading-[0.92] font-normal order-1 lg:order-2">
            The Flavour Ambassador.
          </h2>

          <p className="text-[#b12618] text-[13px] md:text-[16px] uppercase tracking-[0.5px] leading-none mt-1 lg:mt-0 order-2 lg:order-1">
            Bringing The Richness Of Indian Flavours To The Global Table
          </p>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-[#3e352d] opacity-70 mt-6 mb-9" />

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[54%_46%] gap-6 lg:gap-8 items-start">
          {/* LEFT */}
          <div>
            <p
              className="text-[#222] text-[19px] md:text-[18px] leading-[1.7] font-semibold text-justify"
              style={{
                textAlignLast: "left",
              }}
            >
              <span
                className="text-[#b31313] text-[34px]"
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                }}
              >
                K
              </span>
              undan Lal Gujral, who arrived in Delhi as a refugee,
              transformed Indian cuisine and established the legendary Moti
              Mahal. Starting from a roadside dhaba in Daryaganj, Moti Mahal
              became renowned worldwide, serving its specialties at prestigious
              events including PM Nehru&apos;s banquets. It became a culinary
              destination for global dignitaries like the{" "}
              <span className="text-[#b31313]">Shah of Iran</span>, US President{" "}
              <span className="text-[#b31313]">Richard Nixon</span>,{" "}
              <span className="text-[#b31313]">Jacqueline Kennedy</span>,
              Canadian Prime Minister{" "}
              <span className="text-[#b31313]">Trudeau</span>,{" "}
              <span className="text-[#b31313]">the King of Nepal</span>, and{" "}
              <span className="text-[#b31313]">
                Soviet leaders Kosygin and Bulganin
              </span>
              , among others.
            </p>

            <p
              className="hidden lg:block mt-8 md:mt-10 text-[#222] text-[19px] md:text-[18px] leading-[1.7] font-semibold text-justify"
              style={{
                textAlignLast: "left",
              }}
            >
              There is an epic story behind today&apos;s well established brand{" "}
              <span className="text-[#b31313]">
                &quot;Moti Mahal Franchise&quot;
              </span>
              . No one could have thought that establishment of a small roadside
              dhaba could change the face of Indian food.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-10">
            <div className="overflow-hidden rounded-[16px] md:rounded-[18px] border-[6px] md:border-[8px] border-[#e3d3c1]">
              <Image
                src="/img1.webp"
                alt="History 1"
                width={700}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[16px] md:rounded-[18px] border-[6px] md:border-[8px] border-[#e3d3c1]">
              <Image
                src="/img2.webp"
                alt="History 2"
                width={700}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="hidden lg:block overflow-hidden rounded-[16px] md:rounded-[18px] border-[6px] md:border-[8px] border-[#e3d3c1]">
              <Image
                src="/img3.webp"
                alt="History 3"
                width={700}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="hidden lg:block overflow-hidden rounded-[16px] md:rounded-[18px] border-[6px] md:border-[8px] border-[#e3d3c1]">
              <Image
                src="/img4.webp"
                alt="History 4"
                width={700}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}