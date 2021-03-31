const Discord = require("discord.js")

const embed = new Discord.MessageEmbed()
.setDescription(`Porfavor, incluye a quien quieras puntuar`)
.setColor("YELLOW")


module.exports = {
    nombre: "rate",
    alias: [],
    run: (client, message, args) => {
        let number = Math.floor(Math.random() * 101);
        if (!args[0]){
            const embed3 = new Discord.MessageEmbed()
            .setDescription(`Te daría un **${number}** sobre 100`)
            .setColor("YELLOW")
        return message.channel.send(embed3)
        } else {
            let user = message.mentions.users.first();
            let avatar = user.displayAvatarURL({dynamic: true });
            if (!user){
                return message.channel.send(embed)
            }
            if (user.username == "Amelia Watson"){
                const embed4 = new Discord.MessageEmbed()
                .setTitle("Esta mal que lo diga yo pero...")
                .setDescription("¡Por supuesto que me doy un 100!")
                .setColor("YELLOW")
                .setFooter(`Amelia Watson`, `${avatar}`)
                return message.channel.send(embed4)
            }
            const embed2 = new Discord.MessageEmbed()
            .setDescription(`Le daría a ${user.username} un **${number}** sobre 100`)
            .setColor("YELLOW")
            return message.channel.send(embed2)
        }
    }
}