const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
if (msg.content.includes('/servers')) {
bot.createMessage(msg.channel.id, '17 servers:\n```rose-horse-freighter.glitch.me/#us, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#lt, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#wxc, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#x, hidden: '+ true + ', ended: ' + true + ', event\nrose-horse-freighter.glitch.me/#o, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#c, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#af, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#az, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#wz, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#sz, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#wf, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#sf, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#au, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#wu, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#su, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#lm, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#sk, hidden: '+ false + ',```');
} else if (msg.content.includes('/eval')) {
if (msg.content.includes('@bot1197118174164951100 ')) {msg.content.substring('@bot1197118174164951100 ')}
const command = msg.content.substring(6)
const output = eval(command)
bot.createMessage(msg.channel.id, '**Eval Output**\n```'+output+'```')
}
});
 
bot.connect();                                         // Get the bot to connect to Discord