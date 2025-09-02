"use client";

import { useTableOfContents } from '@/hooks/useTableOfContents';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface TableOfContentsProps {
  className?: string;
}

export default function TableOfContents({ className }: TableOfContentsProps) {
  const { toc, activeId, scrollToHeading } = useTableOfContents();

  if (toc.length === 0) return null;

  return (
    <AnimatePresence>
      {toc.length > 0 && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn("hidden xl:block", className)}
        >
          <div className="sticky top-32">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="space-y-2 text-sm"
            >
              {toc.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  className={cn(
                    "transition-colors duration-200",
                    item.level === 2 && "ml-0",
                    item.level === 3 && "ml-4", 
                    item.level === 4 && "ml-8"
                  )}
                >
                  <motion.button
                    onClick={() => scrollToHeading(item.id)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      color: activeId === item.id ? "#f4f4f5" : "#a1a1aa",
                      fontWeight: activeId === item.id ? 500 : 400,
                      borderLeftWidth: activeId === item.id ? "2px" : "0px",
                      borderLeftColor: activeId === item.id ? "#a1a1aa" : "transparent",
                      paddingLeft: activeId === item.id ? "12px" : "0px"
                    }}
                    transition={{ duration: 0.2 }}
                    className="block w-full text-left hover:text-zinc-200 py-1 border-l-2 border-transparent"
                  >
                    {item.title}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}