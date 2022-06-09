package com.yannfigueiredo.gamerpreferencesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yannfigueiredo.gamerpreferencesurvey.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
