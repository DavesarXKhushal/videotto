export type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number; // monthly plan per-month price
    annuallyPrice: number; // per-month price when billed yearly
    badge?: string;
    priceText?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "starter",
        title: "Starter",
        desc: "Perfect for creators just getting started.",
        monthlyPrice: 16,
        annuallyPrice: 13,
        buttonText: "Sign Up",
        features: [
            "80 Minutes",
            "AI Clipping",
            "Multiple Languages",
            "Remove Watermark",
            "Twitch, Dropbox Uploads"
        ],
        link: "#"
    },
    {
        id: "pro",
        title: "Pro",
        desc: "Everything in Starter, plus",
        monthlyPrice: 20,
        annuallyPrice: 16,
        badge: "Most Popular",
        buttonText: "Sign Up",
        features: [
            "200 Minutes",
            "Auto Posting to Socials",
            "Clip Editing",
            "Advanced Clipping"
        ],
        link: "#"
    },
    {
        id: "business",
        title: "Business",
        desc: "Everything in Pro, plus",
        monthlyPrice: 0,
        annuallyPrice: 0,
        priceText: "Let's Talk",
        buttonText: "Contact us",
        features: [
            "Priority support channel",
            "Custom API Integrations",
            "Enterprise Security",
            "Enterprise Video Agents",
            "Support for Scaling"
        ],
        link: "#"
    },
];

export const PLANS_FAQ = [
    {
        id: 1,
        question: "How does the AI editing work?",
        answer: "Our AI analyzes your video content to identify the most engaging moments, automatically creates clips, and applies viral-optimized editing techniques for maximum social media impact."
    },
    {
        id: 2,
        question: "What video formats are supported?",
        answer: "We support all major video formats including MP4, MOV, AVI, and more. Upload any video and our AI will handle the rest."
    },
    {
        id: 3,
        question: "Is there a discount for annual billing?",
        answer: "Yes, you can save up to 20% by choosing annual billing over monthly billing for our Pro plan."
    },
    {
        id: 4,
        question: "Can I schedule posts to multiple platforms?",
        answer: "Yes! Our Pro plan includes social media scheduling that works with TikTok, Instagram, YouTube, and other major platforms."
    },
    {
        id: 5,
        question: "How many clips can I create from one video?",
        answer: "Free trial users get 20 clips from 1 video, while Pro users can create unlimited clips from any video."
    },
];
