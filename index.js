const discord = require("discord.js");
const bot = discord.Client();

const music = require('./command/music');

bot.on('message', function(message) {
  music.parse(message);
});

bot.login(
  "NTYxMjU2MDgyMjY2MjU5NDU2.D3_4Mg.BTRMzXHeCQ9xzxvemBZbCoR54F0"
);