import VoteRepository from "../repositories/VoteRepository.js";

class VoteController {
  async listVotes(req, res) {
    const linesPerPage = parseInt(req.query.linesPerPage) || 12;
    const page = parseInt(req.query.page) || 0;
    const min = parseInt(req.query.min) || "";
    const max = parseInt(req.query.max) || "";
    const orderBy = req.query.orderBy || "createdAt";
    const direction = req.query.direction || "DESC";

    try {
      const result = await VoteRepository.getVote(
        linesPerPage,
        page,
        min,
        max,
        orderBy,
        direction
      );

      if(result) {
        await res.status(200).json(
          {
            content: result,
            totalPages: result.length/parseInt(linesPerPage) < 1 ? 1 : result.length/parseInt(linesPerPage)
          }
        );
      } else {
        await res.status(404).json({message: "Não foi possível encontrar os votos."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível listar os votos: ", error, teste: linesPerPage});
    }
  }

  async listVote(req, res) {
    const id = req.params.id;

    try {
      const result = await VoteRepository.getVoteById(id);

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(404).json({message: "Não foi possível encontra o voto."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível listar o voto: ", error});
    }
  }

  async createVote(req, res) {
    try {
      const result = await VoteRepository.createVote(req.body)

      if(result) {
        await res.status(201).json(result);
      } else {
        await res.status(400).json({message: "Não foi possível criar o voto."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível criar o voto: ", error});
    }
  }

  async updateVote(req, res) {
    try {
      const result = await VoteRepository.updateVote(req.params.id, req.body);

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(400).json({message: "Não foi possível atualizar o voto."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível atualizar o voto: ", error});
    }
  }

  async deleteVote(req, res) {
    try {
      const result = await VoteRepository.deleteVote(req.params.id);

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(400).json({message: "Não foi possível deletar o voto."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível deletar o voto: ", error});
    }
  }
}

export default new VoteController();