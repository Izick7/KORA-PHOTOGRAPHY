import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative px-6 py-6 border-b border-kora-border bg-kora-ivory md:px-10">
      <div className="flex items-center justify-between">
        <span className="text-[21px] leading-none tracking-[0.34em] font-medium text-kora-black font-sans">KORA</span>


        <div className="hidden md:flex md:items-center gap-10">
          <nav className="flex gap-10 ">
            <a className="text-[12px] font-normal leading-none tracking-[0.14em] text-kora-black hover:underline cursor-pointer">WORK</a>
            <a className="text-[12px] font-normal leading-none tracking-[0.14em] text-kora-black hover:underline cursor-pointer">SERVICES</a>
            <a className="text-[12px] font-normal leading-none tracking-[0.14em] text-kora-black hover:underline cursor-pointer">ABOUT</a>
            <a className="text-[12px] font-normal leading-none tracking-[0.14em] text-kora-black hover:underline cursor-pointer">CONTACTS</a>
          </nav>
          <button className="bg-kora-black px-6 py-4 font-sans text-[11px] font-normal leading-none 
          tracking-[0.18em] text-kora-white cursor-pointer hover:bg-kora-sand">
            BOOK A SESSION
          </button>
        </div>
 
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block text-black focus:outline-none md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>


      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f9f6f0] border-b border-[#e5e0d8] px-6 py-6 flex flex-col gap-4 shadow-md md:hidden">
          <a className="text-[15px] font-medium text-black hover:underline py-1">WORK</a>
          <a className="text-[15px] font-medium text-black hover:underline py-1">SERVICES</a>
          <a className="text-[15px] font-medium text-black hover:underline py-1">ABOUT</a>
          <a className="text-[15px] font-medium text-black hover:underline py-1 mb-2">CONTACTS</a>
          <button className="bg-[#111111] text-white py-3 hover:bg-gray-500 text-center w-full">
            BOOK A SESSION
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
