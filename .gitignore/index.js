const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("WinnerBot, /help");
    console.log("Le bot est bien connecté");
});

bot.login("NTUzNjE4OTc0NTI5ODE0NTQ5.D2Qx6g.QJUjkc5S62mhpkFTnm5CeB1OgVQ");
