import VoteModel from "../models/VoteModel.js";

class VoteRepository {
  async getVote() {
    try {
      return await VoteModel.findAll(); 
    } catch(error) {
      console.error("Erro ao listar todos os votos: ", error);
    }
  }

  async getVoteById(id) {
    try {
      return await VoteModel.findByPk(id);
    } catch(error) {
      console.error("Erro ao listar o voto: ", error);
    }
  }

  async createVote(data) {
    try {
      return await VoteModel.create(data);
    } catch(error) {
      console.error("Erro ao criar o voto: ", error);
    }
  }

  async updateVote(id, data) {
    const date = new Date();
    const body = {
      ...data,
      updatedAt: date
    }

    try {
      const result =  await VoteModel.update(body, { where: { id } });

      if(result > 0) 
        return await VoteModel.findByPk(id);
    } catch(error) {
      console.error("Erro ao atualizar o voto: ", error);
    }
  }

  async deleteVote(id) {
    try {
      return await VoteModel.delete(id);
    } catch(error) {
      console.error("Erro ao deletar o voto: ", error);
    }
  }
}

export default new VoteRepository();