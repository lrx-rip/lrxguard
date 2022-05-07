const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`${client.user.username} `,client.user.avatarURL())
.setDescription(`<​a:fire:970596429347311648> Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor`)
.setTimestamp()
.addField('> <​a:lrx:970544074350264360>  root$avatar ',' Kişinin Avatarını Gösterir')
.addField('> <​a:lrx:970544074350264360>  root$afk ',' AFK Moduna Geçersiniz')
.addField('> <​a:sahip:971883676105330708>  root$etiket-engel ',' Etiket Engel Sistemini Açabilirsiniz/Kapatabilirsiniz')
.addField('> <​a:lrx:970544074350264360>  root$isim-değiştir ',' Etiketlediğiniz Kullanıcının İsmini Değiştirebilirsiniz')
.addField('> <​a:lrx:970544074350264360>  root$kullanıcı-bilgi ',' kullanıcı bilgilerinizi sıralar')
.addField('> <​a:lrx:970544074350264360>  root$küfür-engel aç/kapat ',' Küfür Engeli Açabilirsiniz/Kapatabilirsiniz)')
.addField('> <​a:lrx:970544074350264360>  root$ping ',' Botun Pingini Gösterir')
.addField('> <​a:lrx:970544074350264360>  root$reklam-engel aç/kapat ',' Reklam Engel Sistemini Açabilirsiniz/Kapatabilirsiniz')
.addField('> <​a:lrx:970544074350264360>  root$sa-as ',' Birisi Sa Yazdığında Bot Cevap Verir')
.addField('> <​a:lrx:970544074350264360>  root$sunucu-bilgi ',' Sunucunun Bilgilerini atar')
.addField('> <​a:lrx:970544074350264360>  root$yavaş-mod ',' Slow Mode Açar / Anti Flood Sistemi')
.addField('> <​a:lrx:970544074350264360>  root$ip-sorgu ',' İp Sorgulama Aracı')
.addField('> <​a:sahip:971883676105330708>  root$bakım ',' Bakım Modunu Açabilirsiniz/Kapatabilirsiniz')
.addField('> <​a:lrx:970544074350264360>  root$reboot ',' Botu Yeniden Başlatabilirsiniz')
.addField('> <​a:lrx:970544074350264360>  root$nuke ',' Kanalını Sıfırlayabilirsiniz')
.addField('> <​a:lrx:970544074350264360>  root$forceban ',' Kullanıcının ID`si İle Banlayabilirsiniz')
.addField('> <​a:lrx:970544074350264360>  root$otorol ',' Otorol Sistemini Ayarlıyabilirsiniz')
.setFooter(`<​a:right:970562756329742366> Bu komut ${message.author.username} tarafından istendi!`, message.author.avatarURL)
.setTimestamp()
.setFooter("Yardım Menüsü | CheatStrike")
.setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReuAHoW655qurVzbPLWqqc_ShK5Z-ZDv0ckw&usqp=CAU")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['lrx'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};