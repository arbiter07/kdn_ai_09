"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "소개" },
  { href: "/slides", label: "발표 슬라이드" },
  { href: "/video", label: "영상" },
  { href: "/cardnews", label: "카드뉴스" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="navBar">
      <div className="navInner">
        <Link href="/" className="navBrand">
          9조 ESG
        </Link>
        <nav className="navLinks" aria-label="주요 메뉴">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`navLink${isActive ? " active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
