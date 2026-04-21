"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="text-2xl font-bold text-blue-500">
          <Link href="/">ERP Solutions</Link>
        </div>

        <nav className="hidden md:flex space-x-8 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/features">Features</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/demo">
            <button className="bg-blue-600 px-5 py-2 rounded">
              Get Demo
            </button>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/features">Features</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}
