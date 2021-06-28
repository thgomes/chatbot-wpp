const express = require('express')
const venom = require('venom-bot')
const bodyParser = require('body-parser')

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro)
  });

function start(client) {
  const app = express()

  app.use(express.json());
  app.use(express.urlencoded({
    extended: false
  }));

  app.listen(3000, () => {
    console.log('server funcionando na porta 3333.')
  })

  app.get('/', async(req, res) => {
    return res.json('ok')
  })

  app.post('/message/text', async(req, res) => {
    console.log(req.body.number)
    /*
    await client
      .sendText(req.body.number + '@c.us', req.body.text)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
*/
    return res.json(req.body)
  })

  client.onMessage((message) => {
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, "Oiie, estou testando meu novo chatbot")
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}