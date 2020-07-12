const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`**Ravenna-Komutlar**`)
  .addField(`**<a:tik1:731872651819352066> Moderasyon-Komutları <a:tik1:731872651819352066>**`,`:white_small_square: \`s!otorol\` = Sunucu giriş yapanlara belirlediğiniz rolü verir. \n:white_small_square: \`s!sayaç\` = Sunucu için sayaç ayarlar. \n:white_small_square: \`s!ban\` = İstediğiniz kişiyi sunucudan engeller. \n:white_small_square: \`s!unban\` = Engellediğiniz kişinin engelini kaldırır .\n:white_small_square: \`s!banlist\` = Engellenmiş kişileri gösterir.\n:white_small_square: \`s!küfür-engel [aç-kapat]\` = Küfürü Engeller. \n:white_small_square: \`s!reklam-engelleme \` = Reklam Paylaşmasını Engeller.  \n:white_small_square:  \`s!slowmode\` = Yavaş Modu Açar. \n:white_small_square: \`s!sil\` = İstediniz Kadar Mesaj Siler. \n:white_small_square: \`s!mute\` = İstediğiniz Kişiyi Geçici Olarak Susturursunuz.\n:white_small_square: \`s!dc\` = Discord daveti oluşturur.\n:white_small_square: \`s!sunucubilgi\` = Sunucu bilgisine ulaşırsınız.  `)
return message.channel.sendEmbed(embed);    
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y'],
  permlevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}
//Lord Creative