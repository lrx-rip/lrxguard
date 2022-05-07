const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (app, message, client) => {
  
  const kinda = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription('<​a:loading:970555467011063828> Ping Hesaplanıyor...')
  
   let start = Date.now(); 
   let mesaj = await message.channel.send(kinda)
   let diff = (Date.now() - start); 
   let API = (app.ws.ping).toFixed(2)
    setInterval(() => {
   const only = new Discord.MessageEmbed()
   .setDescription(`\n<​a:ping:970556465549033482> Mesaj Gecikme Süresi ; **${diff}ms** \n\n<​a:bot:970556424272896030> Bot Gecikme Süresi ; **${API}ms**`)
   .setColor('GREEN')
    mesaj.edit(only);
    }, 5000)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ms'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'voxic',
  usage: 'ping'
};