package com.devika.reviews.repository;

import com.devika.reviews.model.Review;
import com.devika.reviews.model.ReviewStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByStatusOrderByCreatedAtDesc(ReviewStatus status);
}
