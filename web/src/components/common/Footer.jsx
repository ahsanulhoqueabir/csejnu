import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import footer from "../../assets/others/footer.svg";

const Footer = () => {
  return (
    <section className="w-full text-black">
      <img src={footer} alt="" className="w-full -mb-6 " />

      <footer className="text-xl lg:text-lg px-5 lg:px-36 pb-10 bg-[#C1ECE4] justify-between gap-6 lg:flex">
        <div className="flex justify-around w-full pb-8">
          <nav className="grid">
            <header className="footer-title text-normal">Quick Links</header>
            <Link to={"/allnotices"} className="link text-sm link-hover">
              Notice
            </Link>
            <Link to="/academic/routine" className="link text-sm link-hover">
              Routine
            </Link>
            <Link to="/academic/notes" className="link text-sm link-hover">
              Notes
            </Link>
            <Link
              to="/academic/tutorial-online"
              className="link text-sm link-hover"
            >
              Tutorial
            </Link>
          </nav>
          <nav className="grid">
            <header className="footer-title text-normal">Info</header>
            <Link
              to="/students/profileCard"
              className="link text-sm link-hover"
            >
              Profile
            </Link>
            <Link to="/students/idCard" className="link text-sm link-hover">
              ID Card
            </Link>
            <Link to="/faculty" className="link text-sm link-hover">
              Faculty
            </Link>
            <Link className="text-sm" to="features">
              Feature Logs
            </Link>
          </nav>
        </div>
        <nav className="lg:w-[45%] ">
          <header className="footer-title text-center text-normal">
            Developer's Social
          </header>
          <div className="flex justify-around gap-4 text-4xl">
            <a href="https://www.facebook.com/MDahsanulhoqueabir">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/ahsanulhoqueabir/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ahsanulhoqueabir">
              <FaGithub />
            </a>
          </div>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
