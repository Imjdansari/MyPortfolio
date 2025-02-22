import { Link } from "react-scroll";
import resume from "../../src/resume.pdf";
import Typewriter from "typewriter-effect";
import Image from "../../src/Image/main.jpg";
const Hero = () => {
  return (
    <section
      id="hero"
      className="mb-12 flex flex-col-reverse items-center justify-center gap-5 text-white p-8 sm:flex-row tallscreen:section-min-height widescreen:section-min-height"
    >
      <article className="sm:w-2/4 flex flex-col justify-center items-center text-center gap-4 py-5 sm:items-start sm:text-left">
        <span className="font-kavoon max-w-md sm:w-full text-[#4998f3de] font-medium text-5xl lg:text-7xl">
          Hello I'm
        </span>
        <h1 className="font-itim md:w-full text-white font-medium text-3xl lg:text-5xl">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["Youtuber", "React Js Developer"],
            }}
          />
        </h1>
        <p className="font-jaldi md:w-full text-white lg:text-xl">
          I'm a Frontend Developer with a passion for creating interactive and
          user-friendly web applications.I’m a Aspiring Software Developer and
          here is my portfolio website.
        </p>
        <div className="font-jaldi w-full md:max-w-md flex flex-col items-center gap-4 sm:flex-row sm:items-start pt-3">
          <Link
            to="contact"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
            className="w-full sm:w-2/5 border-2 border-solid border-[] rounded-full text-xl p-3 bg-[#4998f3de]  text-center text-black hover:text-white hover:bg-black cursor-pointer"
          >
            Hire Me
          </Link>
          <a
            href={resume}
            download="Resume"
            className="w-full text-center cursor-pointer sm:w-3/5 border-2 border-solid border-[#59d7f3de] rounded-full text-xl p-3 hover:text-black hover:bg-[#59d7f3de] "
          >
            Download CV
          </a>
        </div>
      </article>
      <img className="sm:w-2/6 rounded-md w-5 border " src={Image} alt="Hero" />
    </section>
  );
};

export default Hero;
