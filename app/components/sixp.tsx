"use client";

import Image from "next/image";

const sixPsData = [
  { label: "Price", icon: "/icon_price.png" },
  { label: "Product", icon: "/icon_product.png" },
  { label: "Place", icon: "/icon_place.png" },
  { label: "Promotion", icon: "/icon_promotion.png" },
  { label: "People", icon: "/icon_people.png" },
  { label: "Personalized service", icon: "/icon_service.png" },
];

export default function SuccessSection() {
  return (
    <section
      className="py-10 md:py-16 px-4 md:px-8 lg:px-16"
      style={{
        backgroundImage: "url('/paper.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-[1720px] mx-auto px-6 lg:px-[55px]">
        {/* Terracotta Card */}
        <div
          style={{
            background: "#b5502b",
            borderRadius: "6px",
            padding: "6px",
          }}
        >
          {/* Inner card with inset cream border */}
          <div
            style={{
              border: "3px solid rgba(255,255,255,0.75)",
              borderRadius: "4px",
              padding: "32px 40px",
            }}
          >
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
              {/* LEFT – Text */}
              <div className="lg:w-[38%] flex-shrink-0">
                <p
                  className="text-white/80 text-[15px] md:text-[17px] mb-1"
                  style={{
                    fontStyle: "italic",
                    fontFamily: "Sorts Mill Goudy, Georgia, serif",
                  }}
                >
                  Moti Mahal&apos;s
                </p>

                <h2
                  className="text-white text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.1] mb-4"
                  style={{
                    fontFamily: "Sorts Mill Goudy, Georgia, serif",
                  }}
                >
                  6Ps of success
                </h2>

                {/* Thin separator */}
                <div
                  className="mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "280px",
                    height: "1px",
                    background: "rgba(255,255,255,0.3)",
                  }}
                />

                <p
                  className="text-white/85 text-[13px] md:text-[14px] leading-[1.7]"
                  style={{
                    fontFamily: "Sorts Mill Goudy, Georgia, serif",
                    maxWidth: "310px",
                  }}
                >
                  Working continuously at the restaurant with Sardar Mukha
                  Singh, sharpened Gujral&apos;s skills in what he later
                  described as the six P&apos;s of success.
                </p>
              </div>

              {/* RIGHT – 3×2 Icons Grid */}
              <div className="lg:w-[62%] w-full">
                <div className="grid grid-cols-3 gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-8">
                  {sixPsData.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      {/* Icon */}
                      <div
                        className="relative w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] mb-2"
                      >
                        <Image
                          src={item.icon}
                          alt={item.label}
                          fill
                          className="object-contain"
                          style={{ mixBlendMode: "multiply" }}
                        />
                      </div>

                      {/* Label */}
                      <span
                        className="text-white text-[13px] md:text-[15px] text-center"
                        style={{
                          fontStyle: "italic",
                          fontFamily: "Sorts Mill Goudy, Georgia, serif",
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}