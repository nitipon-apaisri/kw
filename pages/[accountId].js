import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { parasApi } from "../api";
import Loader from "../components/Loader";
import { HodlContext } from "../store/hodl";
import { months } from "../store/months";
import ImageCard from "../components/ImageCard";
const Collector = () => {
    const holdContext = useContext(HodlContext);
    const router = useRouter();
    const [collector, setCollector] = useState();
    const [coverUrl, setCoverUrl] = useState();
    const [ownTokens, setOwnTokens] = useState([]);
    const { accountId } = router.query;
    useEffect(() => {
        const checkCoverUrl = () => {
            if (collector.coverUrl === undefined && collector.imgUrl === undefined) {
                return setCoverUrl(undefined);
            }
            if (collector.coverUrl === undefined && collector.imgUrl !== undefined) {
                return setCoverUrl(imgUrl(collector.imgUrl));
            }
            return setCoverUrl(imgUrl(collector.coverUrl));
        };
        const collector = holdContext.collectors.find((r) => {
            return r.accountId === accountId;
        });

        if (collector !== undefined) {
            setCollector(collector);
            checkCoverUrl();
        }
    }, [accountId, holdContext]);
    useEffect(() => {
        parasApi.get(`token?__limit=8&owner_id=${accountId}&creator_id=kamwoo.near`).then((res) => {
            res.data.data.results.forEach((token) => setOwnTokens((item) => [...item, token]));
        });
    }, [accountId]);
    const convertTimestamp = (createdAt) => {
        const timestamp = createdAt;
        const data = new Date(timestamp);
        const date = data.getDate() + 1;
        const month = months[data.getMonth()];
        const year = data.getFullYear();
        const dateFormate = `${date} ${month} ${year}`;
        return dateFormate;
    };
    const imgUrl = (url) => {
        if (url !== undefined) {
            const parasCDN = "https://paras-cdn.imgix.net/";
            const replaceUrl = url.replace("ipfs://", "");
            const concatUrl = parasCDN.concat(replaceUrl);
            return concatUrl;
        }
        return "";
    };

    if (collector === undefined) return <Loader />;
    return (
        <>
            <div>
                <div className="flex w-full h-80 bg-pink justify-center items-end bg-center bg-cover bg-no-repeat" style={coverUrl && { backgroundImage: `url(${coverUrl})` }}>
                    <div className="-mb-[72px]">
                        <div
                            className="bg-pink rounded-full border-8 border-white w-[160px] h-[160px] shadow-xl shadow-light_gray bg-center bg-cover"
                            style={collector.imgUrl && { backgroundImage: `url(${imgUrl(collector.imgUrl)})` }}
                        ></div>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <div className="max-w-[240px] text-center">
                        <h4 className="truncate mt-[96px] py-[12px] px-10 bg-[#F9F9F9] text-xs font-semibold rounded-lg">{accountId}</h4>
                        <div className="my-4 text-xs text-gray tracking-wide">
                            <p>{collector.bio}</p>
                            <p className="my-4">Joined: {convertTimestamp(collector.createdAt)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <h1 className="font-bold text-2xl tracking-wider">Collectibles</h1>

                <div className="grid gap-8 grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mt-6 ">
                    {ownTokens.map((r, i) => (
                        <div key={r._id}>
                            <ImageCard media={`https://paras-cdn.imgix.net/${r.metadata.media}`} mimeType={r.metadata.mime_type} />
                            <div className="px-6 text-center">
                                <h3 className="text-md font-semibold tracking-wider">{r.metadata.title.replace(`#${r.edition_id}`, "")}</h3>
                                <p className="text-xs font-medium text-gray tracking-wide mt-1">{r.metadata.collection}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Collector;
