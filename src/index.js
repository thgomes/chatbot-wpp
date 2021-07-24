const express = require('express')
const venom = require('venom-bot')
const responses = require('./responses.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}));

app.listen(3333, () => {
  console.log('server funcionando na porta 3333.')
})

app.get('/', async(req, res) => {
  return res.json('ok')
})

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro)
});

function start(client) {
  responses(client)
  sendMessages(client)
}

function sendMessages(client) {
  app.post('/message/text', async(req, res) => {
    await client
      .sendText(req.body.number + '@c.us', req.body.text)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      })
    return res.json(req.body)
  })
}
