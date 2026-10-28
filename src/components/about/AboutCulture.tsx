import { weDo, weDont } from "@/lib/aboutData";

export function AboutCulture() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#f4f6fb] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">

        <div className="max-w-3xl space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight leading-tight">
            Above all, we believe in human relationships, exceptional outcomes, and having fun along the way.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">

          {/* What we do */}
          <div className="space-y-6">
            <h3 className="text-sm font-heading font-extrabold uppercase tracking-widest text-[#202B61] pb-2 border-b border-slate-200">
              What we do
            </h3>
            <ul className="space-y-3.5">
              {weDo.map((item) => (
                <li key={item} className="text-base sm:text-lg font-heading font-bold text-[#202B61] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#202B61] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What we don't */}
          <div className="space-y-6">
            <h3 className="text-sm font-heading font-extrabold uppercase tracking-widest text-[#202B61]/50 pb-2 border-b border-slate-200">
              What we don&apos;t
            </h3>
            <ul className="space-y-3.5">
              {weDont.map((item) => (
                <li key={item} className="text-base sm:text-lg font-sans font-medium text-[#202B61]/50 line-through decoration-[#202B61]/30 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
