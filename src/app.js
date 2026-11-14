import express from 'express';

const app = express();

const livros = [
    {
        id: 1,
        titulo: "Verety"
    },
    {
        id: 2,
        titulo: "Diário de um Banana"
    }
]

app.get("/", (req, res) =>{
    res.status(200).send("Curso de Node.Js");
});

app.get("/livros", (req, res) =>{
    res.status(200).json(livros);
});

export default app;
