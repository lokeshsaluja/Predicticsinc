"use client"

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          PREDICTICS
        </Link>

        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
          <Link href="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact Us</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-background py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link href="/" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Services</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Contact Us</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;