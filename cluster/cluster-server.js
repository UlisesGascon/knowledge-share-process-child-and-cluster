const cluster = require('cluster'); // nproc
const http = require('http');
const url = require('url');
const port = process.env.PORT || 3015
const cpus = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master process on PID: ${process.pid}`);

    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', worker => {
        console.log(`Worker Process has been killed. PID ${worker.process.pid}`);
        cluster.fork();
    });
    return;
}

console.log(`New fork has started: ${process.pid}`);
const server = http.createServer().listen(port);

server.on('request', (req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname === '/killme') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end(`You killed PID: ${process.pid}`);
        process.exit(0);
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end(`Hello from PID: ${process.pid}`);
    }
});
