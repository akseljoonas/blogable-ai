import { FileText, FolderOpen, BarChart3, Sparkles, MessageSquare, HelpCircle, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  return (
    <aside className="w-72 bg-background border-r border-border flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-yellow-300 text-black px-3 py-1 rounded-md font-semibold text-sm flex items-center gap-1">
            Blog ☕
          </div>
        </div>
        <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
          ← Back to Workspace
        </button>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium">My blog</span>
          <button className="text-muted-foreground hover:text-foreground">
            🌐
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <div className="px-4 py-4">
          <div className="mb-6">
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Page Management
            </h3>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted">
              <FileText className="w-4 h-4" />
              Posts
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted">
              <FolderOpen className="w-4 h-4" />
              Categories
            </button>
          </div>

          <div className="mb-6">
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Insights
            </h3>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted">
              <BarChart3 className="w-4 h-4" />
              Page analytics
            </button>
          </div>

          <div className="mb-6">
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              AI Tools
            </h3>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted">
              <Sparkles className="w-4 h-4" />
              AI Content plan
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted">
              <MessageSquare className="w-4 h-4" />
              Forum opportunities
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted">
              <HelpCircle className="w-4 h-4" />
              People also ask
            </button>
          </div>

          <div>
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Page Settings
            </h3>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted">
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </div>
        </div>
      </nav>

      {/* Footer Button */}
      <div className="p-4 border-t border-border">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>
    </aside>
  );
};
