import Link from "next/link";

const links = [
  { href: "//github.com/create-next-app/create-next-app", label: "Github" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </nav>
);

export default Nav;
