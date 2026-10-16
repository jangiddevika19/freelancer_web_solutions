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

/* ==========================================================
   API
========================================================== */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://freelancer-web-solutions.onrender.com";

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

      setReviews(Array.isArray(data) ? data : []);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Could not fetch reviews:", error);
      setReviews([]);
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
     RESPONSIVE LAYOUT
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
      setCurrentIndex((prev) =>
        prev >= totalSlides - 1 ? 0 : prev + 1
      );
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

  /* ==========================================================
     UI
  ========================================================== */

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* ======================================================
          SOFT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-50/70 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-slate-50 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="mx-auto max-w-2xl text-center">

          {/* Small label */}

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-50">
              <Sparkles className="h-3 w-3 text-sky-500" />
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Client Reviews
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
            Trusted by Clients,
            <br className="hidden sm:block" />

            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
              Built with Care
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
  Honest feedback from clients who have trusted
  Devika Web Solutions.
</p>

          {/* Trust line */}

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">

            <BadgeCheck className="h-4 w-4 text-sky-500" />

            <span>Reviews from verified client submissions</span>

          </div>

        </div>

        {/* ====================================================
            REVIEW AREA
        ==================================================== */}

        <div className="mt-12 sm:mt-14 lg:mt-16">

          {/* ==================================================
              LOADING
          ================================================== */}

          {loading ? (

            <div className="mx-auto max-w-xl rounded-[28px] border border-slate-200 bg-white p-9 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)]">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 ring-1 ring-sky-100">

                <MessageSquare className="h-5 w-5 text-sky-500" />

              </div>

              <p className="mt-4 text-sm font-medium text-slate-500">
                Loading client reviews...
              </p>

            </div>

          ) : reviews.length === 0 ? (

            /* ==================================================
               EMPTY STATE
            ================================================== */

            <div className="mx-auto max-w-xl rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)]">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 ring-1 ring-sky-100">

                <MessageSquare className="h-5 w-5 text-sky-600" />

              </div>

              <h3 className="mt-5 text-base font-semibold text-slate-900">
                No reviews yet
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                Be one of the first clients to share your
                experience with Devika Web Solutions.
              </p>

            </div>

          ) : (

            /* ==================================================
               SLIDER
            ================================================== */

            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >

              <div className="overflow-hidden rounded-[30px]">

                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateX(-${
                      currentIndex * 100
                    }%)`,
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
                            ? "grid grid-cols-3 gap-5 lg:gap-6"
                            : visibleCount === 2
                            ? "grid grid-cols-2 gap-5"
                            : "grid grid-cols-1 gap-5"
                        }
                      >

                        {slide.map((review) => (

                          <article
                            key={review.id}
                            className="
                              group relative flex min-h-[300px]
                              flex-col overflow-hidden
                              rounded-[28px]
                              border border-slate-200
                              bg-white
                              p-6 sm:p-7
                              shadow-[0_10px_35px_rgba(15,23,42,0.045)]
                              transition-all duration-300
                              hover:-translate-y-1
                              hover:border-sky-200
                              hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]
                            "
                          >

                            {/* Top premium line */}

                            <div className="
                              absolute left-8 right-8 top-0 h-px
                              bg-gradient-to-r
                              from-transparent
                              via-sky-300
                              to-transparent
                              opacity-60
                            " />

                            {/* Large quote */}

                            <div className="
                              pointer-events-none
                              absolute right-5 top-5
                              opacity-[0.045]
                            ">
                              <Quote className="h-20 w-20 text-sky-700" />
                            </div>

                            {/* ==================================================
                                CARD TOP
                            ================================================== */}

                            <div className="relative flex items-center justify-between">

                              {/* Rating */}

                              <div className="flex items-center gap-1">

                                {[1, 2, 3, 4, 5].map((star) => (

                                  <Star
                                    key={star}
                                    className={`h-[17px] w-[17px] ${
                                      star <= review.rating
                                        ? "fill-sky-500 text-sky-500"
                                        : "text-slate-200"
                                    }`}
                                  />

                                ))}

                              </div>

                              {/* Verified */}

                              <div className="
                                flex items-center gap-1.5
                                rounded-full
                                border border-sky-100
                                bg-sky-50/70
                                px-2.5 py-1
                              ">

                                <BadgeCheck className="h-3.5 w-3.5 text-sky-500" />

                                <span className="
                                  text-[10px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.12em]
                                  text-sky-600
                                ">
                                  Verified
                                </span>

                              </div>

                            </div>

                            {/* ==================================================
                                REVIEW CONTENT
                            ================================================== */}

                            <div className="relative mt-6 flex-1">

                              <p className="
                                text-[14px]
                                leading-7
                                text-slate-600
                                sm:text-[15px]
                              ">
                                “{review.review}”
                              </p>

                            </div>

                            {/* ==================================================
                                CLIENT
                            ================================================== */}

                            <div className="
                              relative mt-6
                              border-t border-slate-100
                              pt-5
                            ">

                              <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                  {/* Initial */}

                                  <div className="
                                    flex h-10 w-10 shrink-0
                                    items-center justify-center
                                    rounded-full
                                    border border-sky-100
                                    bg-sky-50
                                    text-sm font-semibold
                                    text-sky-600
                                  ">
                                    {review.name
                                      ?.charAt(0)
                                      ?.toUpperCase()}
                                  </div>

                                  {/* Name */}

                                  <div>

                                    <p className="
                                      text-sm
                                      font-semibold
                                      text-slate-900
                                    ">
                                      {review.name}
                                    </p>

                                    <div className="
                                      mt-1
                                      flex items-center gap-1.5
                                    ">

                                      <BadgeCheck className="h-3 w-3 text-sky-500" />

                                      <p className="
                                        text-[10px]
                                        font-medium
                                        text-slate-400
                                      ">
                                        Verified Client
                                      </p>

                                    </div>

                                  </div>

                                </div>

                                {/* Small rating text */}

                                <div className="
                                  hidden
                                  rounded-full
                                  bg-slate-50
                                  px-2.5 py-1
                                  text-[10px]
                                  font-semibold
                                  text-slate-400
                                  sm:block
                                ">
                                  {review.rating}.0 / 5
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
                  NAVIGATION
              ================================================== */}

              {totalSlides > 1 && (

                <div className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  gap-4
                ">

                  {/* Previous */}

                  <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous reviews"
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-slate-200
                      bg-white
                      text-slate-500
                      shadow-sm
                      transition-all
                      duration-200
                      hover:border-sky-200
                      hover:bg-sky-50
                      hover:text-sky-600
                      active:scale-95
                    "
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  {/* ==================================================
                      DOTS
                  ================================================== */}

                  <div className="flex items-center gap-2">

                    {slides.map((_, index) => (

                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Show review slide ${
                          index + 1
                        }`}
                        className="
                          flex h-5
                          items-center
                          justify-center
                        "
                      >

                        <span
                          className={`
                            block h-1.5
                            rounded-full
                            transition-all
                            duration-300

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

                  {/* Next */}

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next reviews"
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-slate-200
                      bg-white
                      text-slate-500
                      shadow-sm
                      transition-all
                      duration-200
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

        {/* ======================================================
            TRUST FOOTER
        ====================================================== */}

        {!loading && reviews.length > 0 && (

          <div className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-5
            gap-y-2
            text-[11px]
            font-medium
            text-slate-400
          ">

            <div className="flex items-center gap-1.5">
              <BadgeCheck className="h-3.5 w-3.5 text-sky-500" />
              Verified submissions
            </div>

            <span className="hidden h-3 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-sky-500 text-sky-500" />
              Genuine client feedback
            </div>

          </div>

        )}

      </div>
    </section>
  );
}