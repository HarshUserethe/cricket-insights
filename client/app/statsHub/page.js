'use client'
import Header from '@/components/shared/Header'
import {useState, useEffect} from 'react'
import Footer from '@/components/shared/Footer';
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { IoLogoSteam } from 'react-icons/io';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
 

const page = () => {

  const [activeButton, setActiveButton] = useState('teams');
  const [activePage, setActivePage] = useState('teams');
  const [teams, setTeams] = useState([]);
  const [popularstadiums, setpopularStadiums] = useState([]);

  //UPCOMING MATCH API
   useEffect(() => {
     const fetchData = async () => {
       try {
       const response = await axios.get('http://localhost:3004/api/teams');
        
       const teamData = response.data;
       setTeams(teamData);

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
        const response = await axios.get('http://localhost:3004/api/popularstadium');
         
        const stadiums = response.data;
        setpopularStadiums(stadiums);
 
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
        onClick={() => handleClick('teams')} 
        className={activeButton === 'teams' ? 'active sw-buttons' : 'sw-buttons'}
      >
        TEAMS
      </Button>
      <Button 
        onClick={() => handleClick('stadiums')} 
        className={activeButton === 'stadiums' ? 'active sw-buttons' : 'sw-buttons'}
      >
        STADIUMS
      </Button>
      <Button 
        onClick={() => handleClick('ranking')} 
        className={activeButton === 'ranking' ? 'active sw-buttons' : 'sw-buttons'}
      >
        RANKING
      </Button>
    </div>
    <div className="main-wrapper">
      <div className="main-content">


{/* TEAMS PAGE */}
     {(activePage === 'teams' ? (<div className="upcoming-matches">
     {
 teams.slice(0, 10).map((teams, index) => {
  if (teams.imageUrl.length > 0) {
    return (
      <div className="item" key={index} style={{marginTop: "1vw"}}>
        <Card sx={{ maxWidth: 225 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={teams.imageUrl}
              alt={teams.teamName}
            />
            <CardContent>
             <div className="t-name" style={{display:"flex", justifyContent:"center", alingItem:"center", padding:"10px"}}>{teams.teamName}</div>
<div className="fs-wrapper" style={{display:"flex", justifyContent:"space-between"}}>
             <div className="fs">
              <div className="fs-title" style={{display:"flex", justifyContent:"center", alingItems:"center", fontSize:".9rem"}}>TEST</div>
              <div className="fs-points" style={{display:"flex", justifyContent:"center", alingItems:"center", fontSize:".8rem", fontWeight:"500"}}>{teams.iccRankings.test}</div>
             </div>
             <div className="fs">
              <div className="fs-title" style={{display:"flex", justifyContent:"center", alingItems:"center", fontSize:".9rem"}}>ODI</div>
              <div className="fs-points"style={{display:"flex", justifyContent:"center", alingItems:"center", fontSize:".8rem", fontWeight:"500"}}>{teams.iccRankings.odi}</div>
             </div>
             <div className="fs">
              <div className="fs-title" style={{display:"flex", justifyContent:"center", alingItems:"center", fontSize:".9rem"}}>T20</div>
              <div className="fs-points" style={{display:"flex", justifyContent:"center", alingItems:"center", fontSize:".8rem", fontWeight:"500"}}>{teams.iccRankings.t20}</div>
             </div>
</div>

            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
      return null;
    }
  })
}
     </div>) : "")}

{/* STADIUMS PAGE */}
     {(activePage === 'stadiums' ? (<div className="recent-matches">
     <div className="popular-stadiums" style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
     {
 popularstadiums.slice(0, 39).map((stadium, index) => {
  if (stadium.imageUrl.length > 0) {
    return (
      <div className="item" key={index} style={{marginTop: "1vw"}}>
        <Card sx={{ maxWidth: 225 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={stadium.imageUrl}
              alt={stadium.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <h5 style={{ fontSize: ".8rem", fontWeight: "500", color: "#000" }}>
                  {stadium.name}
                </h5>
              </Typography>
              <Typography variant="body2">
                <p style={{ fontSize: ".7rem", color: "gray" }}>
                  {stadium.location}
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
      return null;
    }
  })
}
     </div>
     </div>) : "")}


{/* RANKINGS PAGE */}
     {(activePage === 'ranking' ? (<div className="schedule-matches recent-matches">

     </div>) : "")} 

      </div>
    </div>

<Footer />
  </div>
  )
}

export default page
