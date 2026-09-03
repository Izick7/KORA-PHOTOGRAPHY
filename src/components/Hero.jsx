function Hero() {
    return (
        <>
            <main className="w-full max-w-7xl px-6 md:px-10 lg:px-16 py-12 md:py-20">
                <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">

                    <div className="w-full md:w-[55%]">
                        <span className="">PORTRAIT STUDIO - LAGOS, NIGERIA</span>
                        <h1>Built to <br />be seen </h1>
                        <p>Portrait and personal-brand photography
                            for people building something worth remembering.</p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                            <button className="bg-[#151515] text-[#f9f6f0] px-10 py-5 text-[11px] font-medium tracking-[0.25em] uppercase transition-colors duration-200 hover:bg-neutral-800 rounded-none h-14 min-w-[220px]">
                                BOOK A SESSION
                            </button>

                            <button className="border border-[#151515]/30 text-[#151515] bg-transparent px-10 py-5 text-[11px] font-medium tracking-[0.25em] uppercase transition-colors duration-200 hover:bg-[#151515] hover:text-[#f9f6f0] rounded-none h-14 min-w-[220px]">
                                EXPLORE THE WORK
                            </button>
                        </div>
                    </div>

                    <img
                        src=""
                        alt="hero-img"
                        className="w-full md:w-[40%] lg:w-[35%] object-cover aspect-[4/5]"
                    />
                </div>
            </main>
        </>
    )
}

export default Hero;
