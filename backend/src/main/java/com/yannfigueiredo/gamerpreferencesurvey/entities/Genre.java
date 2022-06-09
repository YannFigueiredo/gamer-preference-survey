package com.yannfigueiredo.gamerpreferencesurvey.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

public class Genre implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private List<Game> games;
	
	public Genre() {}

	public Genre(Long id, String name) {
		this.id= id;
		this.name = name;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public List<Game> getGames(){
		return this.games;
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
		Genre other = (Genre) obj;
		return Objects.equals(id, other.id);
	}
}
