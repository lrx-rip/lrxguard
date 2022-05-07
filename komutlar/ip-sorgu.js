const { MessageEmbed } = require("discord.js");
const snekfetch = require('snekfetch');
exports.run = async (client, message, args) => {
//discord.gg/cheatstrike
let embed = new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setFooter(`CheatStrike`)

if(!args[0]) 
return message.channel.send(embed.setDescription(`<​a:uyari:970552074523799605> **IP Belirtmelisin**`)).then(w => w.delete({timeout: 7500}));
snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {
 message.channel.send(embed.setThumbnail(message.author.avatarURL({dynamic: true}))//cheatstrike.net
 .setImage("https://media.giphy.com/media/R1bJi4UpRwKC9Va4xU/giphy.gif")
 .setDescription(`<​a:right:970562756329742366> IP: \`${args[0]}\`\n<​a:right:970562756329742366> ISP: \`${r.body.isp}\`\n<​a:right:970562756329742366> ASN: \`${r.body.as}\`\n<​a:right:970562756329742366> Country: \`${r.body.country}\`\n<​a:right:970562756329742366> City: \`${r.body.city}\`\n<​a:right:970562756329742366> Zip Code: \`${r.body.zip}\``))
});
// L  R  X

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "ip-sorgu"
};