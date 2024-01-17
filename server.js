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
bot.createMessage(msg.channel.id, '21 servers:');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#us - Siege Test');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#lt - 2TDM');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#wxc - CRAZY ARRAS DEV SERVER');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#x - Unknown');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#o - Developer Server');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#c - Developer Server');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#af - FFA');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#az - Sandbox');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#wz - Sandbox');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#sz - Sandbox');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#wf - 4TDM');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#sf - 2TDM');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#au - Private FFA');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#wu - Private 4TDM');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#su - Private 2TDM');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#lm - Skinwalkers');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#sk - 4TDM');
bot.createMessage(msg.channel.id, 'rose-horse-freighter.glitch.me/#lo - 1TDM');
}
});
 
bot.connect();                                         // Get the bot to connect to Discord