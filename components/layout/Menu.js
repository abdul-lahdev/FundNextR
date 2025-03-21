"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Menu() {
  const routerPath = usePathname();
  useEffect(() => {
    if (routerPath == "/index-rtl-1") {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      document.body.classList.add("rtl-version");
    } else {
      document.documentElement.lang = "en";
      document.documentElement.dir = "";
      document.body.classList.remove("rtl-version");
    }
  });
  return (
    <>
      <ul className="menu_list scroll">
        <li className="dropdown-parrent">
          <Link href="/" className="setNavColor">
            Home
          </Link>
        </li>
        <li className="dropdown-parrent">
          <Link
            href="/"
            className="setNavColor d-flex align-items-center gap-2"
          >
            Models
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1.50195L6 6.50195L11 1.50195"
                  stroke="white"
                  stroke-width="1.8"
                ></path>
              </svg>
            </span>
          </Link>
          <ul className="theme-dropdown">
            <li>
              <Link href="/stellar-model">Stellar</Link>
            </li>
            <li>
              <Link href="/evaluation-model">Evaluation</Link>
            </li>
            <li>
              <Link href="/express-model">Express</Link>
            </li>
          </ul>
        </li>
        <li className="mega-menu-parrent">
          <Link href="/faqs" className="setNavColor">
            FAQ
          </Link>
        </li>
        <li className="dropdown-parrent">
          <Link
            href="#"
            className="setNavColor d-flex align-items-center gap-2"
          >
            Be a Partner
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1.50195L6 6.50195L11 1.50195"
                  stroke="white"
                  stroke-width="1.8"
                ></path>
              </svg>
            </span>
          </Link>
          <ul className="theme-dropdown">
            <li className="multi-dropdown-parrent">
              <Link href="/affiliatePartner">Affiliate Partner </Link>
            </li>
            <li className="multi-dropdown-parrent">
              <Link href="/affiliate-competition">Affluence Season 2 </Link>
            </li>
            <li className="multi-dropdown-parrent">
              <Link href="/affiliate-payment-partner-faq">Partners' FAQ </Link>
            </li>
            <li className="multi-dropdown-parrent">
              <Link href="#">Affiliate Login </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown-parrent">
          <Link
            href="#"
            className="setNavColor d-flex align-items-center gap-2"
          >
            More
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1.50195L6 6.50195L11 1.50195"
                  stroke="white"
                  stroke-width="1.8"
                ></path>
              </svg>
            </span>
          </Link>
          <ul className="theme-dropdown">
            <li className="multi-dropdown-parrent">
              <Link href="/blog">Blog </Link>
            </li>
            <li className="multi-dropdown-parrent">
              <Link href="/guide-to-prop-trading">Guide to Prop Trading </Link>
            </li>
            <li>
              <Link href="/">Symbols</Link>
            </li>
            <li>
              <Link href="/">Hall of Fame</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/">Free Competition</Link>
            </li>
            <li>
              <Link href="/">Trade Master Cup</Link>
            </li>
            <li>
              <Link href="/">Infinity Points</Link>
            </li>
            <li>
              <Link href="/">Global Events</Link>
            </li>
            <li>
              <Link href="/">Calculator</Link>
            </li>
          </ul>
        </li>
        {/* <li className="dropdown-parrent">
          <Link href="/about-1">Contact</Link>
          <ul className="theme-dropdown">
            <li>
              <Link href="/contact-1">Contact 1</Link>
            </li>
            <li>
              <Link href="/contact-2">Contact 2</Link>
            </li>
          </ul>
        </li> */}
      </ul>
    </>
  );
}
