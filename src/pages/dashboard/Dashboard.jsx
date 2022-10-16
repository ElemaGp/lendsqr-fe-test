import "./dashboard.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import TableSource from "../../components/tablesource/TableSource";

const Home = () => {
  
  return (
    <div className="home">
     <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="homeRight">
        <div className="widgetTitle">Users</div>
          <div className="widgets">
            <Widget type="user" />
            <Widget type="active" />
            <Widget type="loans" />
            <Widget type="savings" />
          </div>
          <div className="listContainer">
            <TableSource />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home