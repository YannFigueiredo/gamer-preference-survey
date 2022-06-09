package com.yannfigueiredo.gamerpreferencesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yannfigueiredo.gamerpreferencesurvey.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
