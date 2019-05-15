const Discord = require("discord.js");
const client = new Discord.Client();
const buscaminas = require('./buscaminas');

client.on("ready", () => {
    client.user.setActivity("MINAS", { type: "WATCHING"})
})

client.on ("message", (message) => {
    if(message.content.startsWith("/create")){
        var params = message.content.split(" ");
        const bm = new buscaminas(params[1], params[2], params[3]);
        var svid = message.guild.id;
        var chid = message.channel.id;
        bm.constructorMinas();
        bm.ver();
        message.channel.send("Ok");
    }
});

client.login(process.env.TOKEN);

