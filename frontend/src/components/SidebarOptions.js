import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://cdn2.vectorstock.com/i/1000x1000/60/81/math-font-with-symbol-and-formula-icon-vector-39626081.jpg"
          alt=""
        />
        <p>Math</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_22/2451826/180601-atomi-mn-1540.jpg"
          alt=""
        />

        <p>Physics</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://www.thoughtco.com/thmb/6MsMmUK27akFhb8i89kj95J5iko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg"
          alt=""
        />
        <p>Chemistry</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.preuniversity.org/wp-content/uploads/2020/09/Biology-2-1.jpg"
          alt=""
        />
        <p>Biology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://im.indiatimes.in/content/2023/May/today-in-history-9_6457be174df72.jpg?w=640&h=427&cc=1"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2021/08/04083303/Untitled-design-81.png"
          alt=""
        />
        <p>Geography</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://2.bp.blogspot.com/-6t5udaBV9Qs/VmcJdvbrfwI/AAAAAAAABS4/VRNg-5dVX2E/s1600/5heuCFh.png"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://englishlive.ef.com/blog/wp-content/uploads/sites/2/2014/07/its_time_to_learn_english.jpg"
          alt=""
        />
        <p>English</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-diploma-education-day_23-2149241011.jpg?w=2000"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default SidebarOptions