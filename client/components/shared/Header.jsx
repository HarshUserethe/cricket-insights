
import '../../public/stylesheets/style.css';
import { CiHome, CiAlignBottom, CiTrophy, CiCalendar, CiEdit,CiGlobe } from "react-icons/ci";
import Link from 'next/link';





const Header = () => {
  return (
    <div className='header-bar'>
     <div className="navigation-bar">
        <div className="logo">
            {/* <img src="" alt="logo" /> */}
            <h2>CricLegends</h2>
        </div>
        <div className="nav-list" style={{display:'flex', justifyContent:'space-evenly'}}>
           <li>
            <Link href="/"> {/* Link to the home page (`/`) */}
               <div className="nav-icon"><CiHome /></div>
               <div className="nav-title">Home</div>
           </Link>
           </li>
           <li>
            <Link href='/schedule'>
            <div className="nav-icon"> <CiCalendar/> </div>
            <div className="nav-title">Schedule</div>
            </Link>
           </li>
           <li>
           <Link href='/series'>
           <div className="nav-icon"><CiTrophy/></div>
            <div className="nav-title">Series</div>
           </Link>
           </li>
           <li>
           <Link href='/news'>
           <div className="nav-icon"><CiGlobe/></div>
            <div className="nav-title">News</div>
           </Link>
           </li>
           <li>
            <Link href='/statsHub'>
            <div className="nav-icon"><CiAlignBottom /></div>
            <div className="nav-title">Stats Hub</div>
            </Link>
           </li>
           <li>
            <div className="nav-icon"><CiEdit /></div>
            <div className="nav-title">Blog</div>
           </li>
        </div>
     </div>
    </div>
  )
}

export default Header
