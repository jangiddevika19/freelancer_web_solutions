package com.devika.reviews.dto;

import com.devika.reviews.model.Review;

import java.time.LocalDateTime;

public class ReviewResponse {

    private Long id;
    private String name;
    private int rating;
    private String review;
    private LocalDateTime createdAt;

    public ReviewResponse(Review r) {
        this.id = r.getId();
        this.name = r.getName();
        this.rating = r.getRating();
        this.review = r.getReview();
        this.createdAt = r.getCreatedAt();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getRating() {
        return rating;
    }

    public String getReview() {
        return review;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
