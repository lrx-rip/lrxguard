const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  
  if (!message.guild) {
    
  const ozelmesajuyari = new Discord.MessageEmbed()
  
  .setColor("RED")
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("<​a:uyari:970552074523799605> Bu Komutu Özel Mesajlarda Kullanamazsın!");
    
  return message.author.send(ozelmesajuyari);
  }
  
  if (message.channel.type !== "dm") {
    
  const guild = message.guild.id
  
  const sunucubilgi = new Discord.MessageEmbed()
    
  .setColor("GREEN")
    
  .setAuthor(message.guild.name, message.guild.iconURL)
    
  .addField("<​a:right:970562756329742366> Sunucu Sahibi", message.guild.owner)
  .addField('<​a:right:970562756329742366> Sunucu İsmi', message.guild.name)
  .addField('<​a:right:970562756329742366> Sunucu ID si', message.guild.id)
  .addField('<​a:right:970562756329742366> Sunucu Bölgesi', message.guild.region)
  .addField('<​a:right:970562756329742366> Üye Sayısı', message.guild.memberCount)
  .addField('<​a:right:970562756329742366> Rol Sayısı', message.guild.roles.size)
  .addField('<​a:right:970562756329742366> Kanal Sayısı',message.guild.channels.size)
  .addField('<​a:right:970562756329742366> Emoji Sayısı', message.guild.emojis.size)
  .addField('<​a:right:970562756329742366> Oluşturma tarihi:', message.guild.createdAt, true)
    
  .setThumbnail(message.guild.iconURL);
    
  return message.channel.send(sunucubilgi)
  }
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-bilgi"],
  permLevel: 0
};

exports.help = {
  name: "sunucubilgi",
  description: "voxic",
  usage: "sunucubilgi"
};
   