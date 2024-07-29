import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { RiYoutubeLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "../../src/Image/main.jpg";

const InfoCard = () => {
  return (
    <div className="md:w-2/5 w-full flex flex-col justify-center items-center gap-3">
      <img className="border rounded-md mt-14" src={Image} alt="Girl with laptop" />
      <h1 className="font-itim max-w-md text-2xl font-bold">Javed Ansari</h1>
      <h2 className="font-jaldi max-w-md text-xl font-medium">
        Frontend Web Developer
      </h2>
      <h3 className="font-itim max-w-md text-xl font-medium ">
        Connect with me
      </h3>
      <div className="flex items-center gap-5 text-2xl">
        <Link to="https://www.instagram.com/imjdansari" target="_blank" className="cursor-pointer">
          <GrInstagram />
        </Link>
        <Link to="https://www.youtube.com/jdvlogslifestyle" target="_blank" className="cursor-pointer">
          <RiYoutubeLine />
        </Link>
        <Link to="https://www.linkedin.com/in/imjdansari" target="_blank" className="cursor-pointer">
          <FaLinkedin />
        </Link>
        <Link to="https://github.com/Imjdansari" target="_blank" className="cursor-pointer">
          <FiGithub />
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
