"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The team at Arkanet are true professionals, masters in their field, with meticulous attention to detail.",
    author: "Vanessa Katsanevakis",
    role: "Director",
    company: "Sussex Taps",
  },
  {
    quote:
      "They brought rare clarity to a complex brief. From strategy through to delivery, every decision felt purposeful, considered, and commercially grounded.",
    author: "Maya Reynolds",
    role: "Chief Product Officer",
    company: "Northstar Ventures",
  },
  {
    quote:
      "The team quickly became an extension of ours. They combined strong product thinking with technical depth, helping us move from ambition to a platform we could confidently scale.",
    author: "Daniel Hart",
    role: "Managing Director",
    company: "Aster & Co.",
  },
  {
    quote:
      "What stood out was the quality of their thinking. They challenged assumptions, simplified the difficult parts, and delivered an experience our customers immediately noticed.",
    author: "Elena Brooks",
    role: "Director of Digital",
    company: "Meridian Group",
  },
];

const AUTO_SCROLL_INTERVAL = 6000;

export function AboutTestimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const hasMultiple = testimonials.length > 1;

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      setDirection(dir);
      setActive(index);
    },
    []
  );

  const previousTestimonial = useCallback(() => {
    goTo(
      active === 0 ? testimonials.length - 1 : active - 1,
      "left"
    );
  }, [active, goTo]);

  const nextTestimonial = useCallback(() => {
    goTo(
      active === testimonials.length - 1 ? 0 : active + 1,
      "right"
    );
  }, [active, goTo]);

  useEffect(() => {
    if (!hasMultiple) return;

    intervalRef.current = setInterval(() => {
      setDirection("right");
      setActive((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasMultiple, active]);

  const testimonial = testimonials[active];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80 text-left">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative w-full bg-[#202B61] text-white rounded-[5px] p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-none flex flex-col justify-between min-h-[380px] sm:min-h-[400px]">
          
          {/* Top Quote Content */}
          <div className="relative z-10 w-full max-w-4xl my-auto">
            <div className="grid grid-cols-1 grid-rows-1 items-center min-h-[160px] sm:min-h-[180px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                    x: direction === "right" ? 20 : -20,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: direction === "right" ? -20 : 20,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="col-start-1 row-start-1 w-full"
                >
                  <blockquote className="font-heading font-medium text-2xl sm:text-3xl lg:text-4xl leading-snug tracking-tight text-white !text-white">
                    &#8220;{testimonial.quote}&#8221;
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Footer: Author Details + Controls */}
          <div className="relative z-10 pt-8 sm:pt-10 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10">
            {/* Author */}
            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-base sm:text-lg text-white">
                {testimonial.author}
              </span>
              <span className="font-sans text-xs sm:text-sm text-slate-400 font-normal mt-0.5">
                {testimonial.role ? `${testimonial.role} · ${testimonial.company}` : testimonial.company}
              </span>
            </div>

            {/* Arrow Controls */}
            {hasMultiple && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-[4px] border border-white/20 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-[4px] border border-white/20 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
