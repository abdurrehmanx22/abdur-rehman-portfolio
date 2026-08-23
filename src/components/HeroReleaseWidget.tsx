import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { workSamples } from '../data/content';

const releases = workSamples.map((sample) => ({
  image: sample.image,
  label: sample.title,
}));

const CYCLE_MS = 3200;

export default function HeroReleaseWidget() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % releases.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const current = releases[index];

  return (
    <motion.a
      href="#dashboards"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute left-4 top-4 z-20 hidden w-40 rounded-2xl bg-[var(--color-brand)] p-2.5 shadow-xl shadow-black/20 transition-colors duration-300 sm:block sm:left-8 sm:top-6"
    >
      <div className="flex items-center gap-1.5 px-1 pb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-900/40" />
        <span className="text-xs font-semibold text-neutral-900">Latest work</span>
      </div>

      <div
        className="relative w-full overflow-hidden rounded-lg bg-white"
        style={{ aspectRatio: '16 / 11', perspective: 800 }}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={current.image}
            src={current.image}
            alt={current.label}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="mt-2.5 rounded-lg bg-neutral-900 py-1.5 text-center text-xs font-semibold text-white">
        Preview
      </div>
    </motion.a>
  );
}
