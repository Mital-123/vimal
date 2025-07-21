import React from "react";
import Tittles from "../Tittles";
import { GiFruitBowl, GiFruitTree } from "react-icons/gi";
import { FaTruckMoving } from "react-icons/fa";
import { BsAlarmFill } from "react-icons/bs";
import { MdOutlineSettingsSuggest, MdSettingsSuggest } from "react-icons/md";
import { RiLeafFill } from "react-icons/ri";

function Whychooseus() {
  const featuresLeft = [
    {
      title: "Fresh Food",
      icon:<GiFruitTree />,
      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
    {
      title: "Safe Food",
      icon: <FaTruckMoving/>,
      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
    {
      title: "Quickest Delivery",
      icon: <BsAlarmFill />,

      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
  ];

  const featuresRight = [
    {
      title: "Healthy Food Habit",
      icon: <GiFruitBowl />,
      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
    {
      title: "Environmental safety",
      icon: <RiLeafFill/>,

      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
    {
      title: "Honesty & Integrity",
      icon: <MdSettingsSuggest/>,

      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
  ];

  return (
 <div className="contactinfo_bg pt-5">
     <div className="why-choose-us contactinfo_bg container mb-md-0">
      <div className="row align-items-center">
        <div className="col-md-6 text-end pera text-muted d-none d-md-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. sed do eiusmod tempor incididunt
          ut labore
        </div>
        <div className="col-md-6">
          <div className="brdstart">
            <Tittles stitle={"Why Choose us"} ltitle={"Get Extra Benefits"} />
            <p className="text-muted ps-2 pera">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore sed do eiusmod tempor
              incididunt ut labore
            </p>
          </div>
        </div>

        {/* Left Features */}
        <div className="col-md-4 d-flex flex-column gap-4">
          {featuresLeft.map((item, idx) => (
       <div data-aos="fade-right"
              data-aos-delay={idx * 300}
              data-aos-duration="1000"
              data-aos-once="true">

             <div
              className="feature-card left p-4 shadow-sm rounded"
              key={idx}
              
            >
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold m-0 " style={{color:"#dfa700"}} >
                  {item.title}
                </h5>
                <h2 className="icon-box " style={{ color: "var(--red)" }}>{item.icon}</h2>
              </div>
              <p className="mb-0 text-muted small pera ">{item.text}</p>
            </div>
       </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="col-md-4 text-center">
          <div>
            <img
              src={require("../../assets/Images/whychooseus_imagecopy.png")}
              alt="salad bowl"
              className="img-fluid salad-image object-fit-contain"
            />
          </div>
        </div>

        {/* Right Features */}
        <div className="col-md-4 d-flex flex-column gap-4">
          {featuresRight.map((item, idx) => (
            <div  data-aos="fade-left"
                          data-aos-delay={idx * 300}
                          data-aos-duration="1000"
                          data-aos-once="true">
            <div
              className="feature-card right p-4 shadow-sm rounded"
              key={idx}
             
            >
                <div className="d-flex justify-content-between align-items-center mb-2">
                             <h2 className="icon-box" style={{ color: "var(--red)" }}>{item.icon}</h2>

                <h5 className="fw-bold m-0 " style={{color:"#dfa700"}} >
                  {item.title}
                </h5>
              </div>
              <p className="mb-0 text-muted small pera">{item.text}</p>
</div>
            </div>
          ))}
        </div>
      </div>
    </div>
 </div>
  );
}

export default Whychooseus;
