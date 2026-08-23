import { useState } from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import Lightbox from './Lightbox';
import StickyProjectShowcase from './StickyProjectShowcase';
import { projects } from '../data/content';

export default function Projects() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="Reporting and analytics builds spanning e-commerce, operations, education, and finance. Scroll to flip through each one."
        />
      </Container>

      <StickyProjectShowcase projects={projects} onZoom={(src, alt) => setActive({ src, alt })} />

      <Lightbox src={active?.src ?? null} alt={active?.alt ?? ''} onClose={() => setActive(null)} />
    </section>
  );
}
