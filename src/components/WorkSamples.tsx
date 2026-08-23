import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Lightbox from './Lightbox';
import { CircularGallery } from './ui/circular-gallery';
import type { GalleryItem } from './ui/circular-gallery';
import { personal, workSamples } from '../data/content';

const galleryItems: GalleryItem[] = workSamples.map((sample) => ({
  common: sample.title,
  binomial: sample.tag,
  photo: {
    url: sample.image,
    text: sample.title,
    by: 'Power BI',
  },
}));

export default function WorkSamples() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="dashboards" className="bg-surface py-24">
      <Container>
        <SectionHeading
          eyebrow="Work samples"
          title="Dashboards"
          description="A closer look at dashboards and analyses built for real business questions — spend, quality, and customer behaviour. Drag to spin the gallery, or click a card to view it full size."
        />
      </Container>

      <div className="h-[420px] w-full overflow-hidden sm:h-[480px] md:h-[560px]">
        <CircularGallery
          items={galleryItems}
          radius={380}
          cardWidth={340}
          cardHeight={230}
          autoRotateSpeed={0.03}
          onItemClick={(item) => setActive({ src: item.photo.url, alt: item.common })}
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 flex justify-center"
        >
          <motion.a
            href={personal.workSamplesUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            View full work samples PDF
            <HiOutlineExternalLink className="text-base" />
          </motion.a>
        </motion.div>
      </Container>

      <Lightbox src={active?.src ?? null} alt={active?.alt ?? ''} onClose={() => setActive(null)} />
    </section>
  );
}
