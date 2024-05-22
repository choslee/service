import http from 'http';

// Definišite hostname i port
const hostname = '127.0.0.1';
const port = 3000;

// Kreirajte server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Pokrenite server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
