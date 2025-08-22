import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import CTA from "@/components/marketing/cta";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import LanguageSupport from "@/components/marketing/lang-support";
import Pricing from "@/components/marketing/pricing";
import UploadSection from "@/components/marketing/upload-section";

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            <UploadSection />
            <Analysis />
            <Integration />
            <Pricing />
            <LanguageSupport />
            <CTA />
        </Wrapper>
    )
};

export default HomePage
