import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { parasApi } from "../api";
import ImageCard from "../components/ImageCard";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Stats from "../components/Stats";
import { news } from "../db";
import Meta from "../components/Meta";

export default function Home() {
    const [newRelease, setNewRelease] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            parasApi
                .get("token-series?__limit=4&creator_id=kamwoo.near")
                .then((r) => setNewRelease((token) => [...token, r.data.data.results]))
                .catch((err) => console.log(err));
        }, 1000);
    }, []);
    if (newRelease.length === 0) return <Loader />;
    return (
        <div className="landing-page">
            <Meta title="KW" />
            <div className="wrapper">
                <Hero />
                <hr className="w-1/2 mx-auto my-10" style={{ borderColor: "rgb(226 232 240)" }} />
                <div>
                    <h1 className="text-3xl font-sans font-bold tracking-wider">News</h1>

                    <div className="grid gap-8 grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 mt-6 ">
                        {news
                            .sort((a, b) => (a.publish > b.publish ? 1 : -1))
                            .map((r, i) => (
                                <div key={r._id}>
                                    <div>
                                        <ImageCard media={r.media.image.link} />
                                        <div className="px-6 text-center">
                                            <h3 className="text-md font-semibold tracking-wider">{r.title}</h3>
                                            <p className="text-xs font-medium text-gray tracking-wide mt-1">{r.description}</p>
                                            <p className="text-xs font-normal italic text-gray tracking-wide mt-2">Published: {r.publish}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <hr className="w-1/2 mx-auto my-10" style={{ borderColor: "rgb(226 232 240)" }} />
                <Stats />
                <hr className="w-1/2 mx-auto my-10" style={{ borderColor: "rgb(226 232 240)" }} />
                <div>
                    <h1 className="text-3xl font-sans font-bold tracking-wider">New Releases</h1>
                    <div className="grid gap-8 grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mt-6 ">
                        {newRelease[0].map((r, i) => (
                            <div key={r._id}>
                                <div>
                                    <Link href={`https://paras.id/token/${r.contract_id}::${r.token_series_id}`} passHref>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <ImageCard media={`https://paras-cdn.imgix.net/${r.metadata.media}`} />
                                            <div className="px-6 text-center">
                                                <h3 className="text-md font-semibold tracking-wider">{r.metadata.title.replace(`#${r.edition_id}`, "")}</h3>
                                                <p className="text-xs font-medium text-gray tracking-wide mt-1">{r.metadata.collection}</p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
