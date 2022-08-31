import heroImage from "../assets/images/hero-image.png";
import styles from "../styles/modules/hero.module.css";
const Hero = () => {
    return (
        <div className={styles.hero_wrapper} style={{ backgroundImage: `url(${heroImage.src})` }}>
            <h1 className="text-6xl sm:text-5xl font-sans font-bold tracking-wider text-white">KW</h1>
        </div>
    );
};

export default Hero;
