import { useContext, useEffect, useState } from "react";
import { twitterApi } from "../api";
import { kwStats } from "../db";
import { HodlContext } from "../store/hodl";

const Stats = () => {
    const [twitterFollower, setTwitterFollower] = useState(0);
    const hodlContext = useContext(HodlContext);
    useEffect(() => {
        twitterApi
            .get("KAMWOO4?user.fields=public_metrics")
            .then((res) => setTwitterFollower(res.data.data.public_metrics.followers_count))
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="my-10 h-60 xs:h-auto  bg-pink flex items-center justify-center rounded-3xl">
            <div className="w-2/3 md:w-full flex justify-evenly xs:block">
                {kwStats.map((r, i) => (
                    <div className="stats text-center text-white xs:my-6" key={r._id}>
                        <h1 className="text-6xl sm:text-4xl font-semibold">{r.value > 100 ? "100+" : r.value}</h1>
                        <p className="m-2 text-sm sm:text-xs tracking-wide">{r.title}</p>
                    </div>
                ))}
                <div className="stats text-center text-white xs:my-6">
                    <h1 className="text-6xl sm:text-4xl font-semibold">{Array.from(new Set(hodlContext.ownerIds)).length}</h1>
                    <p className="m-2 text-sm sm:text-xs tracking-wide">Collectors</p>
                </div>
                <div className="stats text-center text-white xs:my-6">
                    <h1 className="text-6xl sm:text-4xl font-semibold">{twitterFollower}</h1>
                    <p className="m-2 text-sm sm:text-xs tracking-wide">Twitter Followers</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
