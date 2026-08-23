import Container from './Container';
import SectionHeading from './SectionHeading';
import Stats from './Stats';
import { personal } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading eyebrow="About me" title="About Me" description={personal.summary} />

        <Stats />
      </Container>
    </section>
  );
}
