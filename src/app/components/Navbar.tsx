'use client';
import React, { useState } from 'react';

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: NavLink[];
};

const Navbar = ({ links }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-5 bg-[var(--background-black)] h-fit fixed top-0 w-full z-50">
      <a href="#home" className="font-bold text-white">
        Dra. Aleandra Noemí Queiruga
      </a>
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-10">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-white hover:text-[var(--buttons-headings)] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Burger icon */}
      <button
        className="md:hidden flex flex-col gap-1 w-8 h-8 justify-center items-center"
        aria-label="Abrir menú"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`block h-1 w-6 bg-white rounded transition-all ${
            open ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-white rounded transition-all ${
            open ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-white rounded transition-all ${
            open ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>
      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-[var(--background-black)] flex flex-col gap-6 p-6 md:hidden shadow-lg">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white text-lg block hover:text-[var(--buttons-headings)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
