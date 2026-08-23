import { FaLinkedin } from 'react-icons/fa';
import Container from './Container';
import { personal } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="grid gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">Email</span>
            <a href={`mailto:${personal.email}`} className="mt-1 block font-medium text-ink hover:text-brand">
              {personal.email}
            </a>
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">Call</span>
            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="mt-1 block font-medium text-ink hover:text-brand"
            >
              {personal.phone}
            </a>
          </div>
          <div className="sm:text-right">
            <span className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">Social</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 font-medium text-ink hover:text-brand sm:justify-end"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-ink-muted">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
