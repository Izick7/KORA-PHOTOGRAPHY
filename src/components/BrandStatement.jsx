function BrandStatement() {
    return (
        <section className="bg-kora-sand px-6 py-20 md:px-12 md:py-28 lg:py-32">

            <div className="mx-auto grid max-w-[1680px] gap-10 md:grid-cols-12 md:items-start md:gap-8">
                <div className="md:col-span-6">
                    <h2 className="font-display text-5xl leading-[0.9] tracking-[-0.03em] text-kora-black sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                        Your image is part of
                        <br />
                        your brand.
                    </h2>
                </div>

                <div className="md:col-span-5 md:col-start-8">
                    <p className="max-w-lg font-sans text-base leading-[1.6] text-kora-black/70 md:text-lg">
                        Before anyone reads your bio, opens your deck or listens
                        to your pitch, they have already decided something about
                        you. Kora makes photography designed to carry identity,
                        confidence and professional presence — so the first
                        impression is one you chose.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BrandStatement