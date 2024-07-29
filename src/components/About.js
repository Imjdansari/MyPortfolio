import Image from "../../src/Image/main.jpg";
const About = () => {
  return (
    <div id="about" className="flex justify-center items-center">
      <section className="w-4/5 my-12 border p-8 bg-gray border-6 border-solid rounded-2xl border-gray">
        <h1 className="text-4xl font-bold py-5 text-center font-serif">
          About Me
        </h1>
        <div className="my-9 flex flex-col gap-6 justify-center items-center lg:flex-row lg:justify-around">
          <div className="w-full sm:w-1/2 lg:w-2/6">
            <img className="w-full rounded-md border" src={Image} alt="About" />
          </div>
          <article className="lg:w-1/2">
            <div className="py-4">
              <div className="flex items-center gap-2 pb-4">
                <img className="w-10" src="/img/introIcon.png" alt="React" />
                <h2 className="font-serif max-w-md text-2xl font-medium text-justify">
                  Introduction
                </h2>
              </div>
              <p className="font-jaldi max-w-md">
                Hello, my name is Mo Javed. I completed my Bachelor of Computer
                Applications (BCA) from Integral University in 2022. Currently,
                I am expanding my skill set by learning React. Additionally, I
                have excellent communication skills in English, which allows me
                to effectively collaborate and convey ideas in a professional
                setting.
              </p>
            </div>
            <div className="py-4">
              <div className="flex items-center gap-2 pb-4">
                <img
                  className="w-10"
                  src="/img/qualitiesIcon.png"
                  alt="Qualities"
                />
                <h2 className="font-serif max-w-md text-2xl font-medium ">
                  Professional Qualities
                </h2>
              </div>
              <p className="font-jaldi max-w-md">
                I am a quick learner and I am always looking forward to
                expanding my knowledge and skill set.
              </p>
            </div>
            <div className="py-4">
              <div className="flex items-center gap-2 pb-4">
                <img className="w-10" src="/img/careerIcon.png" alt="Career" />
                <h2 className="font-serif max-w-md text-2xl font-medium">
                  Career Aspirations
                </h2>
              </div>
              <p className="font-jaldi max-w-md">
                I am excited to contribute to a professional team and work on
                meaningful projects as a Frontend Web Developer.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
