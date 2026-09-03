function Process() {
    return (
        <section className="bg-[#f5f2eb] px-6 py-20 text-[#1c1b19] md:px-12 md:py-32">

            <div className="mx-auto max-w-[1680px]">

                {/* HEADER */}
                <div className="mb-16 md:mb-24">
                    <span className="font-sans text-[10px] font-medium leading-none tracking-[0.2em] text-[#b3907c] uppercase">
                        PROCESS
                    </span>
                    <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.03em] text-[#1c1b19] sm:text-7xl lg:text-[7rem]">
                        How we create.
                    </h2>
                </div>


                {/* PROCESS */}
                <div className="grid divide-y divide-[#1c1b19]/15 border-t border-[#1c1b19]/15 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">

                    {/* STEP 01 */}
                    <div className="flex flex-col gap-4 py-8 sm:px-6 sm:py-10 first:pl-0 last:pr-0">

                        <span className="font-display text-5xl font-medium tracking-tight text-[#b3907c] md:text-6xl">
                            01
                        </span>

                        <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[#1c1b19]">
                            Discover
                        </h3>

                        <p className="font-sans text-sm leading-[1.6] text-[#1c1b19]/70 max-w-sm">
                            We understand your goals and the image you want to communicate.
                        </p>

                    </div>


                    {/* STEP 02 */}
                    <div className="flex flex-col gap-4 py-8 sm:px-6 sm:py-10 first:pl-0 last:pr-0">

                        <span className="font-display text-5xl font-medium tracking-tight text-[#b3907c] md:text-6xl">
                            02
                        </span>

                        <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[#1c1b19]">
                            Create
                        </h3>

                        <p className="font-sans text-sm leading-[1.6] text-[#1c1b19]/70 max-w-sm">
                            We develop the creative direction, setting and visual approach.
                        </p>

                    </div>


                    {/* STEP 03 */}
                    <div className="flex flex-col gap-4 py-8 sm:px-6 sm:py-10 first:pl-0 last:pr-0">

                        <span className="font-display text-5xl font-medium tracking-tight text-[#b3907c] md:text-6xl">
                            03
                        </span>

                        <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[#1c1b19]">
                            Shoot
                        </h3>

                        <p className="font-sans text-sm leading-[1.6] text-[#1c1b19]/70 max-w-sm">
                            A guided photography session designed entirely around you.
                        </p>

                    </div>


                    {/* STEP 04 */}
                    <div className="flex flex-col gap-4 py-8 sm:px-6 sm:py-10 first:pl-0 last:pr-0">

                        <span className="font-display text-5xl font-medium tracking-tight text-[#b3907c] md:text-6xl">
                            04
                        </span>

                        <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[#1c1b19]">
                            Deliver
                        </h3>

                        <p className="font-sans text-sm leading-[1.6] text-[#1c1b19]/70 max-w-sm">
                            You receive professionally edited final images, ready to use.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Process;
