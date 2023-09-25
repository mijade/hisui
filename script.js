// Import the Wit.ai SDK
const { Wit, log } = require("node-wit");

// Initialize Wit.ai client with your API access token
const witClient = new Wit({ accessToken: "R2VPSF6BVNFXKDDSMSZT6ME24N75AAOL" });

// Function to send a user message to the chatbot
async function sendMessageToChatbot(message) {
    appendMessage(message, "user");

    // Use Wit.ai to extract intent and entities
    try {
        const witResponse = await witClient.message(message);

        // Extract intent and entities from Wit.ai response
        const { intents, entities } = witResponse;
        const userIntent = intents[0].name; // Assuming the first intent is the primary one
        const userEntities = entities;

        // Handle userIntent and userEntities as needed
        // You can use this information to determine how the chatbot responds

        // Simulate a response (you can customize this based on intent and entities)
        const chatbotResponse = "This is a Wit.ai-powered chatbot response.";
        appendMessage(chatbotResponse, "chatbot");
    } catch (error) {
        console.error("Error processing message with Wit.ai:", error);
    }
}

sendButton.addEventListener("click", () => {
    const userMessage = userInput.value;
    sendMessageToChatbot(userMessage);
    userInput.value = "";
});
