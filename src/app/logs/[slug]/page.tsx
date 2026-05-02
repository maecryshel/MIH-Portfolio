import type { Metadata } from "next";
import Link from "next/link";
import { getAllLogSlugs, getLogBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllLogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { meta } = await getLogBySlug(params.slug);
    return {
      title: `Week ${meta.week} — ${meta.title}`,
      description: meta.excerpt,
    };
  } catch {
    return { title: "Log Not Found" };
  }
}

export default async function LogPage({ params }: Props) {
  try {
    const { meta, contentHtml } = await getLogBySlug(params.slug);

    return (
      <main className="page-container py-16 fade-up">
        {/* Refined Back Button */}
        <div className="mb-12">
          <Link
            href="/logs"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--mauve)] hover:text-[var(--ink)] transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to Journal
          </Link>
        </div>

        {/* Editorial Header */}
        <header className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[var(--mauve)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Week {meta.week}
            </span>
            <span className="text-[var(--rule)]">/</span>
            <time className="text-[11px] font-medium uppercase tracking-widest text-[var(--ink3)]">
              {meta.dateRange}
            </time>
          </div>

          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[var(--ink)] leading-[1.1] mb-6">
            {meta.title}
          </h1>

          <p className="text-lg text-[var(--ink2)] leading-relaxed italic opacity-80 border-l-2 border-[var(--rule)] pl-6">
            {meta.excerpt}
          </p>
        </header>

        {/* Content Area */}
        <article className="max-w-2xl">
          <div
            className="prose prose-neutral lg:prose-lg 
              prose-headings:font-['Cormorant_Garamond'] 
              prose-headings:font-medium 
              prose-headings:text-[var(--ink)]
              prose-p:text-[var(--ink2)] 
              prose-p:leading-relaxed
              prose-strong:text-[var(--mauve)]
              prose-blockquote:border-[var(--mauve-light)]
              prose-blockquote:italic
              max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          
          {/* Footer of the article */}
          <div className="mt-20 pt-10 border-t border-[var(--rule)]">
            <p className="text-[11px] uppercase tracking-widest text-[var(--ink3)] mb-4">
              End of Week {meta.week} Entry
            </p>
            <Link 
              href="/logs"
              className="text-[var(--mauve)] hover:underline text-sm font-medium"
            >
              View all internship records →
            </Link>
          </div>
        </article>
      </main>
    );
  } catch {
    notFound();
  }
}