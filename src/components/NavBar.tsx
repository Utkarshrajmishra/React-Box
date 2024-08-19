import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex justify-center mt-5 py-4">
      <section className="flex justify-between w-full md:px-[20%] px-[10%]">
        <div>
          <p className="text-white bg-neutral-800 text-[1.3rem] font-bold py-1 tracking-wider rounded">
            RSB
          </p>
        </div>
        <div className="text-black   text-[2rem] flex gap-4">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
