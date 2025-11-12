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
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

export const NewContentDialog = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [competitorUrls, setCompetitorUrls] = useState("");
  const [toneBlogs, setToneBlogs] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to editor with the keyword as state
    navigate("/editor", {
      state: {
        keyword: keywords,
        competitors: competitorUrls.split('\n').filter(url => url.trim()),
        toneOfVoice: toneBlogs.split('\n').filter(url => url.trim()),
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
            <Textarea
              id="competitors"
              value={competitorUrls}
              onChange={(e) => setCompetitorUrls(e.target.value)}
              placeholder="https://competitor1.com/blog-post&#10;https://competitor2.com/blog-post&#10;https://competitor3.com/blog-post"
              className="min-h-32"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Add top-ranking competitor blog URLs (one per line)
            </p>
          </div>

          <div>
            <Label htmlFor="tone" className="text-sm font-medium mb-2 block">
              Recent Blog URLs for Tone of Voice
            </Label>
            <Textarea
              id="tone"
              value={toneBlogs}
              onChange={(e) => setToneBlogs(e.target.value)}
              placeholder="https://yourblog.com/recent-post-1&#10;https://yourblog.com/recent-post-2&#10;https://yourblog.com/recent-post-3"
              className="min-h-32"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Add URLs from your recent blogs to match your brand's tone of voice (one per line)
            </p>
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
