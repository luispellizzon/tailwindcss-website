import LogoWhite from "../assets/img/logo-white.svg";
import FacebookIcon from "../assets/img/icon-facebook.svg";
import YoutubeIcon from "../assets/img/icon-youtube.svg";
import InstagramIcon from "../assets/img/icon-instagram.svg";
import PinterestIcon from "../assets/img/icon-pinterest.svg";
import TwitterIcon from "../assets/img/icon-twitter.svg";
function Footer() {
  return (
    <footer className="bg-veryDarkBlue" id="footer">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo & Social Links */}
        <div className="flex flex-col-reverse items-center gap-3 md:gap-3 space-y-8 md:flex-col md:space-y-0 md:items-start">
          {/* Image Container */}
          <div className="h-8">
            <img src={LogoWhite} alt="" className="h-full" />
          </div>
          {/* Social Links Container */}
          <div className="flex justify-center space-x-4">
            <a href="">
              <img src={FacebookIcon} className="h-8" alt="" />
            </a>
            <a href="">
              <img src={YoutubeIcon} className="h-8" alt="" />
            </a>
            <a href="">
              <img src={PinterestIcon} className="h-8" alt="" />
            </a>
            <a href="">
              <img src={TwitterIcon} className="h-8" alt="" />
            </a>
            <a href="">
              <img src={InstagramIcon} className="h-8" alt="" />
            </a>
          </div>
        </div>
        {/* List Container */}

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="" className="hover:text-brightRed">
              Home
            </a>
            <a href="" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="" className="hover:text-brightRed">
              About
            </a>
            <a href="" className="hover:text-brightRed">
              Products
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="" className="hover:text-brightRed">
              Careers
            </a>
            <a href="" className="hover:text-brightRed">
              Community
            </a>
            <a href="" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updates in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go!
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
