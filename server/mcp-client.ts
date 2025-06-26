import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';

class MCPHtmlToDesignClient {
  private client: Client | null = null;
  private transport: SSEClientTransport | null = null;

  async connect() {
    try {
      // Connect to the html.to.design MCP server
      this.transport = new SSEClientTransport(
        new URL('https://h2d-mcp.divriots.com/92c925ae-b4e8-4601-b7e2-124c5866a492/sse')
      );
      
      this.client = new Client({
        name: 'dr-neo-website',
        version: '1.0.0',
      }, {
        capabilities: {},
      });

      await this.client.connect(this.transport);
      console.log('Connected to html.to.design MCP server');
      
      // List available tools
      const tools = await this.client.listTools();
      console.log('Available tools:', tools.tools.map(t => t.name));
      
      return true;
    } catch (error) {
      console.error('Failed to connect to MCP server:', error);
      return false;
    }
  }

  async sendHtmlToFigma(html: string, options: { 
    selector?: string; 
    name?: string;
    description?: string;
  } = {}) {
    if (!this.client) {
      throw new Error('MCP client not connected');
    }

    try {
      const result = await this.client.callTool({
        name: 'html_to_design',
        arguments: {
          html,
          selector: options.selector || 'body',
          name: options.name || 'Dr. Neo Component',
          description: options.description || 'Generated from Dr. Neo website'
        }
      });
      
      return result;
    } catch (error) {
      console.error('Failed to send HTML to Figma:', error);
      throw error;
    }
  }

  async importUrlToFigma(url: string, options: { 
    selector?: string; 
    name?: string;
    description?: string;
  } = {}) {
    if (!this.client) {
      throw new Error('MCP client not connected');
    }

    try {
      const result = await this.client.callTool({
        name: 'import-url',
        arguments: {
          url,
          selector: options.selector || 'body',
          name: options.name || 'Dr. Neo URL Import',
          description: options.description || 'Imported from Dr. Neo website'
        }
      });
      
      return result;
    } catch (error) {
      console.error('Failed to import URL to Figma:', error);
      throw error;
    }
  }

  async importHtmlToFigma(html: string, options: { 
    name?: string;
    description?: string;
  } = {}) {
    if (!this.client) {
      throw new Error('MCP client not connected');
    }

    try {
      const result = await this.client.callTool({
        name: 'import-html',
        arguments: {
          html,
          name: options.name || 'Dr. Neo HTML Import',
          description: options.description || 'Raw HTML imported from Dr. Neo website'
        }
      });
      
      return result;
    } catch (error) {
      console.error('Failed to import HTML to Figma:', error);
      throw error;
    }
  }

  async disconnect() {
    if (this.client && this.transport) {
      await this.client.close();
      this.client = null;
      this.transport = null;
    }
  }
}

export const mcpClient = new MCPHtmlToDesignClient();