const line = require('@line/bot-sdk');
const express = require('express');

const config = {
  channelAccessToken:
    'yjF/EX5iXQoZhswmutYWK+MF1YbFJ/+QIeR1d7pSOAcqdsy2snx3FsG2dibuFby5ejw9s56nPwMrlJx+XgUctM+JW8x6UrteOPo6YnH5qThkwEBM4+bwlopds0U95M1RhGioiZ3CSBG+RyHfiqIrGQdB04t89/1O/w1cDnyilFU=',
  channelSecret: '298e579419ae3e0e61eaf641d2afd809'
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

  const message = ['Asu', 'Jancok', 'Kontol', 'Bangsat', 'Bego', 'Kimak'];

  // create a echoing text message
  const profile = await client.getProfile(event.source.userId);
  const randomMessage = Math.floor(Math.random * message.length);

  console.log(randomMessage, profile.displayName);
  const echo = { type: 'text', text: event.message.text };

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
