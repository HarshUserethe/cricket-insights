'use client'
import Header from '../../../components/shared/Header';
import Footer from '../../../components/shared/Footer';
import axios from 'axios';
import {useState, useEffect} from 'react';



const page = () => {
const [T20WCCFixture, setT20WCCFixture] = useState([]);
    
    //RECENT MATCH API
    useEffect(() => {
        const fetchData = async () => {
          try {
          const response = await axios.get('http://45.129.86.137:3004/api/schedules/api/t20wccfixture');
           
          const matchData = response.data;
          setT20WCCFixture(matchData);
   
          } catch (error) {
            console.error(error);
          }
        };
   
         fetchData();
      }, []);

  return (
    <div>
      <Header />
      <div className="main-wrapper">
        <div className="main-content">
        


        {T20WCCFixture.map((item, index) => {
  if (item.matchDetailsMap) {
    return (
      <div className="wrp" key={index}>
        {item.matchDetailsMap.match.map((elem, subIndex) => (
          <div className="wrrp" style={{display:"flex", justifyContent:"start", alignItems:"center"}} key={subIndex}>
          <div className="date" style={{width:"30%"}}>{elem.matchInfo.status}</div>
          <div className="mtype" style={{width:"20%"}}>{elem.matchInfo.matchDesc}</div>
          <div className="match-vs" style={{width:"30%"}}>{elem.matchInfo.team1.teamSName + " VS " + elem.matchInfo.team2.teamSName}</div>
          <div className="mtvenue" style={{width:"20%"}}>{elem.matchInfo.venueInfo.city}</div>
      </div>
        ))}
      </div>
    );
  }
  return null;
})}
          
         
        </div>
         </div>
    </div>
  )
}

export default page
