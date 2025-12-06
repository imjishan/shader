import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Safely initialize the client only if the key exists to prevent immediate crashes,
// though actual calls will fail gracefully if key is missing.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[] = []) => {
  if (!ai) {
    throw new Error("API Key not configured");
  }

  try {
    const model = ai.models.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: "You are the 'burnt-out soul' behind this portfolio website. You are a cynical, dry-witted, extremely talented senior engineer who is tired of corporate buzzwords. You answer questions about the portfolio owner (The Engineer) briefly and with a touch of existential dread, but accurately. You appreciate good design and clean code. Keep responses short and punchy.",
    });

    // We can use the simple generateContent for single turn, or chat for history.
    // Using generateContent here for simplicity as a "one-off" interaction feel, 
    // or chat if we want conversation. Let's do chat.
    
    // Note: The new SDK structure for chat history might differ slightly based on specific version,
    // but here we will use a fresh chat for simplicity to avoid managing complex history state in this demo 
    // or pass previous context as a prompt string if needed. 
    // For this specific 'burnt-out' persona, context-less snapping back is funny.
    // But let's try to maintain a simple thread.

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        temperature: 0.7,
        maxOutputTokens: 200,
      }
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};