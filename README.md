# Travel Planner AI Agent

This project is a Travel Planner AI Agent that uses the Google Gemini API to generate travel plans for historical places in a given country.

## Features

*   Generates travel plans for historical places based on the user's chosen country (currently defaults to Italy).
*   Utilizes the Google Gemini API for fetching historical place information and creating the travel plan.

## Prerequisites

Before running this project, you need to have the following:

*   **Node.js and npm:**  Ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).
*   **Google Cloud Account:** You need a Google Cloud account to access the Google Gemini API.
*   **Google Gemini API Key:** You'll need to obtain an API key from Google Cloud to use the Gemini API.

## Installation

1.  **Clone the repository:** Clone this repository to your local machine using Git:

bash git clone https://github.com/shekar369/AITranvelAgent.git

2.  **Navigate to the project directory:**

bash cd AITranvelAgent

3.  **Install dependencies:** Use npm to install the required packages:

bash npm install

## Configuration

1.  **Create a `.env` file:** In the root of the project directory, create a file named `.env`.

2.  **Add your API key:** Open the `.env` file and add your Google Gemini API key as follows:

GOOGLE_API_KEY=YOUR_ACTUAL_API_KEY

Replace `YOUR_ACTUAL_API_KEY` with your actual API key obtained from Google Cloud.

## Running the project

To run the project, use the following command:

bash npx ts-node src/index.ts

This will execute the main script, which currently fetches historical places in Italy and generates a travel plan. The generated travel plan will be printed to the console.

## Example Usage

After setting up the project and running it, you should see output similar to the following in your console:

Travel plan for Italy: Travel plan: ## Three Days of Italian Charm: Rome & Pompeii ... (rest of the travel plan details) ...

This indicates that the project is successfully fetching data from the Gemini API and generating a travel plan.

## Deployment (Optional)

For basic deployment, you could consider using Docker to containerize the application, which would allow you to run it on various platforms. You would need to create a `Dockerfile` that specifies the environment and commands to run the application. Then, you can build and run the Docker image.

