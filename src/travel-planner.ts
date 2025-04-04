import * as dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

// To use the Gemini API, you need to set up an API key.
// 1. Create a `.env` file in the project root.
// 2. Add your API key to the `.env` file as:
//    GOOGLE_API_KEY=YOUR_ACTUAL_API_KEY
// 3. Obtain your API key from https://aistudio.google.com/app/apikey.

dotenv.config();

let genAI: GoogleGenerativeAI;

function ensureApiKey(): void {
  if (!process.env.GOOGLE_API_KEY) {
    throw new Error(
      "GOOGLE_API_KEY not found in .env file. Please create a .env file in the project root and add your API key as GOOGLE_API_KEY=YOUR_ACTUAL_API_KEY"
    );
  }
  if (!genAI) {
    genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  }
}

async function getHistoricalPlaces(country: string): Promise<string[]> {
  ensureApiKey();

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `List the top 3 historical places to visit in ${country}. Provide the name of each place only, separated by commas.`;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  // Assuming the response is a comma-separated list of places
  return text.split(",").map((place) => place.trim());
}

async function generateTravelPlan(places: string[]): Promise<string> {
  ensureApiKey();

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Generate a brief travel plan for visiting these historical places: ${places.join(
    ", "
  )}. Include a suggested order of visiting the places.`;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  return `Travel plan: ${text}`;
}

export { getHistoricalPlaces, generateTravelPlan };