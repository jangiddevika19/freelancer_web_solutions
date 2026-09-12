
import { useEffect, useState, useCallback } from "react";
import { Star, MessageSquare, Sparkles } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/reviews`);

      if (!response.ok) {
        throw new Error("Failed to load reviews");
      }

      const data = await response.json();
      setReviews(data);
    } catch (err) {
      console.error("Could not fetch reviews:", err);
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

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-100/70 via-sky-50/40 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
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

          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Honest feedback from clients who have worked with Devika Web
            Solutions.
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-16">
          {loading ? (
            <div className="flex justify-center">
              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-sm text-slate-400 shadow-sm">
                Loading reviews...
              </div>
            </div>
          ) : reviews.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-sky-50/50 p-10 text-center shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="
                    group relative flex h-full flex-col rounded-2xl
                    border border-slate-200 bg-white p-6
                    shadow-[0_2px_10px_rgba(15,23,42,0.04)]
                    transition-all duration-300 ease-out
                    hover:-translate-y-1.5 hover:border-sky-200
                    hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]
                  "
                >
                  {/* Rating */}
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

                  {/* Review */}
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">
                    "{review.review}"
                  </p>

                  {/* Divider */}
                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-sm font-semibold tracking-tight text-slate-900">
                      {review.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Verified Client Review
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
