package com.yannfigueiredo.gamerpreferencesurvey.dto;

import java.io.Serializable;

public class VoteInsertDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String voter;
	private Integer age;
	private Long gameId;
	
	public VoteInsertDTO() {}

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

	public Long getGameId() {
		return gameId;
	}

	public void setGameId(Long gameId) {
		this.gameId = gameId;
	}
}
