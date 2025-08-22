"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import Particles from "../ui/particles";

const CTA = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-10">
            <Container className="py-12 max-w-6xl mx-auto">
                <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
                    <Particles
                        refresh
                        ease={80}
                        quantity={80}
                        color="#d4d4d4"
                        className="hidden lg:block absolute inset-0 z-0"
                    />
                    <Particles
                        refresh
                        ease={80}
                        quantity={35}
                        color="#d4d4d4"
                        className="block lg:hidden absolute inset-0 z-0"
                    />

                    {/* Soft moving glow (reused from hero-style) */}
                    <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-sky-500 to-blue-600 w-2/3 -translate-x-1/2 h-1/3 -translate-y-1/2 inset-0 blur-[6rem] lg:blur-[10rem] animate-image-glow"></div>

                    {/* Rotating conic glow */}
                    <motion.div
                        className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
                        style={{
                            background: 'conic-gradient(from 0deg at 50% 50%, #a855f7 0deg, #3b82f6 180deg, #06b6d4 360deg)',
                        }}
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* Subtle radial vignette */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl lg:rounded-3xl bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12),_transparent_60%)] -z-10" />
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-snug">
                        Try <span className="font-subheading italic">Videotto</span> Today!
                    </h2>
                    <p className="text-sm md:text-lg text-center text-accent-foreground/80 max-w-2xl mx-auto mt-4">
                        Transform your long-form content into viral clips in minutes. Join thousands of creators who are already saving hours of editing time.
                    </p>
                    <Link href="https://www.videotto.com/login" className="mt-8">
                        <Button size="lg">
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
};

export default CTA
