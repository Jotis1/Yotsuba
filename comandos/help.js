const Discord = require("discord.js")
const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')

module.exports = {
    nombre: "help",
    alias: [],
    run: async (client, message, args) => {
        let helpMenu = new Menu(message.channel, message.author.id, [
            {
               
                name: 'INICIO',
            
                content: new MessageEmbed({
                    title: 'BIENVENIDO AL CANAL DE AYUDA DE YOTSUBA NAKANO',
                    description: 'Elige la clase de comandos que quieres saber.',
                    color: 'ff9e00',
                    fields: [
                        {
                            name: 'Comandos divertidos', 
                            value: "1️⃣",
                            inline: false
                        },
                        {
                            name: 'Comandos útiles', 
                            value: "2️⃣",
                            inline: false
                        },
                        {
                            name: 'Comandos personales', 
                            value: "3️⃣",
                            inline: false
                        },
                        
                    ]
                    
                
                }),
            
                reactions: {
                    '⏹️': 'delete',
                    '1️⃣': 'Comandos Divertidos',
                    '2️⃣': 'Comandos útiles',
                    '3️⃣': 'Comandos personales',
                }
            },
            {
               
                name: 'Comandos Divertidos',
            
                content: new MessageEmbed({
                    title: 'Comandos Divertidos',
                    description: 'Página 1/5',
                    color: 'ff9e00',
                    fields: [
                        {
                            name: 'y!8ball', 
                            value: "Haz una pregunta y te la respondo.",
                            inline: false
                        },
                        {
                            name: 'y!baka', 
                            value: "Llamas a alguien baka...",
                            inline: false
                        },
                        {
                            name: 'y!banana', 
                            value: "No, no, no. No te voy a decir que es esto.",
                            inline: false
                        },
                        {
                            name: 'y!blush', 
                            value: "Te pones como un tomate.",
                            inline: false
                        },
                        {
                            name: 'y!bye', 
                            value: "¿Ya tes vas?",
                            inline: false
                        },
                        
                    ]
                    
                
                }),
            
                reactions: {
                    '⏹️': 'delete',
                    '⏩': 'Comandos Divertidos2',
                    '⏏️': 'INICIO'
                }
            },
            {
               
                name: 'Comandos Divertidos2',
            
                content: new MessageEmbed({
                    title: 'Comandos Divertidos',
                    description: 'Página 2/5',
                    color: 'ff9e00',
                    fields: [
                        {
                            name: 'y!clap', 
                            value: "Aplaudes a alguien, supongo.",
                            inline: false
                        },
                        {
                            name: 'y!coin', 
                            value: "Cara o cruz.",
                            inline: false
                        },
                        {
                            name: 'y!fly', 
                            value: "Vuela, vuela!",
                            inline: false
                        },
                        {
                            name: 'y!happy', 
                            value: "I'm happy",
                            inline: false
                        },
                        {
                            name: 'y!heal', 
                            value: "¿Te has hecho daño?",
                            inline: false
                        },
                        
                    ]
                    
                
                }),
            
                reactions: {
                    '⏹️': 'delete',
                    '⏪': 'Comandos Divertidos',
                    '⏩': 'Comandos Divertidos3',
                    '⏏️': 'INICIO',
                }
            },
            {
               
                name: 'Comandos Divertidos3',
            
                content: new MessageEmbed({
                    title: 'Comandos Divertidos',
                    description: 'Página 3/5',
                    color: 'ff9e00',
                    fields: [
                        {
                            name: 'y!jump', 
                            value: "Salta ^^",
                            inline: false
                        },
                        {
                            name: 'y!kill', 
                            value: "Oh NO! No lo hagas!",
                            inline: false
                        },
                        {
                            name: 'y!kiss', 
                            value: "Besa a una persona.",
                            inline: false
                        },
                        {
                            name: 'y!like', 
                            value: "Demuestra que te gusta algo!",
                            inline: false
                        },
                        {
                            name: 'y!love', 
                            value: "Demuestra que te gusta alguien.",
                            inline: false
                        },
                        
                    ]
                    
                
                }),
            
                reactions: {
                    '⏹️': 'delete',
                    '⏪': 'Comandos Divertidos2',
                    '⏩': 'Comandos Divertidos4',
                    '⏏️': 'INICIO',
                }
            },
            {
               
                name: 'Comandos Divertidos4',
            
                content: new MessageEmbed({
                    title: 'Comandos Divertidos',
                    description: 'Página 4/5',
                    color: 'ff9e00',
                    fields: [
                        {
                            name: 'y!pat', 
                            value: "Pat, pat, pat...",
                            inline: false
                        },
                        {
                            name: 'y!pout', 
                            value: "Pon pucheritos.",
                            inline: false
                        },
                        {
                            name: 'y!revive', 
                            value: "Revive a alguien.",
                            inline: false
                        },
                        {
                            name: 'y!shoot', 
                            value: "Nooo!",
                            inline: false
                        },
                        {
                            name: 'y!sip', 
                            value: "Bebe té.",
                            inline: false
                        },
                        
                    ]
                    
                
                }),
            
                reactions: {
                    '⏹️': 'delete',
                    '⏪': 'Comandos Divertidos3',
                    '⏩': 'Comandos Divertidos5',
                    '⏏️': 'INICIO',
                }
            },
            {
               
                name: 'Comandos Divertidos5',
            
                content: new MessageEmbed({
                    title: 'Comandos Divertidos',
                    description: 'Página 5/5',
                    color: 'ff9e00',
                    fields: [
                        {
                            name: 'y!slap', 
                            value: "Dale una bofetada a alguien.",
                            inline: false
                        },
                        {
                            name: 'y!sleep', 
                            value: "A mimir.",
                            inline: false
                        },
                        {
                            name: 'y!revive', 
                            value: "Revive a alguien.",
                            inline: false
                        },
                        {
                            name: 'y!spank', 
                            value: "Dale un cachete a alguien.",
                            inline: false
                        },
                        
                        
                    ]
                    
                
                }),
            
                reactions: {
                    '⏹️': 'delete',
                    '⏪': 'Comandos Divertidos4',
                    '⏏️': 'INICIO',
                }
            },
            {
               
                name: 'Comandos útiles',
            
                content: new MessageEmbed({
                    title: 'Comandos Útiles',
                    description: 'Página 1/4',
                    color: 'ff9e00',
                    fields: [
                        {
                            name: 'y!animeinfo', 
                            value: "Te doy la información de un anime.",
                            inline: false
                        },
                        {
                            name: 'y!avatar', 
                            value: "Muestro tu avatar o el de otra persona",
                            inline: false
                        },
                        {
                            name: 'y!ban', 
                            value: "No, no, no. Solo mods 7_7",
                            inline: false
                        },
                        {
                            name: 'y!clear', 
                            value: "Limpia el chat. Solo mods 7_7",
                            inline: false
                        },
                        {
                            name: 'y!embed/e', 
                            value: "Haz que lo que digas aparezca en un embed.",
                            inline: false
                        },
                        
                    ]
                    
                
                }),
            
                reactions: {
                    '⏹️': 'delete',
                    '⏩': 'Comandos Útiles2',
                    '⏏️': 'INICIO'
                }
            },
            {
               
                name: 'Comandos Útiles2',
            
                content: new MessageEmbed({
                    title: 'Comandos Útiles',
                    description: 'Página 2/4',
                    color: 'ff9e00',
                    fields: [
                        {
                            name: 'y!embedanónimo/ea', 
                            value: "Haz que lo que digas aparezca en un embed, pero que nadie lo sepa.",
                            inline: false
                        },
                        {
                            name: 'y!poll', 
                            value: "Crea una encuesta.",
                            inline: false
                        },
                        {
                            name: 'y!image/im/i', 
                            value: "Pide una imagen.",
                            inline: false
                        },
                        {
                            name: 'y!help', 
                            value: "Supongo que este ya lo conocías.",
                            inline: false
                        },
                        {
                            name: 'y!mangainfo/minfo/mi', 
                            value: "Te doy la información de un manga.",
                            inline: false
                        },
                        
                    ]
                    
                
                }),
            
                reactions: {
                    '⏹️': 'delete',
                    '⏪': 'Comandos Útiles',
                    '⏩': 'Comandos Útiles3',
                    '⏏️': 'INICIO'
                }
            },
            {
               
                name: 'Comandos Útiles3',
            
                content: new MessageEmbed({
                    title: 'Comandos Útiles',
                    description: 'Página 3/4',
                    color: 'ff9e00',
                    fields: [
                        {
                            name: 'y!meme', 
                            value: "No abuses, son memes malos.",
                            inline: false
                        },
                        {
                            name: 'y!rate', 
                            value: "Te puntúo del 1 al 100.",
                            inline: false
                        },
                        {
                            name: 'y!richembed/re', 
                            value: "Crea un embed completo.",
                            inline: false
                        },
                        {
                            name: 'y!say', 
                            value: "Digo lo que tu dices",
                            inline: false
                        },
                        {
                            name: 'y!user', 
                            value: "Te doy la información de un usuario.",
                            inline: false
                        },
                        
                    ]
                    
                
                }),
            
                reactions: {
                    '⏹️': 'delete',
                    '⏪': 'Comandos Útiles2',
                    '⏩': 'Comandos Útiles4',
                    '⏏️': 'INICIO'
                }
            },
            {
               
                name: 'Comandos Útiles4',
            
                content: new MessageEmbed({
                    title: 'Comandos Útiles',
                    description: 'Página 4/4',
                    color: 'ff9e00',
                    fields: [
                        {
                            name: 'y!yt/y', 
                            value: "Busca vídeo de Youtube.",
                            inline: false
                        },
                        
                        
                    ]
                    
                
                }),
            
                reactions: {
                    '⏹️': 'delete',
                    '⏪': 'Comandos Útiles3',
                    '⏏️': 'INICIO'
                }
            },
            {
               
                name: 'Comandos personales',
            
                content: new MessageEmbed({
                    title: 'Comandos Personales',
                    description: 'Página 1/1',
                    color: 'ff9e00',
                    fields: [
                        {
                            name: 'y!nao', 
                            value: "Comando de <@734783081600253986>.",
                            inline: false
                        },
                        {
                            name: 'y!yotsuba', 
                            value: "Comando de <@826593572286627870>",
                            inline: false
                        },
                        {
                            name: 'y!urabe', 
                            value: "Comando de <@610625566772822016>",
                            inline: false
                        },
                        
                    ]
                    
                
                }),
            
                reactions: {
                    '⏹️': 'delete',
                    '⏏️': 'INICIO'
                }
            },

        ], 300000)
   
        helpMenu.start()
    
    }
}