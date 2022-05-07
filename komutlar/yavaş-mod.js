const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("773606926109900880")) {
    
  const embed = new Discord.MessageEmbed()
  
  .setDescription(`<​a:uyari:970552074523799605> Bu Komutu Kullanmak İçin **Yönetici** Yetkisine Sahip Olmalısın!`)
  .setColor("RED")
  .setFooter(client.user.username, client.user.avatarURL);

  message.channel.send(embed);
    
  return;
  }
  
  if (message.channel.type !== "text") return;
  
  const limit = args[0] ? args[0] : 0;
  if (!limit) {
    
  var embed = new Discord.MessageEmbed()
  
  .setDescription(`<​a:uyari:970552074523799605> Lütfen Talimatları Uygulayın.\n<​a:right:970562756329742366> Örnek Kullanım : **${prefix}slowmode 5**`)
  .setColor("RED")
  .setFooter(client.user.username, client.user.avatarURL);
    
  message.channel.send({ embed });
    
  return
  }

  let number = [
    
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20"
  ];

  if (!number.some(word => message.content.includes(word))) {
  {
    
  const embed = new Discord.MessageEmbed()
  
  .setDescription(`<​a:uyari:970552074523799605> Süre Limiti Sadece **Sayı** Olabilir`)
  .setColor("RED")
  .setFooter(client.user.username, client.user.avatarURL);

  message.channel.send(embed);
    
  return;
  }
  }
  if (limit > 20) {
    
  return message.channel.send(
    
  new Discord.MessageEmbed()
    
  .setDescription("<​a:uyari:970552074523799605> Süre Limiti Maksimum **20** Saniye Olabilir.")
  .setColor("RED")
    
  );
  }
  message.channel.send(
    
  new Discord.MessageEmbed()
    
  .setDescription(`<​a:tik:970551956357652481> Yazma Süre Limiti Başarıyla **${limit}** Saniye Olarak Ayarlanmıştır.`)
  .setFooter(client.user.username, client.user.avatarURL)
  .setColor("GREEN")
  );
  
  var request = require("request");
  request({
    
  url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    
  method: "PATCH",
    
  json: {
    
  rate_limit_per_user: limit
    
  },
  headers: {
  Authorization: `Bot ${client.token}`
    
  }
    
  });
  
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yavaşmod","yavaş-mod","slow-mode"],
  permLevel: 2
};

exports.help = {
  name: "slowmode",
  description: "voxic",
  usage: "slowmode"
};
