import Container from './Container';
import SectionHeading from './SectionHeading';
import Accordion from './Accordion';
import { faqs } from '../data/content';

export default function Faq() {
  const items = faqs.map((faq) => ({
    title: <span className="text-base font-semibold text-ink sm:text-lg">{faq.question}</span>,
    content: <p className="text-sm text-ink-muted sm:text-base">{faq.answer}</p>,
  }));

  return (
    <section id="faq" className="bg-surface py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Got questions?"
          title="FAQ"
          description="A few common questions about how working together looks."
        />
        <Accordion items={items} hoverToExpand />
      </Container>
    </section>
  );
}
