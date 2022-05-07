const discord = require('discord.js')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`<​a:uyari:970552074523799605> Bu Komutu Kullanabilmek İçin **Kullanıcı Adlarını Yönet** Yetkisine Sahip Olmalısın.`);
  
let phentos = message.mentions.members.first()
if (!phentos) return message.channel.send(`<​a:uyari:970552074523799605> Bir kullanıcı etiketlemelisin.`)

let isim = args.slice(1).join(' ')
if (!phentos) return message.channel.send(`<​a:uyari:970552074523799605> Değiştirilicek ismi girin.`)

phentos.setNickname(isim)
message.channel.send(`<​a:tik:970551956357652481> ${phentos} Adlı Kullanıcının Yeni İsmi Başarıyla **${isim}\** Olarak Ayarlandı!`)
}

exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['isim', 'i-değiştir', 'isimdeğiştir', 'değiştir-isim'],
  permlevel: 0
}
exports.help = {
  name: 'isim-değiştir',
  usage: 'v12 isim değiştir',
  description: 'isim-değiştir'
}
