const Discord = require("discord.js");
const client = new Discord.Client();
const buscaminas = require('./buscaminas');
const conf = require('./config.json');

require('dotenv').config();

client.on("ready", () => {
    client.user.setActivity("/create", { type: "WATCHING"})
})

client.on ("message", (message) => {

    var msg = "";

    if(message.author.bot){
        return (0);
    }
    console.log(message);
    
    if(message.content.startsWith("/create")){
        var params = message.content.split(" ");
        if(isNaN(+params[1]) || isNaN(+params[2]) || isNaN(+params[3])){
            message.channel.send(conf.error1);
            return (0);
        }
        if(+params[1] > conf.MAX_HEIGHT || +params[2] > conf.MAX_HEIGHT){
            message.channel.send(conf.error2);
            return (0);
        }
        if(+params[3] > +params[1]*+params[2]){
            message.channel.send(conf.error3);
            return (0);
        }
        if(params[1]==null || params[2]==null || params[3]==null){
            message.channel.send(conf.error4);
            return (0);
        }

        const bm = new buscaminas(params[1], params[2], params[3]);
        for (var i = 0; i<params[1]; i++){
            sleep(100);
            msg+= bm.ver(i) + "\n";
        }
        message.channel.send(msg);
    }
    if(message.content.startsWith("/source")){
        message.channel.send("https://github.com/Witless/d-games");
    }

    function sleep(ms) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > ms){
                break;
            }
        }
    }
});

client.login(process.env.TOKEN);

