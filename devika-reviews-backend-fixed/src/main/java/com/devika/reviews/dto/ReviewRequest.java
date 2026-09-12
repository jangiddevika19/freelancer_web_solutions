package com.devika.reviews.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ReviewRequest {

    @NotBlank(message = "Name is required")
    @Size(max = 100, message = "Name must be under 100 characters")
    private String name;

    @Min(value = 1, message = "Rating must be at least 1")
    @Max(value = 5, message = "Rating must be at most 5")
    private int rating;

    @NotBlank(message = "Review text is required")
    @Size(max = 1000, message = "Review must be under 1000 characters")
    private String review;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }
}
