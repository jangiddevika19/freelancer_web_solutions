package com.devika.reviews.service;

import com.devika.reviews.dto.ReviewRequest;
import com.devika.reviews.dto.ReviewResponse;
import com.devika.reviews.model.Review;
import com.devika.reviews.model.ReviewStatus;
import com.devika.reviews.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    /**
     * Saves a new visitor-submitted review. Always stored as PENDING,
     * regardless of anything the caller sends — visitors can never
     * self-approve a review.
     */
    public ReviewResponse submitReview(ReviewRequest request) {
        Review review = new Review();
        review.setName(request.getName().trim());
        review.setRating(request.getRating());
        review.setReview(request.getReview().trim());
        review.setStatus(ReviewStatus.PENDING);

        Review saved = reviewRepository.save(review);
        return new ReviewResponse(saved);
    }

    /**
     * Public listing — only ever returns APPROVED reviews.
     */
    public List<ReviewResponse> getApprovedReviews() {
        return reviewRepository.findByStatusOrderByCreatedAtDesc(ReviewStatus.APPROVED)
                .stream()
                .map(ReviewResponse::new)
                .toList();
    }

    /**
     * Admin-only listing of reviews awaiting moderation.
     */
    public List<Review> getPendingReviews() {
        return reviewRepository.findByStatusOrderByCreatedAtDesc(ReviewStatus.PENDING);
    }

    /**
     * Admin-only action to approve a pending review so it becomes publicly visible.
     */
    public Review approveReview(Long id) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Review not found: " + id));
        review.setStatus(ReviewStatus.APPROVED);
        return reviewRepository.save(review);
    }
}
