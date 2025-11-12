import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Step1WebsiteUrlProps {
  onNext: (url: string) => void;
}

export const Step1WebsiteUrl = ({ onNext }: Step1WebsiteUrlProps) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      onNext(url);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Enter Your Website Domain</h2>
        <p className="text-muted-foreground text-lg">
          We'll analyze your website to understand your business and create personalized content
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="website-url" className="text-base">
            Website Domain
          </Label>
          <Input
            id="website-url"
            type="url"
            placeholder="https://blogbowl.io"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-12 text-base"
            required
          />
        </div>

        <Button type="submit" size="lg" className="w-full h-12 text-base">
          Analyze website
        </Button>
      </form>
    </div>
  );
};
