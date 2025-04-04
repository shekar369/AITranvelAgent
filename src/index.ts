import { getHistoricalPlaces, generateTravelPlan } from './travel-planner';

async function main() {
  const country = "Italy";
  const places = await getHistoricalPlaces(country);
  const plan = await generateTravelPlan(places);
  console.log(`Travel plan for ${country}:\n${plan}`);
}
main();