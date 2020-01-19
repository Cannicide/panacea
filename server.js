const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/', function(request, response) {
  response.send("Running botserver");
});

const listener = app.listen(process.env.PORT, function() {
  console.log('ZH Discord Bot listening on port ' + listener.address().port);
});

//Discord.js initialized
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "/";

client.on('guildCreate', guild => {
    guild.channels.get(guild.channels.find("name", "general").id).send("Added ZH Discord Bot to guild.");
});

client.on('ready', () => {
    console.log('ZH Discord Bot is up and running!');
    client.user.setActivity('/help', { type: 'STREAMING', url: 'https://github.com/Cannicide/zh-bot' });
});

client.on('message', message => {
    try {

        var splitter = message.content.replace(" ", ";:splitter185151813367::");
        var splitted = splitter.split(";:splitter185151813367::");
        if (message.guild === null) {
            if (message.author.id != client.user.id) {
                message.reply("Sorry " + message.author.username + ", DM messages are not supported by this bot.");
            }
            return false;
        }

        var fixRegExp = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        var re = new RegExp(fixRegExp);
        var command = splitted[0].replace(re, "");

        if (splitted[1]) {
            var args = splitted[1].split(" ");
        }
        else {
            var args = false;
        }

        if (message.author.bot) {
            return false;
        }

        //Check for command:
        switch (command) {
            case "examplecommand":

                break;
            default:

                break;
        }
    }
    catch (err) {
        message.channel.send(`Errors found:\n\`\`\`${err}\nAt ${err.stack}\`\`\``);
    }
});

client.login("your token here");