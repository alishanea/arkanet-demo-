"use client";

import React from "react";

export interface ClientLogosSectionProps {
  onOpenBooking?: () => void;
}

export const ClientLogosSection: React.FC<ClientLogosSectionProps> = () => {
  return (
    <section
      id="trusted-by"
      className="relative w-full bg-[#f4f6fb] py-14 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 select-none border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        {/* Clean, Balanced Enterprise Cloud & Tech Partner Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-14 lg:gap-20 items-center justify-items-center">
          
          {/* 1. Google Cloud */}
          <div className="w-full flex items-center justify-center text-slate-500/85 hover:text-[#202B61] transition-colors duration-300 cursor-pointer">
            <svg
              viewBox="0 0 178 32"
              fill="currentColor"
              className="h-7 sm:h-8 w-auto max-w-[160px] sm:max-w-[178px] object-contain"
              aria-label="Google Cloud"
            >
              {/* Cloud Icon */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 8a8.5 8.5 0 0 0-7.8 5.2A6.5 6.5 0 0 0 4 19.5 6.5 6.5 0 0 0 10.5 26h15a6.5 6.5 0 0 0 6.5-6.5A6.5 6.5 0 0 0 25.5 13 8.5 8.5 0 0 0 19 8zm-7.5 15.5a4 4 0 0 1-1-7.8 1 1 0 0 1 1.2.7 6 6 0 0 1 11.6-1.4 1 1 0 0 1 .8.8 4 4 0 0 1-1.6 7.7h-11z"
              />
              {/* Google Cloud Wordmark */}
              <text
                x="36"
                y="21.5"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize="17.5"
                fontWeight="600"
                letterSpacing="-0.025em"
              >
                Google Cloud
              </text>
            </svg>
          </div>

          {/* 2. Dell Technologies */}
          <div className="w-full flex items-center justify-center text-slate-500/85 hover:text-[#202B61] transition-colors duration-300 cursor-pointer">
            <svg
              viewBox="0 0 205 32"
              fill="currentColor"
              className="h-6 sm:h-7 w-auto max-w-[170px] sm:max-w-[205px] object-contain"
              aria-label="Dell Technologies"
            >
              {/* D */}
              <path d="M4 6.5h7c4.2 0 7.5 3.2 7.5 7.8s-3.3 7.8-7.5 7.8H4V6.5zm4.2 12.4h2.8c2.4 0 4.2-1.8 4.2-4.6s-1.8-4.6-4.2-4.6H8.2v9.2z" />
              {/* E (Slanted signature DELL angle) */}
              <g transform="translate(26, 14.3) rotate(-18) translate(-26, -14.3)">
                <path d="M22.5 6.5h9v3.2h-5.2v3.1h4.4v3.2h-4.4v3.1h5.3v3.2h-9.1V6.5z" />
              </g>
              {/* L */}
              <path d="M35.5 6.5h4.2v12.4h7v3.4h-11.2V6.5z" />
              {/* L */}
              <path d="M49 6.5h4.2v12.4h7v3.4H49V6.5z" />
              {/* Technologies */}
              <text
                x="67"
                y="21"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize="16.5"
                fontWeight="300"
                letterSpacing="-0.01em"
              >
                Technologies
              </text>
            </svg>
          </div>

          {/* 3. Cisco */}
          <div className="w-full flex items-center justify-center text-slate-500/85 hover:text-[#202B61] transition-colors duration-300 cursor-pointer">
            <svg
              viewBox="0 0 105 46"
              fill="currentColor"
              className="h-9 sm:h-10 w-auto max-w-[90px] sm:max-w-[105px] object-contain"
              aria-label="Cisco"
            >
              {/* 9 Bridge waveform bars */}
              <rect x="7" y="16" width="4.5" height="12" rx="2.25" />
              <rect x="18" y="10" width="4.5" height="18" rx="2.25" />
              <rect x="29" y="4" width="4.5" height="24" rx="2.25" />
              <rect x="40" y="16" width="4.5" height="12" rx="2.25" />
              <rect x="51" y="0" width="4.5" height="28" rx="2.25" />
              <rect x="62" y="16" width="4.5" height="12" rx="2.25" />
              <rect x="73" y="4" width="4.5" height="24" rx="2.25" />
              <rect x="84" y="10" width="4.5" height="18" rx="2.25" />
              <rect x="95" y="16" width="4.5" height="12" rx="2.25" />
              {/* CISCO Wordmark */}
              <text
                x="53"
                y="43.5"
                textAnchor="middle"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontSize="15"
                fontWeight="800"
                letterSpacing="0.12em"
              >
                CISCO
              </text>
            </svg>
          </div>

          {/* 4. AWS */}
          <div className="w-full flex items-center justify-center text-slate-500/85 hover:text-[#202B61] transition-colors duration-300 cursor-pointer">
            <svg
              viewBox="0 0 82 40"
              fill="currentColor"
              className="h-8 sm:h-9 w-auto max-w-[70px] sm:max-w-[82px] object-contain"
              aria-label="Amazon Web Services"
            >
              {/* a */}
              <path d="M13 14c-3.5 0-5.5 2-5.5 5.5s2 5.5 5.5 5.5c2 0 3.5-.8 4.2-2v1.6H20V14.4h-2.8v1.6c-.7-1.2-2.2-2-4.2-2zm.5 8.5c-2 0-3.2-1.2-3.2-3s1.2-3 3.2-3 3.2 1.2 3.2 3-1.2 3-3.2 3z" />
              {/* w */}
              <path d="M22.5 14.4l3.5 10.2h2.5l2.8-8 2.8 8h2.5l3.5-10.2h-2.8l-2 6.8-2.6-6.8h-2.8l-2.6 6.8-2-6.8h-2.8z" />
              {/* s */}
              <path d="M47.5 22.8c-1.8 0-3-.8-3.4-1.8l-2.4 1.2c.8 1.8 2.8 3 5.8 3 3.6 0 5.8-1.8 5.8-4.5 0-4-5.5-3.5-5.5-4.8 0-.6.6-1 1.8-1 1.5 0 2.6.6 3 1.5l2.4-1.2c-.8-1.5-2.5-2.5-5.4-2.5-3.4 0-5.2 1.8-5.2 4.2 0 3.8 5.5 3.4 5.5 4.8 0 .8-.8 1.1-2.4 1.1z" />
              {/* Smile Curve Arrow */}
              <path d="M8 29.5c15 6 36 6 48-1.5l.8 2.2c-13 8-35.5 8-50.5 1.5l1.7-2.2z" />
              <path d="M57 28.5l-6-2.5 3.5 5.5 2.5-3z" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};
