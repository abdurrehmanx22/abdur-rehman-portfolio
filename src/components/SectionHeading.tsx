import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  descriptionClassName = 'max-w-2xl',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  descriptionClassName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-brand">{eyebrow}</span>
      <h2 className="font-display mt-2 max-w-2xl text-4xl tracking-tight text-ink sm:text-5xl">{title}</h2>
      {description && <p className={`mt-4 text-lg text-ink-muted ${descriptionClassName}`}>{description}</p>}
    </motion.div>
  );
}
