package com.yannfigueiredo.gamerpreferencesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yannfigueiredo.gamerpreferencesurvey.entities.Vote;

public interface VoteRepository extends JpaRepository<Vote, Long> {

}
