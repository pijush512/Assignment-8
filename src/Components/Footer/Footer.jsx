import React from "react";
import footerLogo from '../../assets/navLogo.png'
import faximg from '../../assets/fax.png'
import linkedInImg from '../../assets/linkedIn.png'
import facebookImg from '../../assets/facebook.png'
const Footer = () => {
  return (
      <footer className="bg-[#001931] py-7 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={footerLogo} alt="Footer Image" />
            <h3 className="text-white">HERO.IO</h3>
          </div>
          <div>
            <p className="text-white mb-2">Social Links</p>
            <div className="flex gap-2">
              <img src={faximg} alt="" />
              <img src={linkedInImg} alt="" />
              <img src={facebookImg} alt="" />
            </div>
          </div>
        </div>
        <div className=" mt-1 w-full h-[1px] bg-[#E5E7EB]"></div>

        <p className="text-center mt-6 text-[#FAFAFA]">Copyright © 2025 - All right reserved</p>
      </footer>
  );
};

export default Footer;
