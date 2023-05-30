import React from "react";
import Header from "../../Header";
import Mainpage from "../../Mainpage";
import "../../../Style/sendstream.css";

export default function Sendstream() {
  return (
    <div>
      <div className="sendstream-page">
        <div className="heading">
          <h1>Create Stream</h1>
        </div>
        <div className="form">
          <div className="createstream-form">
            <label>Reciever Wallet Address</label>
            <br />
            <input className="value-wallet" />
            <div className="sub-form-i">
              <div className="sub-form-i-i">
                <label>Super Token</label>
                <br />
                <input className="sub-form-value"></input>
              </div>
              <div className="sub-form-i-i">
                <label>Flow Rate</label>
                <br />
                <input className="sub-form-value"></input>
              </div>
              <div className="sub-form-i-i">
                <label>/Month</label>
                <br />
                {/* <input className="sub-form-value"></input> */}
                <input
                  type="month"
                  id="start"
                  name="start"
                  className="sub-form-value"
                ></input>
              </div>
            </div>
            {/* <div className="sub-form-ii"></div> */}
          </div>
          <div className="createstream-form">
            <div className="">
              <h1 className="schedule-stream">Schedule Stream</h1>
            </div>
            <div className="sub-form-i">
              <div className="sub-form-i-i">
                <label>Start Date</label>
                <br />
                {/* <input className="sub-form-value"></input> */}
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  className="sub-form-value"
                ></input>
              </div>
              <div className="sub-form-i-i">
                <label>End Date</label>
                <br />
                {/* <input className="sub-form-value"></input> */}
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  className="sub-form-value"
                ></input>
              </div>
              <div className="sub-form-i-i">
                <label>Total Stream</label>
                <br />
                <input className="sub-form-value"></input>
              </div>
            </div>

            <div className="sub-form-ii"></div>
          </div>
          <div className="submit-stream">
            <button className="submit-stream-btn">
              <b>Send Stream</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
