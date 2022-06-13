package com.yannfigueiredo.gamerpreferencesurvey.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yannfigueiredo.gamerpreferencesurvey.dto.VoteDTO;
import com.yannfigueiredo.gamerpreferencesurvey.dto.VoteInsertDTO;
import com.yannfigueiredo.gamerpreferencesurvey.entities.Game;
import com.yannfigueiredo.gamerpreferencesurvey.entities.Vote;
import com.yannfigueiredo.gamerpreferencesurvey.repositories.GameRepository;
import com.yannfigueiredo.gamerpreferencesurvey.repositories.VoteRepository;

@Service
public class VoteService {
	@Autowired
	VoteRepository voteRepo;
	
	@Autowired
	GameRepository gameRepo;
	
	@Transactional
	public VoteDTO insert(VoteInsertDTO dto) {
		Vote entity = new Vote();
		
		entity.setVoter(dto.getVoter());
		entity.setAge(dto.getAge());
		entity.setDate(Instant.now());
		
		Game game = gameRepo.getOne(dto.getGameId());
		
		entity.setGame(game);
		
		entity = voteRepo.save(entity);
		
		return new VoteDTO(entity);
	}
}
