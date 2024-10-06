const axios = require("axios");

/**
 * Fetches the "Hello World" message from the API Gateway.
 * @param {string} apiKey - The API key required to access the API.
 * @returns {Promise<string>} - The "Hello World" message.
 * @param {string} endpoint - The API Gateway endpoint.
 */
async function getHelloWorld(apiKey, endpoint) {
  if (!apiKey) {
    throw new Error("API Key is required");
  }

  try {
    const response = await axios.get(`${endpoint}`, {
      headers: {
        "x-api-key": apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching Hello World:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

module.exports = {
  getHelloWorld,
};
