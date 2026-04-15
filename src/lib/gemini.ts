import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function summarizeNews(title: string, excerpt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Summarize this sports news in 2 punchy sentences for a premium sports app. 
      Title: ${title}
      Excerpt: ${excerpt}`,
      config: {
        systemInstruction: "You are a premium sports journalist. Your tone is bold, professional, and forward-looking.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return excerpt;
  }
}
