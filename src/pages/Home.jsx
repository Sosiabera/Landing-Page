import { useEffect,useRef } from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faClock,
  faArrowCircleRight,
  faArrowCircleLeft,
  faPlane,
  faSignal,
  faWifi,
  faBattery,
  faArrowLeft,
  faPaperclip,
  faKeyboard,
  faMicrophone
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  const phoneRef = useRef(null);
  const triggerPhoneRef = useRef(null);
  const lastphoneRef = useRef(null);
  
useEffect(() =>{


  const phone = phoneRef.current;
  const lastPhone = lastphoneRef.current;


  console.log(phone)
  const handlescroll = () =>{
  const phoneRect = phone.getBoundingClientRect();
  const lastRect = lastPhone.getBoundingClientRect();


  if(phoneRect.top <= 0){
    phone.style.position ="sticky";
    phone.style.top ="0";
  }else{
    phone.style.position ="static";
  }
  if(lastRect.top <= 0){
    phone.style.position ="static";
  }
}

window.addEventListener("scroll",handlescroll)

return () =>{
  window.removeEventListener("scroll",handlescroll)
}
},[])



  return (
    <>
      <section>
        <div className="FirstPage">
          <div className="NavText">
            <div className="NavTextLeft">
              <p>Our Features</p>
              <p>Areas</p>
            </div>

            <div className="NavTextRight">
              <p>FAQs</p>
              <p>The Waitlist</p>
            </div>
          </div>

          <div className="logoCenter">
            <div className="logo"></div>
            <p>Fluid AI</p>
          </div>
          <p className="scroll">scroll down</p>
        </div>
      </section>

      <section className="secondPage">
        <div className="secondPageCenter">
          <h6>Fluid AI</h6>
          <p>
            Unlock Seamless <br />
            Efficiency
          </p>
          <button className="JoinBtn">Join Waitlist</button>
        </div>

        <div className="Card">
          <div className="overlay"></div>
          <p className="cardText">Restaurant</p>
          <FontAwesomeIcon className="icon" icon={faEllipsisV} />

          <div className="CardBottom">
            <p>Clap Dubai</p>
            <h6>4.4 . $$$$ . Japanese</h6>
          </div>
        </div>

        <div className="Todo">
          <h6>Next To-Do</h6>
          <p>Renew Car insurance</p>
        </div>

        <div className="Event">
          <h6>Upcoming Events</h6>
          <p>Kite Beach</p>
          <div className="Time">
            <FontAwesomeIcon icon={faClock} />
            <span>10:00 - 14:00</span>
          </div>

          <div className="Cafe">
            <p>Café nearby </p>
          </div>

          <div className="TodoRignt">
            <h6>Next To-Do</h6>
            <p>Renew Car insurance</p>
          </div>

          <div className="EventRignt">
            <h6>Upcoming Events</h6>
            <p>Kite Beach</p>
            <div className="TimeRignt">
              <FontAwesomeIcon icon={faClock} />
              <span>10:00 - 14:00</span>
            </div>
          </div>

          <div className="flight">
            <p>Book a flight </p>
          </div>

          <div className="Trip">
            <p>Trip ideas </p>
          </div>

          <div className="Card-2">
            <div className="overlay"></div>

            <div className="Card-2Bottom">
              <h6>Reservations</h6>
              <p>Restaurant Le Bous</p>
              <div className="Card-2Time">
                <FontAwesomeIcon icon={faClock} />
                <span>4 Oct 20:00</span>
              </div>
            </div>
          </div>

          <div className="bookFight">
            <p>Dubai</p>
            <p>Emirates Airlines</p>
            <p>Paris</p>
            <p>DXB</p>
            <p>Oct 4 8:20</p>
            <p>CDG </p>
            <p>4 Oct, 13:30</p>
            <FontAwesomeIcon icon={faArrowCircleRight} />
            <FontAwesomeIcon icon={faArrowCircleLeft} />
            <FontAwesomeIcon icon={faPlane} />
            <p>Non-Stop</p>
            <p>Flight</p>
            <p>Class</p>
            <p>EK073</p>
            <p>Guest</p>
            <p>A380</p>
            <p>7 hours 10 mins</p>
          </div>
        </div>
      </section>
      <section className="thirdPage">
        <div className="thirdPageTitle">
          <h6>Our Features</h6>
          <p>
            Fluid AI was born out of a desire to simplify and streamline modern
            life
          </p>
        </div>
        <div className="grid">
          <div className="gridText">
            <h6>Fluid AI: Simplify, Organize, and Achieve More</h6>
            <p>
              In a world where daily tasks, communication, and goals often
              become overwhelming, Fluid AI offers an innovative solution.
              Combining advanced AI technology with a user-friendly interface,
              it brings together to-do lists, chats, saved items, and bucket
              lists into one seamless platform.
            </p>
          </div>
          <div className="girdPhone" ref={phoneRef}>
            <div className="overlay1"></div>
            <div className="overlay2"></div>
            <div className="overlay3"></div>
            <div className="overlay4"></div>

            <div className="PhoneNav">
              <p>9:41</p>
              <div className="PhoneNavIcons">
                <FontAwesomeIcon icon={faSignal} /> 
                <FontAwesomeIcon icon={faWifi} /> 
                <FontAwesomeIcon icon={faBattery} /> 
              </div>
            </div>
            <div className="SecondPhoneNav">
        
                <FontAwesomeIcon icon={faArrowLeft} /> 
                <p>Speaking to Fluid AI</p>
                <FontAwesomeIcon icon={faClock} />
 
            </div>

            <div className="PhoneText">
              <p>Hi! Can you find me top rated restaurants with a</p>
              <span> nice view</span>
            </div>

            <div className="PhoneFooter">
        
        <FontAwesomeIcon className="paperclip" icon={faPaperclip} /> 
        <FontAwesomeIcon className="microphone" icon={faMicrophone} />
        <FontAwesomeIcon className="keyboard" icon={faKeyboard} />

    </div>

    <div className="Video">
      <video className="backgroundVideo" autoPlay muted loop>
      <source src="/phoneFooter.mp4" type="video/mp4"/>
  
    Your browser does not support the video tag.
      </video>
    </div>

          </div>

          <div className="gridText Right" ref={triggerPhoneRef}>
            <h6>Fluid AI: Simplify, Organize, and Achieve More</h6>
            <p>
              In a world where daily tasks, communication, and goals often
              become overwhelming, Fluid AI offers an innovative solution.
              Combining advanced AI technology with a user-friendly interface,
              it brings together to-do lists, chats, saved items, and bucket
              lists into one seamless platform.
            </p>
          </div>

          <div className="gridText">
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


    </>
  );
}
