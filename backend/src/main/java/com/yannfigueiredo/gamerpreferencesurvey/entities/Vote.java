package com.yannfigueiredo.gamerpreferencesurvey.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

public class Vote implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String voter;
	private Instant date;
	private Integer age;
	private Game game;
	
	public Vote() {}

	public Vote(Long id, String voter, Instant date, Integer age, Game game) {
		this.id = id;
		this.voter = voter;
		this.date = date;
		this.age = age;
		this.game = game;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public String getVoter() {
		return voter;
	}

	public void setVoter(String voter) {
		this.voter = voter;
	}

	public Instant getDate() {
		return date;
	}

	public void setDate(Instant date) {
		this.date = date;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}
	
	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Vote other = (Vote) obj;
		return Objects.equals(id, other.id);
	}
}
