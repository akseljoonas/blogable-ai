import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Upload } from "lucide-react";

interface AuthorInfo {
  firstName: string;
  lastName: string;
  position: string;
  description: string;
  avatar: File | null;
}

interface Step5AuthorInfoProps {
  onComplete: (data: AuthorInfo) => void;
}

export const Step5AuthorInfo = ({ onComplete }: Step5AuthorInfoProps) => {
  const [formData, setFormData] = useState<AuthorInfo>({
    firstName: "John",
    lastName: "Doe",
    position: "CEO",
    description: "",
    avatar: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const updateField = <K extends keyof AuthorInfo>(field: K, value: AuthorInfo[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold">Information about author</h2>
        </div>
        <p className="text-muted-foreground">
          Fill author information. This author will write AI articles. You can later change author in settings.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <Input
            id="first-name"
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            placeholder="John"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input
            id="last-name"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            placeholder="Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">Position</Label>
          <Input
            id="position"
            value={formData.position}
            onChange={(e) => updateField("position", e.target.value)}
            placeholder="CEO"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Enter information about author's experience..."
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="avatar">Avatar</Label>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 border-2 border-dashed border-border rounded-lg flex items-center justify-center bg-muted">
              <Upload className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <Input
                id="avatar"
                type="file"
                accept="image/*"
                onChange={(e) => updateField("avatar", e.target.files?.[0] || null)}
                className="cursor-pointer"
              />
              <p className="text-xs text-muted-foreground mt-2">Recommended format: square</p>
            </div>
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full h-12">
          Continue
        </Button>
      </form>
    </div>
  );
};
