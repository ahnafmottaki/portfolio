import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36" id="home">
      <div className=" container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div className="">
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar.jpg"
                alt="Ahnaf Mottaki portrait"
                width={40}
                height={40}
                className="image-cover"
                loading="lazy"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 hero-heading mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label={"Download CV"}
              icon={"download"}
              href={"/resume/ahnafmottaki's-resume.pdf"}
            />
            <ButtonOutline
              href={"#about"}
              label={"Scroll Down"}
              icon={"arrow_downward"}
            />
          </div>
        </div>

        <div className="hidden lg:block ">
          {/*to-65% via-25%*/}
          <figure className="w-full hero-image aspect-square  overflow-hidden bg-gradient-to-t from-sky-400 via-25 via-sky-400/40 to-100%  rounded-[60px] max-w-[450px] ml-auto ">
            <img
              src="images/mutt.png"
              width={656}
              // height={800}
              height={656}
              className="w-full h-full object-cover "
              alt="Ahnaf Mottaki"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
