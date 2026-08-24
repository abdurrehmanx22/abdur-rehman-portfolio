import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Lightbox from './Lightbox';
import { projects } from '../data/content';
import { fadeUp, staggerContainer } from '../lib/motion';

export default function Projects() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="Reporting and analytics builds spanning e-commerce, operations, education, and finance."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <button
                className="block w-full cursor-zoom-in"
                onClick={() => setActive({ src: project.images[0], alt: project.title })}
              >
                <div className="relative aspect-video w-full">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl text-ink">{project.title}</h3>
                <p className="mt-2 text-sm text-ink-muted sm:text-base">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <Lightbox src={active?.src ?? null} alt={active?.alt ?? ''} onClose={() => setActive(null)} />
    </section>
  );
}
