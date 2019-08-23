const {spawn} = require('child_process'),
  ping = spawn('ping', ['github.com']);

ping.stdout.setEncoding('utf8');
ping.stdout.on('data', console.log);

