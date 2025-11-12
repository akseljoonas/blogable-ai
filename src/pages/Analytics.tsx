import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Eye, Users, Clock, ArrowUp, ArrowDown } from "lucide-react";

const Analytics = () => {
  const stats = [
    {
      title: "Total Views",
      value: "24,532",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
    },
    {
      title: "Unique Visitors",
      value: "8,421",
      change: "+8.2%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Avg. Time on Page",
      value: "3m 24s",
      change: "-2.1%",
      trend: "down",
      icon: Clock,
    },
    {
      title: "Engagement Rate",
      value: "68.4%",
      change: "+5.3%",
      trend: "up",
      icon: TrendingUp,
    },
  ];

  const topPosts = [
    { title: "Complete Guide to Technical SEO", views: "4,231", rate: "72%" },
    { title: "Keyword Research Best Practices", views: "3,821", rate: "68%" },
    { title: "Content Strategy Framework", views: "2,943", rate: "65%" },
    { title: "Link Building Techniques", views: "2,512", rate: "61%" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">Page Analytics</h1>
            <p className="text-muted-foreground">Track your content performance</p>
          </div>

          {/* Time Period Tabs */}
          <Tabs defaultValue="7d" className="mb-6">
            <TabsList>
              <TabsTrigger value="24h">24 Hours</TabsTrigger>
              <TabsTrigger value="7d">7 Days</TabsTrigger>
              <TabsTrigger value="30d">30 Days</TabsTrigger>
              <TabsTrigger value="90d">90 Days</TabsTrigger>
            </TabsList>

            <TabsContent value="7d" className="space-y-6 mt-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-semibold mb-1">{stat.value}</div>
                      <div className="flex items-center text-sm">
                        {stat.trend === "up" ? (
                          <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
                        ) : (
                          <ArrowDown className="h-3 w-3 mr-1 text-red-500" />
                        )}
                        <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                          {stat.change}
                        </span>
                        <span className="text-muted-foreground ml-1">vs last period</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Views Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Views Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-end justify-between gap-2">
                      {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                        <div key={i} className="flex-1 bg-primary/20 hover:bg-primary/30 rounded-t transition-colors relative group">
                          <div 
                            className="bg-primary rounded-t transition-all" 
                            style={{ height: `${height}%` }}
                          />
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-popover px-2 py-1 rounded shadow-md">
                            {Math.round(height * 50)}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Posts */}
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topPosts.map((post, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{post.title}</p>
                            <p className="text-xs text-muted-foreground">{post.views} views</p>
                          </div>
                          <div className="ml-4 text-right">
                            <p className="text-sm font-medium">{post.rate}</p>
                            <p className="text-xs text-muted-foreground">engagement</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Traffic Sources */}
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { source: "Organic Search", percentage: 45, value: "11,039" },
                      { source: "Direct", percentage: 28, value: "6,869" },
                      { source: "Social Media", percentage: 18, value: "4,416" },
                      { source: "Referral", percentage: 9, value: "2,208" },
                    ].map((item) => (
                      <div key={item.source}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{item.source}</span>
                          <span className="text-sm text-muted-foreground">{item.value} ({item.percentage}%)</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all" 
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
