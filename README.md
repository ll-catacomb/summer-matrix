# Summer Matrix Bots

This project contains a simple Node.js server demonstrating a multi-agent architecture inspired by the OpenAI Agents SDK. Slack messages are received and routed to specialized bots that call the OpenAI Assistants API.

## Structure

- `server.js` – Express server that receives Slack events.
- `gateway.js` – Chooses which bot(s) should respond to a message.
- `agent.js` – Minimal agent class that wraps calls to the OpenAI API.
- `bots/` – Folder containing individual bot definitions.
  - `gatewayAgent.js` – Greets users and explains how their request will be routed.
  - `dispatchAgent.js` – Answers questions about past AI projects and documentation using an Airtable search.
  - `newcastAgent.js` – Provides recent news relevant to user queries from scraped articles and an Airtable feed.

## Usage

1. Install dependencies (requires Node.js):

   ```bash
   npm install
   ```

2. Set environment variables in a `.env` file or your shell:

   ```bash
   OPENAI_API_KEY=sk-...
   SLACK_BOT_TOKEN=xoxb-...
   SLACK_SIGNING_SECRET=...
   ```

3. Start the server:

   ```bash
   npm start
   ```

The server exposes a `/slack/events` endpoint suitable for Slack's Events API. `gateway.js` first invokes `gatewayAgent` to describe the process, then calls `dispatchAgent` for project/documentation queries and `newcastAgent` for news requests. Each agent calls the OpenAI API and returns a response that should be sent back to Slack (the example logs them to the console).

## Notes

This example focuses on demonstrating the architecture. To build a production bot you would add authentication with Slack, handle retries, store conversation history, and write tests.
