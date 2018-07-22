const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Let's Go Dave!!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!status")) {
    message.channel.send("All bots are functional");
  }
});

  bot.user.setGame('Helping **ItsDave**')
})
              
client.login("NDY1OTAzNDYwOTIwMDY2MDQ4.DjYT6w._u4gAnOe7wMAZy3OiiMGALH3Bxk");
