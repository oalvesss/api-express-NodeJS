import http from "http";

const PORT = 3000;

const routes = {
    "/": "API-Express",
    "/livros": "Entrei na rota dos livros",
    "/autores": "Entrei na rota onde vai ficar os autores"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(routes[req.url]); 
});

server.listen(PORT, () =>{
    console.log("Servidor Escutando!");
    
});
