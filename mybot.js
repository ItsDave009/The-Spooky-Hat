const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Let's Go Dave!!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!status of bots")) {
    message.channel.send("Under Maintanance");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("!duration")) {
    message.channel.send("30 minutes");
  }
});
client.login("NDY1OTAzNDYwOTIwMDY2MDQ4.DiUR8w.nLsaNVWbB7qcxrkNukKPtRcHmt0");
