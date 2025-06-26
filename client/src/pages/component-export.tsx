
import { useState } from 'react';
import { QuickComponentExports, ComponentExporter } from '@/components/component-exporter';
import { MCPService } from '@/lib/mcpService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Globe, Download, Palette, Eye } from 'lucide-react';

export default function ComponentExportPage() {
  const [customUrl, setCustomUrl] = useState('');
  const [isImporting, setIsImporting] = useState(false);

  const handleUrlImport = async () => {
    if (!customUrl.trim()) {
      toast({
        title: "URL required",
        description: "Please enter a URL to import",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsImporting(true);
      
      await MCPService.importUrlToFigma(customUrl, {
        name: `URL Import - ${new URL(customUrl).hostname}`,
        description: "Design reference imported for Dr. Neo analysis"
      });

      toast({
        title: "Import successful!",
        description: `${customUrl} has been imported to Figma`,
      });

    } catch (error) {
      console.error('Import failed:', error);
      toast({
        title: "Import failed",
        description: "Failed to import URL. Please check the URL and try again.",
        variant: "destructive"
      });
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
            Component Export Center
          </h1>
          <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
            Export Dr. Neo website components to Figma for design iteration and analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Quick Exports */}
          <QuickComponentExports />

          {/* URL Import */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Import URL to Figma
              </CardTitle>
              <CardDescription>
                Import any website for design reference and competitor analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="url">Website URL</Label>
                <Input
                  id="url"
                  type="url"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
              
              <Button 
                onClick={handleUrlImport}
                disabled={isImporting}
                className="w-full"
              >
                {isImporting ? "Importing..." : "Import to Figma"}
              </Button>
              
              <div className="text-sm text-[#86868b] space-y-1">
                <p><strong>Suggested URLs:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Competitor hair clinic websites</li>
                  <li>Medical device company sites</li>
                  <li>Apple.com (design reference)</li>
                  <li>Reddit design discussions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export Process Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#A87B23] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">1. Select Component</h3>
                <p className="text-sm text-[#86868b]">
                  Choose which component or URL you want to export to Figma
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#625046] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">2. Export to Figma</h3>
                <p className="text-sm text-[#86868b]">
                  Our MCP integration sends the HTML structure to html.to.design
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FAE151] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Palette className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-semibold mb-2">3. Design in Figma</h3>
                <p className="text-sm text-[#86868b]">
                  Access your exported components in Figma for design iteration
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Custom Component Export */}
        <div className="max-w-md mx-auto">
          <ComponentExporter
            componentName="Custom Component"
            selector="body"
            description="Export any specific element by CSS selector"
          />
        </div>
      </div>
    </div>
  );
}
