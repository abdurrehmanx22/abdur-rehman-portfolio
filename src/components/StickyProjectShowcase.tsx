import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import type { Project } from '../data/content';

const SLOT_VH = 90;

export default function StickyProjectShowcase({
  projects,
  onZoom,
}: {
  projects: Project[];
  onZoom: (src: string, alt: string) => void;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  const indexMotion = useTransform(scrollYProgress, (p) =>
    Math.min(projects.length - 1, Math.floor(p * projects.length))
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return indexMotion.on('change', (v) => setActiveIndex(v));
  }, [indexMotion]);

  const project = projects[activeIndex];

  return (
    <div ref={wrapperRef} style={{ height: `${projects.length * SLOT_VH}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        <div className="relative w-full max-w-4xl" style={{ perspective: 1600 }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={project.title}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ transformStyle: 'preserve-3d' }}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-ink/20"
            >
              <button
                className="block w-full cursor-zoom-in"
                onClick={() => onZoom(project.images[0], project.title)}
              >
                <div className="relative aspect-video w-full">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <div className="absolute left-6 top-6 flex flex-wrap gap-2 sm:left-8 sm:top-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <h3 className="font-display text-2xl text-white sm:text-4xl">{project.title}</h3>
                    <p className="mt-2 max-w-xl text-sm text-white/70 sm:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-2">
            {projects.map((p, i) => (
              <span
                key={p.title}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-8 bg-brand' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
