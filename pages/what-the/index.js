import Head from "next/head";
import Image from "next/image";
import Hero from "../../components/Hero";

const WhatThe = () => {
    return (
        <div className="what-the">
            <Head>
                <title>KW | WHAT THE...</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrapper">
                <Hero />
            </div>
        </div>
    );
};

export default WhatThe;