const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.displayAvatarURL;
    let sinfoEmbed = new Discord.RichEmbed()
    .setDescription('Server Information')
    .setColor('#9400D3')
    .setThumbnail(message.guild.displayAvatarURL)
    .addField('Server Name', message.guild.name)
    .addField('Created at', message.guild.createdAt)
    .addField('You joined at', message.member.joinedAt)
    .addField('Total Members', message.guild.memberCount);

    return message.channel.send(sinfoEmbed);


}
 
module.exports.help = {
  name: "serverinfo"
}