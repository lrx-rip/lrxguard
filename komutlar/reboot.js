const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => { 
   
  var plantio = new Discord.MessageEmbed()   
      .setTitle('Mrb Canım,' + message.member.user.username)
      .setDescription('<​a:uyari:970552074523799605> **Sadece Sahibim Bu Komutu  Kullanabilir** ')
      .setColor('RANDOM') 
  

  if(message.author.id !== "644228810258251777") return message.channel.send(plantio)
     

  var embed = new Discord.MessageEmbed()   
      .setTitle('**Merhaba Sahibim,**')
      .setDescription('**Beni Yeniden Başlatmak İstediğine Eminsen Aşağıdaki <​a:tik:970551956357652481> İşaretine Bir Kere Dokunur Musun Aşkım** ')
      .setColor('RANDOM')
message.channel.send(embed).then(async function (sentEmbed) {
            const emojiArray = ["<​a:tik:970551956357652481>"];
            const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
            await sentEmbed.react(emojiArray[0]).catch(function () { });
            var reactions = sentEmbed.createReactionCollector(filter, {
                time: 30000
            });
reactions.on("end", () => sentEmbed.edit("<​a:tik:970551956357652481> **İşlemi İptal Ettim** "));
    reactions.on("collect", async function (reaction) {
                if (reaction.emoji.name === "<​a:tik:970551956357652481>") {
message.channel.send('<​a:tik:970551956357652481> **İşlem Onaylandı** ')
    
          
    console.log(`<​a:loading:970555467011063828> **CMD: Bot Yeniden Başlatılıyor...**`);
    process.exit(0);
 
     
        }
    })
})

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r"],
  permLevel: 0
};

exports.help = {
  name: 'reboot',
  description: 'reboot',
  usage: 'reboot'
};