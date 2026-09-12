package com.devika.reviews.exception;

/**
 * Thrown when a request to an admin endpoint is missing a valid
 * "X-Admin-Key" header.
 *
 * This is a plain custom RuntimeException — it intentionally does NOT
 * depend on Spring Security. It exists purely so GlobalExceptionHandler
 * can map it to an HTTP 403 response.
 */
public class AdminAccessDeniedException extends RuntimeException {

    public AdminAccessDeniedException(String message) {
        super(message);
    }
}
