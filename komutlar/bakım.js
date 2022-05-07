const Discord = require("discord.js");
const db = require("croxydb");
module.exports.run = async (client, message, args) => {
  
let csi = "644228810258251777";
if (!csi === message.author.id){
  return message.reply("<​a:uyari:970552074523799605> **Bu Komutu Sadece Sahibim Kullanabilir**")
}
  
  let csb = db.get("csb");

  if (csb === "KAPALI") {
    await db.set("csb", "AKTİF");
    let cse = new Discord.MessageEmbed()
      .setTitle(client.user.username + " Bot Bakım Modu")
      .setColor("GREEN")
      .setThumbnail(client.user.avatarURL())
      .setTimestamp()
      .setDescription(
        "<​a:tik:970551956357652481> **Bakım Modu Aktif Edildi\n<​a:right:970562756329742366> Bakım Modunu Kapatmak İçin Tekrar `root$bakım` Yazabilirsin Canım**"
      )
      .setFooter("Bakım | CheatStrike");
    message.channel.send(cse);
    message.react(" <​a:kenevir:970598937935372298>");
  } else {

  if (csb === "AKTİF") {
    await db.set("csb", "KAPALI");
    let cse = new Discord.MessageEmbed()
      .setTitle(client.user.username + " Bot Bakım Modu")
      .setColor("RED")
      .setThumbnail(client.user.avatarURL())
      .setTimestamp()
      .setDescription(
        "<​a:tik:970551956357652481> **Bakım Modu Kapatıldı\n<​a:right:970562756329742366> Bakım Modunu Açmam İçin Tekrar `root$bakım` Yazabilirsin Canım**"
      )
      .setFooter("Bakım | CheatStrike");
    message.channel.send(cse);
    message.react(" <​a:kenevir:970598937935372298>");
  } else {
      await db.set("csb", "AKTİF");
    let cse = new Discord.MessageEmbed()
      .setTitle(client.user.username + " Bot Bakım Modu")
      .setColor("GREEN")
      .setThumbnail(client.user.avatarURL())
      .setTimestamp()
      .setDescription(
        "<​a:tik:970551956357652481> **Bakım Modu Aktif Edildi\n<​a:right:970562756329742366> Bakım Modunu Kapatmak İçin Tekrar `root$bakım` Yazabilirsin Canım**"
      )
      .setFooter("Bakım | CheatStrike");
    message.channel.send(cse);
    message.react(" <​a:kenevir:970598937935372298>");
  }
  }
};
exports.conf = {
  aliases: ["b"]
};

exports.help = {
  name: "bakım"
};