const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  api: "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",
});
const openai = new OpenAIApi(configuration);
