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
  const [competitor1, setCompetitor1] = useState("");
  const [competitor2, setCompetitor2] = useState("");
  const [competitor3, setCompetitor3] = useState("");
  const [toneBlogs, setToneBlogs] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to editor with the keyword as state
    navigate("/editor", {
      state: {
        keyword: keywords,
        competitors: [competitor1, competitor2, competitor3].filter(Boolean),
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
              placeholder="e.g., best SEO practices 2024"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Main keywords you want to rank for
            </p>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Competitor URLs
            </Label>
            <Input
              value={competitor1}
              onChange={(e) => setCompetitor1(e.target.value)}
              placeholder="https://competitor1.com/blog-post"
            />
            <Input
              value={competitor2}
              onChange={(e) => setCompetitor2(e.target.value)}
              placeholder="https://competitor2.com/blog-post"
            />
            <Input
              value={competitor3}
              onChange={(e) => setCompetitor3(e.target.value)}
              placeholder="https://competitor3.com/blog-post"
            />
            <p className="text-xs text-muted-foreground">
              Add up to 3 top-ranking competitor blog URLs for analysis
            </p>
          </div>

          <div>
            <Label htmlFor="tone" className="text-sm font-medium mb-2 block">
              Recent Blogs for Tone of Voice
            </Label>
            <Textarea
              id="tone"
              value={toneBlogs}
              onChange={(e) => setToneBlogs(e.target.value)}
              placeholder="Paste URLs or content from your recent blogs..."
              className="min-h-32"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Reference material to match your brand's tone of voice
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
