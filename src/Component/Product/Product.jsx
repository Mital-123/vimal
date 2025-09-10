import HOC from "../HOC"
import '../../assets/Css/Product.css'
import HomeProduct from "../Home/HomeProduct"
import axios from "axios";
import { useEffect, useState } from "react";
function Product() {
    const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get("https://backendvimalagro.onrender.com/productbanner");
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
    <>
      {/* <div style={{ position: 'relative', width: '100%', overflow: 'hidden', marginTop: '78px' }} className="landingimg">
        <img
          src="https://www.vimalagro.com/wp-content/uploads/2020/10/home_product_collarge-1599x497.jpg"
          alt=""
          className="img-fluid w-100"
          style={{
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // overlay color 
            boxShadow: 'inset 0 0 100px 20px #000',
            pointerEvents: 'none',
          }}
          className="lendingshadow"
        ></div>
      </div> */}
         <div
      style={{ position: "relative", width: "100%", overflow: "hidden" }}
      className="landingimg mt-5 pt-md-4 pt-0"
    >
      {/* Desktop View */}
      <img
        src={banner.desktopproductbanner}
        alt="desktop-banner"
        className="img-fluid w-100 d-md-block d-none "
        style={{ height: "100%" }}
      />

      {/* Mobile View */}
      <img
        src={banner.mobileproductbanner}
        alt="mobile-banner"
        className="img-fluid w-100 d-lg-none d-block object-fit-cover"
        style={{ height: "100%" }}
      />
    </div>
      <HomeProduct />

    </>
  )
}

export default HOC(Product)