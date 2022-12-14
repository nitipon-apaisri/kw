import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { parasApi } from "../../../../api";
import Loader from "../../../../components/Loader";
import ImageCard from "../../../../components/ImageCard";
import Link from "next/link";
import Meta from "../../../../components/Meta";

const Collection = () => {
    const router = useRouter();
    const [tokens, setTokens] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const { collection_id } = router.query;
    useEffect(() => {
        setTimeout(() => {
            parasApi
                .get(`token-series?__limit=8&collection_id=${collection_id}`)
                .then((r) => {
                    r.data.data.results.forEach((token) => {
                        setTokens((uniqueToken) => [...uniqueToken, token]);
                    });
                })
                .catch((err) => console.log(err));
        }, 1000);
    }, [collection_id]);
    if (tokens.length === 0) return <Loader />;
    const fetchMoreData = () => {
        parasApi
            .get(`token-series?__skip=${tokens.length - 8}&__limit=8&collection_id=${collection_id}`)
            .then((r) => {
                if (r.data.data.results.length === 0) setHasMore(false);
                r.data.data.results.forEach((token) => {
                    setTokens((uniqueToken) => [...uniqueToken, token]);
                });
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="collection mt-10 mb-20">
            <Meta title={`KW | ${collection_id.replaceAll("-", " ").replace("by kamwoonear", "")}`} />
            <h1 className="text-3xl font-bold tracking-wider">{collection_id.replaceAll("-", " ").replace("by kamwoonear", "").toUpperCase()}</h1>
            <hr className=" my-5" style={{ borderColor: "rgb(226 232 240)" }} />
            <div className="wrapper">
                <InfiniteScroll dataLength={tokens.length} next={fetchMoreData} hasMore={hasMore} loader={<Loader />}>
                    <div className="grid gap-8 grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mt-6 px-4">
                        {tokens
                            .sort((a, b) => (a.token_series_id < b.token_series_id ? 1 : -1))
                            //filter to find unique token by token series id ref: https://stackoverflow.com/a/56757215
                            //v,i,a = value, index, array
                            .filter((v, i, a) => a.findIndex((v2) => v2._id === v._id) === i)
                            .map((r, i) => (
                                <div key={r._id}>
                                    <div>
                                        <Link href={`https://paras.id/token/${r.contract_id}::${r.token_series_id}`} passHref>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <ImageCard media={`https://paras-cdn.imgix.net/${r.metadata.media.replace("https://ipfs.fleek.co/ipfs/", "")}`} mimeType={r.metadata.mime_type} />
                                                <div className="px-6 text-center">
                                                    <h3 className="text-md font-semibold tracking-wider">{r.metadata.title.replace(`#${r.edition_id}`, "")}</h3>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default Collection;
