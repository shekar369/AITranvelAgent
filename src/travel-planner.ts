import { GoogleGenerativeAI } from "@google/generative-ai";

// To use the Gemini API, you need to set up an API key.
// 1. Go to https://aistudio.google.com/app/apikey to obtain your API key.
// 2. Set the API key as an environment variable named `GOOGLE_API_KEY`.
//    You can do this in your terminal before running the script:
//    `export GOOGLE_API_KEY="YOUR_ACTUAL_API_KEY"`
//    Alternatively, you can use a tool like `dotenv` to manage environment variables.

let genAI: GoogleGenerativeAI;

function ensureApiKey(): void {
  if (!process.env.GOOGLE_API_KEY) {
    throw new Error(
      "GOOGLE_API_KEY environment variable not set. Please follow the instructions in the code comments to set it up."
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