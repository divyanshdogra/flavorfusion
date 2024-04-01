import hero from "../assets/hero.png";

const Hero = () =>{
    return(
        <div>
            <img src={hero} className="w=cover max-h-[600px] object-cover" />
        </div>
    );
};

export default Hero;