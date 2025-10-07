const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

function servePage(res, filename, statusCode) {
    const filePath = path.join(__dirname, 'pages', filename);
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 - Internal Server Error</h1>');
            return;
        }
        
        res.writeHead(statusCode, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

function serveCSS(res, filename) {
    const filePath = path.join(__dirname, 'styles', filename);
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('CSS not found');
            return;
        }
        
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        servePage(res, 'home.html', 200);
    } 
    else if (req.url === '/about') {
        servePage(res, 'about.html', 200);
    } 
    else if (req.url === '/contact') {
        servePage(res, 'contact.html', 200);
    }
    else if (req.url === '/styles/style.css') {
        serveCSS(res, 'style.css');
    }
    else {
        servePage(res, '404.html', 404);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Routes:');
    console.log('  - http://localhost:3000/home');
    console.log('  - http://localhost:3000/about');
    console.log('  - http://localhost:3000/contact');
});

server.on('error', (err) => {
    console.error('Server error:', err);
});

