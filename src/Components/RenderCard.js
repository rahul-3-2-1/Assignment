import React from 'react';


export const RenderCard=(props)=>{
   
   
    
    return(

        <div onAnimationEnd={()=>{props.setCheck(false)}} className={`${props.class} videodiv ${props.id===1?"cent":props.id===0?'cls':'cls1'} `}    >
            <img onAnimationEnd={()=>{props.setCheck(false)}} className={`video-card overflow-hidden `}  src={props.src} alt="pic1"/>
            <div className="video-info">
                <span>Live</span>
            <p className="text-light">{props.day}</p>
            <p style={{color:"#fff"}}>{props.time}</p>
        </div>
            </div>
            
    )
}