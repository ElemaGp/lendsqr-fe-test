import axios from "axios";
import { useEffect, useState } from "react";
import "./tablesource.scss";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import User from "../../pages/user/User";
import userx from "../../assets/userx.svg";
import usergood from "../../assets/usergood.svg";
import eye from "../../assets/eye.svg";
import { Link } from "react-router-dom";



const TableSource = () => {
    const [userRows, setUserRows] = useState([]);
    const [status, setStatus] = useState("pending");
    const [shown, setShown] = useState(false);
    


    useEffect(()=>{
        const getUsers = async ()=>{
          try{
            const res = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ");
            console.log(res);
            setUserRows(res.data);
          }catch(err){
            console.log(err);
          }
        };
        getUsers();
      }, []);


      const handleClick = event => {
        setShown(current => !current);
    };



      //columns
       const userColumns = [
        { field: "orgName", 
          headerName: "ORGANIZATION" , 
          width: 280 },
        {
          field: "userName",
          headerName: "USERNAME",
          width: 200,
        },
        {
          field: "email",
          headerName: "Email",
          width: 270,
        },
      
        {
          field: "phoneNumber",
          headerName: "PHONE NUMBER",
          width: 200,
        },
        {
          field: "createdAt",
          headerName: "DATE JOINED",
          width: 250,
        },
        {
          field: "status" ,
          headerName: "STATUS",
          width: 150,
          renderCell: (params) => {
            return (
              <div>
              <div className={status === "pending" ? 'cellWithStatus pending' : 'cellWithStatus'}>Pending</div>
              <div className={status === "active" ? 'cellWithStatus active' : 'cellWithStatus'}>Active</div>
              <div className={status === "inactive" ? 'cellWithStatus inactive' : 'cellWithStatus'}>Inactive</div>
              <div className={status === "blacklisted" ? 'cellWithStatus blacklisted' : 'cellWithStatus'}>Blacklisted</div>
                

              </div>
            );
          },
        },
        {
          field: "more" ,
          headerName: "",
          width: 100,
          renderCell: () => {
            return (
             <div>
              <div className="dots">
                <MoreVertIcon  onClick={handleClick}/>
              </div>
            </div>
            );
          },
        },
      ];

  return (
    
    <div className="datatable">

          {shown && (
                <div className="optionsBox">
                  <div className="optionsWrapper">
                    
                    <Link to="/details">
                      <span>
                        <img src={eye} alt="view" />
                        <p>View Details</p>
                      </span>
                    </Link>

                    <span onClick={(e) => setStatus("blacklisted")}>
                      <img src={userx} alt="blacklist user" />
                      <p>Blacklist User</p>
                    </span>

                    <span onClick={(e) => setStatus("active")}>
                    <img src={usergood} alt="activate user" />
                    <p>Activate User</p>
                    </span>

                  </div>
                </div>
                )}
      
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
      
      <User userRows = {userRows} />
    </div>
  )
}

export default TableSource
