const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`Start ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
	
});






const aprefix = "-";
const dev = ['283580465862934539','444918581659172864'];
client.on('message', message => {
    var arg = message.content.split(` `).slice(1).join(' ');
      if (!dev.includes(message.author.id)) return;
     
  if (message.content.startsWith(aprefix + 'setg')) {
    client.user.setGame(arg);
      message.channel.send(`**✅   ${arg}**`)
  } else
  if (message.content.startsWith(aprefix + 'setw')) {
  client.user.setActivity(arg, {type:'WATCHING'});
      message.channel.send(`**✅   ${arg}**`)
  } else
  if (message.content.startsWith(aprefix + 'setl')) {
  client.user.setActivity(arg , {type:'LISTENING'});
      message.channel.send(`**✅   ${arg}**`)
  } else
  if (message.content.startsWith(aprefix + 'sets')){
    client.user.setGame(arg, "https://www.twitch.tv/bot");
      message.channel.send(`**✅ ${arg} **`)
  } else
  if (message.content.startsWith(aprefix + 'setname')) { //لتغير اسم البوت
  client.user.setUsername(arg).then
      message.channel.send(`تم تغيير اسم البوت الى ..**${arg}** `)
} else
 
if (message.content.startsWith(aprefix + 'setavatar')) { //لتغير صورة البوت
  client.user.setAvatar(arg);
    message.channel.send(`تم تغير صورة البوت لي :**${arg}** `);
} else
 
if (message.content.startsWith(aprefix + 'setonline')) { //لتغير حالت البوت لي  online
client.user.setStatus("online")
    message.channel.send(`**تم تغير حالت البوت لي online** `);
} else
   
if (message.content.startsWith(aprefix + 'setdnd')) { //~~~ dnd
client.user.setStatus("dnd")
    message.channel.send(`**تم تغير حالت البوت لي dnd** `);
} else
   
if (message.content.startsWith(aprefix + 'setidle')) { //~~~ idle
client.user.setStatus("idle")
    message.channel.send(`**تم تغير حالت البوت لي idle** `);
} else
 
if (message.content.startsWith(aprefix + 'setoffline')) { //~~~ offline
client.user.setStatus("offline")
    message.channel.send(`**تم تغير حالت البوت لي offline** `);
}
});


client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField(' BOT BY : ',`Squad Team`) 
.setColor('#7d2dbe')
message.channel.sendEmbed(embed);
}
});








client.login(process.env.BOT_TOKEN);
