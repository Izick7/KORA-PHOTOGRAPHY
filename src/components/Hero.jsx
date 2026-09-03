function Hero() {
  return (
    <section className="bg-kora-ivory">
      <div className="mx-auto flex max-w-[1680px] flex-col gap-14 px-6 py-16 md:flex-row md:items-end md:justify-between md:gap-12 md:px-12 md:py-24 lg:py-28">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-[55%]">
          <span className="font-sans text-[10px] font-medium leading-none tracking-[0.2em] text-kora-muted uppercase">
            PORTRAIT STUDIO — LAGOS, NIGERIA
          </span>

          <h1 className="mt-6 font-display text-[4rem] leading-[0.88] tracking-[-0.04em] text-kora-black sm:text-7xl md:text-8xl lg:text-[9rem]">
            Built to
            <br />
            be seen.
          </h1>

          <p className="mt-8 max-w-md font-sans text-base leading-[1.6] text-kora-muted md:mt-10">
            Portrait and personal-brand photography for people
            building something worth remembering.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">

            <button className="h-14 bg-kora-black px-8 font-sans text-[11px] font-medium leading-none tracking-[0.22em] text-kora-white uppercase transition-colors duration-300 hover:bg-kora-muted">
              BOOK A SESSION
            </button>

            <button className="h-14 border border-kora-black/30 bg-transparent px-8 font-sans text-[11px] font-medium leading-none tracking-[0.22em] text-kora-black uppercase transition-colors duration-300 hover:bg-kora-black hover:text-kora-white">
              EXPLORE THE WORK
            </button>

          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="w-full md:w-[40%] lg:w-[36%]">
          <img
            src="src/assets/images/heroImg.jpg"
            alt="Portrait photography by Kora Studios"
            className="w-full object-cover"
          />
        </div>

      </div>
      <hr className="border border-kora-border"/>
    </section>
  )
}

export default Hero