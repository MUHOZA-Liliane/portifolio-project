import NavLink from './NavLink'; // Adjust the path to your NavLink component

const Navbar = () => {
  const navItems = [
    { label: 'About Me', href: '#' },
    { label: 'Contact Me', href: '#contactMe' },
    { label: 'Hero', href: '#hero' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <nav>
      <ul className="flex space-x-10">
        {navItems.map((item, index) => (
          <NavLink key={index} href={item.href} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
