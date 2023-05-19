import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-base-200 ">
      <div  className="w-full max-w-6xl mx-auto footer  py-10 bg-base-200 text-base-content px-5 md:px-0">
        <div data-aos="zoom-out-right" data-aos-duration="3000">
          <img
            className="w-12 h-12 rounded-full cursor-pointer"
            src="../../../../src/assets/images/logo/56647.jpg"
            alt=""
          />
          <p className="text-2xl font-semibold">LegoLandmark</p>
          <p className="font-semibold">Providing reliable tech since 1992</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/all.rakib.39" target="_blank">
              <BsFacebook className="w-8 h-8 cursor-pointer"></BsFacebook>
            </a>
            <BsGoogle className="w-8 h-8 cursor-pointer"></BsGoogle>
            <a href="https://github.com/rakibislam2233" target="_blank">
              <BsGithub className="w-8 h-8 cursor-pointer"></BsGithub>
            </a>   
            <a href="https://www.instagram.com/r_a_k_i_b_a_l_i/" target="_blank"><BsInstagram className="w-8 h-8 cursor-pointer"></BsInstagram></a>
            <a href="https://www.linkedin.com/in/md-rakib-ali/"><BsLinkedin className="w-8 h-8 cursor-pointer"></BsLinkedin></a>
          </div>
        </div>
        <div data-aos="fade-down-right" data-aos-duration="3000" >
          <span className="text-xl font-semibold">Services</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">All Toy</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div data-aos="fade-down-left" data-aos-duration="3000">
          <span className="text-xl font-semibold">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div data-aos="zoom-out-left" data-aos-duration="3000">
          <span className="text-xl font-semibold">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <div className="relative w-full">
            <input
              className="py-2 px-5 w-full rounded-full border border-gray-800"
              type="email"
              name="email"
              id=""
            />
            <button className="bg-[#024E92] py-[9px] px-3 rounded-full text-white absolute right-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
