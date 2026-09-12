import { useEffect, useState } from "react";
import { Star, X, Send, MessageCircle } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// =====================================================
// STORAGE KEYS
// =====================================================

// IMPORTANT:
// Review submission is TAB-SPECIFIC.
// sessionStorage = same tab me remember rahega,
// new tab me fresh hoga.
const REVIEW_SUBMITTED_KEY = "devika-review-submitted";

// Reminder controls remain browser-level.
const REVIEW_DISMISSED_KEY =
  "devika-review-dismissed";

const REVIEW_REMINDER_SHOWN_KEY =
  "devika-review-reminder-shown";

const REVIEW_FIRST_VISIT_KEY =
  "devika-review-first-visit";

// Professional delay
const REVIEW_DELAY = 45000;

export default function ReviewPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const [showReminder, setShowReminder] =
    useState(false);

  const [hasSubmittedReview, setHasSubmittedReview] =
    useState(false);

  const [name, setName] = useState("");

  const [rating, setRating] = useState(0);

  const [hoverRating, setHoverRating] = useState(0);

  const [reviewText, setReviewText] = useState("");

  const [submitting, setSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [error, setError] = useState("");

  // =====================================================
  // CHECK REVIEW STATUS - CURRENT TAB ONLY
  // =====================================================

  useEffect(() => {
    const alreadySubmitted =
      sessionStorage.getItem(
        REVIEW_SUBMITTED_KEY
      );

    if (alreadySubmitted === "true") {
      setHasSubmittedReview(true);
    }
  }, []);

  // =====================================================
  // PROFESSIONAL ONE-TIME REVIEW REMINDER
  // =====================================================

  useEffect(() => {
    // If this tab already submitted a review,
    // don't show the reminder.
    if (hasSubmittedReview) return;

    const submitted =
      sessionStorage.getItem(
        REVIEW_SUBMITTED_KEY
      );

    if (submitted === "true") {
      return;
    }

    const dismissed =
      localStorage.getItem(
        REVIEW_DISMISSED_KEY
      );

    if (dismissed === "true") {
      return;
    }

    const alreadyShown =
      localStorage.getItem(
        REVIEW_REMINDER_SHOWN_KEY
      );

    if (alreadyShown === "true") {
      return;
    }

    let firstVisit =
      localStorage.getItem(
        REVIEW_FIRST_VISIT_KEY
      );

    if (!firstVisit) {
      firstVisit = Date.now().toString();

      localStorage.setItem(
        REVIEW_FIRST_VISIT_KEY,
        firstVisit
      );
    }

    const elapsed =
      Date.now() - Number(firstVisit);

    const remainingTime =
      Math.max(
        REVIEW_DELAY - elapsed,
        0
      );

    const timer = setTimeout(() => {
      const latestSubmitted =
        sessionStorage.getItem(
          REVIEW_SUBMITTED_KEY
        );

      const latestDismissed =
        localStorage.getItem(
          REVIEW_DISMISSED_KEY
        );

      const latestShown =
        localStorage.getItem(
          REVIEW_REMINDER_SHOWN_KEY
        );

      if (
        latestSubmitted === "true" ||
        latestDismissed === "true" ||
        latestShown === "true"
      ) {
        return;
      }

      localStorage.setItem(
        REVIEW_REMINDER_SHOWN_KEY,
        "true"
      );

      setShowReminder(true);
    }, remainingTime);

    return () => {
      clearTimeout(timer);
    };
  }, [hasSubmittedReview]);

  // =====================================================
  // OPEN REVIEW FORM
  // =====================================================

  const openReviewForm = () => {
    setShowReminder(false);
    setIsOpen(true);
    setError("");
  };

  // =====================================================
  // CLOSE REVIEW FORM
  // =====================================================

  const closePopup = () => {
    setIsOpen(false);
    setSubmitted(false);
    setError("");
  };

  // =====================================================
  // DISMISS AUTOMATIC REMINDER
  // =====================================================

  const closeReminder = () => {
    setShowReminder(false);

    localStorage.setItem(
      REVIEW_DISMISSED_KEY,
      "true"
    );
  };

  // =====================================================
  // SUBMIT REVIEW
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (
      !name.trim() ||
      rating === 0 ||
      !reviewText.trim()
    ) {
      setError(
        "Please fill in your name, rating and review."
      );

      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/reviews`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: name.trim(),
            rating,
            review: reviewText.trim(),
          }),
        }
      );

      if (!response.ok) {
        const message =
          await response.text();

        throw new Error(
          message ||
            "Could not submit review."
        );
      }

      // =================================================
      // REFRESH REVIEWS SECTION
      // =================================================

      window.dispatchEvent(
        new CustomEvent(
          "review-submitted"
        )
      );

      // =================================================
      // REMEMBER ONLY IN CURRENT TAB
      // =================================================

      sessionStorage.setItem(
        REVIEW_SUBMITTED_KEY,
        "true"
      );

      // Reminder should not appear again
      // in this browser.
      localStorage.setItem(
        REVIEW_DISMISSED_KEY,
        "true"
      );

      localStorage.setItem(
        REVIEW_REMINDER_SHOWN_KEY,
        "true"
      );

      // Hide Review button in current tab
      setHasSubmittedReview(true);

      setSubmitted(true);
      setSubmitting(false);
    } catch (err) {
      console.error(
        "Review submission failed:",
        err
      );

      setError(
        "Something went wrong. Please try again."
      );

      setSubmitting(false);
    }
  };

  // =====================================================
  // AFTER REVIEW SUBMISSION
  // =====================================================

  if (hasSubmittedReview && !submitted) {
    return null;
  }

  return (
    <>
      {/* =================================================
          AUTOMATIC REVIEW REMINDER
      ================================================= */}

      {showReminder && !isOpen && !hasSubmittedReview && (
        <div
          className="
            fixed
            bottom-[8.5rem]
            right-4
            z-[60]
            w-[calc(100%-2rem)]
            max-w-[300px]

            sm:right-5
            sm:bottom-[7.5rem]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-[0_18px_45px_rgba(15,23,42,0.16)]
            "
          >
            {/* Top Line */}

            <div
              className="
                h-1
                bg-gradient-to-r
                from-sky-400
                to-sky-600
              "
            />

            <div className="p-3.5">

              {/* Close */}

              <button
                type="button"
                onClick={closeReminder}
                aria-label="Close review reminder"
                className="
                  absolute
                  right-2.5
                  top-2.5
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  text-slate-400
                  transition
                  hover:bg-slate-50
                  hover:text-slate-700
                "
              >
                <X className="h-4 w-4" />
              </button>

              {/* Content */}

              <div className="flex gap-2.5 pr-5">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-sky-50
                  "
                >
                  <MessageCircle
                    className="
                      h-4
                      w-4
                      text-sky-600
                    "
                  />
                </div>

                <div>

                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-sky-600
                    "
                  >
                    Your feedback matters
                  </p>

                  <h3
                    className="
                      mt-0.5
                      text-[13px]
                      font-semibold
                      text-slate-900
                    "
                  >
                    Enjoying your experience?
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[10.5px]
                      leading-relaxed
                      text-slate-500
                    "
                  >
                    We'd love to hear your thoughts.
                  </p>

                </div>

              </div>

              {/* Buttons */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                "
              >

                <button
                  type="button"
                  onClick={openReviewForm}
                  className="
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-1.5
                    rounded-full
                    bg-slate-900
                    px-3
                    py-2
                    text-[10.5px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-slate-800
                  "
                >
                  <Star
                    className="
                      h-3.5
                      w-3.5
                      fill-sky-400
                      text-sky-400
                    "
                  />

                  Leave a Review
                </button>

                <button
                  type="button"
                  onClick={closeReminder}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-3
                    py-2
                    text-[10.5px]
                    font-medium
                    text-slate-500
                    transition
                    hover:border-slate-300
                    hover:text-slate-700
                  "
                >
                  Later
                </button>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          FLOATING REVIEW BUTTON
      ================================================= */}

      {!isOpen &&
        !showReminder &&
        !hasSubmittedReview && (
          <button
            type="button"
            onClick={openReviewForm}
            aria-label="Leave a review"
            title="Leave a review"
            className="
              fixed
              left-3
              bottom-20
              z-[55]

              flex
              items-center
              gap-1.5

              rounded-full
              border
              border-slate-200
              bg-white

              px-3
              py-2

              text-[11px]
              font-semibold
              text-slate-700

              shadow-[0_8px_24px_rgba(15,23,42,0.14)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-sky-200
              hover:text-sky-600
              hover:shadow-[0_12px_28px_rgba(15,23,42,0.18)]

              active:scale-95

              sm:left-5
              sm:bottom-20
              sm:px-3.5
              sm:py-2
            "
          >
            <Star
              className="
                h-3.5
                w-3.5
                fill-sky-500
                text-sky-500

                sm:h-4
                sm:w-4
              "
            />

            <span>
              Review
            </span>
          </button>
        )}

      {/* =================================================
          REVIEW FORM
      ================================================= */}

      {isOpen && !submitted && (
        <div
          className="
            fixed
            bottom-[9.5rem]
            right-3
            z-[70]

            w-[calc(100%-1.5rem)]
            max-w-[290px]

            sm:right-5
            sm:bottom-[9rem]
            sm:max-w-[310px]
          "
        >
          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-[0_18px_45px_rgba(15,23,42,0.16)]
            "
          >

            {/* Top Line */}

            <div
              className="
                h-1
                bg-gradient-to-r
                from-sky-400
                to-sky-600
              "
            />

            <div className="p-3 sm:p-3.5">

              {/* Header */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >

                <div>

                  <p
                    className="
                      text-[9px]
                      font-semibold
                      tracking-wider
                      text-sky-600
                    "
                  >
                    YOUR FEEDBACK
                  </p>

                  <h3
                    className="
                      mt-0.5
                      text-[13px]
                      font-semibold
                      text-slate-900
                    "
                  >
                    Leave a Review
                  </h3>

                </div>

                <button
                  type="button"
                  onClick={closePopup}
                  aria-label="Close review form"
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    text-slate-400
                    transition
                    hover:bg-slate-50
                    hover:text-slate-700
                  "
                >
                  <X className="h-3.5 w-3.5" />
                </button>

              </div>

              {/* Form */}

              <form
                onSubmit={handleSubmit}
                className="
                  mt-2.5
                  space-y-2.5
                "
              >

                {/* Name */}

                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  maxLength={100}
                  className="
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    px-3
                    py-2
                    text-[11px]
                    text-slate-800
                    placeholder:text-slate-400
                    outline-none
                    transition
                    focus:border-sky-300
                    focus:ring-2
                    focus:ring-sky-50
                  "
                />

                {/* Rating */}

                <div>

                  <p
                    className="
                      mb-0.5
                      text-[10px]
                      font-medium
                      text-slate-500
                    "
                  >
                    Rating
                  </p>

                  <div className="flex gap-0.5">

                    {[1, 2, 3, 4, 5].map(
                      (star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() =>
                            setRating(star)
                          }
                          onMouseEnter={() =>
                            setHoverRating(star)
                          }
                          onMouseLeave={() =>
                            setHoverRating(0)
                          }
                          aria-label={`${star} star rating`}
                          className="
                            p-0.5
                            transition-transform
                            hover:scale-110
                          "
                        >
                          <Star
                            className={`h-3.5 w-3.5 ${
                              (hoverRating ||
                                rating) >= star
                                ? "fill-sky-500 text-sky-500"
                                : "text-slate-300"
                            }`}
                          />
                        </button>
                      )
                    )}

                  </div>
                </div>

                {/* Review */}

                <textarea
                  placeholder="Share your experience..."
                  value={reviewText}
                  onChange={(e) =>
                    setReviewText(e.target.value)
                  }
                  rows={2}
                  maxLength={1000}
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-slate-200
                    bg-white
                    px-3
                    py-2
                    text-[11px]
                    leading-relaxed
                    text-slate-800
                    placeholder:text-slate-400
                    outline-none
                    transition
                    focus:border-sky-300
                    focus:ring-2
                    focus:ring-sky-50
                  "
                />

                {/* Error */}

                {error && (
                  <p
                    className="
                      rounded-lg
                      bg-red-50
                      px-2.5
                      py-1.5
                      text-[10px]
                      leading-relaxed
                      text-red-500
                    "
                  >
                    {error}
                  </p>
                )}

                {/* Submit */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-1.5
                    rounded-full
                    bg-slate-900
                    px-4
                    py-2
                    text-[11px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-slate-800
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {submitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Review

                      <Send
                        className="
                          h-3
                          w-3
                          transition-transform
                          group-hover:translate-x-0.5
                        "
                      />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          SUCCESS MESSAGE
      ================================================= */}

      {isOpen && submitted && (
        <div
          className="
            fixed
            bottom-[9.5rem]
            right-3
            z-[70]

            w-[calc(100%-1.5rem)]
            max-w-[290px]

            sm:right-5
            sm:bottom-[9rem]
            sm:max-w-[300px]
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-3.5
              shadow-[0_18px_45px_rgba(15,23,42,0.16)]
            "
          >

            <div
              className="
                flex
                items-start
                justify-between
                gap-3
              "
            >

              <div>

                <h3
                  className="
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Thank you
                </h3>

                <p
                  className="
                    mt-1
                    text-[11px]
                    leading-relaxed
                    text-slate-500
                  "
                >
                  Your review has been submitted
                  successfully.
                </p>

              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setIsOpen(false);
                }}
                aria-label="Close success message"
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-slate-400
                  hover:bg-slate-50
                  hover:text-slate-700
                "
              >
                <X className="h-3.5 w-3.5" />
              </button>

            </div>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setIsOpen(false);
              }}
              className="
                mt-2.5
                w-full
                rounded-full
                bg-slate-900
                px-4
                py-2
                text-[11px]
                font-semibold
                text-white
                transition
                hover:bg-slate-800
              "
            >
              Done
            </button>

          </div>
        </div>
      )}
    </>
  );
}