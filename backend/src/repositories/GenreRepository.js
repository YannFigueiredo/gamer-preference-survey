import GenreModel from "../models/GenreModel.js";

class GenreRepository {
  async getGenre() {
    try {
      return await GenreModel.findAll(); 
    } catch(error) {
      console.error("Erro ao listar todos os gêneros: ", error);
    }
  }

  async getGenreById(id) {
    try {
      return await GenreModel.findByPk(id);
    } catch(error) {
      console.error("Erro ao listar o gênero: ", error);
    }
  }

  async createGenre(data) {
    try {
      return await GenreModel.create(data);
    } catch(error) {
      console.error("Erro ao criar o gênero: ", error);
    }
  }

  async updateGenre(id, data) {
    const date = new Date();
    const body = {
      ...data,
      updatedAt: date
    }

    try {
      const result =  await GenreModel.update(body, { where: { id } });

      if(result > 0) 
        return await GenreModel.findByPk(id);
    } catch(error) {
      console.error("Erro ao atualizar o gênero: ", error);
    }
  }

  async deleteGenre(id) {
    try {
      return await GenreModel.delete(id);
    } catch(error) {
      console.error("Erro ao deletar o gênero: ", error);
    }
  }
}

export default new GenreRepository();