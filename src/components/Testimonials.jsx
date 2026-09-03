function Testimonials() {
    return (
        <section className="bg-kora-ivory px-6 py-20 text-kora-black md:px-12 md:py-32">

            <div className="mx-auto max-w-[1680px]">

                {/* HEADER */}
                <div className="mb-16 md:mb-24">
                    <span className="font-sans text-[10px] font-medium leading-none tracking-[0.2em] text-kora-muted uppercase">
                        CLIENTS
                    </span>
                </div>


                {/* TESTIMONIAL CARDS */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">

                    {/* CLIENT 01 */}
                    <div className="flex flex-col justify-between border-t border-kora-border pt-8 min-h-[320px]">
                        
                        <div className="flex flex-col gap-6">
                            <h3 className="font-display text-2xl font-bold leading-[1.2] tracking-tight text-kora-black md:text-3xl lg:text-[2.2rem]">
                                "I finally have images that actually feel like me."
                            </h3>

                            <p className="font-sans text-sm leading-[1.6] text-kora-muted max-w-sm">
                                I had been using a photo from three years ago.
                                Kora took the time to understand what I was
                                building before the camera came out — the
                                difference shows.
                            </p>
                        </div>

                        <div className="mt-12 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-kora-black">
                            David <span className="text-kora-muted">— PRODUCT DESIGNER · LAGOS</span>
                        </div>

                    </div>


                    {/* CLIENT 02 */}
                    <div className="flex flex-col justify-between border-t border-kora-border pt-8 min-h-[320px]">
                        
                        <div className="flex flex-col gap-6">
                            <h3 className="font-display text-2xl font-bold leading-[1.2] tracking-tight text-kora-black md:text-3xl lg:text-[2.2rem]">
                                "The direction was the part I didn't know I needed."
                            </h3>

                            <p className="font-sans text-sm leading-[1.6] text-kora-muted max-w-sm">
                                I'm not comfortable in front of a camera. They
                                directed every frame, and I never felt like I was
                                performing. We shot a full brand set in one
                                afternoon.
                            </p>
                        </div>

                        <div className="mt-12 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-kora-black">
                            Zainab <span className="text-kora-muted">— FOUNDER, LOGISTICS STARTUP · LAGOS</span>
                        </div>

                    </div>


                    {/* CLIENT 03 */}
                    <div className="flex flex-col justify-between border-t border-kora-border pt-8 min-h-[320px]">
                        
                        <div className="flex flex-col gap-6">
                            <h3 className="font-display text-2xl font-bold leading-[1.2] tracking-tight text-kora-black md:text-3xl lg:text-[2.2rem]">
                                "It changed how people respond to my profile."
                            </h3>

                            <p className="font-sans text-sm leading-[1.6] text-kora-muted max-w-sm">
                                Two weeks after updating my site and LinkedIn, I
                                had inbound conversations I'd been chasing for
                                months. The images did the introduction for me.
                            </p>
                        </div>

                        <div className="mt-12 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-kora-black">
                            Kelechi <span className="text-kora-muted">— INDEPENDENT CONSULTANT · LAGOS</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Testimonials;
