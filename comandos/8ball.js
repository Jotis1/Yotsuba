const Discord = require('discord.js')
const embed2 = new Discord.MessageEmbed()
.setDescription("Porfavor, ¿puedes añadir una pegunta?")
.setColor("YELLOW")


module.exports = {
    nombre: "8ball",
    alias: [],
    run: (client, message, args) => {
        if (!args[0]){
            return message.channel.send(embed2).then(msg =>(msg.delete({timeout: 5000})))

        }
        let number = [
            "Sí, no me cabe la menor duda.",
            "No creo.",
            "No se como decirte esto... ehmm. NO.",
            "Depende de tú ya sabes que.",
            "Seguramente.",
            "XD",
            "Pregúntalo más tarde.",
            "No lo tienes nada a tu favor.",
            "Lo tienes a tu favor.",
            
        ]
        const embed = new Discord.MessageEmbed()
    
          .addField(`${message.author.username} pregunta:`,`${args}`, false)
          .addField(`Respuesta:`,number[Math.floor(Math.random() * number.length)], false)
          .setColor("YELLOW")
    
        message.channel.send(embed);
    }
}