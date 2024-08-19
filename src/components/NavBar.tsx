import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


const NavBar = () => {
  return (
    <nav className="flex justify-center mt-5 py-4">
      <section className="flex justify-between w-full md:px-[20%] px-[10%]">
        <div>
          <p className="text-sm text-white w-fit bg-black p-2">RB</p>
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
