'use client'

import Header from '../../components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Button } from "@/components/ui/button";
import LiveScoreCard from '@/components/ui/LiveScoreCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page = () => {
  // Initialize the activeButton state with 'upcoming' to make the "UPCOMING" button active by default
  const [activeButton, setActiveButton] = useState('upcoming');
  const [activePage, setActivePage] = useState('upcoming');
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [recentMatches, setRecentMatches] = useState([]);


  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
    setActivePage(buttonId)
  }

// UPCOMING MATCHES API
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.request({
  //         method: 'GET',
  //         url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming',
  //         headers: {
  //           'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
  //           'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
  //         }
        
  //       });

        
  //       const matchData = response.data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches;
  //       setUpcomingMatches(matchData);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  //RECENT MATCH API
  // useEffect(() => {
  //   const fetchRecentData = async () => {
  //     try {
  //       const response = await axios.request({
  //         method: 'GET',
  //         url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
  //         headers: {
  //           'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
  //           'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
  //         }
        
  //       });
        
  //       const matchData = response.data.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches;
  //       setRecentMatches(matchData);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //    fetchRecentData();
  // }, []);
  
  


  return (
    <div>
      <Header />

      <div className="main-wrapper">
        <div className="main-content">



<a href="http://45.129.86.137:5178/schedule/fixture">
      <div className="sh-card">
       <div className="sh-card-image"><img src="https://images.icc-cricket.com/image/upload/t_ratio21_9-size60/prd/uh7op6arhhnprscg18mv" alt="" /></div>
       <div className="sh-title"><span>T20 Men WCC 2024 Schedule</span> <span style={{fontSize:".7rem", fontWeight:"400", color:"gray"}}>Schedule - 2024</span></div>
      </div>
</a>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page;
