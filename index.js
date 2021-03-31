/////////////////NO TOCAR/////////////////


const Discord = require("discord.js")
const client = new Discord.Client()


/////////////////DEPENDENCIAS/////////////////


const fs = require("fs") 
const prefix = "y!"


/////////////////FOLDERS/////////////////


client.comandos = new Discord.Collection()

let archivos = fs.readdirSync("./comandos").filter((f)=> f.endsWith(".js"))

for(var archi of archivos){
    let comando = require("./comandos/" + archi)
    client.comandos.set(comando.nombre, comando)
    console.log("¡"+ archi + " está listo!")
}


/////////////////CLIENTE/////////////////

client.on("message", async message => {    
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(prefix)) return;
    if (!message.guild) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command))
    if(cmd){
      return cmd.run(client, message, args)
    }  

})


client.on("ready", async() => {
    console.log("OHAYOU!")
    await client.user.setActivity("Gotoubun No Hanayome", {
      url: "https://www.twitch.tv/jotis_1",
      type: "STREAMING",
    });
  
})


client.login(process.env.TOKEN)


/////////////////VERIFICACIÓN/////////////////


const embed = new Discord.MessageEmbed()
.setTitle('BIENVENIDO A 🎌|HOLOLIVE ADDICTS|🎌')
.setDescription('Para poder ver todos los canales empieza dándole al emoji de abajo')
.setImage('https://cdn.discordapp.com/attachments/746179353829703691/809863288464211989/Nenechi_Gif.gif')
.setColor('a100ff')

const embed2 = new Discord.MessageEmbed()
.setTitle('AÚN QUEDA 1 PASO')
.setDescription('Selecciona el color `morado` si eres **SEGUIDOR DE TWITCH** y el `rojo` si eres **SEGUIDOR DE YOUTUBE**.')
.setImage('https://cdn.discordapp.com/attachments/806615412271611934/809866290595758140/amelia_vib.gif')
.setColor('a100ff')

client.on('message', async message => {
    if (message.content.startsWith(`${prefix}vr`)){
        const msg = await (await message.channel.send(embed))
        msg.react('🎌')
        

    }
})

client.on('messageReactionAdd', async (reaction, user) =>{
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return

    if(reaction.message.channel.id === "806237053859266600"){
        if(reaction.emoji.name === "🎌") await reaction.message.guild.members.cache.get(user.id).roles.add('806232380872327268') 
        if(reaction.emoji.name === "🎌") await reaction.message.guild.members.cache.get(user.id).roles.remove('806232438421717033')  
    } 
})

client.on('messageReactionRemove', async (reaction, user) =>{
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return

    if(reaction.message.channel.id === "806237053859266600" ){
        if(reaction.emoji.name === "🎌") await reaction.message.guild.members.cache.get(user.id).roles.remove('806232380872327268')      
    }
})
client.on('message', async message => {
    if (message.content.startsWith(`${prefix}yt`)){
        const msg = await (await message.channel.send(embed2))
        msg.react('💜')
        msg.react('♥️')
        

    }
})
client.on('messageReactionAdd', async (reaction, user) =>{
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return

    if(reaction.message.channel.id === "806236980571668510"){
        if(reaction.emoji.name === "💜") await reaction.message.guild.members.cache.get(user.id).roles.add('806231915287281754') 
        if(reaction.emoji.name === "💜") await reaction.message.guild.members.cache.get(user.id).roles.remove('806232380872327268')  
        if(reaction.emoji.name === "♥️") await reaction.message.guild.members.cache.get(user.id).roles.add('806231988667285535') 
        if(reaction.emoji.name === "♥️") await reaction.message.guild.members.cache.get(user.id).roles.remove('806232380872327268')
    } 
})

client.on('messageReactionRemove', async (reaction, user) =>{
    if(reaction.message.partial) await reaction.message.fetch()
    if(reaction.partial) await reaction.fetch()
    if(user.bot) return

    if(reaction.message.channel.id === "806236980571668510" ){
        if(reaction.emoji.name === "💜") await reaction.message.guild.members.cache.get(user.id).roles.remove('806231915287281754')  
        if(reaction.emoji.name === "♥️") await reaction.message.guild.members.cache.get(user.id).roles.remove('806231988667285535')  

    }
})