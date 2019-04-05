const Command = require("./command");
const youtubeStream = require("ytdl-core");

module.exports = class Music extends Command {
  static match(message) {
    return message.content.startsWith("!play");
  }

  static action(message) {
    let voiceChannel = message.guild.channels.filter(
      function(channel) { return channel.type === 'voice' }
    )
    .first();

    let args = message.content.split(' ');
    

    voiceChannel.join().then(function (connection) {
      let stream = youtubeStream(args[1]);
      stream.on('error', function () {
        message.reply("Essaye pas de m'embrouiller avec ton lien flingué !")
        connection.disconnect();
      })
      connection.playStream(stream).on('end', function () {
        connection.disconnect();
      })
    })
  }
};
