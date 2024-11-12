"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { GiMountains } from "react-icons/gi";
import classnames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [theme, setTheme] = useState('lofi');

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'lofi';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'lofi' ? 'forest' : 'lofi';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); 
    localStorage.setItem('theme', newTheme);
  };

  const links = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'SEO', href: '/services/seo' },
        { label: 'Marketing', href: '/services/marketing' },
      ],
    },
    { label: 'Work', href: '/work' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav
      className={`navbar bg-base-100 px-5 sticky top-0 z-50 transition-all duration-300 ${hasScrolled ? "border-b-2 border-base-300" : ""}`}
    >
      <div className="navbar-start flex items-start">
        <div className="mr-3">
          <GiMountains className="text-3xl text-primary" aria-label="Logo" />
        </div>

        <Link href="/" className="flex flex-col items-start">
          <span className="text-xl font-bold text-primary">ArcticShift</span>

          <div className="relative h-5 w-full">
            <span className="block text-sm text-accent absolute animate-fadeInOut1 w-full text-right">
              Innovative
            </span>
            <span className="block text-sm text-accent absolute animate-fadeInOut2 w-full text-right">
              Reliable
            </span>
            <span className="block text-sm text-accent absolute animate-fadeInOut3 w-full text-right">
              Solutions
            </span>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => {
            if (link.dropdown) {
              return (
                <li key={link.href} className="dropdown dropdown-hover">
                  <a className="flex items-center text-primary hover:text-primary-focus transition-colors">
                    {link.label}
                    <svg className="fill-current ml-1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 320 512">
                      <path d="M96 192L224 320 352 192z" />
                    </svg>
                  </a>
                  <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {link.dropdown.map((sublink) => (
                      <li key={sublink.href}>
                        <Link
                          href={sublink.href}
                          className="text-primary hover:text-primary-focus transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={classnames({
                      'text-primary font-semibold': link.href === currentPath,
                      'text-primary': link.href !== currentPath,
                      'hover:text-primary-focus transition-colors': true,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === 'forest'}
            className="hidden"
          />

          <svg
            className="swap-off h-8 w-8 fill-current text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-on h-8 w-8 fill-current text-purple-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${theme === 'forest' ? 'text-white' : 'text-black'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-lg lg:hidden z-10 h-screen">
          <ul className="menu menu-compact p-2 self-start text-5xl">
            {links.map((link) => {
              if (link.dropdown) {
                return (
                  <li key={link.href} className="menu-item">
                    <details>
                      <summary className="cursor-pointer text-primary hover:text-primary-focus transition-colors">
                        {link.label}
                      </summary>
                      <ul className="pl-4">
                        {link.dropdown.map((sublink) => (
                          <li key={sublink.href}>
                            <Link href={sublink.href} className="text-primary hover:text-primary-focus transition-colors">
                              {sublink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                );
              } else {
                return (
                  <li key={link.href}>
                    <Link href={link.href} className="text-primary hover:text-primary-focus transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
