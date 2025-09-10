import React, { useState, useEffect } from "react";
import axios from "axios";

function HomeCarousel() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get("https://backendvimalagro.onrender.com/homebanner");
        if (res.data && res.data.length > 0) {
          setBanner(res.data[0]); // ✅ take the first object
        }
      } catch (err) {
        console.error("Error fetching banner:", err);
      }
    };
    fetchBanner();
  }, []);

  if (!banner) {
    return null; // or loader/spinner
  }

  return (
    <div
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
      className="landingimg mt-5 pt-md-4 pt-0"
    >
      {/* Desktop View */}
      <img
        src={banner.desktophomebanner}
        alt="desktop-banner"
        className="img-fluid w-100 d-md-block d-none"
        style={{ height: "100%" }}
      />

      {/* Mobile View */}
      <img
        src={banner.mobilehomebanner}
        alt="mobile-banner"
        className="img-fluid w-100 d-lg-none d-block object-fit-cover"
        style={{ height: "100%" }}
      />
    </div>
  );
}

export default HomeCarousel;
