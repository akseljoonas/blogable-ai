import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Plus, MoreVertical, Trash2, FolderOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "happyfox pricing",
    category: "competitors",
    author: { name: "John Doe", avatar: "", initials: "JD" },
    status: "draft",
    date: "19 hours ago",
  },
  {
    id: 2,
    title: "olark alternatives",
    category: "competitors",
    author: { name: "Mike Smith", avatar: "", initials: "M" },
    status: "published",
    date: "3 days ago",
  },
  {
    id: 3,
    title: "voiceflow alternatives",
    category: "competitors",
    author: { name: "John Doe", avatar: "", initials: "JD" },
    status: "published",
    date: "7 days ago",
  },
  {
    id: 4,
    title: "voiceflow pricing",
    category: "competitors",
    author: { name: "John Doe", avatar: "", initials: "JD" },
    status: "published",
    date: "7 days ago",
  },
  {
    id: 5,
    title: "helpcrunch pricing",
    category: "competitors",
    author: { name: "John Doe", avatar: "", initials: "JD" },
    status: "draft",
    date: "7 days ago",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Content Editor</h1>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <FolderOpen className="h-4 w-4" />
            </Button>
            <Button size="sm" onClick={() => navigate('/editor')}>
              <Plus className="h-4 w-4 mr-2" />
              New Content
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-8 py-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Select defaultValue="recent">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recently created</SelectItem>
              <SelectItem value="oldest">Oldest first</SelectItem>
              <SelectItem value="updated">Recently updated</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Tags" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All tags</SelectItem>
              <SelectItem value="competitors">Competitors</SelectItem>
              <SelectItem value="guides">Guides</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Author" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All authors</SelectItem>
              <SelectItem value="john">John Doe</SelectItem>
              <SelectItem value="mike">Mike Smith</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by keyword" className="pl-10" />
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="px-8 py-6">
        <div className="max-w-7xl mx-auto space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate('/editor')}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium mb-3">{post.title}</h3>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <button
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FolderOpen className="h-4 w-4" />
                      Move to folder
                    </button>
                    
                    <Badge 
                      variant="secondary" 
                      className="flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {post.category}
                      <button className="ml-1 hover:text-foreground">×</button>
                    </Badge>
                    
                    <button
                      className="text-muted-foreground hover:text-foreground"
                      onClick={(e) => e.stopPropagation()}
                    >
                      + Tag
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 ml-6">
                  <Badge 
                    variant={post.status === "published" ? "default" : "secondary"}
                    className="capitalize"
                  >
                    {post.status}
                  </Badge>
                  
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback className="text-xs">
                      {post.author.initials}
                    </AvatarFallback>
                  </Avatar>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {post.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
