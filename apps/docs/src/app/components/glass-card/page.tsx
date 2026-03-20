"use client";

import { GlassCard } from "@sapira/ui";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    title: "Building Scalable Design Systems with AI",
    description: "How we leveraged AI agents to automate component generation, testing, and documentation at Sapira.",
    tags: ["Design Systems", "AI"],
    author: { name: "Jeremie Mairesse" },
    readingTime: "5 min read",
    date: "Mar 18, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    title: "The Future of Enterprise Procurement",
    description: "Why agentic workflows are transforming how industrial companies manage their supply chains.",
    tags: ["Enterprise", "Procurement"],
    author: { name: "Claudinho", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop" },
    readingTime: "8 min read",
    date: "Mar 15, 2026",
  },
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    title: "Glassmorphism in Modern UI Design",
    description: "A deep dive into frosted glass effects, when to use them, and accessibility considerations.",
    tags: ["UI Design", "CSS"],
    author: { name: "Picasso" },
    readingTime: "4 min read",
    date: "Mar 12, 2026",
  },
];

export default function GlassCardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">GlassCard</h1>
        <p className="text-muted-foreground mt-2">
          Glassmorphism blog card with image zoom on hover, category tags, author info, and reading time.
          Perfect for blog listings, news feeds, and content showcases.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Card Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8">
          {cards.map((card, i) => (
            <GlassCard
              key={i}
              {...card}
              onCardClick={() => console.log("Clicked:", card.title)}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Note: GlassCard looks best on dark or gradient backgrounds where the frosted glass effect is visible.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Single Card — Default Props</h2>
        <div className="rounded-2xl bg-gradient-to-br from-indigo-950 to-purple-900 p-8 flex justify-center">
          <GlassCard />
        </div>
      </section>
    </div>
  );
}
