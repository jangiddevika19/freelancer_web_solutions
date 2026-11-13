package com.devika.reviews.repository;

import com.devika.reviews.model.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ResourceRepository extends JpaRepository<Resource, Long> {

    Optional<Resource> findByResourceCode(String resourceCode);

    boolean existsByResourceCode(String resourceCode);
}