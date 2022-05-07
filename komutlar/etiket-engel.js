const db = require('quick.db');
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  
  if (!args[0]) {
    
  const phentos = new Discord.MessageEmbed() 
  
  .setDescription('<​a:uyari:970552074523799605> Lütfen **aç** Veya **kapat** Yazın.\nÖrnek Kullanım : **${prefix}etiket-engel aç/kapat**')
  .setColor("RED")

  return message.channel.send(phentos)
  }
  
  if (args[0] == 'aç') {
    
  db.set(`hereengel_${message.guild.id}`, 'acik')
    
  const phentos = new Discord.MessageEmbed() 
  
  .setDescription('<​a:tik:970551956357652481> Etiket Engel Başarılı Bir Şekilde Aktif Edildi!')
  .setColor("GREEN")

  return message.channel.send(phentos)
  }
 
  if (args[0] == 'kapat') {
    
  db.set(`hereengel_${message.guild.id}`, 'kapali')
    
  const phentos = new Discord.MessageEmbed() 
  
  .setDescription('<​a:tik:970551956357652481> Etiket Engel Başarılı Bir Şekilde Deaktif Edildi!')
  .setColor("GREEN")

  return message.channel.send(phentos)
  } 
  
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['etiketengel', 'etiket-engel'],
  permLevel: 3
};

exports.help = {
  name: 'etiketengel',
  description: 'etiket engel sistemi',
  usage: 'etiketengel'
};