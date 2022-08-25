import axios from "axios";
import { useEffect, useState } from "react";
import { kwStats } from "../db";

const Stats = () => {
    const [twitterFollower, setTwitterFollower] = useState(0);
    useEffect(() => {
        axios
            .get("https://cryptic-sea-01365.herokuapp.com/https://api.twitter.com/2/users/by/username/KAMWOO4?user.fields=public_metrics", {
                headers: { Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAANkdgQEAAAAAfC30bX0uIThiYXnKM3COw5%2BN34c%3DQLH22ifiKR1qUlMDaeeUbIuI9CZSYAkIkNJpBMbA5EGicv8pj1" },
            })
            .then((res) => setTwitterFollower(res.data.data.public_metrics.followers_count))
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="mt-10 h-60 bg-pink flex items-center justify-center rounded-3xl">
            <div className="w-2/3 flex justify-evenly">
                {kwStats.map((r, i) => (
                    <div className="stats text-center text-white " key={r._id}>
                        <h1 className="text-6xl">{r.value}</h1>
                        <p className="m-2 text-sm tracking-wide">{r.title}</p>
                    </div>
                ))}
                <div className="stats text-center text-white ">
                    <h1 className="text-6xl">{twitterFollower}</h1>
                    <p className="m-2 text-sm tracking-wide">Twitter Followers</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
