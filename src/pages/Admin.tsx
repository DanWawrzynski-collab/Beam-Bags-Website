import { useState } from "react";
import { siteConfig } from "@/src/config/siteConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, Settings, FileText, Palette, Save, Plus, Trash2 } from "lucide-react";

export default function AdminDashboard() {
  const [config, setConfig] = useState(siteConfig);
  const [activeTab, setActiveTab] = useState("general");

  const handleSave = () => {
    // In a real app, this would call an API
    alert("Configuration saved successfully (Mock)");
    console.log("New Config:", config);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter uppercase">Admin Console</h1>
            <p className="text-muted-foreground">Manage your brand identity and content.</p>
          </div>
          <Button onClick={handleSave} className="h-12 px-8 font-bold uppercase tracking-widest">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-8">
          <TabsList className="bg-accent border border-white/5 p-1 h-14">
            <TabsTrigger value="general" className="h-full px-6 uppercase tracking-widest text-[10px] font-bold">
              <Settings className="w-4 h-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger value="theme" className="h-full px-6 uppercase tracking-widest text-[10px] font-bold">
              <Palette className="w-4 h-4 mr-2" />
              Theme
            </TabsTrigger>
            <TabsTrigger value="blog" className="h-full px-6 uppercase tracking-widest text-[10px] font-bold">
              <FileText className="w-4 h-4 mr-2" />
              Blog
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card className="bg-accent border-white/5">
              <CardHeader>
                <CardTitle className="uppercase tracking-tight">Site Identity</CardTitle>
                <CardDescription>Update the core text elements of your website.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Brand Name</Label>
                    <Input 
                      value={config.name} 
                      onChange={(e) => setConfig({...config, name: e.target.value})}
                      className="bg-black border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Tagline</Label>
                    <Input 
                      value={config.tagline} 
                      onChange={(e) => setConfig({...config, tagline: e.target.value})}
                      className="bg-black border-white/10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Description</Label>
                  <textarea 
                    value={config.description} 
                    onChange={(e) => setConfig({...config, description: e.target.value})}
                    className="w-full bg-black border border-white/10 rounded-md p-3 text-sm min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="theme" className="space-y-6">
            <Card className="bg-accent border-white/5">
              <CardHeader>
                <CardTitle className="uppercase tracking-tight">Visual Identity</CardTitle>
                <CardDescription>Customize the colors and aesthetic of your site.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Primary Color</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg border border-white/10" style={{ backgroundColor: config.theme.primary }} />
                    <Input 
                      value={config.theme.primary} 
                      onChange={(e) => setConfig({...config, theme: {...config.theme, primary: e.target.value}})}
                      className="bg-black border-white/10 font-mono"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Secondary Color</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg border border-white/10" style={{ backgroundColor: config.theme.secondary }} />
                    <Input 
                      value={config.theme.secondary} 
                      onChange={(e) => setConfig({...config, theme: {...config.theme, secondary: e.target.value}})}
                      className="bg-black border-white/10 font-mono"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label className="text-[10px] uppercase tracking-widest text-muted-foreground">Background</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg border border-white/10" style={{ backgroundColor: config.theme.background }} />
                    <Input 
                      value={config.theme.background} 
                      onChange={(e) => setConfig({...config, theme: {...config.theme, background: e.target.value}})}
                      className="bg-black border-white/10 font-mono"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blog" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold uppercase tracking-tight">Blog Posts</h3>
              <Button size="sm" className="font-bold uppercase tracking-widest">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {config.blog.map((post) => (
                <Card key={post.id} className="bg-accent border-white/5">
                  <div className="p-6 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-lg">{post.title}</h4>
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <FileText className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
