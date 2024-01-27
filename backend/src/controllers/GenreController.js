import GenreRepository from "../repositories/GenreRepository.js";

class GenreController {
  async listGenres(_, res) {
    try {
      const result = await GenreRepository.getGenre();

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(404).json({message: "Não foi possível encontrar os gêneros."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível listar os gêneros: ", error});
    }
  }

  async listGenre(req, res) {
    const id = req.params.id;

    try {
      const result = await GenreRepository.getGenreById(id);

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(404).json({message: "Não foi possível encontra o gênero."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível listar o gênero: ", error});
    }
  }

  async createGenre(req, res) {
    try {
      const result = await GenreRepository.createGenre(req.body)

      if(result) {
        await res.status(201).json(result);
      } else {
        await res.status(400).json({message: "Não foi possível criar o gênero."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível criar o gênero: ", error});
    }
  }

  async updateGenre(req, res) {
    try {
      const result = await GenreRepository.updateGenre(req.params.id, req.body);

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(400).json({message: "Não foi possível atualizar o gênero."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível atualizar o gênero: ", error});
    }
  }

  async deleteGenre(req, res) {
    try {
      const result = await GenreRepository.deleteGenre(req.params.id);

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(400).json({message: "Não foi possível deletar o gênero."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível deletar o gênero: ", error});
    }
  }
}

export default new GenreController();