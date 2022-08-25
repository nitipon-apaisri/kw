const Card = ({ media }) => {
    return (
        <div className="w-full aspect-square ">
            <div className="card-zoom">
                <div className="card-zoom-image" style={{ backgroundImage: `url(${media})` }}></div>
            </div>
            <hr className="w-1/2 mx-auto mt-5 mb-3" style={{ borderColor: "rgb(226 232 240)" }} />
        </div>
    );
};

export default Card;
