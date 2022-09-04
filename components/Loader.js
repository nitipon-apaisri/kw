import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import loader from "../assets/images/atk-loader.gif";
import { HodlContext } from "../store/hodl";
const Loader = () => {
    const router = useRouter();
    const path = router.pathname;
    const hodlContext = useContext(HodlContext);
    return (
        <div className="text-center h-screen flex items-center justify-center -mt-20">
            <div>
                <Image src={loader} width={160} height={90} alt="loader" />
                <div>
                    {path === "/collectors" && (
                        <p>
                            {hodlContext.skip} / {hodlContext.ownerIds.length}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Loader;
