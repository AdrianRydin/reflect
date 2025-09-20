"use client";

import React, { useState } from "react";
import Link from "next/link";
import { animate } from "motion";
import Image from "next/image";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const menu = document.querySelector("#mobileMenu");
    const overlay = document.querySelector("#menuOverlay");
    if (!menu || !overlay) return;

    if (isOpen) {
      animate(menu, { x: "100%" }, { duration: 0.3, easing: "ease-in" });
      animate(overlay, { opacity: 0 }, { duration: 0.3 }).finished.then(() => {
        (overlay as HTMLElement).style.display = "none";
      });
    } else {
      (overlay as HTMLElement).style.display = "block";
      animate(menu, { x: "0%" }, { duration: 0.3, easing: "ease-out" });
      animate(overlay, { opacity: 1 }, { duration: 0.3 });
    }

    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <Link href="/">
        <Image src="/ReflectLogo.png" alt="Logo" width={200} height={200} />
      </Link>

      {/* Desktop nav */}
      <div className="header__links">
        <Link href="/">
          <h2>Portfolio</h2>
        </Link>
        <Link href="/philosophy">
          <h2>Philosophy</h2>
        </Link>
        <Link href="/contact">
          <h2>Contact</h2>
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu-container">
        <button
          onClick={toggleMenu}
          className="space-y-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </button>

        {/* Overlay */}
        <div
          id="menuOverlay"
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/50 hidden opacity-0 md:hidden"
        />

        <nav id="mobileMenu" className="mobile-menu">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/" onClick={toggleMenu}>
                <h2>Portfolio</h2>
              </Link>
            </li>
            <li>
              <Link href="/philosophy" onClick={toggleMenu}>
                <h2>Philosophy</h2>
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>
                <h2>Contact</h2>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
