import "../../public/stylesheets/style.css";

const CoverLg = () => {
  return (
    <div className="cover-lg" style={{ width: "100%", padding: "10px" }}>
      <div className="cover-img" style={{ width: "100%", height: "55%", borderRadius:"7px" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius:"7px" }}
          src="https://images.moneycontrol.com/static-mcnews/2024/05/20240518185521_kohlicskrcb.png?impolicy=website&width=770&height=431"
          alt=""
        />
      </div>
     <div className="txt-wrapper" style={{padding:"10px"}}>
     <div className="blog-title">Will RCB Win the title of IPL 2024?</div>
      <div className="blog-sub">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate accusantium asperiores deserunt enim est, neque voluptatem fugit nihil!
      </div>
      <div className="author">- Shubh Agarwal</div>
     </div>
    </div>
  );
};

export default CoverLg;
