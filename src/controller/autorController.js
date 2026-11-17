import autor, { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutors (req, res) {
        try {
        const ListaAutors = await autor.find({});
        res.status(200).json(ListaAutors);

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarAutorPorID (req, res) {
        try {
        const id = req.params.id
        const AutorEncontrado = await autor.findById((id));
        res.status(200).json(AutorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do Autor` });
        }
    }



    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", Autor: novoAutor});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar Autor` });
        }
    }

        static async atualizarAutor (req, res) {
        try {
        const id = req.params.id
        await autor.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Autor Atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do Autor` });
        }
    }
        static async deletarAutor (req, res) {
        try {
        const id = req.params.id
        await autor.findByIdAndDelete(id);
        res.status(200).json({ message: "Autor deletado com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha para deletar o Autor` });
        }
    }




};


export default AutorController;
