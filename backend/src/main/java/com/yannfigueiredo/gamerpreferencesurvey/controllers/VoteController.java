package com.yannfigueiredo.gamerpreferencesurvey.controllers;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@GetMapping
	public ResponseEntity<Page<VoteDTO>> findAll(
			@RequestParam(value = "min", defaultValue = "") String min,
			@RequestParam(value = "max", defaultValue = "") String max,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "0") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "date") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction
			)
	{
		Instant minDate = ("".equals(min)) ? null : Instant.parse(min);
		Instant maxDate = ("".equals(max)) ? null : Instant.parse(max);
		
		if(linesPerPage == 0) {
			linesPerPage = Integer.MAX_VALUE;
		}
		
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		
		Page<VoteDTO> list = voteService.findByDates(minDate, maxDate, pageRequest);
		
		return ResponseEntity.ok().body(list);
	}
}
