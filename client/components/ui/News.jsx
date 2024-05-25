import CoverLg from "./CoverLg"
import '../../public/stylesheets/style.css';
import CoverSm from "./CoverSm";
import Breadcrums from "./Breadcrums";

const News = () => {
  return (
    <div className="news-wrapper">
      <span style={{marginLeft:"25px", borderBottom:"2px solid red",fontWeight:"500", fontSize:".9rem"}}>News</span>
      <CoverLg />
      <div className="sm-news">
        <CoverSm />
        <CoverSm />
      </div>
      <div className="hz-news" style={{padding:"10px", display:"flex", gap:"10px", flexDirection:"column"}}>
        <Breadcrums />
        <div className="qoute cw-font" style={{padding:"20px", backgroundColor:"#142D34", borderRadius:"7px", textAlign:"center", color:"#fff"}}>
          <b>QUOTE OF THE DAY:</b> "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur autem voluptatum laboriosam"
        </div>
      </div>
    </div>
  )
}

export default News
