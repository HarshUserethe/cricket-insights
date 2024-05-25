'use client'
import Header from '@/components/shared/Header'
import {useState, useEffect} from 'react'
import Footer from '@/components/shared/Footer';
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { IoLogoSteam } from 'react-icons/io';


const page = () => {

  const [activeButton, setActiveButton] = useState('upcoming');
  const [activePage, setActivePage] = useState('upcoming');
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [recentMatches, setRecentMatches] = useState([]);

  //UPCOMING MATCH API
   useEffect(() => {
     const fetchData = async () => {
       try {
       const response = await axios.get('http://45.129.86.137:3004/api/schedules');
        
       const matchData = response.data;
       setUpcomingMatches(matchData);

       } catch (error) {
         console.error(error);
       }
     };

      fetchData();
   }, []);


    //RECENT MATCH API
    useEffect(() => {
      const fetchData = async () => {
        try {
        const response = await axios.get('http://45.129.86.137:3004/api/recentmatch');
         
        const matchData = response.data;
        setRecentMatches(matchData);
 
        } catch (error) {
          console.error(error);
        }
      };
 
       fetchData();
    }, []);


 
  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
    setActivePage(buttonId)
  }

  return (
    <div>
      <Header />
      <div className="buttons-wrapper">
        <Button 
          onClick={() => handleClick('upcoming')} 
          className={activeButton === 'upcoming' ? 'active sw-buttons' : 'sw-buttons'}
        >
          UPCOMING
        </Button>
        <Button 
          onClick={() => handleClick('recent')} 
          className={activeButton === 'recent' ? 'active sw-buttons' : 'sw-buttons'}
        >
          RECENT
        </Button>
        {/* <Button 
          onClick={() => handleClick('schedule')} 
          className={activeButton === 'schedule' ? 'active sw-buttons' : 'sw-buttons'}
        >
          SCHEDULE
        </Button> */}
      </div>
      <div className="main-wrapper">
        <div className="main-content">


{/* UPCOMING PAGE */}
       {(activePage === 'upcoming' ? (<div className="upcoming-matches">
    
       {
  upcomingMatches
    .filter(series => series.scheduleAdWrapper?.date !== undefined)
    .map((series, index) => (
      <div className="match-list" key={index}>
        <div className="match-date">{series.scheduleAdWrapper.date}</div>
        <div className="all-matches">
          {series.scheduleAdWrapper.matchScheduleList.map((item, index) => (
         <div className="match" key={index}>
         <div className="mt-head" style={{display: 'flex', justifyContent: "start", alignItems: "center", gap: "20px"}}>
           <div className="s-name" style={{fontWeight: "bold", fontSize: "1rem"}}>{item.seriesName}</div>
         </div>
         <div className="mt-center" style={{display: 'flex', justifyContent: "center", gap:"25px", alignItems: "center", padding: "5px"}}>
           <div className="t1" style={{fontWeight: "600", fontSize: "1rem"}}>{item.matchInfo[0].team1.teamSName}</div>
           <span>VS</span>
           <div className="t2" style={{fontWeight: "600", fontSize: "1rem"}}>{item.matchInfo[0].team2.teamSName}</div>
         </div>
         <div className="mt-bottom">
           <div className="v-name">{item.matchInfo[0].venueInfo.ground}, {item.matchInfo[0].venueInfo.city}</div>
           <div className="mt-type">{item.seriesCategory}</div>
           <div className="mt-type m-format">{item.matchInfo[0].matchDesc}</div>
         </div>
         <hr />
       </div>
          ))}
        </div>
      </div>
    ))
}
     
       </div>) : "")}

{/* RECENT PAGE */}
       {(activePage === 'recent' ? (<div className="recent-matches">
      
       {
  recentMatches
    .filter(series => series.seriesAdWrapper !== undefined)
    .map((series, index) => (
      <div className="match-list" key={index}>
        <div className="match-date">{series.seriesAdWrapper.seriesName}</div>
        <div className="all-matches">
          {series.seriesAdWrapper.matches
            .filter(item => item.matchInfo.seriesName !== undefined)
            .map((item, matchIndex) => (
              <div className="match" key={matchIndex}>
                <div className="mt-head" style={{display: 'flex', justifyContent: "start", alignItems: "center", gap: "20px"}}>
                  <div className="s-name" style={{fontWeight: "bold", fontSize: "1rem"}}>{item.matchInfo.seriesName}</div>
                </div>
                <div className="mt-center" style={{display: 'flex', justifyContent: "center", gap:"25px", alignItems: "center", padding: "5px"}}>
                  <div className="t1" style={{fontWeight: "600", fontSize: "1rem"}}>{item.matchInfo.team1.teamSName}</div>
                  <span>VS</span>
                  <div className="t2" style={{fontWeight: "600", fontSize: "1rem"}}>{item.matchInfo.team2.teamSName}</div>
                </div>
                <div className="mt-bottom">
                  <div className="v-name">{item.matchInfo.venueInfo.ground}, {item.matchInfo.venueInfo.city}</div>
                  <div className="mt-type">{item.matchInfo.state}</div>
                </div>
                  <div className="mt-type m-format nn-patern">{item.matchInfo.status}</div>
                <hr />
              </div>
            ))}
        </div>
      </div>
    ))
}

       </div>) : "")}


{/* SCHEDULE PAGE */}
       {(activePage === 'schedule' ? (<div className="schedule-matches recent-matches">

       </div>) : "")} 

        </div>
      </div>
<Footer />
    </div>
  )
}

export default page
