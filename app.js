const line = require('@line/bot-sdk');
const express = require('express');
const dotenv = require('dotenv').config();

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS,
  channelSecret: process.env.CHANNEL_SECRET
};

const client = new line.Client(config);

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Berhasil Gan'
  });
});

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then(result => res.json(result))
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  const message = [
    'Asu',
    'Jancok',
    'Kontol',
    'Bangsat',
    'Bego',
    'Kimak',
    'Kampang',
    'Pantek'
  ];

  // create a echoing text message
  const profile = await client.getProfile(event.source.userId);
  const randomIndex = Math.floor(Math.random() * message.length);

  console.log(randomIndex, profile.displayName);
  const echo = {
    type: 'text',
    text: `${profile.displayName} ${message[randomIndex]}`
  };

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
