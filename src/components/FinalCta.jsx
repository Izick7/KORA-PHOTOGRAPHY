function FinalCta() {
    return (
        <section className="bg-kora-black px-6 py-24 text-kora-ivory md:px-12 md:py-40 overflow-hidden">

            <div className="mx-auto max-w-[1680px]">
                <div className="grid gap-12 md:grid-cols-12 md:gap-8 items-end">
                    <div className="md:col-span-7">

                        <span className="font-sans text-[10px] font-medium leading-none tracking-[0.2em] text-kora-muted uppercase">
                            BOOK A SESSION
                        </span>

                        <h2 className="mt-8 font-display text-6xl leading-[0.85] tracking-[-0.03em] text-kora-ivory sm:text-7xl md:text-8xl lg:text-[9rem] whitespace-nowrap">
                            Ready to be
                            <br />
                            seen?
                        </h2>

                    </div>

                    <div className="flex flex-col gap-8 md:col-span-4 md:col-start-9 md:pb-6">

                        <p className="font-sans text-sm leading-[1.6] text-kora-muted md:text-base max-w-xs">
                            Let's create images that represent where
                            you're going.
                        </p>

                        <div>
                            <button className="group inline-flex items-center justify-between w-full max-w-[210px] border border-kora-border/40 px-5 py-3.5 font-sans text-[10px] font-medium tracking-[0.16em] text-kora-ivory uppercase transition-colors duration-300 hover:bg-kora-ivory hover:text-kora-black">

                                Book a session

                                <span className="text-xs font-light text-kora-muted group-hover:text-kora-black transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default FinalCta
