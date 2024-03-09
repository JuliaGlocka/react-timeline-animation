import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "../../src";

import "./styles.css";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const timeline6 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  const circle6 = useRef(null);

  const someCallback = () => {
    setMessage1("Functional tester");
    callback();
  };

  const someCallback2 = () => {
    setMessage2("Data steward");
  };

  const someCallback3 = () => {
    setMessage3("Office assistant");
  };
  const someCallback4 = () => {
    setMessage3("Translator");
  };
  const someCallback5 = () => {
    setMessage3("Promotion manager");
  };
    const someCallback6 = () => {
      setMessage3("Bookseller"); 
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(timeline6.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3)
    setObserver(circle4.current, someCallback4)
    setObserver(circle5.current, someCallback5)
    setObserver(circle6.current, someCallback6);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        <div className="message">{message1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="message">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="message">{message3}</div>
      </div>
    </div>
  );
};

export const TimelineAnimation = () => {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };


  return (
    <div className="App">
      <h1>react-scroll-animation component</h1>
      <div className="stub1">⬇️ scroll to start ⬇️</div>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="black"
        // hasReverse
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div>
    </div>
  );
}
