const line = require('@line/bot-sdk');
const express = require('express');

const config = {
  channelAccessToken:
    'yjF/EX5iXQoZhswmutYWK+MF1YbFJ/+QIeR1d7pSOAcqdsy2snx3FsG2dibuFby5ejw9s56nPwMrlJx+XgUctM+JW8x6UrteOPo6YnH5qThkwEBM4+bwlopds0U95M1RhGioiZ3CSBG+RyHfiqIrGQdB04t89/1O/w1cDnyilFU=',
  channelSecret: '298e579419ae3e0e61eaf641d2afd809'
};

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Berhasil Gan'
  });
});

app.post('/callback', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
});

function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  console.log(event);
  const echo = { type: 'text', text: event.message.text };

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

app.listen(4000, () => {
  console.log('Listening');
});
