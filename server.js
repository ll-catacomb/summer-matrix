require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { handleMessage } = require('./gateway');

const app = express();
app.use(bodyParser.json());

app.post('/slack/events', async (req, res) => {
  const { text, user } = parseSlackEvent(req.body);
  if (!text) return res.sendStatus(200);

  try {
    const responses = await handleMessage(text);
    // TODO: send responses back to Slack using Web API
    console.log(`Responses for ${user}:`, responses);
  } catch (err) {
    console.error('Handler error:', err);
  }
  res.sendStatus(200);
});

function parseSlackEvent(body) {
  const text = body.event && body.event.text;
  const user = body.event && body.event.user;
  return { text, user };
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
