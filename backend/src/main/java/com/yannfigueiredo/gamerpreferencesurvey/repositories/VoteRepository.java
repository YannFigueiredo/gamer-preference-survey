package com.yannfigueiredo.gamerpreferencesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yannfigueiredo.gamerpreferencesurvey.entities.Vote;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {

}
