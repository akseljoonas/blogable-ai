import { Sidebar } from "@/components/Sidebar";
import { OnboardingFlow } from "@/components/OnboardingFlow";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <OnboardingFlow />
      </main>
    </div>
  );
};

export default Index;
