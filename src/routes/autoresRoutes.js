import express from "express";
import AutorController from "../controller/autorController.js";
const routes = express.Router();

routes.get("/autores", LivroController.listarautores);
routes.get("/autores/:id", LivroController.listarLivroPorID);
routes.post("/autores", LivroController.cadastrarLivro);
routes.put("/autores/:id", LivroController.atualizarLivro);
routes.delete("/autores/:id", LivroController.deletarLivro);

export default  routes;