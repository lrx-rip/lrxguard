const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<​a:uyari:970552074523799605> **Bu Komutu Kullanabilmek İçin `Üyeleri Yasakla` Yetkisine Sahip Olmalısın Knk");
    if (!args[0]) {
        return message.channel.send(`<​a:uyari:970552074523799605> **Bu Komutu Kullanmak İçin Bir Kullanıcının ID'sini Belirtmen Gerek**`)
   }
   var sebeb = args.slice(1).join(" ");
   var lrx = args[0]
   var now = new Date()
   if (!sebeb) {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(lrx)) {
                   return message.channel.send(`<​a:uyari:970552074523799605> **Bu Kullanıcı Zaten Yasaklanmış**`)
               }
               message.guild.members.ban(lrx, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<@!${user.id}> **Adlı Kullanıcı Banlandı** <​a:fire:970596429347311648>`);
                   })
                   .catch(error => {
                       message.channel.send(` <​a:uyari:970552074523799605> **Bir Hata Oluştu**`);
                       console.error(' Hata:', error);
                   });
           });
   } else {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(lrx)) {
                   return message.channel.send(`<​a:uyari:970552074523799605> **Bu Kullanıcı Zaten Yasaklanmış**`)
               }
               message.guild.ban(lrx, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<@!${user.id}> sunucudan yasaklandı <a:ban:613373970984468491>`);
                   })
                   .catch(error => {
                       message.channel.send(` <​a:uyari:970552074523799605> Bir Hata Oluştu`);
                       console.error(' Hata:', error);
                   });
           });
   }
 
}
exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['force-ban'],
   permLevel: 0
 
};
 
exports.help = {
   name: 'forceban',
   description: 'L R X',
   usage: 'forceban'
};