function Footer() {
    return (
        <footer className="bg-kora-black px-6 pb-12 pt-24 text-kora-ivory md:px-12 md:pb-16 md:pt-32 border-t border-kora-border/10">

            <div className="mx-auto max-w-[1680px]">
                <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-4 flex flex-col gap-6">
                        <h2 className="font-sans text-2xl font-medium tracking-[0.2em] text-kora-ivory uppercase">
                            KORA
                        </h2>
                        <p className="font-sans text-sm leading-[1.6] text-kora-muted max-w-[280px]">
                            Intentional portraits and personal-brand imagery for people building their visibility.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8 sm:col-span-1 md:col-span-7 md:col-start-6">
                        <div className="flex flex-col gap-4">
                            <span className="font-sans text-[10px] font-medium tracking-[0.18em] text-kora-muted uppercase">
                                STUDIO
                            </span>
                            <ul className="flex flex-col gap-3 font-sans text-sm text-kora-ivory/80">
                                <li><a href="#" className="hover:text-kora-ivory transition-colors">Portraits</a></li>
                                <li><a href="#" className="hover:text-kora-ivory transition-colors">Personal Branding</a></li>
                                <li><a href="#" className="hover:text-kora-ivory transition-colors">Creative Direction</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="font-sans text-[10px] font-medium tracking-[0.18em] text-kora-muted uppercase">
                                PAGES
                            </span>
                            <ul className="flex flex-col gap-3 font-sans text-sm text-kora-ivory/80">
                                <li><a href="#" className="hover:text-kora-ivory transition-colors">Work</a></li>
                                <li><a href="#" className="hover:text-kora-ivory transition-colors">Services</a></li>
                                <li><a href="#" className="hover:text-kora-ivory transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-kora-ivory transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="font-sans text-[10px] font-medium tracking-[0.18em] text-kora-muted uppercase">
                                REACH US
                            </span>
                            <ul className="flex flex-col gap-3 font-sans text-sm text-kora-ivory/80">
                                <li><a href="#" className="hover:text-kora-ivory transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-kora-ivory transition-colors">WhatsApp</a></li>
                                <li><a href="#" className="hover:text-kora-ivory transition-colors">Email</a></li>
                            </ul>
                            <span className="mt-4 block font-sans text-xs text-kora-muted font-light">
                                Lagos, Nigeria
                            </span>
                        </div>

                    </div>

                </div>

                <div className="mt-24 flex flex-col justify-between items-center gap-4 border-t border-kora-border/10 pt-8 font-sans text-[10px] font-medium tracking-[0.16em] text-kora-muted uppercase md:mt-32 md:flex-row">

                    <span>
                        © 2026 KORA STUDIOS
                    </span>

                    <span>
                        BUILT TO BE SEEN.
                    </span>

                </div>

            </div>

        </footer>
    );
}
export default Footer;
