const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openAi = new OpenAIApi(configuration);

const generateImage = async (title) => {
    try {
        const response = await openAi.createImage({
            prompt: title,
            n: 1,
            size: "256x256"
        });

        return response.data.data[0].url;
    } catch (e) {
        throw e;
    }
};

module.exports = {
    openAi,
    generateImage
};
