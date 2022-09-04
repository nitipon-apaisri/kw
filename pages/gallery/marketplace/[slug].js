import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { parasApi } from "../../../api";
import PrimaryCardStyle from "../../../components/PrimaryCardStyle";
import Loader from "../../../components/Loader";
import Meta from "../../../components/Meta";
const Collection = () => {
    const [collections, setCollections] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const { slug } = router.query;
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    useEffect(() => {
        if (slug === "paras") {
            setTimeout(() => {
                parasApi
                    .get("collections?creator_id=kamwoo.near")
                    .then((r) => {
                        setCollections((collection) => [...collection, r.data.data.results]);
                    })
                    .catch((err) => console.log(err));
            }, 1000);
        }
    }, [slug]);
    if (collections.length === 0) return <Loader />;
    return (
        <div className="collections mt-10 mb-20">
            <Meta title={`KW | ${capitalize(slug)} Marketplace`} />
            <div className="wrapper">
                <div>
                    <h1 className="text-3xl font-bold tracking-wider">Collections</h1>
                    <hr className=" my-5" style={{ borderColor: "rgb(226 232 240)" }} />
                    <>
                        {(() => {
                            if (collections[0].length === 1) {
                                return (
                                    <div className="block w-96 mt-6 ">
                                        {collections[0]
                                            .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
                                            .map((r, i) => (
                                                <Link href={`/gallery/marketplace/collection/${r.collection_id}`} key={r._id}>
                                                    <a>
                                                        <PrimaryCardStyle media={`https://paras-cdn.imgix.net/${r.media}`} cover={r.cover === undefined ? null : r.cover} title={r.collection} />
                                                    </a>
                                                </Link>
                                            ))}
                                    </div>
                                );
                            }
                            if (collections[0].length === 2) {
                                return (
                                    <div className="grid gap-8 grid-cols-2 mt-6 ">
                                        {collections[0]
                                            .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
                                            .map((r, i) => (
                                                <Link href={`/gallery/marketplace/collection/${r.collection_id}`} key={r._id}>
                                                    <a>
                                                        <PrimaryCardStyle media={`https://paras-cdn.imgix.net/${r.media}`} cover={r.cover === undefined ? null : r.cover} title={r.collection} />
                                                    </a>
                                                </Link>
                                            ))}
                                    </div>
                                );
                            }
                            if (collections[0].length >= 3) {
                                return (
                                    <div className="grid gap-8 grid-cols-3 md:grid-cols-2 xs:grid-cols-1 mt-6 ">
                                        {collections[0]
                                            .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
                                            .map((r, i) => (
                                                <Link href={`/gallery/marketplace/collection/${r.collection_id}`} key={r._id}>
                                                    <a>
                                                        <PrimaryCardStyle media={`https://paras-cdn.imgix.net/${r.media}`} cover={r.cover === undefined ? null : r.cover} title={r.collection} />
                                                    </a>
                                                </Link>
                                            ))}
                                    </div>
                                );
                            }
                        })()}
                    </>
                </div>
            </div>
        </div>
    );
};

export default Collection;
