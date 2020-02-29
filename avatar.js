const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av","avat",],
  description: "see your or someone's avatar",
  run: async(bot, message, args) => {
      const user = message.mentions.users.first();
      if(!user){
                 const botembed = new Discord.RichEmbed()
                 .setTitle(`Avatar of **${message.author.username}**`)
                 .setImage(`${message.author.avatarURL}`)
                 return message.author.send(botembed) && message.reply(`\`✔\` Your avatar has been sent to you!`).then(avaty => {avaty.delete(5000)}) && message.delete(500);
                 
              } 
              if(!args || !user) return message.channel.send("please mention a user");
                 const embed2 = new Discord.RichEmbed()
                 .setDescription(`**Avatar of ${user.tag}**`)
                 .setImage(`${user.avatarURL}`)
                 return message.author.send(embed2) && message.reply(`\`✔\` ${user.tag}'s avatar has been sent to you!`).then(avatarm => {avatarm.delete(5000)}) && message.delete(500);

  }
};
