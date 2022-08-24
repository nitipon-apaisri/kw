const CollectionCard = ({ values }) => {
    return (
        <div className="w-full border border-light_gray transition-all duration-300 rounded-2xl hover:shadow-2xl hover:shadow-light_gray">
            <div className="w-full h-64 rounded-2xl">
                <div
                    className="bg-center bg-cover h-1/2 rounded-t-2xl relative"
                    style={values.media.cover ? { backgroundImage: `url(${values.media.cover})` } : { backgroundImage: `url(${values.media.profile})` }}
                >
                    <div className=" absolute top-1/2 left-1/2 " style={{ transform: "translate(-50%, 10%)" }}>
                        <div className="bg-center bg-cover border-8 border-white w-24 h-24 rounded-full shadow-xl mb-2" style={{ backgroundImage: `url(${values.media.profile})` }}></div>
                    </div>
                </div>
                <div className="text-center mt-14">
                    <h3 className="font-semibold tracking-wider">{values.title}</h3>
                    <p className="text-xs font-normal tracking-wider text-gray">{values.market}</p>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;
