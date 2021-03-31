const Discord = require('discord.js');

module.exports = {
    nombre: "nao",
    alias: "n",
    
    run: async(client, message, args) => {

        message.react("🇳")
        message.react("🇦")
        message.react("🇴")



        const embed = new Discord.MessageEmbed()
        .setAuthor(`Autor : Rafa` , "https://cdn.discordapp.com/avatars/734783081600253986/00a69081d0186f4494ce29faa4fa88f9.webp?size=4096")
        .setTitle("Vuelve, aunque tengas obstáculos, vuelve.")
        .setColor("fc0002")
        .setImage("https://i.imgur.com/3PsW38T.gif")
        .setDescription(``)
        .setFooter("Nao Tomori", "https://cdn.discordapp.com/attachments/812345871659434004/815964259137224744/corazon_rojo_corazoom_by_lalyysweet_d7oud5m-fullview.png", { dynamic: true})

        message.channel.send(embed)

    }
}