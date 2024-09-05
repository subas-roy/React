import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";

const NavBar = () => {
  const[open, setOpen] = useState(false);
  
  const routes = [
    { id: 1, path: '/home', name: 'Home'},
    { id: 2, path: '/about', name: 'About Us'},
    { id: 3, path: '/contact', name: 'Contact'},
    { id: 4, path: '/services', name: 'Services'},
    { id: 5, path: '/blog', name: 'Blog'},
  ];

  return (
    <nav className="text-black bg-yellow-300">
      <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
        {
          open == !true ? 
          <AiOutlineMenu></AiOutlineMenu> 
          : 
          <AiOutlineClose ></AiOutlineClose>
        }
      </div>
      <ul className="md:flex absolute">
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>
    </nav>
  );
};

export default NavBar;