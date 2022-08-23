import heroImage from "../assets/images/hero-image.png";
const Hero = () => {
    return (
        <div className="w-full h-96 bg-pink rounded-3xl bg-no-repeat bg-center bg-cover flex justify-center items-center shadow-xl" style={{ backgroundImage: `url(${heroImage.src})` }}>
            <h1 className="text-6xl font-sans font-bold tracking-wider text-white">KW</h1>
        </div>
    );
};

export default Hero;
