import { useState } from "react";
import Link from "../Link/Link";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";



const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
    ];

    return (
        <nav onClick={() => setOpen(!open)}>
            <div className=" md:hidden block  ">
                {
                    open === true ? <MdOutlineClose className="text-2xl" /> : <MdOutlineMenu className="text-2xl" />
                }
            </div>
            <ul className={`md:flex md:static absolute  duration-1000  ${open ? 'top-16' : '-top-60'} bg-blue-200 rounded-xl p-2`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;