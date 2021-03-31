const Discord = require('discord.js');
const embed1 = new Discord.MessageEmbed()
.setDescription("Primero dime a quién vas a banear") 
.setColor("YELLOW") 
const embed2 = new Discord.MessageEmbed()
.setDescription("Su nivel de maldad... ¡era absoluto!") 
.setColor("YELLOW") 
const embed3 = new Discord.MessageEmbed()
.setDescription("No he podido banearlo... ¡¿Cómo es posible?!") 
.setColor("YELLOW") 
const embed4 = new Discord.MessageEmbed()
.setDescription("De verdad querías banear a otra persona... ¡¿TAN MALO ERES?!") 
.setColor("YELLOW") 


module.exports = {
    nombre: "ban",
    alias: [],
    run: (client, message, args) => {
        if (message.member.hasPermission('BAN_MEMBERS') || message.member.hasPermission("ADMINISTRATOR")){
            if (!args[1]){
                message.react('❓')
                return message.channel.send(embed1).then(msg =>(msg.delete({timeout: 5000})))

            }
            var user = message.mentions.members.first();
            user.ban().then((user)=> {
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