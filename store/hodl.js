import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { parasApi } from "../api";

const HodlContext = createContext();

const HodlProvider = (props) => {
    const [collectors, setCollectors] = useState([]);
    const [collections, setCollections] = useState([]);
    const [ownerIds, setOwnerIds] = useState([]);
    const [skip, setSkip] = useState(0);
    useEffect(() => {
        if (collections.length === 0) {
            getCollections();
        }
    }, [collections]);
    useEffect(() => {
        collections.forEach((collection) => {
            getOwnerIds(collection);
        });
    }, [collections]);
    useEffect(() => {
        updateSkipToken();
        if (ownerIds.length !== 0) {
            getCollectorInfo();
        }
        return () => clearInterval(skipToken);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [skip, ownerIds]);
    let skipToken;
    const updateSkipToken = () => {
        skipToken =
            !skipToken &&
            setInterval(() => {
                setSkip((prevCount) => prevCount + 1);
            }, 10);
        // if (skip >= 9) clearInterval(skipToken);
        if (skip >= ownerIds.length) clearInterval(skipToken);
    };
    const getCollections = () => {
        parasApi
            .get(`collections?creator_id=kamwoo.near`)
            .then((res) =>
                res.data.data.results.forEach((collections) => {
                    setCollections((collection) => [...collection, collections]);
                })
            )
            .catch((err) => console.log(err));
    };

    const getOwnerIds = (collection) => {
        parasApi
            .get(`collection-stats?collection_id=${collection.collection_id}`)
            .then((res) =>
                res.data.data.results.owner_ids.forEach((ownerId) => {
                    setOwnerIds((ids) => [...ids, ownerId]);
                })
            )
            .catch((err) => console.log(err));
    };

    const getCollectorInfo = () => {
        parasApi
            .get(`profiles?accountId=${ownerIds[skip]}`)
            .then((account) => {
                if (account.data.data.results.length !== 0) setCollectors((collector) => [...collector, account.data.data.results[0]]);
                // console.log(account.data.data.results[0])
            })
            .catch((err) => console.log(err));
    };

    return <HodlContext.Provider value={{ collectors, skip, collections, ownerIds }}>{props.children}</HodlContext.Provider>;
};

export { HodlContext, HodlProvider };
