const Discord = require('discord.js');

module.exports = {
    nombre: "yotsuba",
    alias: "yb",
    
    run: async(client, message, args) => {
        message.react("🇾")
        message.react("🇴")
        message.react("🇹")
        message.react("🇸")
        message.react("🇺")
        message.react("🇧")
        message.react("🇦")


        const embed = new Discord.MessageEmbed()
        .setAuthor(`Autor : ジョティス` , "https://cdn.discordapp.com/attachments/806615412271611934/812344955426963456/ame_gif.gif")
        .setTitle("Yotsuba besto wafle")
        .setColor("ORANGE")
        .setImage("https://cdn.discordapp.com/attachments/806615412271611934/812339230171856896/Yotsuba_uwu.gif")
        .setDescription(`Yotsuba es la waifu de <@460843310265925632>. Si también es la tuya tengo que decirte que tu criterio es muy bueno ^^`)
        .setFooter("Yotsuba Nakano", "https://cdn.discordapp.com/attachments/806615412271611934/812339230171856896/Yotsuba_uwu.gif", { dynamic: true})

        message.channel.send(embed)

    }
}