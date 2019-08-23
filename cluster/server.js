const http = require('http');
const url = require('url');
const port = process.env.PORT || 3015
const server = http.createServer().listen(port);

server.on('request', (req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname === '/killme') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end(`You kill the process. PID: ${process.pid}`);
        process.exit(0);
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end(`Hello from this process. PID: ${process.pid}`);
    }
});

console.log(`Server running on ${port}`);