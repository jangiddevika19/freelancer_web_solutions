
package com.devika.reviews.service;

import com.devika.reviews.model.OrderStatus;
import com.devika.reviews.model.PaymentOrder;
import com.devika.reviews.model.Resource;
import com.devika.reviews.repository.PaymentOrderRepository;
import com.devika.reviews.repository.ResourceRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.UUID;

@Service
public class PaymentOrderService {

    private final PaymentOrderRepository paymentOrderRepository;
    private final ResourceRepository resourceRepository;

    public PaymentOrderService(
            PaymentOrderRepository paymentOrderRepository,
            ResourceRepository resourceRepository) {

        this.paymentOrderRepository = paymentOrderRepository;
        this.resourceRepository = resourceRepository;
    }

    @Transactional
    public PaymentOrder createOrder(
            String customerName,
            String customerEmail,
            String resourceCode) {

        if (customerName == null || customerName.isBlank()) {
            throw new IllegalArgumentException("Customer name is required.");
        }

        if (customerEmail == null || !customerEmail.trim()
                .matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$")) {
            throw new IllegalArgumentException("Valid customer email is required.");
        }

        if (resourceCode == null || resourceCode.isBlank()) {
            throw new IllegalArgumentException("Resource code is required.");
        }

        Resource resource = resourceRepository
                .findByResourceCode(resourceCode.trim())
                .orElseThrow(() ->
                        new IllegalArgumentException("Resource not found."));

        if (!resource.isActive()) {
            throw new IllegalArgumentException("This resource is currently unavailable.");
        }

        PaymentOrder order = new PaymentOrder();

        order.setOrderId(generateOrderId());
        order.setCustomerName(customerName.trim());
        order.setCustomerEmail(customerEmail.trim().toLowerCase(Locale.ROOT));
        order.setResourceName(resource.getTitle());
        order.setAmount(resource.getPrice());
        order.setStatus(OrderStatus.PAYMENT_PENDING);

        return paymentOrderRepository.save(order);
    }

    // Submit payment proof against an existing Order ID
    @Transactional
    public PaymentOrder submitPaymentProof(
            String orderId,
            String utr,
            String screenshotUrl) {

        if (orderId == null || orderId.isBlank()) {
            throw new IllegalArgumentException("Order ID is required.");
        }

        if (utr == null || !utr.trim().matches("^[a-zA-Z0-9]{8,40}$")) {
            throw new IllegalArgumentException("Valid UTR is required.");
        }

        if (screenshotUrl == null || screenshotUrl.isBlank()
                || screenshotUrl.length() > 1000
                || !screenshotUrl.trim().matches("^https://res\\.cloudinary\\.com/[^\\s]+$")) {
            throw new IllegalArgumentException("Valid payment screenshot URL is required.");
        }

        PaymentOrder order = paymentOrderRepository
                .findByOrderId(orderId.trim())
                .orElseThrow(() ->
                        new IllegalArgumentException("Order not found."));

        if (order.getStatus() != OrderStatus.PAYMENT_PENDING) {
            throw new IllegalArgumentException(
                    "Payment proof cannot be submitted for this order.");
        }

        order.setUtr(utr.trim());
        order.setScreenshotUrl(screenshotUrl.trim());
        order.setSubmittedAt(LocalDateTime.now());
        order.setStatus(OrderStatus.SUBMITTED_FOR_VERIFICATION);

        return paymentOrderRepository.save(order);
    }

    private String generateOrderId() {

        String date = LocalDate.now()
                .format(DateTimeFormatter.ofPattern("yyyyMMdd"));

        String orderId;

        do {
            String uniquePart = UUID.randomUUID()
                    .toString()
                    .replace("-", "")
                    .substring(0, 8)
                    .toUpperCase(Locale.ROOT);

            orderId = "DWS-" + date + "-" + uniquePart;

        } while (paymentOrderRepository.existsByOrderId(orderId));

        return orderId;
    }
}
