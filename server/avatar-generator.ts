import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateAvatarSet(): Promise<{ [key: string]: string }> {
  const avatarPrompts = [
    {
      name: "michael",
      prompt: "Professional headshot portrait of a confident middle-aged man with short dark hair, wearing a business casual shirt, clean background, high-quality professional photography style, warm lighting, friendly smile, realistic skin texture, corporate headshot quality"
    },
    {
      name: "sarah", 
      prompt: "Professional headshot portrait of a confident woman in her 30s with shoulder-length brown hair, wearing professional attire, clean background, high-quality professional photography style, warm lighting, friendly smile, realistic skin texture, corporate headshot quality"
    },
    {
      name: "david",
      prompt: "Professional headshot portrait of a confident man in his 40s with slightly graying hair, wearing a collared shirt, clean background, high-quality professional photography style, warm lighting, approachable expression, realistic skin texture, corporate headshot quality"
    },
    {
      name: "jennifer",
      prompt: "Professional headshot portrait of a confident woman in her late 30s with blonde hair, wearing professional business attire, clean background, high-quality professional photography style, warm lighting, genuine smile, realistic skin texture, corporate headshot quality"
    },
    {
      name: "robert",
      prompt: "Professional headshot portrait of a distinguished man in his 50s with salt-and-pepper hair, wearing a button-down shirt, clean background, high-quality professional photography style, warm lighting, professional demeanor, realistic skin texture, corporate headshot quality"
    }
  ];

  const avatars: { [key: string]: string } = {};

  for (const avatar of avatarPrompts) {
    try {
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: avatar.prompt,
        n: 1,
        size: "1024x1024",
        quality: "hd",
        style: "natural"
      });

      const imageUrl = response.data?.[0]?.url;
      if (imageUrl) {
        avatars[avatar.name] = imageUrl;
      }
    } catch (error) {
      console.error(`Error generating avatar for ${avatar.name}:`, error);
    }
  }

  return avatars;
}