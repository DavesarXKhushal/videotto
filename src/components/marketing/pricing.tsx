"use client";

import { PLANS } from "@/constants";
import { PLAN } from "@/constants/plans";
import { cn } from "@/lib";
import NumberFlow from "@number-flow/react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import Container from "../global/container";
import { Button } from "../ui/button";

type Plan = "monthly" | "annually";

const Pricing = () => {

    const [billPlan, setBillPlan] = useState<Plan>("monthly");

    const handleSwitch = () => {
        setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
    };

    return (
        <div className="relative flex flex-col items-center justify-center max-w-6xl py-20 mx-auto">

            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                            Find the right plan that suits <br className="hidden lg:block" /> <span className="font-subheading italic">your needs</span>
                        </h2>
                        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                            Create viral-ready clips from your long videos with Videotto. Edit, caption, and repurpose content in minutes—no pro editing skills needed.
                        </p>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="flex flex-col items-center justify-center gap-2 mt-6">
                        <div className="flex items-center justify-center gap-4">
                            <span className={cn("text-base font-medium transition-colors", billPlan === "monthly" ? "text-foreground" : "text-muted-foreground")}>Monthly</span>
                        <button onClick={handleSwitch} className="relative rounded-full focus:outline-none">
                            <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-purple-600"></div>
                            <div
                                className={cn(
                                    "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-500 ease-in-out top-1 left-1 rounded-full bg-white",
                                    billPlan === "annually" ? "translate-x-6" : "translate-x-0"
                                )}
                            />
                        </button>
                            <span className={cn("text-base font-medium transition-colors", billPlan === "annually" ? "text-foreground" : "text-muted-foreground")}>Annually</span>
                        </div>
                        {billPlan === "annually" && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-600/10 text-purple-400 border border-purple-600/30">Save up to 20%</span>
                        )}
                    </div>
                </Container>
            </div>

            <div className="grid w-full grid-cols-1 lg:grid-cols-3 pt-8 lg:pt-12 gap-6 max-w-6xl mx-auto">
                {PLANS.map((plan, idx) => (
                    <Container key={idx} delay={0.1 * idx + 0.2} className="h-full">
                        <PlanCard key={plan.id} plan={plan} billPlan={billPlan} />
                    </Container>
                ))}
            </div>
        </div>
    );
};

const PlanCard = ({ plan, billPlan }: { plan: PLAN, billPlan: Plan }) => {
    const showPriceText = typeof plan.priceText === "string" && plan.priceText.length > 0;
    const isBusiness = plan.id === "business";

    return (
        <div className={cn(
            "flex flex-col relative rounded-2xl lg:rounded-3xl transition-all items-start w-full border border-purple-500/20 bg-purple-500/5 overflow-hidden h-full",
            isBusiness && "border-purple-500/30 bg-purple-500/8"
        )}>
            <div className="p-4 md:p-8 flex rounded-t-2xl lg:rounded-t-3xl flex-col items-start w-full relative flex-none min-h-[220px]">
                <h2 className="font-medium text-xl text-foreground pt-5">
                    {plan.title}
                </h2>
                <h3 className="mt-3 text-3xl font-medium md:text-5xl">
                    {showPriceText ? (
                        <span>{plan.priceText}</span>
                    ) : (
                        <NumberFlow
                            value={billPlan === "monthly" ? plan.monthlyPrice : plan.annuallyPrice}
                            suffix={"/mo"}
                            format={{
                                currency: "USD",
                                style: "currency",
                                currencySign: "standard",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                                currencyDisplay: "narrowSymbol"
                            }}
                        />
                    )}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                    {plan.desc}
                </p>
            </div>
            
            {/* Features section - positioned above button, fixed min height for alignment */}
            <div className="flex flex-col items-start w-full px-4 md:px-8 flex-none min-h-[220px]">
                <span className="text-base text-left mb-2">
                    Includes: 
                </span>
                {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-start gap-2 mb-2">
                        <div className="flex items-center justify-center">
                            <CheckIcon className="size-5" />
                        </div>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
            
            {/* Button section - aligned across cards */}
            <div className="flex flex-col items-start w-full px-4 py-2 md:px-8">
                <Link href="https://www.videotto.com/login" className="w-full">
                    <Button size="lg" variant={isBusiness ? "blue" : "white"} className="w-full">
                        Sign Up
                    </Button>
                </Link>
                <div className="h-8 overflow-hidden w-full mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={billPlan}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="text-sm text-center text-muted-foreground mt-3 mx-auto block"
                        >
                            {billPlan === "monthly" ? (
                                "Billed monthly"
                            ) : (
                                "Billed in one annual payment"
                            )}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
