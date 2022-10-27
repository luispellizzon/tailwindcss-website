import GetStartButton from "./GetStartButton";
import IllustrationInto from "../assets/img/illustration-intro.svg";

const Hero = () => {
  return (
    <section id="hero">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-center px-6 mx-auto mt-2 space-y-0 md:mt-10 md:flex-row  md:space-y-0 md:space-x-5">
        {/* Left container */}
        <div className="flex flex-col mb-32 space-y-6 md:space-y-10">
          <h1 className="max-w-sm text-4xl font-bold text-center md:text-4xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <GetStartButton hidden={false} />
          </div>
        </div>
        {/* Right Container with Imgs */}
        <div className="lg:w-[45%]">
          <img src={IllustrationInto} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
