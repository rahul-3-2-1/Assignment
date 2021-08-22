import React,{useState} from "react";
import { OfferingDetails } from "./Offeringdetails";
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'


import { RenderCard } from "./RenderCard";


const Offering = () => {
  const [slide,setSlide]=useState(OfferingDetails);
  const [check,setCheck]=useState(false);
  const doChange=(dc)=>{
    let dt;
    let item;
    if(dc==='next')
    {
      dt=slide.filter((item,i)=>i!==0);
        
      
       item=slide[0];
       setCheck(true);
       
      setSlide([...dt,item ]);
    }
    else{
       dt=slide.filter((item,i)=>i!==2);
      
       item=slide[2];
       setCheck(true)
       
       setSlide([item,...dt]);
      

    }
  }
  
  return (
    <>
    <div className="bg-color offering px-2">
      <div className="bg-dark pt-5">
        <h1 className="text-light text-center browse-offering ">Browse All my Offerings</h1>
        
       

          <div className="d-flex justify-content-between card-section">
          {slide.map((item,i) => {
            return <RenderCard key={i} setCheck={setCheck}    class={i===1&&check?'zoom':''} id={i} {...item} />;
          })}
          </div> 
         
         
        
        <div className="d-flex text-light arrow justify-content-center">
          <div style={{cursor:"pointer"}}   onClick={()=>{doChange('prev')}}><FaArrowAltCircleLeft className="arr arr-left"/> </div>
          <div style={{cursor:"pointer"}} onClick={()=>{doChange('next')}}><FaArrowAltCircleRight className="arr" /> </div>
        </div>
       
      </div>
    </div>

   
    </>
  );
};

export default Offering;
