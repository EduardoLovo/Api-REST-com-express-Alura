import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutroes = await autor.find({});
      res.status(200).json(listaAutroes);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarAutoresPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: "Autor cadastrado com sucesso", autor: novoAutor });
    } catch (erro) {
      res
        .status(500)
        .json({ messagem: `${erro.message} - falha ao cadastrar autor` });
    }
  }

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor excluido" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }
}

export default AutorController;
