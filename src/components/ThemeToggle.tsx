import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-1/2 z-50 h-9 w-[68px] -translate-x-1/2 rounded-full shadow-lg transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#1c1c1c' : '#ffffff',
        border: `1px solid ${isDark ? '#2c2c2c' : '#e6e8ec'}`,
      }}
    >
      <span
        aria-hidden
        className="absolute top-1 left-1 h-6 w-6 rounded-full shadow-md transition-transform duration-300 dark:translate-x-[34px]"
        style={{ backgroundColor: 'var(--color-brand)' }}
      />
    </motion.button>
  );
}
