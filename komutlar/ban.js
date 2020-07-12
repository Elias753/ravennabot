  /*
// config.json kanalı oluştur alttakini içine at


{
  "logsChannel": "⛔-ban-log"

}


*/ 


const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');

exports.run = async (client, message, args) => {
   if(message.author.bot || message.channel.type === "dm") return;
 
  // ↓ ↓ ↓ ↓ ↓ ROL İD'LERİ VE EMOJİ İD'LERİ BU KISMA GİRİLİR ↓ ↓ ↓ ↓ ↓ //

  let yetkiliRolID = '728689444932288513'

  
  
  let komutuKullanmakİçinUyarıMesajıEmojisi = '<a:uyari:731871957800321065> '
  let KomutKullanılanChatEmojisi = '<a:uyari:731871957800321065>  '
  let BanLogEmojisi = '<a:uyari:731871957800321065>  '
  let KullanıcıDmEmojisi = '<a:yukleniyor:731872840101527594>  '
  let KimYasaklanıcakEmojisi = '<a:banned:731871935599869963>  '
  let YasaklanamazKullanıcıEmojisi = '<a:uyari:731871957800321065>  '
  let BanLogBulamıyorumEmojisi = '<a:uyari:731871957800321065>  '
  let BanSebebiEmojisi = '<a:banned:731871935599869963> '
  ///////////////////////////////////////////////////////////////////////
  // ↓ ↓ ↓ ↓ ↓ KOMUTU KULLANMAK İÇİN GEREKLİ YETKİ UYARISI VERİR  ↓ ↓ ↓ ↓ ↓ //
  
    var embed1 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(`** ${komutuKullanmakİçinUyarıMesajıEmojisi} Bu Komutu Kullanabilmek İçin <@&${yetkiliRolID}> Rolüne Sahip Olmanız Gereklidir.**  `) 
    .setThumbnail(message.author.avatarURL)
  
   if(!message.member.roles.has(`${yetkiliRolID}`)) return message.channel.send(embed1)///////////////
  
   let guild = message.guild
   let reason = args.slice(1).join(' ');
   let user = message.mentions.users.first();
   let modlog = guild.channels.find('name', config.logsChannel); // buraya dokunma 
    // ↓ ↓ ↓ ↓ ↓ KOMUTU KULLANMAK İÇİN GEREKLİ BAN-LOG KANAL UYARISI VERİR  ↓ ↓ ↓ ↓ ↓ //
    var modlog2 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(`**${BanLogBulamıyorumEmojisi}ban-log Kanalını Bulamıyorum**`) 
   if (!modlog)  return message.channel.send(modlog2)
    // ↓ ↓ ↓ ↓ ↓ KİMİ YASAKLAYACAĞININ UYARISINI VERİR  ↓ ↓ ↓ ↓ ↓ //
    let whouser = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(`**${KimYasaklanıcakEmojisi}Kimi Yasaklayacağını yazmalısın.**`)
    if (message.mentions.users.size < 1) return message.channel.send(whouser).catch(console.error);
    // ↓ ↓ ↓ ↓ ↓ BAN SEBEBİ UYARISINI VERİR  ↓ ↓ ↓ ↓ ↓ //
    let ban1reason = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(`**${BanSebebiEmojisi}Ban Sebebini Belirtmelisin.**`)
   if (reason.length < 1) return message.channel.send(ban1reason)
    // ↓ ↓ ↓ ↓ ↓ KULLANICIYI YASAKLAYAMAM UYARISINI VERİR  ↓ ↓ ↓ ↓ ↓ //
    let noban = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(`**${YasaklanamazKullanıcıEmojisi}Bu Kullanıcıyı Yasaklayamam.**`)
    if (!message.guild.member(user).bannable) return message.reply(noban);
    message.guild.ban(user, 2);
    // ↓ ↓ ↓ ↓ ↓ CHATE BANLANDI MESAJI ATAR  ↓ ↓ ↓ ↓ ↓ //
    let ban1 = new Discord.RichEmbed()
   .setColor(0x00AE86)
   .setDescription(`${KomutKullanılanChatEmojisi}` +` ` + '**Sunucudan**'+` ` +'`' +`${reason}`+'`'+` ` + '**Sebebiyle Yasaklandı.**')
   .setImage('https://i.pinimg.com/originals/b2/84/33/b28433c392959f923ff0d736cd89dcbd.gif')
    .setTimestamp()
    message.channel.send(ban1)
    // ↓ ↓ ↓ ↓ ↓ BAN-LOG'A BANLANDI MESAJI ATAR  ↓ ↓ ↓ ↓ ↓ //
    let ban = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(`${BanLogEmojisi}${user}`+` ` + '**Sunucudan**'+` ` +'`' +`${reason}`+'`'+` ` + '**Sebebiyle Yasaklandı.**')
    .setFooter("Banlayan: "+ message.author.tag).setColor("RANDOM")  
    .setTimestamp()
    modlog.sendEmbed(ban)
    // ↓ ↓ ↓ ↓ ↓ KULLANICININ ÖZELİNE BANLANDI MESAJI ATAR  ↓ ↓ ↓ ↓ ↓ //
    let banlanan = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setAuthor(message.guild.name, message.guild.iconURL)
   .setDescription(`${KullanıcıDmEmojisi}`+ '`'+ `${reason}`+ ` ` + '`' +`**Sebebiyle Sunucudan Yasaklandın.**  `) 
   .setImage('https://i.pinimg.com/originals/b2/84/33/b28433c392959f923ff0d736cd89dcbd.gif')
   .setTimestamp()
   return user.sendEmbed(banlanan)

};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};