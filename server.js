const Eris = require('eris');
const axios = require('axios')
 
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
} else if (msg.content.startsWith('/users')) {
bot.createMessage(msg.channel.id, '**USERS KNOWN**\n```1140485340977692747 - @sh4d0wl0rd3_52746 AKA Ralsei/MLG\n741024771034317001 - @itsyeboitai aka token leaker\n1190727236911910963 - @antivanguard\n406204826003963904 - @umm yea idk 🤯```\nRequested by ' + msg.author)
} else if (msg.content.startsWith('/getmockup')) {
/*axios.get('https://remarkable-serious-shark.glitch.me/mockups.json')
  .then(response => {
    const data = response.data;
   
  })*/
  
  axios.get(encodeURI('https://remarkable-serious-shark.glitch.me/mockups.json'))
  .then(response => {
    const data = response.data;
    bot.createMessage('**SERVER MOCKUP**\n```' + data + '```')
  })
  .catch(error => {
    bot.createMessage('**Error**\n```' + error + '```')
  });
}
});
 
bot.connect();                                         // Get the bot to connect to Discord