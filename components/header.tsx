"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only show icons after component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">About Us</Link>
          <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">Services</Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact Us</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mounted && (isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />)}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-background py-4 border-t border-gray-100 dark:border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={toggleMenu}>About Us</Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={toggleMenu}>Services</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={toggleMenu}>Contact Us</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;