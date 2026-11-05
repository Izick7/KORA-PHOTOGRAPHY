import { useState } from "react"
import { Link } from "react-router-dom"

const navItems = [
  { label: "WORK", path: "/work" },
  { label: "SERVICES", path: "/services" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative px-6 py-6 border-b border-kora-border bg-kora-ivory md:px-10">

      <div className="flex items-center justify-between">

        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-[21px] leading-none tracking-[0.34em] font-medium text-kora-black font-sans"
        >
          KORA
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center gap-10">

          <nav className="flex gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[12px] font-normal leading-none tracking-[0.14em] text-kora-black hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="bg-kora-black px-6 py-4 font-sans text-[11px] tracking-[0.18em] text-kora-white hover:bg-kora-sand"
          >
            BOOK A SESSION
          </Link>

        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block text-black focus:outline-none md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 w-full bg-[#f9f6f0] border-b border-[#e5e0d8] px-6 py-6 flex flex-col gap-4 shadow-md md:hidden">

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-[15px] font-medium text-black hover:underline py-1"
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#111111] text-white py-3 text-center w-full"
          >
            BOOK A SESSION
          </Link>

        </div>
      )}

    </header>
  )
}

export default Navbar