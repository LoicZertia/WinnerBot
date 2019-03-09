const Discord = require("discord.js");

var PREFIX = "/";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Actuellement au développement");
    console.log("On");
});

bot.off("off", function() {
    bot.user.setGame("Maintenance temporaire");
    console.log("Off");
})

bot.on("message", async function(message) {
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLocaleLowerCase()) {
        case "invite":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.username,
                title: '',
                fields: [{
                    name: "Lien d'invitation Discord",
                    value: "https://discord.gg/4Gmasm5",
                    inline: false
                }],
                footer: {
                    footer: "Partagez ce lien à tous vos amis !",
                },
            }
        });
        break;
    }
});

bot.on("message", async function(message) {
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLocaleLowerCase()) {
        case "help":
        message.channel.send("test")
    }
})

bot.on("message", async function(message) {
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLocaleLowerCase()) {
        case "rules":
        message.channel.send("Les règles")
    }
})

bot.on("message", async function(message) {
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLocaleLowerCase()) {
        case "last":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.username,
                title: '',
                fields: [{
                    name: "The last Update of the Bot",
                    value: "- Kick command",
                    inline: false
                }],
                footer: {
                    footer: "Partagez ce lien à tous vos amis !",
                },
            }
        });
        break;
    }
});

bot.login("NTUzNjE4OTc0NTI5ODE0NTQ5.D2Qx6g.QJUjkc5S62mhpkFTnm5CeB1OgVQ");
