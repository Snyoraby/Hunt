const Discord = require("discord.js");
const myid = ['ID'];
const prefix = ['*'];
const client = new Discord.Client();

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.login(process.env.TOKEN);











//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
