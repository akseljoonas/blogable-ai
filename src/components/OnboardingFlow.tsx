import { useState, useEffect } from "react";
import { StepIndicator } from "./onboarding/StepIndicator";
import { Step1WebsiteUrl } from "./onboarding/Step1WebsiteUrl";
import { Step2Analyzing } from "./onboarding/Step2Analyzing";
import { Step3BrandInfo } from "./onboarding/Step3BrandInfo";
import { Step4Categories } from "./onboarding/Step4Categories";
import { Step5AuthorInfo } from "./onboarding/Step5AuthorInfo";
import { useToast } from "@/hooks/use-toast";

const TOTAL_STEPS = 8; // Total steps shown in indicator (some are future steps)

export const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const { toast } = useToast();

  const handleStep1Complete = (url: string) => {
    setWebsiteUrl(url);
    setCurrentStep(2);
    
    // Simulate analysis
    setTimeout(() => {
      setCurrentStep(3);
    }, 3000);
  };

  const handleStep3Complete = () => {
    setCurrentStep(4);
  };

  const handleStep4Complete = () => {
    setCurrentStep(5);
  };

  const handleStep5Complete = () => {
    toast({
      title: "Setup Complete!",
      description: "Your blog is ready to start creating content.",
    });
    // In a real app, this would navigate to the main dashboard
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">
            AI-Powered Blog Setup ✨
          </h1>
          <p className="text-xl text-muted-foreground">
            Let our AI analyze your business and create personalized content suggestions
          </p>
        </div>

        <StepIndicator totalSteps={TOTAL_STEPS} currentStep={currentStep} />

        <div className="mt-12">
          {currentStep === 1 && <Step1WebsiteUrl onNext={handleStep1Complete} />}
          {currentStep === 2 && <Step2Analyzing />}
          {currentStep === 3 && <Step3BrandInfo onNext={handleStep3Complete} />}
          {currentStep === 4 && <Step4Categories onNext={handleStep4Complete} />}
          {currentStep === 5 && <Step5AuthorInfo onComplete={handleStep5Complete} />}
        </div>
      </div>
    </div>
  );
};
