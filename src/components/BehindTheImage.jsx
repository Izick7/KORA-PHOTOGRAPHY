function BehindTheImage() {
    return (
        <section className="bg-kora-black px-6 py-20 text-kora-ivory md:px-12 md:py-32">

            <div className="mx-auto max-w-[1680px]">

                {/* HEADER */}
                <div className="grid gap-8 md:grid-cols-12 md:gap-8">

                    <div className="md:col-span-6">

                        <span className="font-sans text-[10px] font-medium leading-none tracking-[0.2em] text-kora-sand uppercase">
                            THE PROCESS
                        </span>

                        <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.03em] text-kora-ivory sm:text-7xl lg:text-[7rem]">
                            Behind the
                            <br />
                            image.
                        </h2>

                    </div>

                    <div className="md:col-span-4 md:col-start-8 md:pt-8">

                        <p className="font-sans text-base leading-[1.6] text-kora-ivory/60 md:text-lg">
                            Every session is guided — from the energy
                            in the room to the small adjustments that
                            make the final image land.
                        </p>

                    </div>

                </div>
                {/* BEHIND THE SCENES IMAGES */}
                <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">

                    {/* IMAGE 01*/}
                    <div className="md:col-span-7">
                        <div className="group overflow-hidden">
                            <img
                                src="/images/shot1.jpg"
                                alt="Behind the scenes at Kora Studios"
                                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>
                    </div>

                    {/* IMAGE 02 */}
                    <div className="md:col-span-4 md:col-start-9">
                        <div className="group overflow-hidden">
                            <img
                                src="/images/shot2.jpg"
                                alt="Kora photographer directing a portrait session"
                                className="aspect-[4/5] w-full object-cover 
                                transition-transform duration-700 group-hover:scale-[1.03] mt-10"
                            />
                        </div>
                    </div>

                    {/* IMAGE 03 */}
                    <div className="md:col-span-8 md:col-start-3 md:mt-4">
                        <div className="group overflow-hidden">
                            <img
                                src="/images/shot3.jpg"
                                alt="Kora studio behind the scenes"
                                className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BehindTheImage