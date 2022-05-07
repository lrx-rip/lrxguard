//---discord.gg/cheatstrike

const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
let talkedRecently = new Set();
    module.exports = message => {
        if (talkedRecently.has(message.author.id)) {
        return;
    }

    // cheatstrike.net

    talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 2500);

        // Let Tanımları
        let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
        let params = message.content.split(' ').slice(1);
        let client = message.client;
        let perms = client.elevation(message);
        let cmd;

        // İf Tanımları
        if (message.author.bot) return;
        if (!message.content.startsWith(ayarlar.prefix)) return;
        if (!client.commands.has(command)) {
            if (client.aliases.has(command)) {
                return false;
            } else {
                const cs= new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`<​a:uyari:970552074523799605> Üzgünüm, Komutlarım Arasında \`${command}\` İsmiyle Eşleşen Bir Komut Yok\n\nEğer Komutlarıma Bakmak İstersen **root$yardım** Yazarak Yardım Menüsünü Görütüleyebilirsin.`)
                .setFooter('CheatStrike')
                message.channel.send(cs)
  }
        }
            if (client.commands.has(command)) {
                cmd = client.commands.get(command);
            } else if (client.aliases.has(command)) {
                cmd = client.commands.get(client.aliases.get(command));
            }
                if (cmd) {
                  const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// L R X
if(message.author.id !== '644228810258251777') return;

function gönderkardesim(content) {
const infoEmbed = new Discord.MessageEmbed()
.setColor('AQUA')
.setDescription(content)
.setTimestamp()
.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
return message.channel.send(infoEmbed)
};

const durum = await database.fetch(client.user.id);
if(durum == true) {

await database.delete(client.user.id);
return gönderkardesim('<​a:tik:970551956357652481> Bakım Başarıyla Sonlandırıldı');

} else {

await database.set(client.user.id, true);
database.set(client.user.id+':)', { 
author: message.author,
time: Date.now() 
});

return gönderkardesim('<​a:tik:970551956357652481> Bakım Modu Başarıyla Açıldı\n<​a:right:970562756329742366> Artık Hiç Kimse Komutları Kullanamayacak');
};


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 0
};
 
exports.help = {
  name: 'bakım-modu'
};// cheatstrike.net
                    if (perms < cmd.conf.permLevel) return;
                    cmd.run(client, message, params, perms);
                  
                }
      
        };