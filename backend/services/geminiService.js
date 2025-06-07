async function sendRequestToAI(message) {
  const { GoogleGenAI } = await import("@google/genai");

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINIAPI });

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: message,
  });

  return response.text;
}

module.exports = { sendRequestToAI };