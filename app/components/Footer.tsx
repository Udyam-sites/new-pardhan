import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/locations", label: "Our Locations" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Decorative pattern image */}
      <div className="w-full">
        <Image
          src="/image copy.png"
          alt="Decorative pattern"
          width={1920}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Main footer bar */}
      <div className="bg-[#6d2b2b] px-6 lg:px-[55px] py-[26px] flex flex-col md:flex-row items-baseline justify-between gap-3">
        {/* Left — Nav Links */}
        <nav className="flex flex-wrap items-center text-[#d6ccba] text-[16px] tracking-[0.3px]">
          {footerLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="hover:text-white transition-colors duration-200 underline underline-offset-2 decoration-[#d6ccba]/50"
              >
                {link.label}
              </Link>
              {i < footerLinks.length - 1 && (
                <span className="mx-[8px] text-[#d6ccba]/40">|</span>
              )}
            </span>
          ))}
        </nav>

        {/* Right — Copyright */}
        <p className="text-[#d6ccba] text-[15px] tracking-[0.3px] text-center md:text-right whitespace-nowrap">
          © GUJRAL AND SON MOTI MAHAL DELUX LLP &nbsp;| &nbsp;© MOTI MAHAL 2024. &nbsp;| &nbsp;© COPYRIGHT. ALL RIGHT RESERVED.
        </p>
      </div>

      {/* Two white lines + red bottom strip */}
      <div className="bg-[#6d2b2b]">
        <div className="h-[2.5px] bg-[#e8ddd0]" />
        <div className="h-[5px]" />
        <div className="h-[2.5px] bg-[#e8ddd0]" />
        <div className="h-[5px] bg-[#8b1a1a]" />
      </div>
    </footer>
  );
}
