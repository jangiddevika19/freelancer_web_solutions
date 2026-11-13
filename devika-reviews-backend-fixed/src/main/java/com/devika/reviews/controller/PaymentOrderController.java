
package com.devika.reviews.controller;

import com.devika.reviews.model.PaymentOrder;
import com.devika.reviews.service.PaymentOrderService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/payment-orders")
public class PaymentOrderController {

    private final PaymentOrderService paymentOrderService;

    public PaymentOrderController(PaymentOrderService paymentOrderService) {
        this.paymentOrderService = paymentOrderService;
    }

    public static class CreateOrderRequest {

        @NotBlank
        @Size(max = 100)
        private String customerName;

        @NotBlank
        @Email
        @Size(max = 150)
        private String customerEmail;

        @NotBlank
        @Size(max = 100)
        private String resourceCode;

        public String getCustomerName() {
            return customerName;
        }

        public void setCustomerName(String customerName) {
            this.customerName = customerName;
        }

        public String getCustomerEmail() {
            return customerEmail;
        }

        public void setCustomerEmail(String customerEmail) {
            this.customerEmail = customerEmail;
        }

        public String getResourceCode() {
            return resourceCode;
        }

        public void setResourceCode(String resourceCode) {
            this.resourceCode = resourceCode;
        }
    }

    public static class SubmitPaymentProofRequest {

        @NotBlank
        @Size(max = 40)
        private String utr;

        @NotBlank
        @Size(max = 1000)
        private String screenshotUrl;

        public String getUtr() {
            return utr;
        }

        public void setUtr(String utr) {
            this.utr = utr;
        }

        public String getScreenshotUrl() {
            return screenshotUrl;
        }

        public void setScreenshotUrl(String screenshotUrl) {
            this.screenshotUrl = screenshotUrl;
        }
    }

    public record CreateOrderResponse(
            String orderId,
            String resourceName,
            BigDecimal amount,
            String status,
            LocalDateTime createdAt
    ) {}

    public record PaymentProofResponse(
            String orderId,
            String status,
            LocalDateTime submittedAt
    ) {}

    // Create a new order
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CreateOrderResponse createOrder(
            @Valid @RequestBody CreateOrderRequest request) {

        PaymentOrder order = paymentOrderService.createOrder(
                request.getCustomerName(),
                request.getCustomerEmail(),
                request.getResourceCode()
        );

        return new CreateOrderResponse(
                order.getOrderId(),
                order.getResourceName(),
                order.getAmount(),
                order.getStatus().name(),
                order.getCreatedAt()
        );
    }

    // Submit payment proof against the existing Order ID
    @PostMapping("/{orderId}/submit")
    public PaymentProofResponse submitPaymentProof(
            @PathVariable String orderId,
            @Valid @RequestBody SubmitPaymentProofRequest request) {

        PaymentOrder order = paymentOrderService.submitPaymentProof(
                orderId,
                request.getUtr(),
                request.getScreenshotUrl()
        );

        return new PaymentProofResponse(
                order.getOrderId(),
                order.getStatus().name(),
                order.getSubmittedAt()
        );
    }
}
