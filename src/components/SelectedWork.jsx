function SelectedWork() {
    return (
        <section
            id="work"
            className="bg-kora-ivory px-6 py-20 md:px-12 md:py-32"
        >

            {/* SECTION HEADER */}
            <div className="mx-auto max-w-[1680px]">

                <span className="font-sans text-[10px] font-medium leading-none tracking-[0.2em] text-kora-muted uppercase">
                    SELECTED WORK
                </span>

                <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.9] tracking-[-0.03em] text-kora-black sm:text-7xl lg:text-[7rem]">
                    Selected Work.
                </h2>

                <p className="mt-6 max-w-md font-sans text-base leading-[1.6] text-kora-muted md:text-lg">
                    A selection of portraits and personal-brand stories created
                    for people building something worth being seen.
                </p>

            </div>


            {/* PORTFOLIO GRID */}
            <div className="mx-auto mt-16 max-w-[1100px] md:mt-24">

             
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">

                    {/* PROJECT 01 */}
                    <article>
                        <div className="group overflow-hidden">
                            <img
                                src="/images/Amara.jpg"
                                alt="Portrait of Amara by Kora Studios"
                                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>

                        <div className="mt-4">
                            <h3 className="font-display text-[15px] font-bold leading-none tracking-[0.14em] text-kora-black uppercase">
                                AMARA
                            </h3>

                            <p className="mt-2 font-sans text-[11px] leading-none tracking-[0.08em] text-kora-muted uppercase">
                                Creative Director
                            </p>

                            <p className="mt-1 font-sans text-[10px] leading-none tracking-[0.08em] text-kora-muted uppercase">
                                Personal Brand · Lagos
                            </p>
                        </div>
                    </article>


                    {/* PROJECT 02 */}
                    <article>
                        <div className="group overflow-hidden">
                            <img
                                src="/images/Tunde.jpg"
                                alt="Portrait of Tunde by Kora Studios"
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] mt-[150px]"
                            />
                        </div>

                        <div className="mt-4">
                            <h3 className="font-display text-[15px] font-bold leading-none tracking-[0.14em] text-kora-black uppercase">
                                Tunde
                            </h3>

                            <p className="mt-2 font-sans text-[11px] leading-none tracking-[0.08em] text-kora-muted uppercase">
                                Product Designer
                            </p>

                            <p className="mt-1 font-sans text-[10px] leading-none tracking-[0.08em] text-kora-muted uppercase">
                                Professional Portrait · Lagos
                            </p>
                        </div>
                    </article>

                </div>

                <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-16">

                    {/* PROJECT 03 */}
                    <article>
                        <div className="group overflow-hidden">
                            <img
                                src="/images/Zina.jpg"
                                alt="Portrait of Zina by Kora Studios"
                                className=" w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>

                        <div className="mt-4">
                            <h3 className="font-display text-[15px] font-medium leading-none tracking-[0.14em] text-kora-black uppercase">
                                Zina
                            </h3>

                            <p className="mt-2 font-sans text-[11px] leading-none tracking-[0.08em] text-kora-muted uppercase">
                                Creative
                            </p>

                            <p className="mt-1 font-sans text-[10px] leading-none tracking-[0.08em] text-kora-muted uppercase">
                                Creative Portrait · Lagos
                            </p>
                        </div>
                    </article>


                    {/* PROJECT 04 */}
                    <article>
                        <div className="group overflow-hidden">
                            <img
                                src="/images/Ife.jpg"
                                alt="Portrait of Ife by Kora Studios"
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] mt-30"
                            />
                        </div>

                        <div className="mt-4">
                            <h3 className="font-display text-[15px] font-bold leading-none tracking-[0.14em] text-kora-black uppercase">
                                Ife
                            </h3>

                            <p className="mt-2 font-sans text-[11px] leading-none tracking-[0.08em] text-kora-muted uppercase">
                                Founder
                            </p>

                            <p className="mt-1 font-sans text-[10px] leading-none tracking-[0.08em] text-kora-muted uppercase">
                                Personal Brand · Lagos
                            </p>
                        </div>
                    </article>

                </div>


                {/* PROJECT 05 */}
                <article className="mx-auto mt-16 w-full md:mt-24 md:w-[48%]">

                    <div className="group overflow-hidden">
                        <img
                            src="/images/Emeka.jpg"
                            alt="Portrait of Emeka by Kora Studios"
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                    </div>

                    <div className="mt-4">
                        <h3 className="font-display text-[15px] font-bold leading-none tracking-[0.14em] text-kora-black uppercase">
                            Emeka
                        </h3>

                        <p className="mt-2 font-sans text-[11px] leading-none tracking-[0.08em] text-kora-muted uppercase">
                            Professional
                        </p>

                        <p className="mt-1 font-sans text-[10px] leading-none tracking-[0.08em] text-kora-muted uppercase">
                            Professional Portrait · Lagos
                        </p>
                    </div>

                </article>

            </div>

        </section>
    )
}

export default SelectedWork