"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/banner1.webp",
  "/banner2.webp",
  "/banner3.webp",
  "/banner4.webp",
];

export default function HomeCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[220px] sm:h-[340px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
        <div
          className="flex h-full transition-transform duration-[500ms] ease-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full h-full"
            >
              <Image
                src={slide}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-fit"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}