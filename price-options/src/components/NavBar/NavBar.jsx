import Link from "../Link/Link";

const NavBar = () => {

  const routes = [
    { id: 1, path: '/home', name: 'Home'},
    { id: 2, path: '/about', name: 'About Us'},
    { id: 3, path: '/contact', name: 'Contact'},
    { id: 4, path: '/services', name: 'Services'},
    { id: 5, path: '/blog', name: 'Blog'},
  ];

  return (
    <nav>
      <ul className="md: flex">
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>
    </nav>
  );
};

export default NavBar;