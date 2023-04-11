package com.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.library.entity.Library;

@Repository
public interface LibraryInterface extends JpaRepository<Library,Integer> {
	
	

}
