require('dotenv').config();
const axios = require('axios');
const API_KEY = process.env.OPENAI_API_KEY;
const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

module.exports = {
    serverPort: process.env.port || 3000,

    openAI: async (message) => {
        try {
            const response = await axios.post(
                API_ENDPOINT,
                {
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: message }]
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_KEY}`
                    }
                }
            );
    
            return response.data.choices[0].message.content;
        } catch (error) {
            return error.response
        }
    },

    mix: async (chemical1, chemical2) =>{
        return await module.exports.openAI(`give me one array with ["result", "color of reaction"] on what results you get when you mix ${chemical1} and ${chemical2} say one word for result and color or colorless`)
    }
}