import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";

export const NewContentDialog = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [competitorUrls, setCompetitorUrls] = useState<string[]>([]);
  const [competitorInput, setCompetitorInput] = useState("");
  const [toneBlogs, setToneBlogs] = useState<string[]>([]);
  const [toneInput, setToneInput] = useState("");

  const handleAddCompetitor = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && competitorInput.trim()) {
      e.preventDefault();
      setCompetitorUrls([...competitorUrls, competitorInput.trim()]);
      setCompetitorInput("");
    }
  };

  const handleRemoveCompetitor = (index: number) => {
    setCompetitorUrls(competitorUrls.filter((_, i) => i !== index));
  };

  const handleAddTone = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && toneInput.trim()) {
      e.preventDefault();
      setToneBlogs([...toneBlogs, toneInput.trim()]);
      setToneInput("");
    }
  };

  const handleRemoveTone = (index: number) => {
    setToneBlogs(toneBlogs.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to editor with the keyword as state
    navigate("/editor", {
      state: {
        keyword: keywords,
        competitors: competitorUrls,
        toneOfVoice: toneBlogs,
      },
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          New content
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div>
            <Label htmlFor="keywords" className="text-sm font-medium mb-2 block">
              Target Keyword(s) <span className="text-destructive">*</span>
            </Label>
            <Input
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="e.g., best SEO practices, SEO tips, content marketing"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              One or multiple keywords separated by commas
            </p>
          </div>

          <div>
            <Label htmlFor="competitors" className="text-sm font-medium mb-2 block">
              Competitor URLs
            </Label>
            <Input
              id="competitors"
              value={competitorInput}
              onChange={(e) => setCompetitorInput(e.target.value)}
              onKeyDown={handleAddCompetitor}
              placeholder="https://competitor.com/blog-post (press Enter to add)"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Add top-ranking competitor blog URLs
            </p>
            {competitorUrls.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {competitorUrls.map((url, index) => (
                  <Badge key={index} variant="secondary" className="gap-1 pr-1">
                    <span className="max-w-[300px] truncate">{url}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveCompetitor(index)}
                      className="ml-1 hover:bg-muted rounded-sm p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="tone" className="text-sm font-medium mb-2 block">
              Recent Blog URLs for Tone of Voice
            </Label>
            <Input
              id="tone"
              value={toneInput}
              onChange={(e) => setToneInput(e.target.value)}
              onKeyDown={handleAddTone}
              placeholder="https://yourblog.com/recent-post (press Enter to add)"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Add URLs from your recent blogs to match your brand's tone of voice
            </p>
            {toneBlogs.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {toneBlogs.map((url, index) => (
                  <Badge key={index} variant="secondary" className="gap-1 pr-1">
                    <span className="max-w-[300px] truncate">{url}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTone(index)}
                      className="ml-1 hover:bg-muted rounded-sm p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Create & Open Editor</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
