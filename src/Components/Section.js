import React from "react";
import Lines from "./img/line.png";
import ProfilePic from "./img/profilepic.png";
import InstaLogo from "./img/insta.png";
import FacebookLogo from './img/facebook.png';
import YoutubeLogo from "./img/youtube.png";
import TwitterLogo from "./img/twitter.png";
import LinkedinLogo from "./img/linkedin.png";
import LocationLogo from "./img/locationlogo.png";
import LanguageLogo from "./img/language.png";
import VideoThumbnail from './img/video.png';

export default function Section() {
  return (
    <div>
      <div>
        <img className="img-line" src={Lines} alt="SectionImg" />
      </div>
      <div className="middleSection mx-auto p-5">
        <div className="d-flex ">
          <div className="d-flex flex-grow-1">
            <div className="mt-2 profile-pic ">
              <img style={{maxWidth:"100%"}} src={ProfilePic} alt="profilepic" />
            </div>
            <div className="ms-4">
              <div>
                <p className="mx-2 interest bordr bordr-color">Yoga</p>
                <p className="mx-2 interest bordr bordr-color">Wellness</p>
              </div>
              <div className="m-2">
                <p className="bordr interest bordr-color">Fitness</p>
              </div>
            </div>
          </div>
          <div>
            <p>
              <button className="btn btn-font bdr-radius bg-color text-light  fs-5">
                Book Trial
              </button>
            </p>
            <p>
              <button className="btn text-secondary bdr-radius bordr-color fs-5">
                Contact me
              </button>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between  flex-column py-4">
          <h1>Jane Doe</h1>
          <p className='jane-info'>Hi, I am Jane Doe, your next door fitness instructor with just one goal - Make people fit and healthy.Loren ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          <div className="icondiv">
            <span className="me-5">
              <img src={InstaLogo} alt="instalogo" />
            </span>
            <span className="me-5">
              <img src={FacebookLogo} alt="facebooklogo" />
            </span>
            <span className="me-5">
              <img src={YoutubeLogo} alt="youtubelogo" />
            </span>
            <span className="me-5">
              <img src={TwitterLogo} alt="twitterlogo" />
            </span>
            <span className="me-5">
              <img src={LinkedinLogo} alt="linkedinlogo" />
            </span>
          </div>
        </div>
        <div className="py-3">
          <div className="d-flex">
            <div>
              <img
                style={{ height: "15px" }}
                src={LocationLogo}
                alt="location-logo"
              />
            </div>
            <div>
              <h5 className="px-3 m-0">
                Lives in{" "}
                <span className=" m-0 ps-1 secondarybackground">
                  New delhi
                </span>{" "}
              </h5>
            </div>
          </div>
          <div className="d-flex mt-4">
            <div>
              <img src={LanguageLogo} alt="location-logo" />
            </div>
            <div className="px-1 pe-2">
                <h5>
                    Speaks
              <span className=" mx-3 px-3 secondarybackground">English</span>
              <span className=" mx-3 px-3 secondarybackground">Hindi </span>
              <span className=" mx-3 px-3 secondarybackground">
                Punjabi
              </span>
              </h5>
            </div>
          </div>
        </div>
        <div className="d-flex  video-container mt-5">
            <div className="pe-4">
                <h3 className=" letterspacing m-0">
                    Check out the video about 30 min yoga for beginners
                </h3>
                <h5 className="mt-4 color mb-0">
                    Contact me   <span className="fs-2 ms-3">  ➝</span>
                </h5>

            </div>
            <div >
                <div  className="p-2 videoBorder">
                    <img src={VideoThumbnail} alt="video"/>
                </div>
            </div>
        </div>
        <div className="form-Tag mt-5 ps-3 pb-4">
            <p className="ps-1">Subscribe to my profile and never miss another update from me</p>
            <div className="d-flex justify-content-between"><input type="text" className="text-secondary" placeholder="Enter Your Email"/>
            <button className="me-3 text-light fs-6 btn px-5 bg-color py-2 border-dark border-1">Subscribe</button>
            </div>

        </div>
      </div>
    </div>
  );
}
