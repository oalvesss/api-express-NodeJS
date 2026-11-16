import express from 'express';
import conectaMongo from './config/dbConnect.js';
import routes from './routes/index.js';


const conexao = await conectaMongo();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
});

conexao.once("open", () => {
    console.log("Conexão com o DB feita com sucesso!");
});

const app = express();
routes(app);


app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro apagado com sucesso!");
});

export default app;




