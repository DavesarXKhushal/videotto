"use client";

import { cn } from "@/lib";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
    className?: string;
    children: React.ReactNode;
    delay?: number;
    reverse?: boolean;
    simple?: boolean;
}

const Container = ({ children, className, delay = 0.2, reverse, simple }: Props) => {
    // Ensure content is visible before hydration to avoid blank sections
    const [isHydrated, setIsHydrated] = useState(false);
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return (
        <motion.div
            className={cn("w-full h-full", className)}
            initial={isHydrated ? { opacity: 0, y: reverse ? -20 : 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: simple ? 0.2 : 0.4, type: simple ? "keyframes" : "spring", stiffness: simple && 100 }}
        >
            {children}
        </motion.div>
    )
};

export default Container
