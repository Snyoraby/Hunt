const Discord = require("discord.js");
const myid = ['ID'];
const prefix = ['$'];
const client = new Discord.Client();


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


client.login(process.env.TOKEN);


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

client.on('ready', async() => {
var server = "781235027693797403"; 
var channel = "894963657203650600";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('jklj')
    },1000);
});
          
    
  
