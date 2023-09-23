import sugar from "../assets/sugar3d.svg";

const Hero = () => {
  return (
    <div className="flex justify-center items-end mx-auto w-11/12">
      <div className="w-1/2">
        <div className="">
          <h1 className="font-fredoka text-5xl">Del campo a tu mesa</h1>
          <h2 className="font-fredoka font-medium text-5xl text-borraDeVino pb-10">
            Andina
          </h2>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src={sugar} alt="Andina" className="w-3/4 h-auto" />
      </div>
    </div>
  );
};

export default Hero;
