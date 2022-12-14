import Head from "next/head";
import { useEffect, useState } from "react";
import { collections } from "../../db";
import Loader from "../../components/Loader";
import Link from "next/link";
import MarketplaceCard from "../../components/MarektplaceCard";
import Meta from "../../components/Meta";
const Collections = () => {
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1500);
    }, []);
    if (!isLoading) return <Loader />;
    return (
        <div className="marketplace mt-10 mb-20 ">
            <Meta title="KW | Gallery" />
            <div className="wrapper ">
                <div>
                    <h1 className="text-3xl font-bold tracking-wider">Marketplace</h1>
                    <hr className=" my-5" style={{ borderColor: "rgb(226 232 240)" }} />
                    <>
                        {(() => {
                            if (collections.length === 1) {
                                return (
                                    <div className="block w-96 xs:w-full mt-6">
                                        {collections.map((r, i) => (
                                            <Link href={`/gallery/marketplace/${r.slug}`} key={r._id}>
                                                <a>
                                                    <MarketplaceCard media={r.media.profile} cover={r.media.cover} title={r.title} />
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                );
                            }
                            if (collections.length === 2) {
                                return (
                                    <div className=" grid gap-8 grid-cols-2 xs:grid-cols-1 mt-6 ">
                                        {collections.map((r, i) => (
                                            <Link href={`/gallery/marketplace/${r.slug}`} key={r._id}>
                                                <a>
                                                    <MarketplaceCard media={r.media.profile} cover={r.media.cover} title={r.title} />
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                );
                            }
                            if (collections.length >= 3) {
                                return (
                                    <div className=" grid gap-8 grid-cols-3 md:grid-cols-2 xs:grid-cols-1 mt-6 ">
                                        {collections.map((r, i) => (
                                            <Link href={`/gallery/marketplace/${r.slug}`} key={r._id}>
                                                <a>
                                                    <MarketplaceCard media={r.media.profile} cover={r.media.cover} title={r.title} />
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

export default Collections;
