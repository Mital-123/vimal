import HOC from "../HOC"
import '../../assets/Css/Product.css'
import HomeProduct from "../Home/HomeProduct"
function Product() {
  return (
    <>
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', marginTop: '78px' }} className="landingimg">
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
      </div>

      <HomeProduct />

    </>
  )
}

export default HOC(Product)