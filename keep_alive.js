var http = require('http');

http.createServer(function (req, res) {
  res.write(`<font size="6"><center><b>Discord bot controls</b></center></font><br><input type="text" placeholder="Channel ID" id="channelID"><br><br><input type="text" placeholder="Send a message.." id="message"><button id="send-message">Send</button><button id="clear-message">Clear</button><script src="server.js"></script>`);
  res.end();
}).listen(8080);
