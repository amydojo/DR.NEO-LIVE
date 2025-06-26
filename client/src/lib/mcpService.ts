
export class MCPService {
  static async sendToFigma(html: string, options: {
    selector?: string;
    name?: string;
    description?: string;
  } = {}) {
    try {
      const response = await fetch('/api/send-to-figma', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          html,
          selector: options.selector,
          name: options.name || 'Component Export',
          description: options.description || 'Exported from Dr. Neo website'
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to send to Figma');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error sending to Figma:', error);
      throw error;
    }
  }

  static async importUrlToFigma(url: string, options: {
    selector?: string;
    name?: string;
    description?: string;
  } = {}) {
    try {
      const response = await fetch('/api/import-url-to-figma', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url,
          selector: options.selector,
          name: options.name || 'URL Import',
          description: options.description || 'Imported URL for design reference'
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to import URL to Figma');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error importing URL to Figma:', error);
      throw error;
    }
  }

  // Direct import-html tool usage
  static async importHtmlToFigma(html: string, options: {
    name?: string;
    description?: string;
  } = {}) {
    try {
      const response = await fetch('/api/import-html-to-figma', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          html,
          name: options.name || 'HTML Import',
          description: options.description || 'Raw HTML imported to Figma'
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to import HTML to Figma');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error importing HTML to Figma:', error);
      throw error;
    }
  }
}
