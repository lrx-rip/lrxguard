const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`<​a:uyari:970552074523799605> Hatalı Kullanım!\nÖrnek: **root$sa-as aç**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('<​a:uyari:970552074523799605> Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!')
 
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.channel.send(`<​a:tik:970551956357652481> Artık bot, birisi "\`sa\`" yazınca "\`as\`" diyecek.\nKapatmak için "\`root$sa-as kapat\`" yazmalısın.`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    message.channel.send(`<​a:tik:970551956357652481> Artık bot, birisi "\`sa\`" yazınca cevap vermeyecek.`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as-sistemi'],
  permLevel: 0,
  kategori: "Ayarlar"
};
 
exports.help = {
  name: 'sa-as',
  description: 'Sa As ayarlarsın.',
  usage: 'sa-as'
};