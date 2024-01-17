const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
if(msg.content.includes('Hello!')) {                 // If the message content includes "1337"
bot.createMessage(msg.channel.id, 'Hi! How are you?');  // Send a message in the same channel with "damn it"
}
else if (msg.content.startsWith('/servers')) {
bot.createMessage(msg.channel.id, '17 servers:');
bot.createMessage(msg.channel.id, '```rose-horse-freighter.glitch.me/#us\nrose-horse-freighter.glitch.me/#lt\nrose-horse-freighter.glitch.me/#wxc\nrose-horse-freighter.glitch.me/#x\nrose-horse-freighter.glitch.me/#o\nrose-horse-freighter.glitch.me/#c\nrose-horse-freighter.glitch.me/#af\nrose-horse-freighter.glitch.me/#az```');
//rose-horse-freighter.glitch.me/#wz\nrose-horse-freighter.glitch.me/#sz\nrose-horse-freighter.glitch.me/#wf\nrose-horse-freighter.glitch.me/#sf\nrose-horse-freighter.glitch.me/#au\nrose-horse-freighter.glitch.me/#wu\nrose-horse-freighter.glitch.me/#su\nrose-horse-freighter.glitch.me/#lm
} else if (msg.content.startsWith('/id')) {}
});
 
bot.connect();                                         // Get the bot to connect to Discord