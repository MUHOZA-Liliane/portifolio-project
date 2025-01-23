import NavLink from './NavLink'; // Adjust the path to your NavLink component

const Navbar = () => {
  const navItems = [
    { label: 'AboutMe', href: '#AboutMe' },
    { label: 'Hero', href: '#Hero' },
    { label: 'ContactMe', href: '#ContactMe' },
    { label: 'Skills', href: '#skills' },
    { label: 'Footer', href: '#Footer' },
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
