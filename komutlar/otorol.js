const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	if (!message.guild) return message.author.sendMessage('<​a:uyari:970552074523799605> Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');
  
  if(!message.member.roles.some(r => ["952284789162008687" , "952285818960101486"].includes(r.id))) // AYARLANABİLİR OTOROL BY L R X
    return message.reply("<​a:uyari:970552074523799605> Bu Komutu Kullanmak İçin Yeterli Yetkin Bulunmamakta !")
  
//------------------------CONST KISMI------------------------\\
  
//---------TAG---------\\
let tag = 'tag'
//---------TAG---------\\

//----------------------------Hesap Kısmı------------------------------\\
const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
//----------------------------Hesap Kısmı------------------------------\\
  
//----------------------------Dokunma Bu Kısıma------------------------------\\
const çevirimiçi = message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
const toplam = message.guild.memberCount
const ttag = message.guild.members.filter(m => m.user.username.includes(tag)).size
//----------------------------Dokunma Bu Kısma------------------------------\\
  
//------------------------CONST KISMI------------------------\\
//        DİSCORD.GG/CHEATSTRİKE - CHEATSTRİKE.NET - L R X       \\


//------------------------SAY KISMI------------------------\\
    const strigaembed = new Discord.RichEmbed()
        .setColor("RED")
    .setDescription(`\`>\` Sunucuda **${toplam}** adet üye.
\`>\` Şu anda toplam **${count}** kişi seslide. 
\`>\` Toplamda **${ttag}** taglı üye ailemizin bir parçası.`)
    message.channel.send(strigaembed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [""],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
}