import { Button } from "@/components/ui/button";
import { MessageSquare, Headphones, Map, TrendingUp } from "lucide-react";

interface Step4CategoriesProps {
  onNext: () => void;
}

const categories = [
  {
    icon: MessageSquare,
    name: "Customer Feedback Strategy",
    description: "Frameworks and tactics to capture, consolidate, prioritize, and close the loop on customer feedback.",
  },
  {
    icon: Headphones,
    name: "Support Operations & CX",
    description:
      "Best practices for scalable support workflows, SLAs, automation, and knowledge management to elevate customer experience.",
  },
  {
    icon: Map,
    name: "Product Roadmaps & Prioritization",
    description:
      "Methods to turn feedback into roadmaps—prioritization frameworks, stakeholder alignment, and communication tips.",
  },
  {
    icon: TrendingUp,
    name: "SaaS Growth & Retention",
    description:
      "How to leverage feedback and support insights to reduce churn, boost adoption, and improve onboarding and activation.",
  },
];

export const Step4Categories = ({ onNext }: Step4CategoriesProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">We created categories for you.</h2>
        <p className="text-muted-foreground">
          We created categories for you. You can update/add them later at "Categories" tab.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.name}
              className="flex items-start gap-4 p-6 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Button onClick={onNext} size="lg" className="w-full h-12">
        Continue
      </Button>
    </div>
  );
};
