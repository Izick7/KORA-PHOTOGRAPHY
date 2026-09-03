function Navbar() {
  return (
    <header className="px-6 py-6 md:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        
        <a
          href="/"
          className="text-sm font-semibold tracking-[0.2em]"
        >
          KORA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#work" className="text-xs">
            Work
          </a>

          <a href="#services" className="text-xs">
            Services
          </a>

          <a href="#about" className="text-xs">
            About
          </a>

          <a href="#contact" className="text-xs">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className=" bg-[#1e1e1e] px-5 py-3 text-xs text-white"
        >
          BOOK A SESSION
        </a>

      </nav>
    </header>
  )
}

export default Navbar