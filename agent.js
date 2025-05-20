const { OpenAI } = require('openai');

class Agent {
  constructor({ name, instructions }) {
    this.name = name;
    this.instructions = instructions;
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async respond(userMessage) {
    const messages = [
      { role: 'system', content: this.instructions },
      { role: 'user', content: userMessage }
    ];
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4o',
      messages
    });
    const content = completion.choices[0].message.content.trim();
    return content;
  }
}

module.exports = Agent;
