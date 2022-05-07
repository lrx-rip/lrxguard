const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

exports.run = async (bot, msg, args) => {
  
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');

        let user = msg.mentions.users.first() || msg.author;

        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "<​a:uyari:970552074523799605> Oynadığı Bir Oyun Yok."
        userinfo.status = user.presence.status.toString()

        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)

        userinfo.sonmesaj = user.lastMessage || "<​a:uyari:970552074523799605> Son Yazılan Mesaj Bulunamadı." || "<​a:uyari:970552074523799605> Son Yazılan Mesaj Gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('<​a:right:970562756329742366> **YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')

        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)

        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)

        const uembed = new Discord.MessageEmbed()

        .setTitle(user.tag)
        .addField(`<​a:right:970562756329742366> Şu Anda Oynadığı Oyun :`, userinfo.od1, false)
        .addField(`<​a:right:970562756329742366> Durum :`, userinfo.status, false)
        .setColor('GREEN')
        .addField(`<​a:right:970562756329742366> Katılım Tarihi (Sunucu) :`, userinfo.dctarihkatilma, false)
        .addField(`<​a:right:970562756329742366> Katılım Tarihi (Discord) :`, userinfo.dctarih, false)
        .addField(`<​a:right:970562756329742366> Kimlik :`, userinfo.id, true)
        .addField(`<​a:right:970562756329742366> Bot Mu? :`, userinfo.bot, true)
        .addField(`<​a:right:970562756329742366>Roller :`, `${msg.guild.members.cache.get(user.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu Kullanıcıda Hiç Rol Bulunmuyor!**"}`, false)
        .addField(`<​a:right:970562756329742366> Son Gönderdiği Mesaj :`, userinfo.sonmesaj, false)
        
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kullanıcı-bilgim','kullanıcı-bilgi','kullanıcıbilgi'],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcıbilgim',
  description: 'voxic',
  usage: 'kullanıcıbilgim'
};