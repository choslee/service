import http from 'http';

const hostname = 'localhost';
const port = process.env.PORT || 3000;


export  function startServer (): void {

    // Kreiranje server obejekta
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Pozdrav sa servera! \n');
    });

    // Pokretanje servera
    server.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
};