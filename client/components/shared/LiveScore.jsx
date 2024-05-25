"use client";
import React, { useRef, useState, useEffect } from 'react';
import '../../public/stylesheets/style.css';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { AiFillEnvironment } from "react-icons/ai";
import axios from 'axios';



const LiveScore = () => {
  const scrollerRef = useRef(null);

  // const [liveMatches, setLiveMatches] = useState([]); // State to store fetched data
 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.request({
  //         method: 'GET',
  //         url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live',
  //         headers: {
  //           'X-RapidAPI-Key': 'c4eec97ea5mshf0444732d393e82p1a9345jsn8621e9a162c7',
  //           'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  //         }
        
  //       });
  //       setLiveMatches(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);




  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="live-score">
      <div className="top-border"></div>
      <div className="score-container">
        <div className="scroll-button">
          <div className="left" onClick={scrollLeft}><IoIosArrowBack /></div>
          <div className="right" onClick={scrollRight}><IoIosArrowForward /></div>
        </div>
        <div className="scroller" ref={scrollerRef}>
          <div className="card">
            <div className="cw-header-wrapper">
              <div className="cw-header" style={{display:"flex", gap:"5px"}}>
                <div className="match-status cw-font" style={{color:"red"}}>UPCOMING</div>
                <div className="series-name cw-font" style={{fontWeight:"bold"}}><li>Indian Premier Leaugue, 2024</li></div>
              </div>
              <div className="cw-match-info" style={{display:"flex", gap:"20px"}}>
                <div className="match-type cww-font" style={{fontWeight:"500"}}>Quilifier-1</div>
                <div className="venue cww-font" style={{color:"gray", display:"flex"}}><AiFillEnvironment style={{color:"orange"}}/>Ahemdabad</div>
              </div>
            </div>
            <div className="cw-team-info">
              <div className="team">
                <div className="teamInfo">
                  <div className="teamFlag"><img src="" alt="" /></div>
                  <div className="teamName cw-font" style={{fontWeight:"bold"}}>KKR</div>
                </div>
                <div className="teamScore cw-font">214/4 (20.0)</div>
              </div>

              <div className="team">
                <div className="teamInfo">
                  <div className="teamFlag"><img src="" alt="" /></div>
                  <div className="teamName cw-font" style={{fontWeight:"bold"}}>CSK</div>
                </div>
                <div className="teamScore cw-font">114/6 (16.0)</div>
              </div>
              <div className="match-result" style={{color:"green"}}>KKR won by 86 runs.</div>
              <div className="time cw-font" style={{color:"brown", padding:"5px", paddingLeft:"10px", fontSize:".8rem", fontWeight:"500"}}>Today 02:00 PM </div>
            </div>
          </div>

          <div className="card">
            <div className="cw-header-wrapper">
              <div className="cw-header" style={{display:"flex", gap:"5px"}}>
                <div className="match-status cw-font" style={{color:"red"}}>UPCOMING</div>
                <div className="series-name cw-font" style={{fontWeight:"bold"}}><li>Indian Premier Leaugue, 2024</li></div>
              </div>
              <div className="cw-match-info" style={{display:"flex", gap:"20px"}}>
                <div className="match-type cww-font" style={{fontWeight:"500"}}>Quilifier-1</div>
                <div className="venue cww-font" style={{color:"gray", display:"flex"}}><AiFillEnvironment style={{color:"orange"}}/>Ahemdabad</div>
              </div>
            </div>
            <div className="cw-team-info">
              <div className="team">
                <div className="teamInfo">
                  <div className="teamFlag"><img src="" alt="" /></div>
                  <div className="teamName cw-font" style={{fontWeight:"bold"}}>KKR</div>
                </div>
                <div className="teamScore cw-font">214/4 (20.0)</div>
              </div>

              <div className="team">
                <div className="teamInfo">
                  <div className="teamFlag"><img src="" alt="" /></div>
                  <div className="teamName cw-font" style={{fontWeight:"bold"}}>CSK</div>
                </div>
                <div className="teamScore cw-font">114/6 (16.0)</div>
              </div>
              <div className="match-result" style={{color:"green"}}>KKR won by 86 runs.</div>
              <div className="time cw-font" style={{color:"brown", padding:"5px", paddingLeft:"10px", fontSize:".8rem", fontWeight:"500"}}>Today 02:00 PM </div>
            </div>
          </div>

          <div className="card">
            <div className="cw-header-wrapper">
              <div className="cw-header" style={{display:"flex", gap:"5px"}}>
                <div className="match-status cw-font" style={{color:"red"}}>UPCOMING</div>
                <div className="series-name cw-font" style={{fontWeight:"bold"}}><li>Indian Premier Leaugue, 2024</li></div>
              </div>
              <div className="cw-match-info" style={{display:"flex", gap:"20px"}}>
                <div className="match-type cww-font" style={{fontWeight:"500"}}>Quilifier-1</div>
                <div className="venue cww-font" style={{color:"gray", display:"flex"}}><AiFillEnvironment style={{color:"orange"}}/>Ahemdabad</div>
              </div>
            </div>
            <div className="cw-team-info">
              <div className="team">
                <div className="teamInfo">
                  <div className="teamFlag"><img src="" alt="" /></div>
                  <div className="teamName cw-font" style={{fontWeight:"bold"}}>KKR</div>
                </div>
                <div className="teamScore cw-font">214/4 (20.0)</div>
              </div>

              <div className="team">
                <div className="teamInfo">
                  <div className="teamFlag"><img src="" alt="" /></div>
                  <div className="teamName cw-font" style={{fontWeight:"bold"}}>CSK</div>
                </div>
                <div className="teamScore cw-font">114/6 (16.0)</div>
              </div>
              <div className="match-result" style={{color:"green"}}>KKR won by 86 runs.</div>
              <div className="time cw-font" style={{color:"brown", padding:"5px", paddingLeft:"10px", fontSize:".8rem", fontWeight:"500"}}>Today 02:00 PM </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScore;
