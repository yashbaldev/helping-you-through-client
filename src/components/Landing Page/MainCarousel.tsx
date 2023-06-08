import { poppins } from "@/utils/Fonts";
import { Button } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckIcon from '@mui/icons-material/Check';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RectangleIcon from '@mui/icons-material/Rectangle';
import React from "react";


const MainCarousel = () => {
  return <>
    <div className={"hidden md:block " + poppins.className}>
      <div className="flex py-14 text-black bg-[#D7F5DC] dark:bg-[#20B15A] dark:text-white ">
        <div className="flex-col justify-evenly w-5/12  p-10">

          <div className=""><h1 className="font-bold text-5xl leading-[1.3]   ">Helping you Through</h1></div>

          <div className="mt-2"><p className="">&quot;Elevating College Excellence: Your Trusted Online Resource for Student Support and Success!&quot;</p></div>

          <div className="mt-8"><Button style={{ borderRadius: '1rem', padding: '1rem', backgroundColor: '#20B15A' }} variant="contained" >Get Started</Button></div>

        </div>
        <div className="w-7/12">
          <RectangleIcon className="absolute bg-[#20B15A] text-[#20B15A] w-[10px] h-[10px] transform rotate-45 top-[15%] right-[30%] "  />
          <RectangleIcon className="absolute bg-[#FF8345] text-[#FF8345] w-[10px] h-[10px] transform rotate-45 bottom-[5%] right-[10%] "  />
          <RectangleIcon className="absolute bg-[#20B15A] text-[#20B15A] w-[10px] h-[10px] transform rotate-45 top-[30%] left-[50%] "  />
          <RectangleIcon className="absolute bg-[#20B15A] text-[#20B15A] w-[10px] h-[10px] transform rotate-45 top-[70%] right-[40%] "  />
          <StarBorderIcon className=" bg-[#FF8345] text-white w-[40px] h-[42px] absolute top-[30%] right-[38%] rounded-xl p-2 transform rotate-45 " />
          <CheckIcon className="absolute bg-[#20B15A] text-white top-[40%] right-[10%] w-[40px] h-[42px] rounded-xl p-3" color="success" />
          <BusinessCenterIcon className="absolute  bg-[#20B15A] text-white  w-[40px] h-[42px] rounded-xl p-2 transform -rotate-45 bottom-[5%] right-[45%] " />
          <img src="../../../assests/lady.png" alt="lady.png" srcSet="" />

        </div>
      </div>
    </div>

    <div className={"md:hidden pt-[3.3rem] flex flex-col items-center justify-center bg-[#D7F5DC] px-3 "+poppins.className}>
      <div className="w-full h-full ">
        <img className="object-cover" src="../../../assests/lady.png" alt="lady.png" srcSet="" />
      </div>
      <div className="w-full ">
        <p className=" font-[600] leading-6 py-2">Introducing the ultimate college life platform, designed to simplify your journey and make every day a breeze.</p>
      </div>
      <div className="w-full">
        <Button className="rounded-xl  bg-[#20B15A]" variant="contained">Get Started</Button>
      </div>
    </div>

  </>
};

export default MainCarousel;
