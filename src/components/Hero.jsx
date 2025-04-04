import HeroPicture from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero--image">
        <img
          src={HeroPicture}
          alt="Collage of pictures from different experiences"
        />
      </div>
      <div className="hero--text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
