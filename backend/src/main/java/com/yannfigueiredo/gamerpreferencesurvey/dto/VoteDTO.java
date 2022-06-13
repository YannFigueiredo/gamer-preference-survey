package com.yannfigueiredo.gamerpreferencesurvey.dto;

import java.io.Serializable;
import java.time.Instant;

import com.yannfigueiredo.gamerpreferencesurvey.entities.Vote;
import com.yannfigueiredo.gamerpreferencesurvey.entities.enums.Platform;

public class VoteDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Instant date;
	private String voter;
	private Integer age;
	private Platform gamePlatform;
	private String gameGenre;
	private String gameName;
	
	public VoteDTO() {}
	
	public VoteDTO(Vote entity) {
		id = entity.getId();
		date = entity.getDate();
		voter = entity.getVoter();
		age = entity.getAge();
		gamePlatform = entity.getGame().getPlatform();
		gameGenre = entity.getGame().getGenre().getName();
		gameName = entity.getGame().getTitle();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Instant getDate() {
		return date;
	}

	public void setDate(Instant date) {
		this.date = date;
	}

	public String getVoter() {
		return voter;
	}

	public void setVoter(String voter) {
		this.voter = voter;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Platform getGamePlatform() {
		return gamePlatform;
	}

	public void setGamePlatform(Platform gamePlatform) {
		this.gamePlatform = gamePlatform;
	}

	public String getGameGenre() {
		return gameGenre;
	}

	public void setGameGenre(String gameGenre) {
		this.gameGenre = gameGenre;
	}

	public String getGameName() {
		return gameName;
	}

	public void setGameName(String gameName) {
		this.gameName = gameName;
	}
}
