const Discord = require('discord.js')
const embed1 = new Discord.MessageEmbed()
.setDescription("Cara")
.setColor("YELLOW")
const embed2 = new Discord.MessageEmbed()
.setDescription("Cruz")
.setColor("YELLOW")


module.exports = {
    nombre: "coin",
    alias: [],
    run: (client, message, args) => {
        let number = Math.floor(Math.random() * 2);
        if (number === 1){
            message.channel.send(embed1)
        }
        if (number === 0){
            message.channel.send(embed2)
        }
    }
}