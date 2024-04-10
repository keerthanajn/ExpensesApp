"use client";
import "./userHome.css";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Dashboard() {
  return (
    <>
      <div id="contentbox">
        <div id="innerbox">
          <h1 id="top_text">Welcome back *NAME*</h1>
          <div id="job_position">
            <p>*Worker's position in company*</p>
          </div>
          <div id="long_bar">
            <p>long bar for info</p>
          </div>
          <div id="displaybox_1" className="tripple_item">
            <p>text1</p>
          </div>
          <div id="displaybox_2" className="tripple_item">
            <p>text2</p>
          </div>
          <div id="displaybox_3" className="tripple_item">
            <p>text3</p>
          </div>
        </div>
      </div>
    </>
  );
}
