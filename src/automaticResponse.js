const responses = require('./responses.js')

module.exports = function automaticResponse (client) {
  client.onMessage((message) => {
    if (message.isGroupMsg == false) {
      if (message.body === 'Hi') {
        client
          .sendText(message.from, "Oiie, estou testando meu novo chatbot")
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          })
    
      } else if (message.body === 'Ola') {
        client
          .sendText(message.from, "Oiie, estou testando meu novo chatbot")
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          })
    
      } else if (message.body === '1') {
        client
          .sendText(message.from, "Vamos te encaminhar para um atendente, aguarde um estante!!")
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          })
        responses(client, true)

      } else if (message.body === '3') {
        client
          .sendLocation(message.from, '-13.6561589', '-69.7309264', 'Loja muito legal')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
      });

      } else {
        client
          .sendText(message.from,
          'Olá, como posso ajudar? Digite o número da opção desejada\n' +
          '  1 - Falar com um atendente\n' +
          '  2 - Baixar o boleto deste mês\n' +
          '  3 - Receber a localização da nossa loja física\n')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          })
      }
    }
  })
}

