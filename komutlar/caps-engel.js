const Discord = require('discord.js');
const db = require('croxydb')

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`<​a:uyari:970552074523799605> Bu Komutu Kullana Bilmek İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`<​a:tik:970551956357652481> Capslock Engelleme Sistemi Kapatıldı!`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`<​a:tik:970551956357652481> Capslock Engelleme Sistemi Aktif!`)
  }

};
exports.conf = {
  aliases: ['capslockengel','capslock','capslock-engel','cl']
};
exports.help = {
  name: 'capslock-engelleme'
};