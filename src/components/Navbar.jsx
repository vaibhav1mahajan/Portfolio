import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between mb-20 py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="text-4xl tracking-wide font-thin font-serif">VM</h1>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-6 m-8 text-2xl">
            <a href="https://www.linkedin.com/in/vaibhav-mahajan-36221b274/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="cursor-pointer hover:text-gray-500" />
            </a>
            <a href="https://github.com/vaibhav1mahajan" target="_blank" rel="noopener noreferrer">
                <FaGithub className="cursor-pointer hover:text-gray-500" />
            </a>
            <a href="https://x.com/vaibhav1mahajan" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="cursor-pointer hover:text-gray-500" />
            </a>
            <a href="https://www.instagram.com/vaibhav1mahajan/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:text-gray-500" />
            </a>
        </div>
    </nav>
  );
}

export default Navbar;
