package com.yannfigueiredo.gamerpreferencesurvey.repositories;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yannfigueiredo.gamerpreferencesurvey.entities.Vote;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
	
	/*Query para PostgreSQL@Query("SELECT obj FROM Vote obj WHERE "
			+ "(coalesce(:minDate, null) IS NULL OR obj.date >= :minDate) AND "
			+ "(coalesce(:maxDate, null) IS NULL OR obj.date <= :maxDate)")*/
	@Query("SELECT obj FROM Vote obj WHERE "
			+ "(:minDate IS NULL OR obj.date >= :minDate) AND "
			+ "(:maxDate IS NULL OR obj.date <= :maxDate)")
	Page<Vote> findByDates(Instant minDate, Instant maxDate, Pageable pageable);

}
