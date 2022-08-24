import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen">
            <nav>
                <div className="flex max-w-7xl m-auto py-10 px-10">
                    <div className="w-10 h-10 bg-pink rounded-lg"></div>
                    <ul className="flex items-center ml-20">
                        <li className="mr-6 h-fit">
                            <Link href="/">
                                <a className={router.pathname === "/" ? "text-black hover:text-black transition" : "text-gray"}>Home</a>
                            </Link>
                        </li>
                        <li className="mr-6 h-fit">
                            <Link href="/events">
                                <a className={router.pathname === "/events" ? "text-black hover:text-black transition" : "text-gray"}>Events</a>
                            </Link>
                        </li>
                        <li className="mr-6 h-fit">
                            <Link href="/collections">
                                <a className={router.pathname === "/collections" ? "text-black hover:text-black transition" : "text-gray"}>Collections</a>
                            </Link>
                        </li>
                        <li className="mr-6 h-fit">
                            <Link href="/follow">
                                <a className={router.pathname === "/follow" ? "text-black hover:text-black transition" : "text-gray"}>Follow</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="max-w-7xl flex-grow m-auto px-10">{children}</main>
            <footer className=" p-4 text-center mt-10 bg-pink">
                <h3 className="font-medium font-display text-white">© 2022</h3>
            </footer>
        </div>
    );
};

export default Layout;
