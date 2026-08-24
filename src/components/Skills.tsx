import { motion } from 'framer-motion';
import Container from './Container';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/content';
import { fadeUp, popIn, staggerContainer } from '../lib/motion';

export default function Skills() {
  return (
    <section id="skills" className="bg-surface py-24">
      <Container>
        <SectionHeading eyebrow="What I work with" title="Skills" />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-transparent transition-shadow hover:shadow-lg hover:shadow-ink/5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">
                {group.title}
              </h3>
              <motion.ul
                variants={staggerContainer(0.05)}
                className="mt-4 space-y-2"
              >
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={popIn}
                    className="text-sm font-medium text-ink"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
