import React from "react";
import Tittles from "../Tittles";



function Whychooseus() {
  const featuresLeft = [
    {
      title: "Fresh Food",
      icon: "🍋",
      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
    {
      title: "Safe Food",
      icon: "🚚",
      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
    {
      title: "Quickest Delivery",
      icon: "⏱️",
      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
  ];

  const featuresRight = [
    {
      title: "Healthy Food Habit",
      icon: "🥗",
      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
    {
      title: "Environmental safety",
      icon: "🌱",
      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
    {
      title: "Honesty & Integrity",
      icon: "⚙️",
      text: "Lorem ipsum dolor sit amet, consectetur icing elit, sed do eiusmod tempor",
    },
  ];

  return (
    <div className="why-choose-us container mb-3 mb-md-0">


      <div className="row align-items-center">
        <div className="col-md-6 text-end pera text-muted d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. sed do eiusmod tempor incididunt ut labore</div>
        <div className="col-md-6">      <div className=" brdstart">
          <Tittles stitle={"Why Choose us"} ltitle={"Get Extra Benefits"} />
          <p className="text-muted ps-2 pera">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore
            sed do eiusmod tempor incididunt ut labore
          </p>
        </div></div>
        <div className="col-md-4 d-flex flex-column gap-4">
          {featuresLeft.map((item, idx) => (
            <div className="feature-card left p-4 shadow-sm rounded" key={idx}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold m-0" style={{ color: "var(--red)" }}>{item.title}</h5>
                <div className="icon-box">{item.icon}</div>
              </div>
              <p className="mb-0 text-muted small pera">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="col-md-4 text-center">
          <div>
            <img src={require("../../assets/Images/whychooseus_imagecopy.png")} alt="salad bowl" className="img-fluid salad-image  object-fit-contain" />
          </div>
        </div>

        <div className="col-md-4 d-flex flex-column gap-4">
          {featuresRight.map((item, idx) => (
            <div className="feature-card right p-4 shadow-sm rounded" key={idx}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="icon-box">{item.icon}</div>
                <h5 className="fw-bold m-0" style={{ color: "var(--red)" }}>{item.title}</h5>
              </div>
              <p className="mb-0 text-muted small pera">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whychooseus;
