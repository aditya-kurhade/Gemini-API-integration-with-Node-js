const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main() {
  try {
    const model = ai.getGenerativeModel({ model: "models/gemini-2.5-flash" });
    const prompt = "expain the meaning of aditya";
    const result = await model.generateContent(prompt);

    console.log("🧠 Gemini response:\n", result.response.text());
  } catch (err) {
    console.error("⚠️ Error:", err);
  }
}

main();
