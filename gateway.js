const bots = require('./bots');

async function handleMessage(text) {
  const responses = [];

  // Gateway introduction explaining routing
  const intro = await bots.gateway.respond(text);
  responses.push({ agent: bots.gateway.name, text: intro });

  // Route to specialized bots based on simple keywords
  if (/project|documentation|docs?/i.test(text)) {
    const dispatchReply = await bots.dispatch.respond(text);
    responses.push({ agent: bots.dispatch.name, text: dispatchReply });
  }

  if (/news|article/i.test(text)) {
    const newsReply = await bots.newcast.respond(text);
    responses.push({ agent: bots.newcast.name, text: newsReply });
  }

  return responses;
}

module.exports = { handleMessage };
