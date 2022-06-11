package com.yannfigueiredo.gamerpreferencesurvey.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yannfigueiredo.gamerpreferencesurvey.dto.GameDTO;
import com.yannfigueiredo.gamerpreferencesurvey.entities.Game;
import com.yannfigueiredo.gamerpreferencesurvey.repositories.GameRepository;

@Service
public class GameService {
	
	@Autowired
	private GameRepository gameRepo;
	
	@Transactional(readOnly = true)
	public List<GameDTO> findAll(){
		List<Game> list = gameRepo.findAll();
		
		return list.stream().map(x -> new GameDTO(x)).collect(Collectors.toList());
	}
}
