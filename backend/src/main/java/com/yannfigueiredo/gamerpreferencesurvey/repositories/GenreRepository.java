package com.yannfigueiredo.gamerpreferencesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yannfigueiredo.gamerpreferencesurvey.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {

}
