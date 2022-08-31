import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from "../assets/images/kw-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Layout = ({ children }) => {
    const router = useRouter();
    const [isToggle, setToggle] = useState(false);
    const toggleMenu = () => {
        setToggle(!isToggle);
    };
    return (
        <div className="flex flex-col min-h-screen">
            <nav>
                <div className="flex max-w-7xl m-auto py-8 px-10 xs:justify-between xs:items-center">
                    <div className="w-10 h-10 bg-center bg-cover rounded-lg" style={{ backgroundImage: `url(${logo.src})` }}></div>
                    <FontAwesomeIcon icon={isToggle ? faXmark : faBars} size="2x" onClick={toggleMenu} className={toggleMenu ? "hidden xs:block" : "hidden"} />
                    <ul className={"flex items-center ml-20 xs:hidden"}>
                        <li className="mr-6 h-fit">
                            <Link href="/">
                                <a className={router.pathname === "/" ? "text-black hover:text-black transition" : "text-gray"}>Home</a>
                            </Link>
                        </li>
                        <li className="mr-6 h-fit">
                            <Link href="/gallery">
                                <a className={router.pathname.includes("gallery") ? "text-black hover:text-black transition" : "text-gray"}>Gallery</a>
                            </Link>
                        </li>
                        {/* <li className="mr-6 h-fit">
                            <Link href="/what-the">
                                <a className={router.pathname.includes("what-the") ? "text-black hover:text-black transition" : "text-gray"}>What the...</a>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                {isToggle && (
                    <div className="-mt-4 mb-4 text-center text-xl">
                        <ul className={"items-center "}>
                            <li className="mr-6 h-fit font-black">
                                <Link href="/">
                                    <a className={router.pathname === "/" ? "text-black hover:text-black transition" : "text-gray"} onClick={() => setToggle(false)}>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="mr-6 h-fit font-black">
                                <Link href="/gallery">
                                    <a className={router.pathname.includes("gallery") ? "text-black hover:text-black transition" : "text-gray"} onClick={() => setToggle(false)}>
                                        Gallery
                                    </a>
                                </Link>
                            </li>
                            {/* <li className="mr-6 h-fit font-black">
                                <Link href="/what-the">
                                    <a className={router.pathname.includes("what-the") ? "text-black hover:text-black transition" : "text-gray"} onClick={() => setToggle(false)}>
                                        What the...
                                    </a>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                )}
            </nav>
            <main className="w-full max-w-7xl flex-grow m-auto px-10">{children}</main>
            <footer className=" p-4 text-center mt-10 bg-pink">
                <h3 className="font-medium font-display text-white">
                    © 2022 - Developed by
                    <a href="https://twitter.com/nitipon_apaisri" target="_blank" rel="noopener noreferrer">
                        👨‍💻
                    </a>
                </h3>
            </footer>
        </div>
    );
};

export default Layout;
