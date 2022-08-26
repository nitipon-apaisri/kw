import Image from "next/image";
import loader from "../assets/images/atk-loader.gif";
const Loader = () => {
    return (
        <div className="text-center">
            <Image src={loader} width={160} height={90} alt="loader" />
        </div>
    );
};

export default Loader;
