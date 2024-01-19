const Eris = require('eris');
const axios = require('axios')
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
if (msg.content.includes('/servers')) {
  const embed = {
  title: '18 Servers',
  color: 0x7289DA, // You can set the color using a hex code or a decimal value
  fields: [
    { name: '```#us```', value: 'Siege Test' },
    { name: '```#lt```', value: '2TDM' },
    { name: 'Field 3', value: 'Value 3' }
  ],
  footer: {
    text: 'Requested by ' + msg.author.username,
  }
};
//bot.createMessage(msg.channel.id, '18 servers:\n```rose-horse-freighter.glitch.me/#us, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#lt, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#wxc, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#x, hidden: '+ true + ', ended: ' + true + ', event\nrose-horse-freighter.glitch.me/#o, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#c, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#af, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#az, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#wz, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#sz, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#wf, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#sf, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#au, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#wu, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#su, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#lm, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#sk, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#wm, hidden: ' + true + '```');
} else if (msg.content.includes('/eval')) {
if (msg.content.includes('@bot1197118174164951100#4315')) {msg.content.substring('@bot1197118174164951100#4315')}
const command = msg.content.substring(6)
const output2 = eval(command)
if (command.length > 255) {
 const embed = {
    title: 'Eval Output',
    color: 0x7289DA, //green: 0x00FF00, red: 0xFF0000
    fields: [
      { name: '```Code too long```', value: '```'+output2+'```' },
    ],
    footer: {
      text: 'Requested by ' + msg.author.username,
    },
  };
     bot.createMessage(msg.channel.id, { embed });
} else {
  const embed = {
    title: 'Eval Output',
    color: 0x7289DA, //green: 0x00FF00, red: 0xFF0000
    fields: [
      { name: '```'+command+'```', value: '```'+output2+'```' },
    ],
    footer: {
      text: 'Requested by ' + msg.author.username,
    },
  };
  bot.createMessage(msg.channel.id, { embed });
}
 

//bot.createMessage(msg.channel.id, '**Eval Output**\n```'+output+'```')
} else if (msg.content.includes('/users')) {
  const embed = {
    title: 'Users Known/Met in ```arras.io```:#ev/#ov/#wv/#cv',
    color: 0x7289DA, //green: 0x00FF00, red: 0xFF0000
    fields: [
      { name: '```1140485340977692747```', value: '```@sh4d0wl0rd3_52746``` AKA Ralsei/MLG' },
      { name: '```741024771034317001```', value: '```@itsyeboitai``` (infamous as a ||token leaker||).' },
      { name: '```1190727236911910963```', value: '```@antivanguard``` (he wanted to keep disc secret)' },
      { name: '```406204826003963904```', value: '```@umm yea idk 🤯``` was randomly found in discord' },
    ],
    footer: {
      text: 'Requested by ' + msg.author.username,
    },
  };
  bot.createMessage(msg.channel.id, { embed });
//bot.createMessage(msg.channel.id, '**USERS KNOWN**\n```1140485340977692747 - @sh4d0wl0rd3_52746 AKA Ralsei/MLG\n741024771034317001 - @itsyeboitai aka token leaker\n1190727236911910963 - @antivanguard\n406204826003963904 - @umm yea idk 🤯```\nRequested by ' + msg.author)
} else if (msg.content.includes('ping')) {
  const embed = {
  title: 'Pinging the bot',
  color: 0x7289DA, // You can set the color using a hex code or a decimal value
  fields: [
    { name: '```ping```', value: 'Pong! 😄' },
  ],
  footer: {
    text: 'Requested by ' + msg.author.username,
  }
};
bot.createMessage(msg.channel.id, { embed });
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
    bot.createMessage('**Error**\n```' + error.message + '```')
  });
}
});
 
bot.connect();                                         // Get the bot to connect to Discord
const http = require('http'); 
setInterval(() => { 
http.get('http://harmless-thread-serpent.glitch.me/');
}, 10000);