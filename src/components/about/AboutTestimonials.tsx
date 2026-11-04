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

const AUTO_SCROLL_INTERVAL = 11000;

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
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#f4f6fb] border-b border-slate-200/80 text-left select-none font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative w-full bg-[#151E48] text-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-[#253272] shadow-sm flex flex-col justify-between min-h-[360px] sm:min-h-[380px]">
          
          {/* Top Quote Content */}
          <div className="relative z-10 w-full max-w-4xl my-auto">
            <div className="grid grid-cols-1 grid-rows-1 items-center min-h-[150px] sm:min-h-[170px]">
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
                  <blockquote className="font-heading font-medium text-xl sm:text-2xl lg:text-3xl leading-snug tracking-tight text-white !text-white">
                    &#8220;{testimonial.quote}&#8221;
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Author Attribution */}
            <div className="mt-8 space-y-1">
              <div className="font-heading font-bold text-base sm:text-lg text-white">
                {testimonial.author}
              </div>
              <div className="font-sans text-xs sm:text-sm text-slate-300 font-medium">
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </div>

          {/* Bottom Controls / Arrows */}
          {hasMultiple && (
            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-[#253272] mt-6">
              <div className="text-xs font-sans font-semibold text-slate-300 tracking-wider">
                0{active + 1} / 0{testimonials.length}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full border border-slate-700/80 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full border border-slate-700/80 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
