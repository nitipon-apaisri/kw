import { useRouter } from "next/router";

const Collection = () => {
    const router = useRouter();
    const { collection_id } = router.query;
    return <p>collection: {collection_id}</p>;
};

export default Collection;
