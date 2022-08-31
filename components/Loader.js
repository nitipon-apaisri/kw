import Image from "next/image";
import loader from "../assets/images/atk-loader.gif";
const Loader = () => {
    return (
        <div className="text-center h-screen flex items-center justify-center -mt-20">
            <Image src={loader} width={160} height={90} alt="loader" />
        </div>
    );
};

export default Loader;
