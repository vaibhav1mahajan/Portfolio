import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex justify-between mb-20 py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="text-4xl tracking-wide font-thin font-serif">VM</h1>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-6 m-8 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaTwitter />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar
