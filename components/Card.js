const Card = ({ values }) => {
    return (
        <div className="w-full aspect-square ">
            <div className="card-zoom">
                <div className="card-zoom-image" style={{ backgroundImage: `url(${values.media.image.link})` }}></div>
            </div>
            <hr className="w-1/2 mx-auto mt-5 mb-3" style={{ borderColor: "rgb(226 232 240)" }} />
            <div className="px-6 ">
                <h3 className="text-md font-medium tracking-wider">{values.title}</h3>
                <p className="text-xs font-normal text-gray tracking-wide mt-1">{values.description}</p>
            </div>
        </div>
    );
};

export default Card;
