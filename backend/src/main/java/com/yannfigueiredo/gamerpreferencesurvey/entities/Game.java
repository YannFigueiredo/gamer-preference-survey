package com.yannfigueiredo.gamerpreferencesurvey.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.yannfigueiredo.gamerpreferencesurvey.entities.enums.Platform;

public class Game implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private Platform platform;
	private Genre genre;
	private List<Vote> votes = new ArrayList<>();
	
	public Game() {}

	public Game(String title, Platform platform, Genre genre) {
		this.title = title;
		this.platform = platform;
		this.genre = genre;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Platform getPlatform() {
		return platform;
	}

	public void setPlatform(Platform platform) {
		this.platform = platform;
	}
	
	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

	public List<Vote> getVotes() {
		return votes;
	}
	
	/*public void addVote(Vote vote) {
		this.votes.add(vote);
	}
	
	public void removeVote() {
		
	}*/

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
		Game other = (Game) obj;
		return Objects.equals(id, other.id);
	}
}
