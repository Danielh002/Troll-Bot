const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "$"

client.once("ready", () => {
    console.log("Troll bot ready");
})

client.on("message", (message) => {
    if(!message.content.startsWith(prefix) || message.content.bot) return; 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toUpperCase();
    if(command === "PING"){
         message.channel.send('PONG!');
    } 
})

client.login(process.env.DISCORD_BOT_TOKEN);
