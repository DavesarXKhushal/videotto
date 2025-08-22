import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        How It <span className="font-subheading italic">Works</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Three refined steps from upload to publish—optimized for speed and quality.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative w-full max-w-5xl mx-auto">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#a855f7"
                            gradientTo="#7c3aed"
                            gradientColor="rgba(168,85,247,0.10)"
                            className="p-6 lg:p-8 w-full overflow-hidden text-center"
                        >
                            <div className="absolute bottom-0 right-0 bg-purple-600 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <div className="text-4xl font-bold text-primary mb-4">1</div>
                                <h3 className="text-xl font-semibold">
                                    Upload
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Drag & drop your video or paste a link—no setup required.
                                </p>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.3}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#a855f7"
                            gradientTo="#7c3aed"
                            gradientColor="rgba(168,85,247,0.10)"
                            className="p-6 lg:p-8 w-full overflow-hidden text-center"
                        >
                            <div className="absolute bottom-0 right-0 bg-purple-600 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <div className="text-4xl font-bold text-primary mb-4">2</div>
                                <h3 className="text-xl font-semibold">
                                    Automate
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Our AI finds highlights, adds captions, and frames for every platform.
                                </p>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.4}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#a855f7"
                            gradientTo="#7c3aed"
                            gradientColor="rgba(168,85,247,0.10)"
                            className="p-6 lg:p-8 w-full overflow-hidden text-center"
                        >
                            <div className="absolute bottom-0 right-0 bg-purple-600 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <div className="text-4xl font-bold text-primary mb-4">3</div>
                                <h3 className="text-xl font-semibold">
                                    Share
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Publish instantly or schedule to TikTok, Reels, Shorts and more.
                                </p>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

            </div>
        </div>
    )
};

export default Analysis;
