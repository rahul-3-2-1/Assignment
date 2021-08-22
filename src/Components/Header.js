import React,{useState,useEffect} from "react";
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
  const [windowSize,setWindowSize]=useState(window.screen.width);
  const [isMobile,setIsMobile]=useState(false);
  const [check,setCheck]=useState(true);
  const setwidth=()=>setWindowSize(window.innerWidth);
  useEffect(()=>{
   
    window.addEventListener('resize',setwidth);
    return ()=>{
      window.removeEventListener('resize',setwidth);
    }

  })
  useEffect(()=>{
    if(windowSize<=945)
    {
      setIsMobile(true);
      setCheck(false);
    }
    else
    {
    setIsMobile(false)
    setCheck(true)
    }

  },[windowSize])
  return (
    <div className="bg-color header-container" style={{color:"#fff" }}>
      <div className="d-flex justify-content-between px-2 pt-3 nav-container">
        <div>bre.ad/jane</div>
        <div className='d-flex justify-content-end'>
          {
            check&&(
          <ul className={`${!isMobile?"d-flex align-items-center":"menubar"}`}>
            <li className="list-unstyled px-4">Offerings</li>
            <li className="list-unstyled px-4">Other Links</li>
            <li className="list-unstyled px-4">Testimonials</li>
            <li className="list-unstyled px-4">Portfolio</li>
            <li className="list-unstyled px-4">Contact me</li>
            <li className="list-unstyled px-4 align-items-center d-flex book  py-1"style={{border:"2px solid #fff",borderRadius:"20px"}}><p className="m-0">Book Trial</p></li>
          </ul>)
          }
          {isMobile&&<AiOutlineMenu onClick={()=>setCheck(!check)} style={{cursor:"pointer"}} className="menu-icon"/>}
        </div>
      </div>
      <div className="text-center fs-1 fw-bolder mt-4 mb-5"><p className="m-0">Start your day with the</p><p className="m-0"> goodness of yoga</p></div>
    </div>
  );
};

export default Header;
