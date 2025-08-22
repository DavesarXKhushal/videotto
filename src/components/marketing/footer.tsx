import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-10 pb-6 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-20">
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[220px]">
                        <div className="flex items-center gap-2">
                            <Icons.icon className="w-auto h-5" />
                            <span className="text-base md:text-lg font-medium text-foreground">Videotto</span>
                        </div>
                        <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                            <li><Link href="https://www.videotto.com/login" className="link hover:text-foreground transition-all duration-300">Sign Up</Link></li>
                            <li><Link href="https://www.videotto.com/affiliate" className="link hover:text-foreground transition-all duration-300">Affiliate</Link></li>
                            <li><Link href="https://www.videotto.com/careers" className="link hover:text-foreground transition-all duration-300">Careers</Link></li>
                        </ul>
                    </div>
                </Container>

                <Container delay={0.1} className="h-auto">
                    <h3 className="text-base font-medium text-foreground">Quick Links</h3>
                    <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                        <li><Link href="https://www.videotto.com/contactus" className="link hover:text-foreground transition-all duration-300">Contact</Link></li>
                        <li><Link href="https://www.videotto.com/pricing" className="link hover:text-foreground transition-all duration-300">Terms of Service</Link></li>
                        <li><Link href="https://www.videotto.com/pricing" className="link hover:text-foreground transition-all duration-300">Privacy Policy</Link></li>
                    </ul>
                </Container>

                <Container delay={0.2} className="h-auto">
                    <h3 className="text-base font-medium text-foreground">Connect</h3>
                    <p className="mt-4 text-sm text-muted-foreground">Email: <Link href="mailto:hi@videotto.com" className="underline hover:text-foreground">hi@videotto.com</Link></p>
                </Container>
            </div>

            <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
                <div className="mt-8 md:flex md:items-center justify-center footer w-full">
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Videotto. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    )
};

export default Footer
