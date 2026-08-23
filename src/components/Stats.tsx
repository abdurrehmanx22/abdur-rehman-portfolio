import { useEffect, useRef, useState } from 'react';
import { animate, motion } from 'framer-motion';
import { stats } from '../data/content';

function Counter({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;
        animate(0, target, {
          duration: 1.4,
          ease: 'easeOut',
          onUpdate: (v) => setDisplay(Math.round(v)),
        });
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center"
        >
          <div className="font-display text-4xl text-brand sm:text-5xl">
            <Counter value={stat.value} />
          </div>
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-muted sm:text-sm">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
