import "./App.css";
import "./Lunch.css";
import alb from "./assets/ai_alb.jpg";
import linkedin from "./assets/linkedin.png";
import email from "./assets/email.png";
import json from "./json/staff.json";
import logo from "./assets/logo.png";
import { useState } from "react";
import { useEffect, useRef } from "react";

function App() {
  const refMotivation = useRef(null);
  const refLearn = useRef(null);
  const refPeople = useRef(null);

  const [scroll, setScroll] = useState(0);
  const [lunchData, setLunchData] = useState([
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 1",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 2",
      longDescription:
        "A lunch and learn about something interesting and topical.  lunch and learn about something interesting and topical.  lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 3",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 4",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 5",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 6",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 7",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 8",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 1",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 2",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 3",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 4",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 5",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 6",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 7",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 8",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 1",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 2",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 3",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 4",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 5",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 6",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 7",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 8",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 1",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 2",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 3",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 4",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 5",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 6",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 7",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 8",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 1",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 2",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 3",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 4",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 5",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 6",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 7",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 8",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 1",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 2",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 3",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 4",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 5",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 6",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 7",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
    {
      date: "01/01/2023",
      hosts: ["Craig"],
      url: "#",
      shortDescription: "A lunch and learn 8",
      longDescription:
        "A lunch and learn about something interesting and topical",
    },
  ]);

  const [currentLunch, setCurrentLunch] = useState(null);
  const [currentSelect, setCurrentSelect] = useState(0);

  useEffect(() => {
    // dummy fetch lunch and learns
    // to be replaced
    const firstLunchSlice = lunchData.slice(0, 3);
    setCurrentLunch(firstLunchSlice);
  }, []);

  const scrollerHandle = (index) => {
    const newArray = Array(...lunchData);
    const newCurrent = newArray.slice(index * 3, index * 3 + 3);
    setCurrentLunch(newCurrent);
    setCurrentSelect(index);
    blurCards();
  };
  const blurCards = () => {
    document.querySelectorAll(".lunch-and-learn-card-wrapper").forEach((x) => {
      x.style.animation = "none";
      x.offsetHeight;
      x.style.animation = null;
    });
  };

  return (
    <>
      <div id="header-buttons">
        <button
          onClick={() =>
            refMotivation.current.scrollIntoView({
              block: "center",
              behavior: "smooth",
            })
          }
        >
          motivation
        </button>
        <button
          onClick={() =>
            refLearn.current.scrollIntoView({
              block: "center",
              behavior: "smooth",
            })
          }
        >
          Learn
        </button>
        <button
          onClick={() =>
            refPeople.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          People
        </button>
      </div>
      <main>
        <header>
          <p>2i Engineering</p>
        </header>
      </main>
      <section ref={refMotivation} id="blurb">
        <img src={logo} />
        <p>
          In engineering, we love to get technical. Whether it’s building
          automated test frameworks, developing new testing products like
          AssureTDG or Assure2FA or writing API or performance tests, we
          engineers enjoy nothing more than to dive straight into nitty gritty
          and start solving problems - probably while breaking some things along
          the way.
        </p>
        <p>
          We also pride ourselves on our knowledge sharing, which is why we host
          regular Lunch and Learn sessions. Previous sessions have included
          everything from introductions to new technologies and overviews on
          particular tools to a series on imposter syndrome and tips for a
          learning a new language (be it Haskell or French).
        </p>
        <p>
          You’ll find an archive of all of our Lunch and Learn sessions on this
          site, as well as directory of everyone in engineering and our contact
          details. If anything in any of the videos piques your interest, please
          feel free to reach out!
        </p>
      </section>
      <section ref={refLearn} id="lunch-and-learns">
        {/* <span className="arrow" id='left-arrow' onClick={moveLeft}>
          {"<"}
        </span> */}
        <div
          id="lunch-and-learn-scroller"
          style={{ transform: `translate(${scroll}vw)` }}
        >
          {currentLunch &&
            currentLunch.map((ll, i) => {
              return (
                <div key={i} className="lunch-and-learn-card-wrapper">
                  <div className="overlay">
                    <p>{ll.longDescription}</p>
                    <a href="#">Go to video</a>
                  </div>
                  <span className="video-thumbnail" />
                  <div className="ll-titles">
                    <h3>{ll.shortDescription}</h3>
                    <h4>
                      By:
                      {" " + ll.hosts}
                    </h4>
                    <p>{ll.date}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="scroll-buttons">
          {[...Array(Math.ceil(lunchData.length / 3))].map((el, i) => {
            return (
              <button
                style={{ backgroundColor: currentSelect === i && "grey" }}
                key={i}
                onClick={() => {
                  scrollerHandle(i);
                }}
              ></button>
            );
          })}
        </div>
      </section>
      <section ref={refPeople} id="engineers">
        <h2 id="engineer-title">Meet our engineers!</h2>
        <div id="engineer-card-wrapper">
          {json.data.map((engineer, index) => {
            return (
              <div className="engineer-card" key={index}>
                <div
                  className="engineer-top-card"
                  style={{ backgroundImage: `url('./${engineer.img_url}')` }}
                >
                  <div className="engineer-titles">
                    <h3>
                      {typeof engineer === "object" ? engineer?.name : engineer}
                    </h3>
                    <h4>
                      {typeof engineer === "object" ? engineer?.position : null}
                    </h4>
                  </div>
                </div>
                <span className="engineer-overlay">
                  <div
                    className="social-links"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <a className="social-link" href="#">
                      <img src={linkedin} className="social-icon" />
                    </a>
                    <a className="social-link" href="#">
                      <img src={email} className="social-icon invert-color" />
                    </a>
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <footer>
        <span>Copyright © 2i Testing</span>
        <span>GitHub</span>
        <span>2itesting.com</span>
      </footer>
    </>
  );
}

export default App;
