const Discord = require("discord.js")

module.exports = {
    nombre: "poll3",
    alias: [],
    run: async (client, message, args) => {
        const contenido = message.content.split("--")
        message.delete().catch()
        const fallo = new Discord.MessageEmbed()
        .setTitle("Lo has hecho mal")
        .setDescription(`<@${message.author.id}> tienes que darme las 3 opciones de la encuesta. Para más información escribe `+"`y!poll`.")
        .setColor("ff9e00")

        if(!contenido[1]) return message.channel.send(fallo).then(msg => msg.delete({ timeout: 10000}))
        if(!contenido[2]) return message.channel.send(fallo).then(msg => msg.delete({ timeout: 10000}))
        if(!contenido[3]) return message.channel.send(fallo).then(msg => msg.delete({ timeout: 10000}))

        const embed = new Discord.MessageEmbed()
        .setTitle("Pregunta: " + contenido[1])
        .addField("Opción 1", contenido[2])
        .addField("Opción 2", contenido[3])
        .addField("Opción 3", contenido[4])
        .setColor("ff9e00")
        .setFooter(`Realizada por: ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)

        const encuesta = await (await message.channel.send(embed))
        
        encuesta.react("1️⃣")
        encuesta.react("2️⃣")
        encuesta.react("3️⃣")


    }
}