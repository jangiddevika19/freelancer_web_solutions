import { useEffect, useState, useCallback } from "react";
import {
  Star,
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
  BadgeCheck,
} from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AUTO_SLIDE_DELAY = 4500;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  /* ==========================================================
     FETCH REVIEWS
  ========================================================== */

  const fetchReviews = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/reviews`);

      if (!response.ok) {
        throw new Error("Failed to load reviews");
      }

      const data = await response.json();

      setReviews(data);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Could not fetch reviews:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();

    window.addEventListener("review-submitted", fetchReviews);

    return () => {
      window.removeEventListener("review-submitted", fetchReviews);
    };
  }, [fetchReviews]);

  /* ==========================================================
     RESPONSIVE
     Mobile  = 1
     Tablet  = 2
     Desktop = 3
  ========================================================== */

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }

      setCurrentIndex(0);
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  /* ==========================================================
     CREATE SLIDES
  ========================================================== */

  const slides = [];

  for (let i = 0; i < reviews.length; i += visibleCount) {
    slides.push(reviews.slice(i, i + visibleCount));
  }

  const totalSlides = slides.length;

  /* ==========================================================
     AUTO SLIDE
  ========================================================== */

  useEffect(() => {
    if (totalSlides <= 1 || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= totalSlides - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [totalSlides, isPaused]);

  /* ==========================================================
     NAVIGATION
  ========================================================== */

  const previousSlide = () => {
    if (totalSlides <= 1) return;

    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    if (totalSlides <= 1) return;

    setCurrentIndex((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-28">
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-100/70 via-sky-50/40 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-slate-500 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-sky-500" />
            Client Reviews
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            What Clients{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Honest feedback from clients who have worked with Devika Web
            Solutions.
          </p>

        </div>

        {/* ====================================================
            REVIEWS
        ==================================================== */}

        <div className="mt-14 sm:mt-16">

          {loading ? (

            <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_8px_30px_rgba(15,23,42,0.04)]">

              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 ring-1 ring-sky-100">
                <MessageSquare className="h-5 w-5 text-sky-500" />
              </div>

              <p className="mt-4 text-sm font-medium text-slate-500">
                Loading client reviews...
              </p>

            </div>

          ) : reviews.length === 0 ? (

            <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-sky-50/50 p-10 text-center shadow-[0_8px_30px_rgba(15,23,42,0.04)]">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <MessageSquare className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-base font-semibold text-slate-900">
                No reviews yet
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Be the first to share your experience with Devika Web
                Solutions.
              </p>

            </div>

          ) : (

            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >

              {/* ==================================================
                  SLIDER
              ================================================== */}

              <div className="overflow-hidden">

                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >

                  {slides.map((slide, slideIndex) => (

                    <div
                      key={slideIndex}
                      className="min-w-full px-1"
                    >

                      <div
                        className={
                          visibleCount === 3
                            ? "grid grid-cols-3 gap-6"
                            : visibleCount === 2
                            ? "grid grid-cols-2 gap-6"
                            : "grid grid-cols-1 gap-5"
                        }
                      >

                        {slide.map((review) => (

                          <article
                            key={review.id}
                            className="
                              group relative flex min-h-[290px]
                              flex-col overflow-hidden
                              rounded-[26px]
                              border border-slate-200
                              bg-white
                              p-6 sm:p-7
                              shadow-[0_8px_30px_rgba(15,23,42,0.045)]
                              transition-all duration-300
                              hover:-translate-y-1
                              hover:border-sky-200
                              hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]
                            "
                          >

                            {/* Top Accent */}

                            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Quote */}

                            <div className="pointer-events-none absolute right-5 top-5 opacity-[0.045]">
                              <Quote className="h-20 w-20 text-sky-600" />
                            </div>

                            {/* Rating */}

                            <div className="relative flex items-center justify-between">

                              <div className="flex items-center gap-1">

                                {[1, 2, 3, 4, 5].map((star) => (

                                  <Star
                                    key={star}
                                    className={`h-4 w-4 ${
                                      star <= review.rating
                                        ? "fill-sky-500 text-sky-500"
                                        : "text-slate-200"
                                    }`}
                                  />

                                ))}

                              </div>

                              <div className="flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1">

                                <BadgeCheck className="h-3.5 w-3.5 text-sky-500" />

                                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                  Verified
                                </span>

                              </div>

                            </div>

                            {/* Review */}

                            <div className="relative mt-6 flex-1">

                              <p className="text-sm leading-7 text-slate-600">
                                “{review.review}”
                              </p>

                            </div>

                            {/* Client */}

                            <div className="relative mt-6 border-t border-slate-100 pt-5">

                              <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-600 ring-1 ring-sky-100">
                                  {review.name
                                    ?.charAt(0)
                                    ?.toUpperCase()}
                                </div>

                                <div>

                                  <p className="text-sm font-semibold text-slate-900">
                                    {review.name}
                                  </p>

                                  <p className="mt-0.5 text-[11px] text-slate-400">
                                    Verified Client Review
                                  </p>

                                </div>

                              </div>

                            </div>

                          </article>

                        ))}

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* ==================================================
                  DOTS + ARROWS
              ================================================== */}

              {totalSlides > 1 && (

                <div className="mt-8 flex items-center justify-center gap-4">

                  {/* LEFT */}

                  <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous reviews"
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full
                      border border-slate-200
                      bg-white
                      text-slate-500
                      shadow-sm
                      transition
                      hover:border-sky-200
                      hover:bg-sky-50
                      hover:text-sky-600
                      active:scale-95
                    "
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  {/* DOT INDICATORS */}

                  <div className="flex items-center gap-2">

                    {slides.map((_, index) => (

                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Show review slide ${index + 1}`}
                        className="
                          flex h-5 items-center justify-center
                        "
                      >
                        <span
                          className={`
                            block h-1.5 rounded-full
                            transition-all duration-300
                            ${
                              currentIndex === index
                                ? "w-7 bg-sky-500"
                                : "w-1.5 bg-slate-300 hover:bg-slate-400"
                            }
                          `}
                        />
                      </button>

                    ))}

                  </div>

                  {/* RIGHT */}

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next reviews"
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full
                      border border-slate-200
                      bg-white
                      text-slate-500
                      shadow-sm
                      transition
                      hover:border-sky-200
                      hover:bg-sky-50
                      hover:text-sky-600
                      active:scale-95
                    "
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                </div>

              )}

            </div>

          )}

        </div>
      </div>
    </section>
  );
}