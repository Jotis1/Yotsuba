const Discord = require("discord.js")
const randomPuppy = require('random-puppy');

module.exports = {
    nombre: "meme",
    alias: [],
    run: async (client, message, args) => {
        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
          ]
        
          let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
        
          message.channel.startTyping();
          
          randomPuppy(subreddit).then(async url => {
            const embed = new Discord.MessageEmbed()
            .setTitle("AniMeme")
            .setDescription(`Categoría: ${subreddit}`)
            .setImage(url)
            .setColor("YELLOW")
            .setFooter("🎌| Hololive Addicts |🎌", "https://cdn.discordapp.com/attachments/806615412271611934/810927917013794846/Mori_Calliope_2.jpg")
            await message.channel.send({embed
            }).then(() => message.channel.stopTyping());
          }).catch(err => console.error(err));
        
        }
    
}