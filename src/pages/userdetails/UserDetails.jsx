
import Details from "../../components/details/Details";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./userdetails.scss"

const UserDetails = () => {
  
    return (
      <div className="userDetails">
       <Navbar />
        <div className="detailsContainer">
          <Sidebar />
          <div className="detailsRight">
            <Details />
          </div>
          
        </div>
      </div>
    );
  }
  
  export default UserDetails