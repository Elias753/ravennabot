const Discord = require('discord.js');
const { RichEmbed } = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
  if(message.author.bot || message.channel.type === "dm") return;

if(!message.member.roles.get('728689448283406339')) return message.channel.send("**Bu Komutu Kullanabilmek İçin **`Kayıt Sorumlusu`** Yetkisine Sahip Olmanız Gerekli.**")
 
let guild = message.guild
 let user = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
let isim = args.slice(1).join(' | ');
 if (!user) return message.reply('**Kime Rol Verceğimi Yazmadın!**');
 if (!isim) return message.reply('**Bir isim girmelisin!**');
  let yas = args.slice(1).join(' ');

   if (!yas) return message.reply('**Bir yaş girmelisin!**');

 await user.setNickname(`• ${isim}`)
 let rol = guild.roles.get('728689480571158608') // erkek rol İD
 let role = guild.roles.get('728689482852860015') // Alıncak rol İd
   let kullanıcı = message.mentions.users.first();
  let member = message.guild.member(kullanıcı);

  
  let sChannel = message.guild.channels.get("731647746024538182"); // chat id 
if(member.roles.has("728689482852860015") && sChannel){
member.addRole('728689480571158608')    // erkek rol İD
member.removeRole('728689479325581417') // kız rol İd
member.removeRole('728689482852860015')  // kayıtsız id 
  

    sChannel.send(` ${member.user} **Aramıza Hoşgeldin, Umarım Keyifli Vakit Geçirirsin.** 💖`)
}else{

member.addRole('728689480571158608')  // erkek rol İD
member.removeRole('728689479325581417')// kız rol İd
member.removeRole('731254903040770221') // kayıtsız id 
}
    const giriş = new Discord.RichEmbed()
	.setColor("RANDOM")
  .setDescription(`\n**Yetkili :${message.author}** \n\n**Kullanıcı :** \ ${kullanıcı}\ \n\n  **Verilen Rol :** \`🔥 ❘ Hydrus\``)
     client.channels.get("731885724273737828").send(giriş) //kayıt-log id

 user.addRole(rol.id)
 user.removeRole(role.id)
let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setAuthor("Kayıt İşlemi Başarılı", `${message.author.displayAvatarURL}`)
 .setDescription(`\n  **Kayıt Edilen Kullanıcı :** \ ${user}\ \n**Değiştirilen Kullanıcı Adı :** \`• ${isim}\` \n  **Kayıt İşleminde Verilen Rol :** \`🔥 ❘ Hydrus\``)
     .setFooter(`Yetkili : ${message.author.username}`) 
    .setThumbnail(client.user.avatarURL)
 return message.channel.send(embed)
}


exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['e','e1'],  
 permLevel: 0
}

exports.help = {
 name: 'erkek1',
 description: ".e @kullanıcı İsim Yaş",
 usage: 'erkek1'
}