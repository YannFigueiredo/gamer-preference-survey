package com.yannfigueiredo.gamerpreferencesurvey.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yannfigueiredo.gamerpreferencesurvey.dto.VoteDTO;
import com.yannfigueiredo.gamerpreferencesurvey.dto.VoteInsertDTO;
import com.yannfigueiredo.gamerpreferencesurvey.services.VoteService;

@RestController
@RequestMapping(value = "/votes")
public class VoteController {
	@Autowired
	private VoteService voteService;
	
	@PostMapping
	public ResponseEntity<VoteDTO> insert(@RequestBody VoteInsertDTO dto) {
		VoteDTO newDTO = voteService.insert(dto);
		
		return ResponseEntity.ok().body(newDTO);
	}
}
