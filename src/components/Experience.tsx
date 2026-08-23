import { motion } from 'framer-motion';
import Container from './Container';
import SectionHeading from './SectionHeading';
import { corporateExperience, freelanceExperience } from '../data/content';
import type { ExperienceItem } from '../data/content';
import { fadeUp, staggerContainer } from '../lib/motion';

function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <motion.ol
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="relative space-y-10 border-l border-border pl-8"
    >
      {items.map((item, i) => (
        <motion.li
          key={`${item.org}-${item.role}`}
          variants={fadeUp}
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className="relative"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12, type: 'spring', stiffness: 400, damping: 18 }}
            className="absolute -left-[2.32rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-brand"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-ink">{item.role}</h3>
            <span className="text-xs font-medium uppercase tracking-wide text-brand">
              {item.period}
            </span>
          </div>
          <p className="text-sm font-medium text-ink-muted">
            {item.org} · {item.location}
          </p>
          <motion.ul
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-3 space-y-1.5"
          >
            {item.bullets.map((bullet) => (
              <motion.li key={bullet} variants={fadeUp} className="flex gap-2 text-sm text-ink-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.li>
      ))}
    </motion.ol>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Career so far"
          title="Experience"
          description="Corporate internships across banking, textiles, and enterprise IT, plus freelance engagements delivering reporting for clients across three continents."
        />

        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-ink-muted">
              Corporate internships
            </h3>
            <Timeline items={corporateExperience} />
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-ink-muted">
              Freelance experience (Upwork)
            </h3>
            <Timeline items={freelanceExperience} />
          </div>
        </div>
      </Container>
    </section>
  );
}
