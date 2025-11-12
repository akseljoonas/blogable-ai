import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  LayoutDashboard, 
  Undo2, 
  Redo2, 
  RotateCcw, 
  Send, 
  ChevronDown,
  Upload 
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostEditor = () => {
  const [activeTab, setActiveTab] = useState("post");
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-background">
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-border bg-background px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium px-3 py-1 rounded bg-muted">Draft</span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                Synced
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Undo2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Redo2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <div className="text-sm text-muted-foreground ml-2">
              <div>0 words</div>
              <div>0 characters</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Preview
              <Send className="h-4 w-4 ml-2" />
            </Button>
            <Button size="sm">
              Publish post
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Editor */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-4xl mx-auto">
              <textarea
                placeholder="My new post"
                className="w-full text-5xl font-bold border-none outline-none resize-none bg-transparent mb-8"
                rows={2}
                defaultValue="My new post"
              />
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">Click here to start writing ...</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Settings Panel */}
          <div className="w-96 border-l border-border bg-background overflow-y-auto">
            <div className="p-4">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="post">Post</TabsTrigger>
                  <TabsTrigger value="seo">SEO</TabsTrigger>
                  <TabsTrigger value="toc">ToC</TabsTrigger>
                </TabsList>

                {/* Post Settings Tab */}
                <TabsContent value="post" className="space-y-6 mt-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Post settings</h3>
                    
                    <div className="space-y-4">
                      {/* Cover Image */}
                      <div>
                        <Label className="text-sm font-medium mb-2 block">Cover image</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm font-medium text-foreground">Drag an image</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Once you drop an image it will be automatically uploaded
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Label className="text-sm font-medium">Description</Label>
                          <span className="text-xs text-destructive">Add description to publish/preview</span>
                        </div>
                        <Textarea 
                          placeholder="Enter description of post..."
                          className="min-h-24"
                        />
                      </div>

                      {/* Category */}
                      <div>
                        <Label className="text-sm font-medium mb-2 block">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="seo">SEO</SelectItem>
                            <SelectItem value="content">Content Marketing</SelectItem>
                            <SelectItem value="technical">Technical SEO</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Authors */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Label className="text-sm font-medium">Authors</Label>
                          <span className="text-xs text-destructive">Add an author to publish/preview</span>
                        </div>
                        <Input placeholder="Select author(s)" />
                      </div>

                      {/* Reviewers */}
                      <div>
                        <Label className="text-sm font-medium mb-2 block">Reviewers</Label>
                        <Input placeholder="Select reviewed by author(s)" />
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <Button className="w-full" size="lg">
                    Save settings
                  </Button>
                  
                  <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-md">
                    <span className="text-amber-600 dark:text-amber-400 text-sm">⚠️</span>
                    <p className="text-xs text-amber-800 dark:text-amber-300">
                      These settings will be published immediately and automatically override your current post configuration.
                    </p>
                  </div>
                </TabsContent>

                {/* SEO Settings Tab */}
                <TabsContent value="seo" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">SEO title</Label>
                      <Input defaultValue="My new post" />
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">SEO description</Label>
                      <Textarea 
                        placeholder="Enter SEO description"
                        className="min-h-24"
                      />
                    </div>

                    <div className="pt-4">
                      <h4 className="font-semibold mb-4">Open Graph</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium mb-2 block">OG title</Label>
                          <Input defaultValue="My new post" />
                        </div>

                        <div>
                          <Label className="text-sm font-medium mb-2 block">OG description</Label>
                          <Textarea 
                            placeholder="Enter OG description"
                            className="min-h-24"
                          />
                        </div>

                        <div>
                          <Label className="text-sm font-medium mb-2 block">OG image</Label>
                          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-sm font-medium text-foreground">Drag an image</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Once you drop an image it will be automatically uploaded
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Save settings
                  </Button>
                  
                  <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-md">
                    <span className="text-amber-600 dark:text-amber-400 text-sm">⚠️</span>
                    <p className="text-xs text-amber-800 dark:text-amber-300">
                      These settings will be published immediately and automatically override your current post configuration.
                    </p>
                  </div>
                </TabsContent>

                {/* ToC Tab */}
                <TabsContent value="toc" className="space-y-4 mt-6">
                  <p className="text-sm text-muted-foreground">Table of Contents will be generated automatically based on your headings.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostEditor;
