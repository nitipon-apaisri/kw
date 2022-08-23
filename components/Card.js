const Card = ({ values }) => {
    return (
        <div className="w-full aspect-square ">
            <div
                className="w-full h-full bg-pink rounded-3xl bg-no-repeat bg-center bg-cover flex justify-center items-center shadow-xl "
                style={{ backgroundImage: `url(${values.media.image.link})` }}
            ></div>
            <div className="mt-6 px-6 ">
                <h3 className="text-lg font-medium tracking-wider">{values.title}</h3>
                <p className="text-xs font-normal text-gray tracking-wide mt-1">{values.description}</p>
                <hr className="w-1/2 mx-auto mt-5" style={{ borderColor: "rgb(226 232 240)" }} />
            </div>
        </div>
    );
};

export default Card;
