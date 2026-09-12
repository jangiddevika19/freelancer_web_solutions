package com.devika.reviews.controller;

import com.devika.reviews.exception.AdminAccessDeniedException;
import com.devika.reviews.model.Review;
import com.devika.reviews.service.ReviewService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Admin-only endpoints for moderating reviews.
 *
 * Protected with a shared secret passed in the "X-Admin-Key" header.
 * The key itself lives only in the backend's environment (see
 * application.properties / ADMIN_API_KEY) and is never present in
 * any frontend/browser code.
 *
 * This is a minimal, functional safeguard suitable for a solo-admin
 * setup, implemented with a plain custom exception
 * (AdminAccessDeniedException) rather than Spring Security. For a full
 * admin login/dashboard, replace this with real authentication later.
 */
@RestController
@RequestMapping("/api/admin/reviews")
public class AdminReviewController {

    private final ReviewService reviewService;

    @Value("${admin.api.key}")
    private String adminApiKey;

    public AdminReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/pending")
    public ResponseEntity<List<Review>> getPending(@RequestHeader(value = "X-Admin-Key", required = false) String key) {
        checkKey(key);
        return ResponseEntity.ok(reviewService.getPendingReviews());
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<Review> approve(@PathVariable Long id,
                                           @RequestHeader(value = "X-Admin-Key", required = false) String key) {
        checkKey(key);
        return ResponseEntity.ok(reviewService.approveReview(id));
    }

    private void checkKey(String key) {
        if (key == null || !key.equals(adminApiKey)) {
            throw new AdminAccessDeniedException("Invalid admin key");
        }
    }
}
