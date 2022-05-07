 const Discord = require("discord.js");

module.exports.run = async(client,message,args) => {

 if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("<​a:uyari:970552074523799605> Bu Komutu Kullanmak İçin \`Kanalları Yönet\` Yetkisine Sahip Olmalısın");
let csc = message.channel
  
 message.channel.clone({ name: csc.name, permissions: csc.withPermissions, topic: csc.topic, bitrate: this.bitrate })
  message.channel.delete();
  
};
exports.conf = {
aliases:[]
};
exports.help = {
  name: 'nuke'
};