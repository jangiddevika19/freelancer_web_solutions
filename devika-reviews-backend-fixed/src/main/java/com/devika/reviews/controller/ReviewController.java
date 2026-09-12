package com.devika.reviews.controller;

import com.devika.reviews.dto.ReviewRequest;
import com.devika.reviews.dto.ReviewResponse;
import com.devika.reviews.service.ReviewService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    /**
     * Visitor submits a review. Always saved as PENDING; never
     * immediately visible on the public site.
     */
    @PostMapping
    public ResponseEntity<ReviewResponse> submitReview(@Valid @RequestBody ReviewRequest request) {
        ReviewResponse saved = reviewService.submitReview(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    /**
     * Public review list. Only ever returns APPROVED reviews.
     */
    @GetMapping
    public ResponseEntity<List<ReviewResponse>> getApprovedReviews() {
        return ResponseEntity.ok(reviewService.getApprovedReviews());
    }
}
