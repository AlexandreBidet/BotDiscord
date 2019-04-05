module.exports = class command {
  static parse(message) {
    if (this.match(message)) {
      this.action(message);
      return true;
    }
    return false;
  }

  static match(message) {
    return message.content.startsWith("!play");
  }

  static action(message) {
    let args = message.content.split(" ");
    args.shift();
    message.reply("https://www.youtube.com/watch?v=" + args.join(" "));
  }
};
