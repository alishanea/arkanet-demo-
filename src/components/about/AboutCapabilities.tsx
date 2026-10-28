import Link from "next/link";
import { services } from "@/lib/aboutData";

export function AboutCapabilities() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#f4f6fb] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14">

        <div className="max-w-3xl space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#202B61] tracking-tight leading-tight">
            Our capabilities span engineering, AI, and design, end to end, under one roof. We work across the full stack, so every project is delivered to the highest standard.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {services.map((service) => (
            <div key={service.category} className="space-y-4">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#202B61] tracking-tight leading-snug">
                {service.category}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item) => {
                  const itemName = typeof item === "string" ? item : item.name;
                  const itemHref = typeof item === "string" ? "#" : item.href;

                  return (
                    <li key={itemName}>
                      <Link
                        href={itemHref}
                        className="font-sans font-medium text-sm sm:text-base text-slate-600 hover:text-[#202B61] transition-colors leading-snug inline-block"
                      >
                        {itemName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
