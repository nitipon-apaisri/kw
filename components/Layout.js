const Layout = ({ children }) => {
    return (
        <>
            <nav className="px-20 py-10 flex">
                <div className="w-10 h-10 bg-pink rounded-lg"></div>
                <ul className="flex items-center ml-20">
                    <li className="mr-6 h-fit">
                        <a className="text-black" href="#">
                            Home
                        </a>
                    </li>
                    <li className="mr-6 h-fit">
                        <a className="text-gray" href="#">
                            Collections
                        </a>
                    </li>
                    <li className="mr-6 h-fit">
                        <a className="text-gray" href="#">
                            Events
                        </a>
                    </li>
                    <li className="mr-6 h-fit">
                        <a className="text-gray" href="#">
                            Follow
                        </a>
                    </li>
                </ul>
            </nav>
            <main className="h-screen min-h-full p-20">{children}</main>
            <footer className="p-4 text-center bg-pink">
                <h3 className="font-medium font-display text-white">© 2022</h3>
            </footer>
        </>
    );
};

export default Layout;
