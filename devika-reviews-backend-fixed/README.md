# devika-reviews-backend

Spring Boot + MySQL backend for the Devika Web Solutions public review system.

## Stack

- Spring Boot 3.3.4
- Java 17
- Maven
- Spring Web, Spring Data JPA, Spring Validation
- MySQL

## Project structure

```
devika-reviews-backend/
├── pom.xml
├── .env.example
├── .gitignore
└── src/main/
    ├── java/com/devika/reviews/
    │   ├── ReviewsApplication.java
    │   ├── config/
    │   │   ├── CorsConfig.java
    │   │   └── GlobalExceptionHandler.java
    │   ├── controller/
    │   │   ├── ReviewController.java
    │   │   └── AdminReviewController.java
    │   ├── dto/
    │   │   ├── ReviewRequest.java
    │   │   └── ReviewResponse.java
    │   ├── exception/
    │   │   └── AdminAccessDeniedException.java
    │   ├── model/
    │   │   ├── Review.java
    │   │   └── ReviewStatus.java
    │   ├── repository/
    │   │   └── ReviewRepository.java
    │   └── service/
    │       └── ReviewService.java
    └── resources/
        └── application.properties
```

## API

| Method | Endpoint                          | Access | Description                              |
|--------|------------------------------------|--------|-------------------------------------------|
| POST   | `/api/reviews`                     | Public | Submit a review. Always saved as PENDING. |
| GET    | `/api/reviews`                     | Public | List only APPROVED reviews.               |
| GET    | `/api/admin/reviews/pending`       | Admin  | List reviews awaiting approval.           |
| PUT    | `/api/admin/reviews/{id}/approve`  | Admin  | Approve a pending review.                 |

Admin endpoints require an `X-Admin-Key` header matching the `ADMIN_API_KEY`
environment variable. No credentials or admin keys are ever sent to or
stored in the frontend.

### POST /api/reviews — request body

```json
{
  "name": "Jane Doe",
  "rating": 5,
  "review": "Great service, delivered on time."
}
```

Validation:
- `name`: required, max 100 characters
- `rating`: required, integer 1–5
- `review`: required, max 1000 characters

## Setup

### 1. Create the MySQL database (optional — auto-created on first run)

```bash
mysql -u root -p
CREATE DATABASE devika_reviews;
exit;
```

The datasource URL includes `createDatabaseIfNotExist=true`, so this step is
optional as long as the MySQL user has permission to create databases.

### 2. Set environment variables

Copy `.env.example` as a reference and export real values in your shell —
do not hardcode these in `application.properties`.

macOS / Linux:
```bash
export DB_USERNAME=root
export DB_PASSWORD=your_mysql_password
export ADMIN_API_KEY=some-long-random-string
```

Windows (PowerShell):
```powershell
$env:DB_USERNAME="root"
$env:DB_PASSWORD="your_mysql_password"
$env:ADMIN_API_KEY="some-long-random-string"
```

### 3. Run the backend

This project does not include the Maven wrapper jar (to keep the zip small
and avoid binary files). Use a locally installed Maven, or generate the
wrapper yourself:

```bash
cd devika-reviews-backend

# If you have Maven installed:
mvn spring-boot:run

# Or generate the wrapper first, then use it:
mvn -N io.takari:maven:wrapper
./mvnw spring-boot:run
```

The API starts on `http://localhost:8080`. Hibernate creates the `reviews`
table automatically on first boot (`spring.jpa.hibernate.ddl-auto=update`).

### 4. CORS

`CorsConfig.java` allows `http://localhost:5173` and `http://127.0.0.1:5173`
(the default Vite dev server addresses) to call `/api/**`. Add your
production frontend domain there before deploying.

## Testing the flow with curl

```bash
# 1. Submit a review (goes in as PENDING)
curl -X POST http://localhost:8080/api/reviews \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","rating":5,"review":"Excellent work."}'

# 2. Confirm it does NOT show up publicly yet
curl http://localhost:8080/api/reviews

# 3. View it in the admin pending queue
curl -H "X-Admin-Key: some-long-random-string" \
  http://localhost:8080/api/admin/reviews/pending

# 4. Approve it (use the real id from step 3)
curl -X PUT -H "X-Admin-Key: some-long-random-string" \
  http://localhost:8080/api/admin/reviews/1/approve

# 5. Confirm it now appears publicly
curl http://localhost:8080/api/reviews
```

## Security notes

- Database credentials and the admin API key are read only from environment
  variables (`DB_USERNAME`, `DB_PASSWORD`, `ADMIN_API_KEY`) — never
  hardcoded, never exposed to any frontend code.
- The public API (`/api/reviews`) never returns a review's `status` field,
  and never returns PENDING reviews.
- `ReviewRequest` (used for POST input) has no `id` or `status` field, so a
  visitor cannot self-approve or spoof a review's identity.
- The admin endpoints use a simple shared-secret header, enforced with a
  plain custom `AdminAccessDeniedException` (a `RuntimeException`) rather
  than Spring Security — no Spring Security dependency is used anywhere in
  this project. This is adequate for a solo-admin setup; for a multi-user
  admin panel, add real authentication later.
