package com.yannfigueiredo.gamerpreferencesurvey.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yannfigueiredo.gamerpreferencesurvey.dto.GameDTO;
import com.yannfigueiredo.gamerpreferencesurvey.entities.Game;
import com.yannfigueiredo.gamerpreferencesurvey.repositories.GameRepository;
import com.yannfigueiredo.gamerpreferencesurvey.services.GameService;

@RestController
@RequestMapping(value = "/games")
public class GameController {
	
	@Autowired
	private GameService gameService;
	
	@GetMapping
	public ResponseEntity<List<GameDTO>> findAll(){
		List<GameDTO> list = gameService.findAll();
		
		return ResponseEntity.ok().body(list);
	}
}
