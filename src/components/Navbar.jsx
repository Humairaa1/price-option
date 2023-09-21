import { useState } from "react";
import Link from "./Link";
import { AiOutlineAlignCenter , AiOutlineClose} from "react-icons/ai";

const Navbar = () => {

    const [open, setOpen]=useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (

        <nav>
            <div className="text-3xl bg-red-300 p-3 md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineAlignCenter></AiOutlineAlignCenter>
                }
                
            </div>
            <ul className={`md:flex absolute md:static bg-red-300 p-3 duration-1000
             ${open ? ' top-40' : '-top-80'}`}>
            {
                routes.map(route => <Link key={route.id}
                    route={route}></Link>)
            }
        </ul>
        </nav>

    );
};

export default Navbar;