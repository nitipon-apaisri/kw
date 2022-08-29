import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { parasApi } from "../../../../api";
import Loader from "../../../../components/Loader";
import Card from "../../../../components/Card";

const Collection = () => {
    const router = useRouter();
    const [tokens, setTokens] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const { collection_id } = router.query;
    useEffect(() => {
        setTimeout(() => {
            parasApi
                .get(`token-series?__skip=0&__limit=8&collection_id=${collection_id}`)
                .then((r) =>
                    r.data.data.results.forEach((token) => {
                        setTokens((uniqueToken) => [...uniqueToken, token]);
                    })
                )
                .catch((err) => console.log(err));
        }, 1000);
    }, [collection_id]);
    if (tokens.length === 0) return <Loader />;
    const fetchMoreData = () => {
        parasApi
            .get(`token-series?__skip=${tokens.length}&__limit=8&collection_id=${collection_id}`)
            .then((r) => {
                if (r.data.data.results.length === 0) setHasMore(false);
                console.log(r.data.data.results);
                r.data.data.results.forEach((token) => {
                    setTokens((uniqueToken) => [...uniqueToken, token]);
                });
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="collection mt-10 mb-20">
            <Head>
                <title>KW | {collection_id.replaceAll("-", " ").replace("by kamwoonear", "")}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-3xl font-bold tracking-wider">{collection_id.replaceAll("-", " ").replace("by kamwoonear", "").toUpperCase()}</h1>
            <hr className=" my-5" style={{ borderColor: "rgb(226 232 240)" }} />
            <div className="wrapper">
                <InfiniteScroll dataLength={tokens.length - 8} next={fetchMoreData} hasMore={hasMore} loader={<Loader />}>
                    <div className="grid gap-8 grid-cols-4 mt-6">
                        {tokens
                            .sort((a, b) => (a.token_series_id < b.token_series_id ? 1 : -1))
                            //filter to find unique token by token title ref: https://stackoverflow.com/a/56757215
                            //v,i,a = value, index, array
                            .filter((v, i, a) => a.findIndex((v2) => v2.token_series_id === v.token_series_id) === i)
                            .filter((v, i, a) => a.findIndex((v2) => v2.metadata.title === v.metadata.title) === i)
                            .map((r, i) => (
                                <div key={r._id}>
                                    <div>
                                        <Card media={`https://paras-cdn.imgix.net/${r.metadata.media.replace("https://ipfs.fleek.co/ipfs/", "")}`} mimeType={r.metadata.mime_type} />
                                        <div className="px-6 text-center">
                                            <h3 className="text-md font-semibold tracking-wider">{r.metadata.title.replace(`#${r.edition_id}`, "")}</h3>
                                        </div>
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
