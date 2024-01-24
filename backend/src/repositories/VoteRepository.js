import VoteModel from "../models/VoteModel.js";
import { Op } from "sequelize";

class VoteRepository {
  async getVote(
    linesPerPage,
    page,
    min,
    max,
    orderBy,
    direction
  ) {
    try {
      return await VoteModel.findAll({
        where: {
          createdAt: {
            [Op.gte]: min || 0,
            [Op.lte]: max || Date.now() 
          }
        },
        order: [[orderBy, direction]],
        limit: linesPerPage,
        offset: linesPerPage * ((page > 0 ? page : 1) - 1)
      }); 
    } catch(error) {
      console.error("Erro ao listar todos os votos: ", error);
      throw error;
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