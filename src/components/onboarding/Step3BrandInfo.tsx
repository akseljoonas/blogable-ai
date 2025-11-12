import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail } from "lucide-react";

interface BrandInfo {
  brandName: string;
  businessDescription: string;
  targetAudience: string;
  benefits: string;
  location: string;
  language: string;
  toneOfVoice: string;
  industry: string;
}

interface Step3BrandInfoProps {
  onNext: (data: BrandInfo) => void;
}

export const Step3BrandInfo = ({ onNext }: Step3BrandInfoProps) => {
  const [formData, setFormData] = useState<BrandInfo>({
    brandName: "Stockanalysis",
    businessDescription: "Stockanalysis is a unified, data-driven platform that helps investors discover, analyze, and invest with confidence. The platform consolidates comprehensive financial information—from historical performance data to forward-looking analyst estimates—so users don't have to search across multiple sources. With a toolkit centered on key ratios, growth metrics, and valuation tools, it enables rigorous fundamental analysis and clear comparisons across companies. Its powerful analytics surface insights that support smarter, evidence-based decision making. By bringing all essential data and analysis capabilities into one place, Stockanalysis streamlines research and influences the way investors interpret and act on market data.",
    targetAudience: "Self-directed retail investors, active traders, finance-savvy professionals, investment club members, and students or analysts seeking a centralized hub for financial data and fundamental equity research.",
    benefits: "- All financial data in one place: consolidate historical performance, estimates, and fundamentals\n- Analyze with confidence: use key ratios, growth metrics, and valuation tools\n- Data-driven decisions: rely on extensive datasets and powerful analytics\n- Save time: find critical information quickly without hopping between multiple sources",
    location: "United States",
    language: "English",
    toneOfVoice: "Professional, authoritative, data-driven, confidence-building, concise",
    industry: "Financial data and investment research (fintech)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const updateField = (field: keyof BrandInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold">Brand Info</h2>
        </div>
        <p className="text-muted-foreground">
          Information about Your business used to generate relevant articles...
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="brand-name">
            Brand Name
            <span className="text-xs text-muted-foreground ml-2">
              Just for you! This name won't appear on the actual newsletter!
            </span>
          </Label>
          <Input
            id="brand-name"
            value={formData.brandName}
            onChange={(e) => updateField("brandName", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="business-description">
            Business Description
            <span className="text-xs text-muted-foreground ml-2">Description of Business</span>
          </Label>
          <Textarea
            id="business-description"
            value={formData.businessDescription}
            onChange={(e) => updateField("businessDescription", e.target.value)}
            rows={6}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="target-audience">
            Target Audience
            <span className="text-xs text-muted-foreground ml-2">Target audience</span>
          </Label>
          <Textarea
            id="target-audience"
            value={formData.targetAudience}
            onChange={(e) => updateField("targetAudience", e.target.value)}
            rows={3}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="benefits">
            Benefits
            <span className="text-xs text-muted-foreground ml-2">Unique selling points</span>
          </Label>
          <Textarea
            id="benefits"
            value={formData.benefits}
            onChange={(e) => updateField("benefits", e.target.value)}
            rows={4}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">
            Location of Business
            <span className="text-xs text-muted-foreground ml-2">
              Location of business - this is used for local businesses. If you have global product, use United States
            </span>
          </Label>
          <Select value={formData.location} onValueChange={(value) => updateField("location", value)}>
            <SelectTrigger id="location">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="United States">United States</SelectItem>
              <SelectItem value="United Kingdom">United Kingdom</SelectItem>
              <SelectItem value="Canada">Canada</SelectItem>
              <SelectItem value="Australia">Australia</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="France">France</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="language">
            Language
            <span className="text-xs text-muted-foreground ml-2">Language of the blog posts</span>
          </Label>
          <Select value={formData.language} onValueChange={(value) => updateField("language", value)}>
            <SelectTrigger id="language">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Spanish">Spanish</SelectItem>
              <SelectItem value="French">French</SelectItem>
              <SelectItem value="German">German</SelectItem>
              <SelectItem value="Italian">Italian</SelectItem>
              <SelectItem value="Portuguese">Portuguese</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tone">
            Tone of Voice
            <span className="text-xs text-muted-foreground ml-2">Tone of voice</span>
          </Label>
          <Input
            id="tone"
            value={formData.toneOfVoice}
            onChange={(e) => updateField("toneOfVoice", e.target.value)}
            placeholder="e.g., Professional, friendly, authoritative"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="industry">
            Industry
            <span className="text-xs text-muted-foreground ml-2">Tone of voice</span>
          </Label>
          <Input
            id="industry"
            value={formData.industry}
            onChange={(e) => updateField("industry", e.target.value)}
            placeholder="e.g., SaaS, E-commerce, Healthcare"
            required
          />
        </div>

        <Button type="submit" size="lg" className="w-full h-12">
          Continue
        </Button>
      </form>
    </div>
  );
};
