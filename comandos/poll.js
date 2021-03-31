const Discord = require("discord.js")

module.exports = {
    nombre: "poll",
    alias: [],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("Bienvenido al comando de encuestas")
        .setDescription("Para crear una escribe `y!poll2/y!poll3/y!poll4/y!poll5` según el número de opciones que añadirás.")
        .addField("Ejemplo:", "y!poll2 --Mañana streamn? --Si --No")
        .setColor("ff9e00")
        

        message.channel.send(embed)
    
    }
}