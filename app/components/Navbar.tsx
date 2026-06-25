'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home', icon: 'house' },
  { href: '/about', label: 'About Us', icon: 'info' },
  { href: '/menu', label: 'Menu', icon: 'utensils' },
  { href: '/contact', label: 'Contact', icon: 'message-circle' },
]

const icons: Record<string, React.ReactNode> = {
  house: <><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>,
  utensils: <><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></>,
  info: <><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></>,
  'message-circle': <><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></>,
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const renderIcon = (iconName: string, className: string = 'w-5 h-5') => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} transition-all duration-300 group-hover:scale-110`} aria-hidden="true">
      {icons[iconName]}
    </svg>
  )

  const isActive = (href: string) => pathname === href

  const NavLink = ({ item }: { item: { href: string; label: string; icon: string } }) => (
    <Link
      href={item.href}
      className={`relative flex items-center space-x-2.5 px-5 py-2.5 rounded-full transition-all duration-300 group ${
        isActive(item.href)
          ? 'text-[#b12618] bg-[#f7f2e8]/70 shadow-md shadow-[#e3d3c1]/40'
          : 'text-[#4b250f] hover:text-[#b12618] hover:bg-[#f7f2e8]/50'
      }`}
    >
      {renderIcon(item.icon, 'w-5 h-5')}
      <span className="relative text-base tracking-[0.3px]">
        {item.label}
      </span>
    </Link>
  )

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#f7f2e8]/95 border-b border-[#e3d3c1] shadow-sm backdrop-blur-sm"
        style={{
          backgroundImage: "url('/paper.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1720px] mx-auto px-6 lg:px-[55px]">
          <div className="flex items-center justify-between md:justify-center md:gap-x-12 lg:gap-x-16 xl:gap-x-20 h-20 md:h-24 relative w-full">
            <nav className="hidden md:flex items-center space-x-3">
              {navItems.slice(0, 2).map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </nav>

            <Link href="/" className="flex items-center space-x-3.5 group md:relative md:left-auto md:translate-x-0 absolute left-1/2 -translate-x-1/2">
              <div className="h-14 md:h-20 w-auto overflow-hidden transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Image src="/logo.png" alt="Pradhan Sweets" width={300} height={80} className="h-full w-auto object-contain" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-xl md:text-2xl text-[#4b250f] group-hover:text-[#b12618] transition-colors duration-300">
                  Pradhan Sweets
                </span>
                <span className="text-[11px] md:text-xs text-[#b12618] font-semibold tracking-[0.5px] uppercase">
                  Since 1902
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-3">
              {navItems.slice(2).map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-2xl text-[#4b250f] hover:text-[#b12618] hover:bg-[#f7f2e8] transition-all duration-300 absolute right-4 top-1/2 -translate-y-1/2"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-7 h-7" aria-hidden="true">
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute top-0 right-0 w-72 h-full bg-[#f7f2e8] shadow-xl"
            style={{
              backgroundImage: "url('/paper.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-[#e3d3c1]">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="h-9 w-auto overflow-hidden shrink-0">
                  <Image src="/logo.png" alt="Pradhan Sweets" width={100} height={36} className="h-full w-auto object-contain" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-sm text-[#4b250f] group-hover:text-[#b12618] transition-colors">Pradhan Sweets</span>
                  <span className="text-[9px] text-[#b12618] font-medium tracking-[0.5px] uppercase">Since 1902</span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-[#4b250f] hover:text-[#b12618] hover:bg-[#e3d3c1]/50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="px-3 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'text-[#b12618] bg-[#e3d3c1]/40'
                      : 'text-[#4b250f] hover:text-[#b12618] hover:bg-[#e3d3c1]/30'
                  }`}
                >
                  <span className="w-5 h-5 flex items-center justify-center">
                    {renderIcon(item.icon, 'w-5 h-5')}
                  </span>
                  <span className="tracking-[0.3px]">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
