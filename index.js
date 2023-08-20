import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('create')){
        const url = message.content.split("create")[1];
        return message.reply({
            content : "Generating ShortID for "+url,
        })
    }

    try {
        await message.reply({
            content: "Hi from Bot",
        });
    } catch (error) {
        console.error('Error sending message:', error);
    }
});

client.on('interactionCreate',(interaction)=>{
    console.log(interaction);
    interaction.reply("Yo! wassap")
})

client.login("MTE0MjgwMTkyNTE4MDUxMDIzOA.G9NHp1.aeI_yK5Q7DpdUnqm0vbkIztlG--Ck3qJALypXc");
