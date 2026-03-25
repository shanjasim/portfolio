import { useRef } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Play,
  Sparkles,
  WandSparkles,
  Workflow,
  Youtube,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import edaptVideo from "../assets/Videos/edapt 1.mp4";
import umerVideo from "../assets/Videos/Umer abdussalam 1.mp4";
import phlemVideo from "../assets/Videos/phlem wellness.mp4";
import ameerVideo from "../assets/Videos/ameer.mp4";
import markazVideo from "../assets/Videos/Markaz.mp4";
import najiyaVideo from "../assets/Videos/Najiya.mp4";
import shwenaVideo from "../assets/Videos/shwena.mp4";
import zackVideo from "../assets/Videos/Zackariya zack.mp4";
import baljoreVideo from "../assets/Videos/Baljore reel 2.mp4";
import baljoureVideo from "../assets/Videos/Baljoure reel.mp4";
import cantonFairVideo from "../assets/Videos/Canton Fair Abdussalam .mp4";
import visaGuyAdVideo from "../assets/Videos/visa guy ad.mp4";

import profileImage from "../assets/images/profile.png";
import ragImage from "../assets/images/RAG.png";
import telegramImage from "../assets/images/telegram.png";
import logitrackOne from "../assets/images/logitrack 1.png";

const reelProjects = [
  { title: "Edapt Reel", category: "AI brand edit", video: edaptVideo },
  { title: "Umer Abdussalam", category: "Founder reel", video: umerVideo },
  { title: "Phlem Wellness", category: "Wellness promo", video: phlemVideo },
  { title: "Ameer Spotlight", category: "Personal brand", video: ameerVideo },
  { title: "Markaz Campaign", category: "Event reel", video: markazVideo },
  { title: "Najiya", category: "Social reel", video: najiyaVideo },
  { title: "Shwena", category: "Lifestyle reel", video: shwenaVideo },
  { title: "Zackariya Zack", category: "Personal brand", video: zackVideo },
  { title: "Baljore Reel 2", category: "Product reel", video: baljoreVideo },
  { title: "Baljoure Reel", category: "Product reel", video: baljoureVideo },
  { title: "Canton Fair", category: "Event coverage", video: cantonFairVideo },
  { title: "Visa Guy Ad", category: "Ad creative", video: visaGuyAdVideo },
];

const automationProjects = [
  {
    title: "RAG Workflow",
    tag: "AI automation",
    image: ragImage,
    description:
      "Retrieval-augmented workflow design for faster information access and cleaner internal operations.",
    href: "https://www.linkedin.com/posts/shan234_n8n-ai-automation-activity-7380954782754283520-iqxD",
  },
  {
    title: "Telegram Assistant",
    tag: "AI automation",
    image: telegramImage,
    description:
      "Telegram-based assistant flow built to automate communication and reduce repetitive manual work.",
    href: "https://www.linkedin.com/posts/shan234_built-a-telegram-assistant-powered-by-activity-7376261391374004227-oUm9",
  },
  {
    title: "Logitrack System",
    tag: "Automation snapshots",
    image: logitrackOne,
    description:
      "Operational automation system presented through workflow snapshots and implementation previews.",
    href: "https://www.linkedin.com/posts/shan234_n8n-ai-automation-activity-7380954782754283520-iqxD",
  },
];

