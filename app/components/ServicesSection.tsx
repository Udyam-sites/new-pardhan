import Image from 'next/image'

const leftServices = [
  'Traditional Indian Sweets',
  'Premium Bakery & Cakes',
  'Namkeen & Savouries',
  'Custom Catering',
  'Festive Gift Hampers',
]

const rightServices = [
  'Bulk Orders & Wholesale',
  'Wedding Collections',
  'Corporate Gifting',
  'Dry Fruit Specialties',
  'Sugar-Free Range',
]

export default function Services() {
  return (
    <section
      className="w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 xl:px-24"
      style={{
        backgroundImage: "url('/paper.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="max-w-[1720px] mx-auto p-8 md:p-14 lg:p-20"
        style={{
          border: '2px dashed #e3d3c1',
        }}
      >
        <div className="text-center mb-10">
          <span className="text-[13px] md:text-[16px] tracking-[0.5px] uppercase text-[#b12618] leading-none">
            Our Services
          </span>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] text-[#4b250f] mt-3 mb-8 leading-[0.92] font-normal">
            120+ Years Of Trust
          </h2>
          <div className="h-px bg-[#3e352d] opacity-70" />
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
          <div className="flex flex-col md:border-r md:border-[#3e352d]/70 md:pr-10">
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-[16px] md:rounded-[18px] border-[6px] md:border-[8px] border-[#e3d3c1]">
              <Image
                src="/image.png"
                alt="Pradhan Sweets Centre"
                fill
                className="object-contain p-6"
              />
            </div>
            <p className="text-[14px] text-[#222] mt-4 leading-relaxed">
              <span className="font-semibold">Above:</span> The iconic Pradhan Sweets
              Centre at Sarwal, Jammu — a legacy of authentic taste since 1902.
            </p>
          </div>

          <div className="flex flex-col">
            <p
              className="text-[#222] text-[19px] md:text-[18px] leading-[1.7] font-semibold text-justify mb-8"
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
                T
              </span>
              his is the story of a family that embarked on a culinary journey that forever
              shaped the sweet traditions of Jammu. This is the story of pure desi ghee,
              time-honoured recipes, and an unwavering commitment to authentic flavour.
            </p>

            <h3 className="text-center text-[13px] md:text-[16px] text-[#b12618] tracking-[0.5px] uppercase mb-6 leading-none">
              Services we offer
            </h3>

            <div className="grid grid-cols-2 gap-x-12 gap-y-5 relative">
              <ul className="space-y-5">
                {leftServices.map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-[#4b250f] text-sm md:text-base">
                    <span className="text-[#b12618] text-xs">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div
                className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(to bottom, #3e352d 0, #3e352d 4px, transparent 4px, transparent 8px)',
                }}
              />
              <ul className="space-y-5">
                {rightServices.map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-[#4b250f] text-sm md:text-base">
                    <span className="text-[#b12618] text-xs">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
