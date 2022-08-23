const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <div className="flex max-w-7xl m-auto py-10 px-10">
                    <div className="w-10 h-10 bg-pink rounded-lg"></div>
                    <ul className="flex items-center ml-20">
                        <li className="mr-6 h-fit">
                            <a className="text-black hover:text-black transition" href="#">
                                Home
                            </a>
                        </li>
                        <li className="mr-6 h-fit">
                            <a className="text-gray hover:text-black transition " href="#">
                                Collections
                            </a>
                        </li>
                        <li className="mr-6 h-fit">
                            <a className="text-gray hover:text-black transition" href="#">
                                Events
                            </a>
                        </li>
                        <li className="mr-6 h-fit">
                            <a className="text-gray hover:text-black transition" href="#">
                                Follow
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="max-w-7xl m-auto px-10">{children}</main>
            <footer className="p-4 text-center mt-10 bg-pink">
                <h3 className="font-medium font-display text-white">© 2022</h3>
            </footer>
        </>
    );
};

export default Layout;
