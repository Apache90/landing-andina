import sugar from "../assets/sugar3d.svg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center mx-auto w-11/12">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <div className="md:w-full">
          <h1 className="font-fredoka text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Del campo a tu mesa</h1>
          <h2 className="font-fredoka font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-borraDeVino pb-10">
            Andina
          </h2>
        </div>
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/2 mt-5 lg:mt-0 flex justify-center">
        <img src={sugar} alt="Andina" className="w-3/4 h-auto" />
      </div>
    </div>
  );
};

export default Hero;
