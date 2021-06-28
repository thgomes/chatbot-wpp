const automaticResponse = require('./automaticResponse.js')
const atendentResponse = require('./atendentResponse.js')

module.exports = function responses(client) {
  client.onMessage((message) => {
    if (message.isGroupMsg == false ) {
      if (message.atendentOn) 
        automaticResponse()
      else
        atendentResponse()
    }
  })
}