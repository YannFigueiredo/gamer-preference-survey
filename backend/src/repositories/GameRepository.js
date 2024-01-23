import GameModel from "../models/GameModel.js";

class GameRepository {
  async getGame() {
    try {
      return await GameModel.findAll(); 
    } catch(error) {
      console.error("Erro ao listar todos os jogos: ", error);
    }
  }

  async getGameById(id) {
    try {
      return await GameModel.findByPk(id);
    } catch(error) {
      console.error("Erro ao listar o jogo: ", error);
    }
  }

  async createGame(data) {
    try {
      return await GameModel.create(data);
    } catch(error) {
      console.error("Erro ao criar o jogo: ", error);
    }
  }

  async updateGame(id, data) {
    const date = new Date();
    const body = {
      ...data,
      updatedAt: date
    }

    try {
      const result =  await GameModel.update(body, { where: { id } });

      if(result > 0) 
        return await GameModel.findByPk(id);
    } catch(error) {
      console.error("Erro ao atualizar o jogo: ", error);
    }
  }

  async deleteGame(id) {
    try {
      return await GameModel.delete(id);
    } catch(error) {
      console.error("Erro ao deletar o jogo: ", error);
    }
  }
}

export default new GameRepository();