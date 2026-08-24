import Container from './Container';
import SectionHeading from './SectionHeading';
import Accordion from './Accordion';
import { services } from '../data/content';

export default function Services() {
  const items = services.map((service, i) => ({
    title: (
      <span className="font-display text-xl uppercase tracking-tight text-ink sm:text-2xl">
        {i + 1}. {service.title}
      </span>
    ),
    content: (
      <div>
        <p className="text-sm text-ink-muted">{service.summary}</p>
        <ul className="mt-4 space-y-2">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-sm text-ink-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <section id="services" className="py-24">
      <Container>
        <SectionHeading eyebrow="What I can do for you" title="Services" />
        <Accordion items={items} hoverToExpand />
      </Container>
    </section>
  );
}
