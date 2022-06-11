package com.yannfigueiredo.gamerpreferencesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yannfigueiredo.gamerpreferencesurvey.entities.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

}
