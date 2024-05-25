import '../../public/stylesheets/style.css';
import News from '../ui/News';
import PointsTable from '../ui/PointsTable'; 

const Content = () => {
  return (
    <div className='content-section'>
     <div className="inner-body">
       <div className="inner-left">
         <News />
       </div>
       <div className="inner-right" style={{paddingLeft:"10px", display:"flex", flexDirection:"column", gap:"10px"}}>
       <div className="card-hz">
       <PointsTable />
       </div>
       <div className="card-hz" style={{height:"40vw"}}>
       <span style={{marginLeft:"25px", borderBottom:"2px solid blue",fontWeight:"500", fontSize:".9rem"}}>Picture Of The Day</span>
        <div className="pic-of-the-day"><img src="https://images.news18.com/ibnlive/uploads/2024/03/ms-dhoni-csk-captain-bcci-2024-03-7512d1efc43affe64167b4a6449f8eb7.jpg?impolicy=website&width=640&height=480" alt="" /></div>
        <div className="pic-title">MS Dhoni in yel-love: Pic of the day</div>
       </div>
       </div>
     </div>
    </div>
  )
}

export default Content
