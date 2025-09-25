type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: NavLink[];
};

const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav className="flex justify-between p-5 bg-[var(--background-black)]">
      <a href="#home">Dra. Aleandra Noemí Queiruga</a>
      <ul className="flex gap-10">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
