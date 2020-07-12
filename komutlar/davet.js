const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`<a:694276549737840690:698617667124199485>${client.user.username} Davet Menüsü <a:694276549737840690:698617667124199485> `)
        .setDescription(`:white_small_square:**Botun Davet Linki İçin** [TIKLA](https://discordapp.com/oauth2/authorize?client_id=698614834261917738&scope=bot&permissions=8) \n:white_small_square:**Destek Sunucusu İçin** [TIKLA](https://discord.gg/pzVGBE)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
//Lord Creative