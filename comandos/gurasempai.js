const Discord = require("discord.js")

const embed = new Discord.MessageEmbed()
.setDescription(`@Gawr Gura`)
.setColor("YELLOW")
const edit = new Discord.MessageEmbed()
.setDescription(`Oh, todavía no está`)
.setColor("YELLOW")

module.exports = {
    nombre: "a",
    alias: ["Gawr Gura", "Gura"],
    run: async(client, message, args) => {
        
        message.channel.send(embed).then((msg) => {setTimeout(function() {msg.edit(edit);}, 3000)});
    }
}