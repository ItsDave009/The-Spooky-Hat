const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Let's Go Dave!!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!status")) {
    message.channel.send("Online");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("!ping")) {
    message.channel.send("pong");
  }
});
client.login("NDY1OTAzNDYwOTIwMDY2MDQ4.DiUR8w.nLsaNVWbB7qcxrkNukKPtRcHmt0");
