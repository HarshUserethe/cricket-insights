import "../../public/stylesheets/style.css";
import { AiFillEnvironment } from "react-icons/ai";

const LiveScoreCard = ({seriesName, matchDesc, matchFormat, state, status, firstTeamName, startDate, endDate, firstTeamImage, secondTeamName, secondTeamImage, city, team1runs, team1wick, team1ovs, team2runs, team2wick, team2ovs, pageType}) => {
 
  return (
    <div>
       <div className="card nw-card" style={{width: "100%", marginTop:"10px"}}>
            <div className="cw-header-wrapper">
              <div className="cw-header" style={{display:"flex", gap:"5px"}}>
                <div className="match-status cw-font" style={{color:"red", textTransform:"uppercase"}}>{state}</div>
                <div className="series-name cw-font" style={{fontWeight:"bold"}}><li>{seriesName.length > 15 ? `${seriesName.slice(0, 30)}...` : seriesName}</li></div>
              </div>
              <div className="cw-match-info" style={{display:"flex", gap:"20px"}}>
                <div className="match-type cww-font" style={{fontWeight:"500"}}>{matchDesc}</div>
                <div className="venue cww-font" style={{color:"gray", display:"flex"}}><AiFillEnvironment style={{color:"orange"}}/>{city}</div>
              </div>
            </div>
            <div className="cw-team-info">
              <div className="team">
                <div className="teamInfo">
                  <div className="teamFlag"><img src="" alt="" /></div>
                  <div className="teamName cw-font" style={{fontWeight:"bold"}}>{firstTeamName}</div>
                </div>
                <div className="teamScore cw-font">{(pageType === '1') ? matchFormat : team1runs+"/"+team1wick+" "+"("+team1ovs+")"}</div>
              </div>

              <div className="team">
                <div className="teamInfo">
                  <div className="teamFlag"><img src="" alt="" /></div>
                  <div className="teamName cw-font" style={{fontWeight:"bold"}}>{secondTeamName}</div>
                </div>
                <div className="teamScore cw-font">{(pageType === '1') ? matchDesc : team2runs+"/"+team2wick+" "+"("+team2ovs+")"}</div>
              </div>
              <div className="match-result" style={{color:"green"}}>{status}</div>
              <div className="time cw-font" style={{color:"brown", padding:"5px", paddingLeft:"10px", fontSize:".8rem", fontWeight:"500"}}>
              {(pageType === '1') ? "" : new Date(parseInt(startDate)).toLocaleDateString('en-GB')}

              </div>
            </div>
          </div>
    </div>
  )
}

export default LiveScoreCard
