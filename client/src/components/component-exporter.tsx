
import { useState } from 'react';
import { MCPService } from '@/lib/mcpService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Download, Upload, Loader2 } from 'lucide-react';

interface ComponentExporterProps {
  componentName: string;
  selector: string;
  description?: string;
}

export function ComponentExporter({ componentName, selector, description }: ComponentExporterProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [customName, setCustomName] = useState(componentName);
  const [customDescription, setCustomDescription] = useState(description || '');

  const handleExport = async () => {
    try {
      setIsExporting(true);
      
      // Get the component element
      const element = document.querySelector(selector);
      if (!element) {
        toast({
          title: "Component not found",
          description: `Could not find component with selector: ${selector}`,
          variant: "destructive"
        });
        return;
      }

      // Export to Figma
      await MCPService.sendToFigma(element.outerHTML, {
        selector,
        name: customName || componentName,
        description: customDescription || `${componentName} from Dr. Neo website`
      });

      toast({
        title: "Export successful!",
        description: `${componentName} has been sent to Figma`,
      });

    } catch (error) {
      console.error('Export failed:', error);
      toast({
        title: "Export failed",
        description: "Failed to export component to Figma. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Export to Figma
        </CardTitle>
        <CardDescription>
          Send {componentName} to Figma for design iteration
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="name">Component Name</Label>
          <Input
            id="name"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            placeholder="Enter component name"
          />
        </div>
        
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={customDescription}
            onChange={(e) => setCustomDescription(e.target.value)}
            placeholder="Describe this component export"
            rows={3}
          />
        </div>

        <Button 
          onClick={handleExport} 
          disabled={isExporting}
          className="w-full"
        >
          {isExporting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Export to Figma
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

// Quick export buttons for major components
export function QuickComponentExports() {
  const [isExporting, setIsExporting] = useState<string | null>(null);

  const components = [
    {
      name: "Hero Section",
      selector: ".hero-section, [class*='hero']",
      description: "Main hero section with hair follicle visualization"
    },
    {
      name: "Treatments Section", 
      selector: "#treatments-section, [id*='treatment']",
      description: "Treatment cards and product showcase"
    },
    {
      name: "Testimonials Section",
      selector: "[class*='testimonials'], .testimonials-section",
      description: "Patient testimonials and reviews"
    },
    {
      name: "Contact Form",
      selector: "#contact, .contact-section",
      description: "Contact form and consultation booking"
    },
    {
      name: "VIP Experience",
      selector: "[class*='vip'], .vip-section",
      description: "VIP membership and consultation section"
    }
  ];

  const handleQuickExport = async (component: typeof components[0]) => {
    try {
      setIsExporting(component.name);
      
      const element = document.querySelector(component.selector);
      if (!element) {
        toast({
          title: "Component not found",
          description: `Could not find ${component.name}`,
          variant: "destructive"
        });
        return;
      }

      await MCPService.sendToFigma(element.outerHTML, {
        selector: component.selector,
        name: `Dr. Neo - ${component.name}`,
        description: component.description
      });

      toast({
        title: "Export successful!",
        description: `${component.name} has been sent to Figma`,
      });

    } catch (error) {
      console.error('Export failed:', error);
      toast({
        title: "Export failed",
        description: `Failed to export ${component.name}. Please try again.`,
        variant: "destructive"
      });
    } finally {
      setIsExporting(null);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Quick Component Exports</CardTitle>
        <CardDescription>
          Export main Dr. Neo website sections to Figma
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {components.map((component) => (
            <Button
              key={component.name}
              variant="outline"
              onClick={() => handleQuickExport(component)}
              disabled={isExporting === component.name}
              className="h-auto p-3 flex flex-col items-start text-left"
            >
              {isExporting === component.name ? (
                <Loader2 className="w-4 h-4 animate-spin mb-1" />
              ) : (
                <Upload className="w-4 h-4 mb-1" />
              )}
              <span className="font-medium">{component.name}</span>
              <span className="text-xs text-muted-foreground">
                {component.description}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
