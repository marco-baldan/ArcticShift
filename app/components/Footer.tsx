"use client";

import React from "react";
import Link from "next/link";
import { Bath } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link
            href="/"
            className="flex items-center text-xl font-bold text-primary"
          >
            <Bath className="mr-2 text-primary" /> designBath.
          </Link>
          <p className="mt-2 text-muted-foreground">
            designBath. <br />
            Providing Tech Solutions
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.675 0h-21.35c-.733 0-1.325.593-1.325 1.325v21.351c0 .733.593 1.325 1.325 1.325h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.325v-21.35c0-.733-.592-1.326-1.325-1.326z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.379 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.543.93-.85 2.015-.85 3.173 0 2.188 1.118 4.115 2.826 5.243a4.903 4.903 0 01-2.228-.616c-.054 2.16 1.507 4.197 3.722 4.65a4.935 4.935 0 01-2.224.085 4.926 4.926 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.17-.069a13.945 13.945 0 007.557 2.212c9.054 0 14.001-7.496 14.001-13.986 0-.21 0-.423-.015-.633a9.936 9.936 0 002.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.056 2.036.24 2.508.415a4.92 4.92 0 011.675 1.092 4.92 4.92 0 011.092 1.675c.175.472.359 1.302.415 2.508.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.206-.24 2.036-.415 2.508a4.922 4.922 0 01-1.092 1.675 4.922 4.922 0 01-1.675 1.092c-.472.175-1.302.359-2.508.415-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.206-.056-2.036-.24-2.508-.415a4.922 4.922 0 01-1.675-1.092 4.922 4.922 0 01-1.092-1.675c-.175-.472-.359-1.302-.415-2.508-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.056-1.206.24-2.036.415-2.508a4.92 4.92 0 011.092-1.675 4.92 4.92 0 011.675-1.092c.472-.175 1.302-.359 2.508-.415 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.257 0-3.667.012-4.947.07-1.272.058-2.15.248-2.905.518a7.007 7.007 0 00-2.514 1.645 7.007 7.007 0 00-1.645 2.514c-.27.755-.46 1.633-.518 2.905-.058 1.28-.07 1.69-.07 4.947s.012 3.667.07 4.947c.058 1.272.248 2.15.518 2.905a7.007 7.007 0 001.645 2.514 7.007 7.007 0 002.514 1.645c.755.27 1.633.46 2.905.518 1.28.058 1.69.07 4.947.07s3.667-.012 4.947-.07c1.272-.058 2.15-.248 2.905-.518a7.007 7.007 0 002.514-1.645 7.007 7.007 0 001.645-2.514c.27-.755.46-1.633.518-2.905.058-1.28.07-1.69.07-4.947s-.012-3.667-.07-4.947c-.058-1.272-.248-2.15-.518-2.905a7.007 7.007 0 00-1.645-2.514 7.007 7.007 0 00-2.514-1.645c-.755-.27-1.633-.46-2.905-.518-1.28-.058-1.69-.07-4.947-.07z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <span className="font-semibold text-primary">Services</span>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/web-development"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/seo"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                SEO
              </Link>
            </li>
            <li>
              <Link
                href="/digital-marketing"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Digital Marketing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold text-primary">Company</span>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/work"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold text-primary">Legal</span>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
