'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Home,
  MessageCircle,
  User,
  Twitter,
  Linkedin,
  Github,
  Mail,
} from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { icon: Twitter, label: 'X', link: 'https://x.com/AshmaanSohail' },
  { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/ashmaan-sohail/' },
  { icon: Github, label: 'GitHub', link: 'https://github.com/Ashmaan-2006' },
  { icon: Mail, label: 'Email', link: 'mailto:23px63@queensu.ca.com' },
  { icon: Home, label: 'Home' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: User, label: 'About' },
];

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();
      setMouseX(e.clientX - rect.left);
    };

    const handleMouseLeave = () => setMouseX(null);

    const navEl = navRef.current;
    if (navEl) {
      navEl.addEventListener('mousemove', handleMouseMove);
      navEl.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (navEl) {
        navEl.removeEventListener('mousemove', handleMouseMove);
        navEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const getDistanceScale = (index: number) => {
    if (mouseX === null || !navRef.current) return 1;

    const iconWidth = navRef.current.clientWidth / navItems.length;
    const iconCenter = iconWidth * index + iconWidth / 2;
    const distance = Math.abs(mouseX - iconCenter);

    const sigma = 65;
    const maxScale = 1.5;

    return 1 + (maxScale - 1) * Math.exp(-Math.pow(distance / sigma, 2));
  };

  const handleClick = (label: string, link?: string) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      router.push(`/${label.toLowerCase()}`);
    }
  };

  return (
    <nav
      ref={navRef}
      className="hidden sm:flex fixed bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-zinc-900 shadow-xl rounded-full px-6 py-4 flex gap-6 border border-gray-200 dark:border-zinc-700 backdrop-blur-md z-50"
    >
      {navItems.map(({ icon: Icon, label, link }, i) => {
        const scale = getDistanceScale(i);
        return (
          <motion.button
            key={label}
            onClick={() => handleClick(label, link)}
            animate={{
              scale,
              y: scale > 1.01 ? -3 : 0,
              opacity: scale > 1.01 ? 1 : 0.9,
            }}
            transition={{
              type: 'spring',
              stiffness: 320, // smoother
              damping: 26,
              mass: 0.6,
            }}
            className={clsx(
              'flex flex-col items-center text-gray-500 hover:text-blue-600 transition-[color,opacity] duration-150 ease-out focus:outline-none'
            )}
            aria-label={label}
            title={label}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.button>
        );
      })}
    </nav>
  );
}
