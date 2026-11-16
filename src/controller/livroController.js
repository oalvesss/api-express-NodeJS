import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res) {
        const ListaLivros = await livro.find({});
        res.status(200).json(ListaLivros);
    }

};


export default LivroController;
