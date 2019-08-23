const fs = require('fs'),
 {spawn} = require('child_process'),
  ping = spawn('ping', ['github.com']);

ping.stdout.setEncoding('utf8');
ping.stdout.on('data', storeLog);

function storeLog (data) {
    const dataToStore = `[${new Date().getTime()}] ${data}`
    fs.appendFile(`${__dirname}/ping.log`, dataToStore, (err) => {
        if (err) console.log(err);
      });
}
