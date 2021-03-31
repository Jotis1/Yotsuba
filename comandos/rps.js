const Discord = require('discord.js')

///EMBEDS///

const empate = new Discord.MessageEmbed()
.setDescription("Ha sido empate, los dos sacamos ' + (args[1]).toLowerCase()")
.setColor("YELLOW")
const win1 = new Discord.MessageEmbed()
.setDescription("He ganado, jeje. Saqué **PAPEL**")
.setColor("YELLOW")
const win2 = new Discord.MessageEmbed()
.setDescription("He ganado, jeje. Saqué **TIJERA**")
.setColor("YELLOW")
const win3 = new Discord.MessageEmbed()
.setDescription("He ganado, jeje. Saqué **PIEDRA**")
.setColor("YELLOW")
const lose1 = new Discord.MessageEmbed()
.setDescription("Has ganado. Seguro que has hecho trampas...¿Cómo supiste que iba a sacar **tijera**?")
.setColor("YELLOW")
const lose2 = new Discord.MessageEmbed()
.setDescription("Has ganado. Seguro que has hecho trampas...¿Cómo supiste que iba a sacar **piedra**?")
.setColor("YELLOW")
const lose3 = new Discord.MessageEmbed()
.setDescription("Has ganado. Seguro que has hecho trampas...¿Cómo supiste que iba a sacar **papel**?")
.setColor("YELLOW")







module.exports = {
    nombre: "rps",
    alias: ["ppt"],
    run: (client, message, args) => {
        if (!args[1]){
            const embed1 = new Discord.MessageEmbed()
            .setDescription("Comando en mantenimiento... :c")
            .setColor("YELLOW")
            return message.channel.send(embed1).then(message=>(message.delete({timeout: 5000})))
        }

        let choices = ['piedra','papel','tijera']
        if (choices.includes(args[1].toLowerCase())) {
            let number = Math.floor(Math.random() * 3)
            if (number == 1){
                return message.channel.send(empate)

            }   
            if (number == 2){
                if ((args[1]).toLowerCase() == "piedra" ) {
                    return message.channel.send(win1)
                }
                if ((args[1]).toLowerCase() == "papel" ) {
                    return message.channel.send(win2)
                }
                if ((args[1]).toLowerCase() == "tijera" ) {
                    return message.channel.send(win3)
                }
                
            }
            if (number == 0){
                if ((args[1]).toLowerCase() == "piedra" ) {
                    return message.channel.send(lose1)
                }
                if ((args[1]).toLowerCase() == "papel" ) {
                    return message.channel.send(lose2)
                }
                if ((args[1]).toLowerCase() == "tijera" ) {
                    return message.channel.send(lose3)
                }
            }

        } else{
            const embed = new Discord.MessageEmbed()
            .setDescription("Porfavor, añade algunas de las siguientes opciones: <piedra/papel/tijera>")
            .setColor("YELLOW")
            return message.channel.send(embed)
        }
    }
}