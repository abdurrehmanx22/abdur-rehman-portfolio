import { useState } from 'react';
import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  title: ReactNode;
  content: ReactNode;
}

export default function Accordion({
  items,
  hoverToExpand = false,
}: {
  items: AccordionItem[];
  hoverToExpand?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(hoverToExpand ? null : 0);

  const hoverProps = hoverToExpand
    ? (i: number) => ({
        onMouseEnter: () => setOpenIndex(i),
        onMouseLeave: () => setOpenIndex(null),
      })
    : () => ({});

  return (
    <div className="divide-y divide-border border-t border-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} {...hoverProps(i)}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              {item.title}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="shrink-0 text-ink-muted"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pb-6">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
