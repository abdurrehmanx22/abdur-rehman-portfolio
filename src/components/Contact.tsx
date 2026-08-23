import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import Container from './Container';
import { personal } from '../data/content';

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(service ? `Project enquiry: ${service}` : 'Project enquiry');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService needed: ${service}\n\n${message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-neutral-950 p-6 sm:p-10 lg:p-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(200,255,77,0.18),transparent_60%)]" />
          {!prefersReducedMotion && (
            <motion.div
              aria-hidden
              animate={{ x: [0, 24, 0], y: [0, -14, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute -top-16 right-[10%] h-64 w-64 rounded-full bg-[#c8ff4d]/20 blur-3xl"
            />
          )}

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start lg:gap-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl"
            >
              <img src={personal.photo} alt={personal.name} className="aspect-[4/5] w-full object-cover" />
            </motion.div>

            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.4 }}
                className="text-sm font-semibold uppercase tracking-wider text-[#c8ff4d]"
              >
                Get in touch
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12, duration: 0.5 }}
                className="font-display relative mt-3 text-4xl text-white sm:text-5xl"
              >
                Let's work together
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18, duration: 0.5 }}
                className="relative mt-4 max-w-lg text-white/70"
              >
                Whether it's a messy dataset, a dashboard nobody trusts yet, or your next analytics
                project — let's figure out how to make your data work for you.
              </motion.p>

              <motion.form
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24, duration: 0.5 }}
                onSubmit={handleSubmit}
                className="relative mt-8 space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium text-[#c8ff4d]">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#c8ff4d] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium text-[#c8ff4d]">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#c8ff4d] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="text-sm font-medium text-[#c8ff4d]">
                    Service needed
                  </label>
                  <input
                    id="contact-service"
                    type="text"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    placeholder="e.g. Power BI dashboard, data pipeline, forecasting..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#c8ff4d] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium text-[#c8ff4d]">
                    What can I help you with?
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello, I'd like to enquire about..."
                    className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#c8ff4d] focus:outline-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#c8ff4d] px-8 py-3 text-sm font-semibold text-neutral-900"
                >
                  <HiOutlineMail className="text-base" />
                  Submit
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
