
import "../../public/stylesheets/style.css";

const Breadcrums = () => {
  return (
    <div className="bdcum" style={{display:"flex", padding:"20px", border:"1px solid #dfdfdf"}}>
      <div className="image-cont"><img src="https://www.icctravelandtours.com/wp-content/uploads/2018/04/icc-homepage-600x600-sign-up-3-550x550.jpg" alt="" /></div>
      <div className="txt"style={{padding:"10px"}}>
        <div className="txt-heading" style={{fontSize:"1rem", fontWeight:"bold"}}>Will CSK Comwback next year, whats your views?</div>
        <div className="text-subheading" style={{color:"gray", fontSize:".8rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure provident, laborum in molestias nulla ipsa?</div>
      </div>
    </div>
  )
}

export default Breadcrums
