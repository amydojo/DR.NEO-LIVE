import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generatePremiumHairFollicle(): Promise<{ url: string }> {
  const prompt = `Ultra-realistic 3D medical illustration of a human hair follicle cross-section, professional clinical photography style. 

Key requirements:
- Scientifically accurate anatomical detail showing hair shaft, follicle structure, dermal papilla, sebaceous gland, arrector pili muscle
- Clean white background with subtle gradient
- Premium medical textbook quality rendering
- Soft, diffused lighting with subtle shadows
- Glass-like transparency effects on follicle walls
- Rich, natural hair colors (brown/auburn)
- Microscopic level detail with cellular structures visible
- Apple-inspired minimal aesthetic with premium materials
- Professional medical visualization standards
- 3D rendered appearance with depth and dimension
- Subtle golden accent lighting
- Clean, scientific, and elegant presentation
- No text, labels, or annotations
- High contrast and clarity for web display
- Professional medical device aesthetic similar to high-end dermatology equipment imagery`;

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    n: 1,
    size: "1024x1024",
    quality: "hd",
    style: "natural"
  });

  const imageUrl = response.data?.[0]?.url;
  if (!imageUrl) {
    throw new Error("Failed to generate image");
  }
  
  return { url: imageUrl };
}