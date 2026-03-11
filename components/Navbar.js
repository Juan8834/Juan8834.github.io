import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar container">
      <div className="logo">
        <Link href="/">Juan Peralta</Link>
      </div>
      <div className="nav-links">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={router.pathname === link.href ? "active" : ""}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
