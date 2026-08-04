"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Hubungi Kami", href: "/#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="https://iili.io/CUDRpSt.png"
                alt="Happy Snack House Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <span className="text-chocolate-brown font-extrabold text-base sm:text-lg tracking-tight">
                Happy Snack House
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-chocolate-brown/70 hover:text-chocolate-brown hover:bg-happy-yellow/20 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://kemitraan-happysnackhouse.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-5 py-2.5 bg-happy-red hover:bg-happy-red-hover text-white text-sm font-bold rounded-xl shadow-md shadow-happy-red/20 hover:shadow-lg hover:shadow-happy-red/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                🤝 Jadi Mitra
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-happy-yellow/20 text-chocolate-brown hover:bg-happy-yellow/40 transition-colors"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl bg-light-gray text-chocolate-brown hover:bg-happy-yellow/20 transition-colors"
            aria-label="Tutup menu"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Nav Links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3.5 text-base font-bold text-chocolate-brown hover:bg-happy-yellow/15 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 px-4">
            <Link
              href="https://kemitraan-happysnackhouse.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-press flex items-center justify-center w-full px-5 py-4 bg-happy-red hover:bg-happy-red-hover text-white font-bold text-base rounded-2xl shadow-lg shadow-happy-red/25 transition-all duration-200"
            >
              🤝 Jadi Mitra Sekarang
            </Link>
          </div>

          {/* Footer in drawer */}
          <div className="mt-auto text-center">
            <p className="text-xs text-chocolate-brown/40 font-medium">
              © 2026 Happy Snack House
            </p>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16 sm:h-18" />
    </>
  );
}
