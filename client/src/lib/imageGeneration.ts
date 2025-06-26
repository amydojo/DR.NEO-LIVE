import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true 
});

export async function generateAppleStyleImage(prompt: string): Promise<{ url: string }> {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1792x1024", // Wide format perfect for hero sections
      quality: "hd",
      style: "natural"
    });

    return { url: response.data[0].url || "" };
  } catch (error) {
    console.error("Image generation failed:", error);
    throw new Error("Failed to generate image");
  }
}

// Pre-defined prompts for Dr. Neo's Apple-style visuals
export const drNeoImagePrompts = {
  mainHero: `Ultra-realistic, premium product photography in Apple's signature style: A sophisticated hair restoration consultation scene with a modern, minimalist medical device floating in clean white space. Professional medical equipment with chrome and white finishes, dramatic lighting with soft shadows, shot on a Phase One camera with perfect depth of field. Clean, clinical aesthetic with premium materials. High-end medical technology presentation style like Apple's product photography. 8K resolution, studio lighting, floating product shot against gradient background from light gray to white.`,
  
  resultsHero: `Apple-style product photography: Before and after hair transformation concept rendered as floating, translucent panels in pristine white space. Ultra-clean presentation showing hair density progression with sophisticated medical precision. Shot with professional studio lighting, minimal shadows, premium glass or acrylic panels floating in space. High-end commercial photography style with perfect reflections and depth. Clinical precision meets Apple's aesthetic philosophy. 8K resolution, pristine white background with subtle gradient.`,
  
  vipHero: `Premium Apple-style product shot: Elegant VIP membership card or certificate floating in clean white space with subtle gold accents. Luxurious materials like brushed metal, premium paper textures, embossed details. Shot with professional studio lighting creating soft shadows and elegant reflections. Minimalist composition with sophisticated depth of field. High-end luxury product photography matching Apple's premium aesthetic. Clean, modern, and aspirational. 8K resolution, studio-perfect lighting.`,
  
  fueSection: `Apple-style medical device photography: Advanced FUE hair transplant instrument floating in pristine white space. Ultra-precise medical tool with chrome and modern materials, shot with professional studio lighting. Clean, minimal composition with sophisticated depth of field and subtle shadows. High-tech medical equipment presented with Apple's signature product photography style. Premium materials, perfect reflections, clinical precision. 8K resolution, gradient white background.`,
  
  prpSection: `Premium product photography in Apple style: Modern microneedling device or PRP centrifuge floating in clean white space. Sophisticated medical equipment with sleek design, premium materials, and precision engineering. Professional studio lighting with soft shadows and elegant reflections. Minimalist composition showcasing advanced medical technology. High-end commercial photography aesthetic. 8K resolution, pristine background with subtle gradients.`
};