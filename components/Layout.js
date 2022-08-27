import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../assets/images/kw-logo.png";
const Layout = ({ children }) => {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen">
            <nav>
                <div className="flex max-w-7xl m-auto py-8 px-10">
                    <div className="w-10 h-10 bg-center bg-cover rounded-lg" style={{ backgroundImage: `url(${logo.src})` }}></div>
                    <ul className="flex items-center ml-20">
                        <li className="mr-6 h-fit">
                            <Link href="/">
                                <a className={router.pathname === "/" ? "text-black hover:text-black transition" : "text-gray"}>Home</a>
                            </Link>
                        </li>
                        <li className="mr-6 h-fit">
                            <Link href="/collections">
                                <a className={router.pathname.includes("collections") ? "text-black hover:text-black transition" : "text-gray"}>Collections</a>
                            </Link>
                        </li>
                        <li className="mr-6 h-fit">
                            <Link href="/events">
                                <a className={router.pathname.includes("events") ? "text-black hover:text-black transition" : "text-gray"}>Events</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="w-full max-w-7xl flex-grow m-auto px-10">{children}</main>
            <footer className=" p-4 text-center mt-10 bg-pink">
                <h3 className="font-medium font-display text-white">© 2022</h3>
            </footer>
        </div>
    );
};

export default Layout;
