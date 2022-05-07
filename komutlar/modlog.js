const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) 
return message.channel.send(`<​a:uyari:970552074523799605> Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`codeminglog_${message.guild.id}`)

if (args[0] === "sıfırla" || args[0] === "kapat") {

if(!logkanal) return message.channel.sendEmbed(new Discord.MessageEmbed()

                                              
.setDescription(`952285968524795985`)
.setColor("RED"));


db.delete(`codeminglog_${message.guild.id}`)


message.channel.sendEmbed(new Discord.MessageEmbed()
   
                        
.setDescription(`<​a:tik:970551956357652481> Mod-Log Kanalı başarıyla sıfırlandı.`)
.setColor("GREEN"));


return
}

if (!logk) return message.channel.sendEmbed(new Discord.MessageEmbed()
.setDescription(`<​a:uyari:970552074523799605> Mod-Log kanalı belirt!`)
.setColor("RED"));


db.set(`codeminglog_${message.guild.id}`, logk.id)

message.channel.send(new Discord.MessageEmbed()
.setDescription(`<​a:tik:970551956357652481> Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`)
.setColor("GREEN"));

console.log(`Mod-log komutu ${message.author.username} Tarafından kullanıldı`)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 0 
};
exports.help = {
    name: 'modlog',
    description: 'voxic',
    usage: 'modlog'
};