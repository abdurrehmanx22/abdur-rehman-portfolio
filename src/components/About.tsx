import Container from './Container';
import SectionHeading from './SectionHeading';
import Stats from './Stats';
import { personal } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Get to know me"
          title="More About Me"
          description={personal.summary}
          descriptionClassName="max-w-none"
        />

        <Stats />
      </Container>
    </section>
  );
}
