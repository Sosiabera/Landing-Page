import { useEffect,useRef } from "react";
import "../styles/PhoneFrame.css";


export default function PhoneFrame() {

  const phoneRef = useRef(null);
  const firstPhoneRef = useRef(null);
  const secondPhoneRef = useRef(null);
  const thirdPhoneRef = useRef(null);
  const lastphoneRef = useRef(null);
  const videoRef = useRef(null);


  let currentVideoSrc = null;

useEffect(() =>{

  const phone = phoneRef.current;
  const firstPhone = firstPhoneRef.current;
  const secondPhone = secondPhoneRef.current;
  const thirdPhone = thirdPhoneRef.current;
  const lastPhone = lastphoneRef.current;

  const videoElement = videoRef.current;


  const handlescroll = () =>{
  const phoneRect = phone.getBoundingClientRect();
  const firstPhoneRect = firstPhone.getBoundingClientRect();
  const secondPhoneRect = secondPhone.getBoundingClientRect();
  const thirdPhoneRect = thirdPhone.getBoundingClientRect();
  const lastRect = lastPhone.getBoundingClientRect();

  const viewportHeight = window.innerHeight;


  if(phoneRect.top <= 0){
    phone.style.position ="sticky";
    phone.style.top ="0";
  }else{
    phone.style.position ="static";
  }

  if(lastRect.top <= 0){
    phone.style.position ="static";
  }

  const switchVideo = (src) => {
    if (currentVideoSrc !== src) {
      videoElement.src = src;
      videoElement.load();
      videoElement.onloadeddata = () => {
        videoElement.play();
      };
      currentVideoSrc = src;
    }
  };

  if (firstPhoneRect.top <= viewportHeight && firstPhoneRect.bottom > viewportHeight) {
 
        switchVideo("/firstFrame.mov")

  } else if (secondPhoneRect.top <= viewportHeight && secondPhoneRect.bottom > viewportHeight) {
    switchVideo("/secondFrame.mov");
  } else if (thirdPhoneRect.top <= viewportHeight && thirdPhoneRect.bottom > viewportHeight) {
 switchVideo("/thirdFrame.mov");
  }

    if (firstPhoneRect.bottom >= 0 && firstPhoneRect.top < 0) {
       switchVideo("/firstFrame.mov")
      } else if (secondPhoneRect.bottom >= 0 && secondPhoneRect.top < 0) {
       switchVideo("/secondFrame.mov");
      } else if (thirdPhoneRect.bottom >= 0 && thirdPhoneRect.top < 0) {
       switchVideo("/thirdFrame.mov");
      }
    
}
window.addEventListener("scroll",handlescroll)

return () =>{
  window.removeEventListener("scroll",handlescroll)
}
},[])



  return (
    <>
    <div>
         <section className="thirdPage">
        <div className="thirdPageTitle">
          <h6>Our Features</h6>
          <p>
            Fluid AI was born out of a desire to simplify and streamline modern
            life
          </p>
        </div>
        <div className="grid">
        <div className="girdPhone" ref={phoneRef}>
            <div className="overlay1"></div>
            <div className="overlay2"></div>
            <div className="overlay3"></div>
            <div className="overlay4"></div>


    <div className="Video">
      <video ref={videoRef} className="backgroundVideo" autoPlay muted loop>
      <source src="/firstFrame.mov" type="video/mp4"/>
  
    Your browser does not support the video tag.
      </video>
    </div>

          </div>
          
          <div className="gridText" ref={firstPhoneRef}>
            <h6>Fluid AI: Simplify, Organize, and Achieve More</h6>
            <p>
              In a world where daily tasks, communication, and goals often
              become overwhelming, Fluid AI offers an innovative solution.
              Combining advanced AI technology with a user-friendly interface,
              it brings together to-do lists, chats, saved items, and bucket
              lists into one seamless platform.
            </p>
          </div>


          <div className="gridText Right" ref={secondPhoneRef}>
            <h6>Fluid AI: Simplify, Organize, and Achieve More</h6>
            <p>
              In a world where daily tasks, communication, and goals often
              become overwhelming, Fluid AI offers an innovative solution.
              Combining advanced AI technology with a user-friendly interface,
              it brings together to-do lists, chats, saved items, and bucket
              lists into one seamless platform.
            </p>
          </div>

          <div className="gridText"  ref={thirdPhoneRef}>
            <h6>Fluid AI: Simplify, Organize, and Achieve More</h6>
            <p>
              In a world where daily tasks, communication, and goals often
              become overwhelming, Fluid AI offers an innovative solution.
              Combining advanced AI technology with a user-friendly interface,
              it brings together to-do lists, chats, saved items, and bucket
              lists into one seamless platform.
            </p>
          </div>
          <br/>
          <div className="gridText Right"  ref={lastphoneRef}>
            <h6>Fluid AI: Simplify, Organize, and Achieve More</h6>
            <p>
              In a world where daily tasks, communication, and goals often
              become overwhelming, Fluid AI offers an innovative solution.
              Combining advanced AI technology with a user-friendly interface,
              it brings together to-do lists, chats, saved items, and bucket
              lists into one seamless platform.
            </p>
          </div>

     
        </div>
      </section>
        </div>
     


    </>
  );
}
