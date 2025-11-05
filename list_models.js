const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  const res = await fetch("https://generativelanguage.googleapis.com/v1/models?key=" + process.env.GEMINI_API_KEY);
  const data = await res.json();
  console.log(data);
}

listModels();
