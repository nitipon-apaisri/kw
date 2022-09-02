const CollectionCard = ({ media, cover, title }) => {
    let collectionCover = `https://paras-cdn.imgix.net/${cover}`;
    return (
        <div className="w-full border border-light_gray transition-all duration-300 rounded-2xl hover:shadow-2xl hover:shadow-light_gray">
            <div className="w-full h-64 rounded-2xl">
                <div className="bg-center bg-cover h-1/2 rounded-t-2xl relative " style={cover !== null ? { backgroundImage: `url(${collectionCover})` } : { backgroundImage: `url(${media})` }}>
                    <div className=" absolute top-1/2 left-1/2" style={{ transform: "translate(-50%, 10%)" }}>
                        <div className="bg-center bg-cover border-8 border-white w-24 h-24 rounded-full shadow-xl mb-2 bg-pink" style={{ backgroundImage: `url(${media})` }}></div>
                    </div>
                </div>
                <div className="text-center mt-14">
                    <h3 className="font-bold tracking-wider">{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;
