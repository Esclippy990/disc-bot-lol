const Eris = require('eris');
const axios = require('axios')
const fetch = require('node-fetch')
let messageHistory = [];
let uptime = {
seconds: 0,
minutes: 0,
hours: 0,
}
setInterval(() => {
uptime.seconds += 1;
if (uptime.seconds === 60) {
uptime.minutes += 1
uptime.seconds = 0
if (uptime.minutes === 60) {
uptime.hours += 1
uptime.minutes = 0
}
}
}, 1000);
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
if (msg.author.id !== '1197118174164951100' && !msg.content.startsWith('/eval') && !msg.content.startsWith('/messagelogs')) {
messageHistory.push('User ID: ' + msg.author.id + ', ' + msg.author.username+': '+msg.content)
}
if (msg.content.includes('/servers')) {
  const embed = {
  title: '18 Servers',
  color: 0x7289DA, // You can set the color using a hex code or a decimal value
  fields: [
    { name: '```#us```', value: 'Siege Test' },
    { name: '```#lt```', value: '2TDM' },
    { name: '```#wxc```', value: 'Event' },
    { name: '```#x```', value: 'Winter Event' },
    { name: '```#o```', value: 'Developer Server' },
    { name: '```#c```', value: 'Developer Server' },
    { name: '```#af```', value: 'FFA' },
    { name: '```#sf```', value: '2TDM' },
    { name: '```#wf```', value: '4TDM' },
    { name: '```#az```', value: 'Sandbox' },
    { name: '```#sz```', value: 'Sandbox' },
    { name: '```#wz```', value: 'Sandbox' },
    { name: '```#au```', value: 'Private FFA' },
    { name: '```#su```', value: 'Private 2TDM' },
    { name: '```#wu```', value: 'Private 4TDM' },
    { name: '```#lm```', value: 'Skinwalkers' },
    { name: '```#wm```', value: 'Limbo' },
    { name: '```#sk```', value: '4TDM' },
  ],
  footer: {
    text: 'Requested by ' + msg.author.username,
  }
};
bot.createMessage(msg.channel.id, { embed });
//bot.createMessage(msg.channel.id, '18 servers:\n```rose-horse-freighter.glitch.me/#us, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#lt, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#wxc, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#x, hidden: '+ true + ', ended: ' + true + ', event\nrose-horse-freighter.glitch.me/#o, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#c, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#af, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#az, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#wz, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#sz, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#wf, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#sf, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#au, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#wu, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#su, hidden: '+ true + ',\nrose-horse-freighter.glitch.me/#lm, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#sk, hidden: '+ false + ',\nrose-horse-freighter.glitch.me/#wm, hidden: ' + true + '```');
} else if (msg.content.startsWith('Hello')) {
bot.createMessage(msg.channel.id, 'Hi, <@' + msg.author.id + '>! 😄')
} else if (msg.content.startsWith('Hi')) {
bot.createMessage(msg.channel.id, 'Hello, <@' + msg.author.id + '>! 😄')
} else if (msg.content.includes('/messagelogs')) {
if (msg.author.id !== '1193882484727885884') {
  const embed = {
        title: 'Error',
        description: `The messagelogs command can only be used by the bot's owner`,
        color: 0xFF0000,
        footer: {
          text: 'Requested by ' + msg.author.username,
        },
      };
  bot.createMessage(msg.channel.id, { embed })
  } else {
    if (messageHistory === []) {
    const embed = {
        title: 'Message logs',
        color: 0xFFA500,
        footer: {
          text: 'Requested by ' + msg.author.username,
        },
      };
  bot.createMessage(msg.channel.id, { embed })
    } else {
    const embed = {
        title: 'Message logs',
        description: "```" + messageHistory.join("\n") + "```\nThese are the message logs. If you want to know the users, type <@(User ID)>. (E.g `<@1234567890123456789>`)",
        color: 0x7289DA,
        footer: {
          text: 'Requested by ' + msg.author.username,
        },
      };
  bot.createMessage(msg.channel.id, { embed })
    }
  }
} else if (msg.content.includes('/token')) {
if (msg.author.id !== '1193882484727885884') {
  const embed = {
        title: 'Error',
        description: `The messagelogs command can only be used by the bot's owner`,
        color: 0xFF0000,
        footer: {
          text: 'Requested by ' + msg.author.username,
        },
      };
  bot.createMessage(msg.channel.id, { embed })
  } else {
    const embed = {
        title: 'Leaked token (no longer works)',
        description: '||```'+process.env.check+'$'+process.env.check2+'```||\nThe token viewed in the spoiler no longer works, but is kept as a history anyway..',
        color: 0x7289DA,
        footer: {
          text: 'Requested by ' + msg.author.username,
        },
      };
  bot.createMessage(msg.channel.id, { embed })
  }
} else if (msg.content.includes('/uptime')) {
  if (msg.author.id !== '1193882484727885884') {
  const embed = {
        title: 'Error',
        description: `The uptime command can only be used by the bot's owner`,
        color: 0xFF0000,
        footer: {
          text: 'Requested by ' + msg.author.username,
        },
      };
  bot.createMessage(msg.channel.id, { embed })
  } else {
  const embed = {
        title: `Bot's Uptime`,
        description: `${uptime.hours > 9 ? uptime.hours:'0'+uptime.hours}:${uptime.minutes > 9 ? uptime.minutes:'0'+uptime.minutes}:${uptime.seconds > 9 ? uptime.seconds:'0'+uptime.seconds}`,
        color: 0x7289DA,
        footer: {
          text: 'Requested by ' + msg.author.username,
        },
      };
  bot.createMessage(msg.channel.id, { embed })
  }
} else if (msg.content.includes('/eval')) {
  if (msg.channel.id === '1194605780985466884') {
    const embed = {
        title: 'Error',
        color: 0xFF0000,
        fields: [
          { name: 'The eval command can only be used in direct messages', value: `To prevent crashes, the eval command can only be used in the bot's DMS.` },
        ],
        footer: {
          text: 'Requested by ' + msg.author.username,
        },
      };
  bot.createMessage(msg.channel.id, { embed })
  } else if (msg.author.id !== '1193882484727885884') {
  const embed = {
        title: 'Error',
        description: `the eval command can only be used by the bot's owner`,
        color: 0xFF0000,
        footer: {
          text: 'Requested by ' + msg.author.username,
        },
      };
  bot.createMessage(msg.channel.id, { embed })
  } else try {
    const command = msg.content.substring(6)
    const output2 = eval(command);
    if (command.length > 255) {
      const embed = {
        title: 'Eval Output',
        color: 0x7289DA,
        fields: [
          { name: '```Code too long```', value: '```' + output2 + '```' },
        ],
        footer: {
          text: 'Requested by ' + msg.author.username,
        },
      };
      bot.createMessage(msg.channel.id, { embed });
    } else {
      const embed = {
        title: 'Eval Output',
        color: 0x7289DA,
        fields: [
          { name: '```' + command + '```', value: '```' + output2 + '```' },
        ],
        footer: {
          text: 'Requested by ' + msg.author.username,
        },
      };
      bot.createMessage(msg.channel.id, { embed });
    }
  } catch (error) {
    const command = msg.content.substring(6)
    if (command.length > 255) {
    const embed = {
      title: 'Error',
      color: 0xFF0000,
      fields: [
        { name: '```Code too long```', value: '```' + error.message + '```' },
      ],
      footer: {
        text: 'Requested by ' + msg.author.username,
      },
    };
      
    bot.createMessage(msg.channel.id, { embed });
    } else {
       const embed = {
      title: 'Error',
      color: 0xFF0000,
      fields: [
        { name: '```'+command+'```', value: '```' + error.message + '```' },
      ],
      footer: {
        text: 'Requested by ' + msg.author.username,
      },
    };
      
    bot.createMessage(msg.channel.id, { embed });
    }
  }
} else if (msg.content.includes('/users')) {
  const embed = {
    title: 'Users Known/Met in ```arras.io```:#ev/#ov/#wv/#cv',
    color: 0x7289DA, //green: 0x00FF00, red: 0xFF0000
    fields: [
      { name: '```1140485340977692747```', value: '```@sh4d0wl0rd3_52746``` AKA Ralsei/MLG' },
      { name: '```741024771034317001```', value: '```@itsyeboitai``` (infamous as a ||token leaker||).' },
      { name: '```1190727236911910963```', value: '```@antivanguard``` (he wanted to keep disc secret)' },
      { name: '```406204826003963904```', value: '```@umm yea idk 🤯``` was randomly found in discord' },
      { name: '```854394077708943450```', value: '```@that whar dude youknow``` (@yay123)' },
      { name: '```705799352270061618```', value: '```@1s6510``` (@1s6510)' },
      { name: '```676537605478809622```', value: '```@clinically insane (goofy) cat~``` (@.cate.)'},
      { name: '```1136804050231361667```', value: '```@Nexo_Ninja``` (@typhoon_123_85843)' }
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
    { name: '```ping```', value: '<@'+msg.author.id+'>, Pong! 😄' },
  ],
  footer: {
    text: 'Requested by ' + msg.author.username,
  }
};
bot.createMessage(msg.channel.id, { embed });
} else if (msg.content.includes('/help')) {
const embed = {
  title: 'Help menu',
  color: 0x7289DA, // You can set the color using a hex code or a decimal value
  fields: [
    { name: '**<command>: <what it does>**\n', value: '/help: Shows help menu.\nping: Pings the bot. Doesn' + "'" + 't need "/" in the start.\n/servers: Shows all servers.\n\n' },
    { name: '**DEV Commands**\n', value: '/eval: Make the bot do something using javascript.\n/uptime: Shows the bot' + "'" + 's uptime.\n/messagelogs: Shows all the messages.'},
  ],
  footer: {
    text: 'Requested by ' + msg.author.username,
  }
};
bot.createMessage(msg.channel.id, { embed });
}
});

bot.connect();                                         // Get the bot to connect to Discord
