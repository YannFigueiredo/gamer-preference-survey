import GameRepository from "../repositories/GameRepository.js";

class GameController {
  async listGames(_, res) {
    try {
      const result = await GameRepository.getGame();

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(404).json({message: "Não foi possível encontrar os jogos."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível listar os jogos: ", error});
    }
  }

  async listGame(req, res) {
    const id = req.params.id;

    try {
      const result = await GameRepository.getGameById(id);

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(404).json({message: "Não foi possível encontra o jogo."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível listar o jogo: ", error});
    }
  }

  async createGame(req, res) {
    try {
      const result = await GameRepository.createGame(req.body)

      if(result) {
        await res.status(201).json(result);
      } else {
        await res.status(400).json({message: "Não foi possível criar o jogo."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível criar o jogo: ", error});
    }
  }

  async updateGame(req, res) {
    try {
      const result = await GameRepository.updateGame(req.params.id, req.body);

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(400).json({message: "Não foi possível atualizar o jogo."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível atualizar o jogo: ", error});
    }
  }

  async deleteGame(req, res) {
    try {
      const result = await GameRepository.deleteGame(req.params.id);

      if(result) {
        await res.status(200).json(result);
      } else {
        await res.status(400).json({message: "Não foi possível deletar o jogo."});
      }
    } catch(error) {
      await res.status(400).json({message: "Não foi possível deletar o jogo: ", error});
    }
  }
}

export default new GameController();