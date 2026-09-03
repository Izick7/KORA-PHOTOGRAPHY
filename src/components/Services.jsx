function Services() {
    return (
        <section className="bg-kora-ivory px-6 py-20 md:px-12 md:py-32">

            <div className="mx-auto max-w-[1680px]">

                {/* HEADER */}
                <div className="flex items-end justify-between">

                    <div>
                        <span className="font-sans text-[10px] font-medium leading-none tracking-[0.2em] text-kora-muted uppercase">
                            SERVICES
                        </span>

                        <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.03em] text-kora-black sm:text-6xl lg:text-[5rem]">
                            Three ways in.
                        </h2>
                    </div>

                    <span className="hidden font-sans text-[10px] font-medium leading-none tracking-[0.18em] text-kora-muted uppercase md:block">
                        01 — 03
                    </span>

                </div>


                {/* SERVICES */}
                <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-8">

                    {/* SERVICE 01 */}
                    <article className="md:col-span-4">

                        <div className="group overflow-hidden">
                            <img
                                src="/images/BrandImg.jpg"
                                alt="Personal brand photography session"
                                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>

                        <div className="mt-4">
                            <span className="font-sans text-[10px] leading-none tracking-[0.16em] text-kora-muted">
                                01
                            </span>

                            <h3 className="mt-4 font-display text-2xl leading-none tracking-[-0.02em] text-kora-black">
                                Personal Brand Session
                            </h3>

                            <p className="mt-3 max-w-sm font-sans text-sm leading-[1.5] text-kora-muted">
                                Photography built around your identity, your work,
                                and the presence you want to project.
                            </p>
                        </div>

                    </article>


                    {/* SERVICE 02 */}
                    <article className="md:col-span-4 md:mt-12">

                        <div className="group overflow-hidden">
                            <img
                                src="/images/PortraitImg.jpg"
                                alt="Professional portrait photography"
                                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>

                        <div className="mt-4">
                            <span className="font-sans text-[10px] leading-none tracking-[0.16em] text-kora-muted">
                                02
                            </span>

                            <h3 className="mt-4 font-display text-2xl leading-none tracking-[-0.02em] text-kora-black">
                                Professional Portrait
                            </h3>

                            <p className="mt-3 max-w-sm font-sans text-sm leading-[1.5] text-kora-muted">
                                Clean, intentional portraits for profiles,
                                websites, publications, and professional presence.
                            </p>
                        </div>

                    </article>


                    {/* SERVICE 03 */}
                    <article className="md:col-span-4 md:mt-24">

                        <div className="group overflow-hidden">
                            <img
                                src="/images/CreativePortrait.jpg"
                                alt="Creative portrait photography"
                                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>

                        <div className="mt-4">
                            <span className="font-sans text-[10px] leading-none tracking-[0.16em] text-kora-muted">
                                03
                            </span>

                            <h3 className="mt-4 font-display text-2xl leading-none tracking-[-0.02em] text-kora-black">
                                Creative Portrait
                            </h3>

                            <p className="mt-3 max-w-sm font-sans text-sm leading-[1.5] text-kora-muted">
                                More expressive portraiture for images that feel
                                personal, distinctive, and considered.
                            </p>
                        </div>

                    </article>

                </div>

            </div>

        </section>
    );
}

export default Services;