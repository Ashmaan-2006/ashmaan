'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, MessageCircle, Twitter, Linkedin, Github, Mail, Camera } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { icon: Twitter, label: 'X', link: 'https://x.com/AshmaanSohail' },
  { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/ashmaan-sohail/' },
  { icon: Github, label: 'GitHub', link: 'https://github.com/Ashmaan-2006' },
  { icon: Mail, label: 'Email', link: 'mailto:23px63@queensu.ca.com' },
  { icon: Home, label: 'Home' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: Camera, label: 'Pictures' },
];

interface NavbarProps {
  onTogglePictures?: (show: boolean) => void;
  picturesActive?: boolean;
  onToggleChat?: (show: boolean) => void;
  chatActive?: boolean;
}

export default function Navbar({
  onTogglePictures,
  picturesActive = false,
  onToggleChat,
  chatActive = false,
}: NavbarProps) {
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
    if (label === 'Pictures') {
      onTogglePictures?.(!picturesActive);
      return;
    }

    if (label === 'Chat') {
      onToggleChat?.(!chatActive);
      return;
    }

    if (link) {
      window.open(link, '_blank');
    } else {
      router.push(`/${label.toLowerCase()}`);
    }
  };

  return (
    <div className="hidden sm:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        ref={navRef}
        className="flex bg-white dark:bg-zinc-900 shadow-xl rounded-full px-6 py-4 gap-6 border border-gray-200 dark:border-zinc-700 backdrop-blur-md relative"
      >
        {mouseX !== null && (
          <motion.div
            className="absolute top-0 left-0 h-full w-20 pointer-events-none z-[-1]"
            animate={{
              x: mouseX - 40,
              opacity: 0.8,
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 30,
              mass: 0.5,
            }}
            style={{
              background: `radial-gradient(circle at center, hsl(${
                (mouseX / (navRef.current?.clientWidth || 1)) * 360
              }, 100%, 60%), transparent 70%)`,
              borderRadius: '9999px',
              filter: 'blur(16px)',
            }}
          />
        )}

        {navItems.map(({ icon: Icon, label, link }, i) => {
          const scale = getDistanceScale(i);
          const isPictures = label === 'Pictures';
          const isChat = label === 'Chat';
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
                stiffness: 320,
                damping: 26,
                mass: 0.6,
              }}
              className={clsx(
                'flex flex-col items-center text-gray-500 hover:text-blue-600 transition-[color,opacity] duration-150 ease-out focus:outline-none',
                isPictures && picturesActive && 'text-blue-600',
                isChat && chatActive && 'text-blue-600'
              )}
              aria-label={label}
              title={label}
              aria-pressed={isPictures ? picturesActive : isChat ? chatActive : undefined}
            >
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
}
