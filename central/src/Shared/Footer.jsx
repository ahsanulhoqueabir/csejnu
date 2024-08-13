import wave from "../assets/animation/footer-wave.json";
import Lottie from "lottie-react";
const Footer = () => {
  return (
    <div className="relative">
      <FooterBG />
      <div className="flex justify-center items-center">
        <footer className="footer footer-center bg-base-300 text-info-content p-4 lg:py-6 absolute text-xs lg:text-lg select-none bottom-[20%] lg:bottom-[30%] w-[80%] rounded-lg ">
          <aside>
            <p>
              All right reserved by{" "}
              <span>
                <a href="https://www.linkedin.com/in/AhsanulHoqueAbir">
                  Ahsanul Hoque
                </a>
              </span>
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

const FooterBG = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: wave, // Replace with your animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="">
      <Lottie className="" animationData={wave} />
    </div>
  );
};
