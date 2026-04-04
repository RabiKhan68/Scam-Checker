import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { input, type } = req.body;

    if (!input) {
      return res.status(400).json({ error: "No input provided" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are a cybersecurity expert.

Analyze the following ${type} and determine if it is a scam.

Input:
"${input}"

Respond in this format:
Verdict: (Scam / Suspicious / Safe)
Reason: (short explanation)
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.status(200).json({ result: text });

  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ error: "AI processing failed" });
  }
}