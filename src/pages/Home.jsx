import { useEffect, useRef } from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faClock,
  faArrowCircleRight,
  faArrowCircleLeft,
  faPlane,
  faPlus,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import PhoneFrame from "../component/PhoneFrame";
import Slider1 from "../component/slider1";

const items = [
  { text: "Does Fluid AI increase wellbeing and meaning in life?" },
  { text: "What can curiosity, wonder, and awe do for you?" },
  { text: "Does Fluid AI increase wellbeing and meaning in life?" },
  { text: "What can curiosity, wonder, and awe do for you?" },
  { text: "Does Fluid AI increase wellbeing and meaning in life?" },
  { text: "What can curiosity, wonder, and awe do for you?" },
  { text: "Does Fluid AI increase wellbeing and meaning in life?" },
  { text: "What can curiosity, wonder, and awe do for you?" },
];
export default function Home() {
  const listRef = useRef([]);

  const handleScroll = () => {
    listRef.current.forEach((listItem, index) => {
      const listRect = listItem.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (listRect.top <= viewportHeight) {
        listItem.classList.add("list");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        <div className="FirstPage">
          <div class="burger-menu">
            <span></span>
            <span class="shorter"></span>
            <span></span>
          </div>
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
        <PhoneFrame />
      </section>

      <section className="fourthPage">
        <Slider1 />
      </section>

      <section className="fifthPage">
        <div className="leftSide">
          <h6>What can curiosity,wonder, and awe do for you?</h6>
          <p>
            Research shows that experiencing curiosity and awe can immensely
            benefit our mental, physical, and professional health. Here’s a
            brief overview of what curiosity and awe can do for you.
          </p>
        </div>

        <div className="rightSide">
          {items.map((item, index) => (
            <div key={index} ref={(el) => (listRef.current[index] = el)}>
              <div className="item">
                <p>{item.text}</p>
                <FontAwesomeIcon className="plus" icon={faPlus} />
              </div>
              <div className="line"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="sixthPage">
        <div className="Background"></div>
        <div className="Sixthgrid">
          <div className="sixthGridleft">
            <p>Join the Fluid AI Waitlist Today!</p>
            <div className="form">
              <div className="input-container">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  required
                />
                <label for="name">Name</label>
              </div>

              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                />
                <label for="email">Email</label>
              </div>

              <div className="input-container">
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder=" "
                  required
                />
                <label for="country">Country</label>
              </div>
            </div>
            <br />
            <button className="JoinBtn">Join Waitlist</button>
          </div>
          <div className="HandImgContainer">
            <img src="./handPhone.png" alt="Hand Phone" />
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="footerLogo">
          <p>Fluid AI</p>
          <h6>2024Fluid AI</h6>
        </div>
        <div>
          <div className="footerMenu">
            <div>
              <p>Our Features</p>
              <p>Areas</p>

              <p>FAQs</p>
              <p>The Waitlist</p>
              <p>Contact us</p>
            </div>
            <div>
              <p>Team of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