const youtubeProjects = [
  {
    title: "Umer Abdussalam Channel Work",
    description:
      "Long-form YouTube edits and channel-ready content crafted for clarity, pacing, and retention.",
    href: "https://www.youtube.com/@UmerAbdussalam/videos",
  },
  {
    title: "Featured Video 1",
    description: "Long-form edit focused on structure, delivery, and clean visual rhythm.",
    href: "https://youtu.be/t4d89eewrCU?si=d7HwUi6uLNxOW5mJ",
  },
  {
    title: "Featured Video 2",
    description: "YouTube storytelling edit designed for stronger viewer retention.",
    href: "https://youtu.be/9TgEC1ICS24?si=-iOyeG-xplEbcOOS",
  },
  {
    title: "Featured Video 3",
    description: "Educational/promotional long-form content with polished pacing.",
    href: "https://youtu.be/R0iVRizlgMI?si=4bnbFZAcOkEYy2b3",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.32em] text-amber-200/78">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function App() {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleVideoPlay = (activeTitle: string) => {
    Object.entries(videoRefs.current).forEach(([title, node]) => {
      if (title !== activeTitle && node) {
        node.pause();
      }
    });
  };

  return (
    <main className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_20%),linear-gradient(180deg,#06070a_0%,#0c1016_52%,#090b11_100%)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] opacity-15" />

      <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
        <section className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-[32px] border border-white/10 bg-white/7 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:sticky lg:top-6 lg:h-fit">
            <img
              src={profileImage}
              alt="Muhammed Shan Jasim S"
              className="h-24 w-24 rounded-[28px] border border-white/10 object-cover"
            />
            <p className="mt-5 text-xs uppercase tracking-[0.32em] text-amber-200/78">
              Shan Portfolio
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
              Muhammed Shan Jasim S
            </h1>
            <p className="mt-4 text-sm leading-7 text-white/66">
              Video editor and AI solutions developer focused on premium-looking
              content, clean communication, and useful automation systems.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href="https://wa.me/919995505899"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-300 to-orange-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                <Sparkles size={16} />
                Start a project
              </a>
              <a
                href="mailto:shanjasim11@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm font-medium text-white/88 backdrop-blur-xl"
              >
                <Mail size={16} />
                shanjasim11@gmail.com
              </a>
            </div>

            <div className="mt-8 grid gap-3">
              {[
                "Short-form reel editing",
                "YouTube video editing",
                "AI automations for business",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/6 px-4 py-3"
                >
                  <CheckCircle2 size={16} className="text-emerald-300" />
                  <span className="text-sm text-white/78">{item}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-6">
            <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white/7 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
              <Badge className="border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-cyan-100">
                Premium Presentation
              </Badge>

              <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                A clean, premium portfolio that shows the work first and keeps
                every project easy to review.
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-white/64 sm:text-base">
                I removed the experimental scroll wheel and replaced it with a
                stable, client-friendly layout. Everything is visible, better
                aligned, and easier to browse without awkward motion.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-slate-950/35 p-5 backdrop-blur-xl">
                  <WandSparkles className="mb-6 text-amber-200" size={20} />
                  <p className="text-sm font-medium text-white">Luxury look</p>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Glassmorphism, calmer spacing, and cleaner typography.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-slate-950/35 p-5 backdrop-blur-xl">
                  <Play className="mb-6 text-cyan-200" size={20} />
                  <p className="text-sm font-medium text-white">Clear previews</p>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Reel cards stay visible in a proper grid and play one at a time.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-slate-950/35 p-5 backdrop-blur-xl">
                  <Workflow className="mb-6 text-emerald-200" size={20} />
                  <p className="text-sm font-medium text-white">Complete scope</p>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Reels, long-form editing, and automation work all in one clean flow.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[32px] border border-white/10 bg-white/7 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
              <SectionHeader
                eyebrow="Reel edits"
                title="Featured video portfolio"
                description="A clean viewing grid for short-form edits. Videos remain visible without the strange rotating scroll effect, and only one preview plays at a time."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {reelProjects.map((project) => (
                  <article
                    key={project.title}
                    className="group overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.3)]"
                  >
                    <div className="relative overflow-hidden rounded-[22px] bg-slate-950">
                      <video
                        ref={(node) => {
                          videoRefs.current[project.title] = node;
                        }}
                        src={project.video}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        onPlay={() => handleVideoPlay(project.title)}
                        className="aspect-[9/16] w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    </div>
                    <div className="px-2 pb-2 pt-4">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                        {project.category}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">
                        {project.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] border border-white/10 bg-white/7 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
              <SectionHeader
                eyebrow="YouTube edits"
                title="Long-form content and channel work"
                description="Selected links from YouTube editing work. This keeps the portfolio complete while staying clean and easy for clients to scan."
              />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {youtubeProjects.map((project) => (
                  <a
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[26px] border border-white/10 bg-slate-950/35 p-5 transition hover:border-amber-200/20 hover:bg-slate-950/45"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/42">
                          <Youtube size={14} />
                          YouTube
                        </div>
                        <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/58">
                          {project.description}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-1 text-white/45 transition group-hover:text-amber-100" size={18} />
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] border border-white/10 bg-white/7 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
              <SectionHeader
                eyebrow="AI automations"
                title="Systems and workflow projects"
                description="Supporting automation work presented in a premium card layout so the portfolio covers both creative output and technical implementation."
              />

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {automationProjects.map((project) => (
                  <a
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/35 transition hover:border-cyan-200/20"
                  >
                    <div className="aspect-[16/11] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100/70">
                        {project.tag}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/58">
                        {project.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
