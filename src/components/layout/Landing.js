import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="large">Welcome to Atlantic Travels</h1>
          <section id="search">
            <div className="clearfix search-wrap">
              <div
                className="fl search-box clearfix"
                // style="border-color: rgb(210, 210, 210);"
              >
                <span className="fl icon-city icon"></span>
                <div>
                  <input
                    type="text"
                    id="src"
                    className="db"
                    data-message="Please enter city"
                    tabindex="1"
                    autocomplete="off"
                  />
                  <label
                    for="src"
                    className="db from move-up"
                    // style="left:15%"
                  >
                    FROM
                  </label>
                  <div className="error-message-fixed "> </div>
                </div>
              </div>
              <span className="icon-doublearrow icon" id="togglebtn"></span>
              <div className="fl search-box">
                <span
                  className="fl icon-city icon"
                  // style="margin-left: 13px;"
                ></span>
                <div>
                  <input
                    type="text"
                    id="dest"
                    className="db"
                    data-message="Please enter a destination city"
                    tabindex="2"
                    autocomplete="off"
                  />
                  <label
                    for="dest"
                    //  style="left: 21%;"
                    className="db to move-up"
                  >
                    TO
                  </label>
                  <div className="error-message-fixed "> </div>
                </div>
              </div>
              <div
                className="fl search-box date-box gtm-onwardCalendar"
                // style="border-color: rgb(210, 210, 210);"
              >
                <span className="fl icon-calendar_icon-new icon-onward-calendar icon"></span>
                <div>
                  <input
                    type="text"
                    id="onward_cal"
                    className="db"
                    readonly="readonly"
                    tabindex="3"
                    data-caleng=""
                  />
                  <label for="onward_cal" className="db text-trans-uc">
                    Date
                  </label>
                  <div className="date-error">
                    "Onward date should be before return date"
                  </div>
                </div>
              </div>
              <button id="search_btn" className="fl button">
                Search Buses
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Landing;
