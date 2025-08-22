import { Upload, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";

const UploadSection = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mb-6">
                        Start Creating <span className="font-subheading italic">Viral Clips</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-4 mb-12">
                        Upload any link—Videotto detects the highlights and auto‑edits into viral‑ready clips for every platform.
                    </p>
                </div>
            </Container>

            <Container delay={0.1}>
                <div className="relative max-w-2xl mx-auto w-full">
                    {/* Enhanced glow background */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-40 rounded-full blur-[6rem] bg-gradient-to-r from-purple-600/30 via-fuchsia-500/20 to-purple-700/30"></div>
                        <div className="absolute left-1/4 -top-6 w-60 h-24 rounded-full blur-[5rem] bg-fuchsia-500/20"></div>
                        <div className="absolute right-1/4 -bottom-6 w-60 h-24 rounded-full blur-[5rem] bg-purple-400/20"></div>
                    </div>
                    
                    {/* Upload component */}
                    <div className="relative bg-card border border-border/50 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between gap-4">
                            {/* Left side - Drop area */}
                            <div className="flex items-center gap-3 flex-1">
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50 border border-border/50">
                                    <LinkIcon className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <div className="flex-1">
                                    <input 
                                        type="text" 
                                        placeholder="Upload a link" 
                                        className="w-full bg-transparent text-muted-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:text-foreground transition-colors"
                                    />
                                </div>
                            </div>
                            
                            {/* Right side - Upload button */}
                            <Link href="https://www.videotto.com/login">
                                <Button 
                                    size="lg" 
                                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    <Upload className="w-4 h-4 mr-2" />
                                    Upload
                                </Button>
                            </Link>
                        </div>
                        
                        {/* Drag and drop overlay */}
                        <div className="absolute inset-0 border-2 border-dashed border-purple-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="flex items-center justify-center h-full">
                                <div className="text-center">
                                    <Upload className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                                    <p className="text-sm text-muted-foreground">Drop your video or link here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Additional info */}
            <Container delay={0.2}>
                <div className="flex items-center justify-center mt-8 gap-x-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Supports MP4, MOV, AVI
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Up to 2GB files
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Twitch & YouTube links
                    </span>
                </div>
            </Container>
        </div>
    );
};

export default UploadSection;
