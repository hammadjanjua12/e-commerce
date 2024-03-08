import React from "react";
import footerLogo from "../../../images/logo.png";
import Banner from "../../../images/footer.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const FooterLinks1 = [
  {
    title: "Mens-Kurta",
    link: "http://localhost:3000/men/clothing/kurta",
  },
  {
    title: "Men-Jeans",
    link: "http://localhost:3000/men/clothing/jeans",
  },
  {
    title: "Mens-Shirt",
    link: "http://localhost:3000/men/clothing/shirt",
  },
];

const socialLinks = [
  {
    icon: <FaInstagram className="text-3xl" />,
    link: "https://www.instagram.com",
    label: "Instagram",
  },
  {
    icon: <FaFacebook className="text-3xl" />,
    link: "https://www.facebook.com",
    label: "Facebook",
  },
  {
    icon: <FaLinkedin className="text-3xl" />,
    link: "https://www.linkedin.com",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4 lg:pl-8">
            <Link to="/">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                <img src={footerLogo} alt="" className="max-w-[50px]" />
                Shopsy
              </h1>
            </Link>
            <p>
              Welcome to Shopsy - your one-stop destination for a seamless
              online shopping experience. Discover the latest trends, explore
              quality products, and enjoy the convenience of shopping from the
              comfort of your home.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 lg:pl-10 lg:pt-8">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <Link to={link.link}>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Explore More
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks1.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <Link to={link.link}>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div className="lg:pl-0">
              <div className="flex items-center gap-3 mt-6 lg:mt-0">
                {socialLinks.map((socialLink) => (
                  <a
                    href={socialLink.link}
                    aria-label={socialLink.label}
                    key={socialLink.label}
                  >
                    {socialLink.icon}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Islamabad,Pakistan</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
