const Discord = require('discord.js');
const embed1 = new Discord.MessageEmbed()
.setDescription("Primero dime a quién vas a expulsar") 
.setColor("YELLOW") 
const embed2 = new Discord.MessageEmbed()
.setDescription("Eso le pasó por hacer cosas malas...") 
.setColor("YELLOW") 
const embed3 = new Discord.MessageEmbed()
.setDescription("No he podido expulsarlo... ¡¿Cómo es posible?!") 
.setColor("YELLOW") 
const embed4 = new Discord.MessageEmbed()
.setDescription("Oh, no seas malo. Solo los administradores pueden expulsar a otras personas") 
.setColor("YELLOW") 

module.exports = {
    nombre: "kick",
    alias: [],
    run: (client, message, args) => {
        if (message.member.hasPermission('KICK_MEMBERS') || message.member.hasPermission("ADMINISTRATOR")){
            if (!args[1]){
                message.react('❓')
                return message.channel.send(embed1).then(msg =>(msg.delete({timeout: 5000})))
            }
            var user = message.mentions.members.first();
            user.kick().then((user)=> {
                message.react('✅')
                message.channel.send(embed2)
            }).catch(() => {
                message.channel.send(embed3).then(msg =>(msg.delete({timeout: 5000})))
            })
        }else{
            message.react('🚫')
            return message.channel.send(embed4).then(msg =>(msg.delete({timeout: 5000})))
            }
    }
}