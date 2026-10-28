import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { awards } from "@/lib/aboutData";

export function AboutAwards() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#f4f6fb] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">

        <div className="max-w-3xl space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight leading-tight">
            While our focus is on client success, we&apos;re proud to have our work continually recognised by industry leaders.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
          {awards.map((award) => (
            <div
              key={award.name}
              className="bg-white rounded-xl p-6 h-36 sm:h-40 shadow-2xs hover:shadow-md hover:border-[#202B61]/40 border border-slate-200/90 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#202B61]">
                {award.name}
              </div>
              <div className="text-xs font-sans font-bold uppercase tracking-wider text-slate-500">
                {award.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-sans font-bold text-[#202B61] hover:underline"
          >
            See all awards <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
