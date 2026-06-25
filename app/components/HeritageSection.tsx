import Image from "next/image";

export default function HeritageSection() {
  return (
    <section className="bg-parchment min-h-screen py-12 px-6 md:px-12 lg:px-20 flex items-center justify-center overflow-x-hidden relative select-none">
      {/* Vignette Overlay for Depth */}
      <div className="bg-parchment-vignette absolute inset-0 z-0 pointer-events-none" />

      {/* Main Content Box */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl text-[#3d2e24] font-normal tracking-wide mb-3">
            We Are Pradhan Sweets
          </h1>
          <p className=" text-xl md:text-2xl lg:text-3xl text-[#5a493a] ">
            The Pioneers of Famia & Kaldama in Jammu.
          </p>
        </header>

        {/* Separator Line */}
        <hr className="border-t border-[#8c7e6c] opacity-60 mb-10 w-full" />

        {/* 3-Column Layout */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column - Historical Sweets Preparation */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="heritage-left-frame w-full max-w-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src="/images/vintage_sweet_making.png"
                  alt="Authentic sweet preparation"
                  fill
                  className="object-cover filter grayscale contrast-125 sepia-[0.3]"
                  priority
                />
              </div>
            </div>
            {/* Caption (Outside Left Frame) */}
            <p className="text-[0.95rem] text-[#4a3d32] mt-3 leading-relaxed font-medium">
              <span className="text-[#991b1b] font-bold text-xs uppercase tracking-wider mr-1.5 ">
                Above:
              </span>
              Authentic preparation of Famia in our traditional kitchen
            </p>
          </div>

          {/* Middle Column - Historical Text Narrative */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-[#2c2420] text-[1.1rem] leading-[1.8] font-medium tracking-wide">
            <p className="drop-cap-p text-justify">
              Pradhan Sweets, founded in the historic heart of Jammu in 1902, 
              revolutionized the region&apos;s culinary heritage by introducing 
              legendary local confectionery items like Famia and Kaldama. 
              Transforming from a modest, dedicated sweet-making workshop into a 
              celebrated name across the state, Pradhan Sweets made authentic Jammu 
              flavours and traditional recipes world-renowned.
            </p>
            <p className="text-justify">
              Pradhan Sweets quickly became legendary, attracting sweet lovers 
              and food connoisseurs from all over, all eager to experience our 
              uniquely crafted specialties. The rich aroma of pure desi ghee, 
              organic saffron, and exotic cardamoms filled the air, capturing 
              the true spirit of Jammu with every delicious bite, leaving a 
              lasting impression on everyone who tasted it.
            </p>
          </div>

          {/* Right Column - Founder Portrait Frame */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="heritage-right-frame w-full max-w-[280px]">
              <div className="heritage-right-inner-frame">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                  <Image
                    src="/images/founder_portrait.png"
                    alt="Founder of Pradhan Sweets"
                    fill
                    className="object-cover filter grayscale sepia-[0.25] contrast-110"
                  />
                </div>
                {/* Caption (Inside Right Frame) */}
                <p className="text-center  font-bold text-lg text-[#991b1b] mt-4 tracking-wide uppercase">
                  Shri Pradhan Ji
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
