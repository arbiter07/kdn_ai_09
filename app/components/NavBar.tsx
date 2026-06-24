"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "프로젝트" },
  { href: "/cardnews", label: "카드뉴스" },
  { href: "/slides", label: "PPT 흐름" },
  { href: "/video", label: "영상" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="navBar">
      <div className="navInner">
        <Link href="/" className="navBrand">
          <img src="/kdn/logo-hanjeon-kdn.png" alt="한전KDN" />
          <span>ESG Story</span>
        </Link>
        <div className="navRight">
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
      </div>
    </header>
  );
}
