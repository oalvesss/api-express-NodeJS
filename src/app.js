import express from 'express';
import conectaMongo from './config/dbConnect.js';


const conexao = await conectaMongo();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
});

conexao.once("open", () => {
    console.log("Conexão com o DB feita com sucesso!");
});

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "Programador Pragmático"
    },
    {
        id: 2,
        titulo: "Competente o Suficiente"
    } 
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
};


app.get("/", (req, res) =>{
    res.status(200).send("Curso de Node.Js");
});

app.get("/livros", (req, res) =>{
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro adicionado com sucesso!")
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro apagado com sucesso!");
});

export default app;




