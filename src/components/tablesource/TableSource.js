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

    const blacklisted = (id) => {
      setStatus("blacklisted")
    }; 

    const active = (id) => {
      setStatus("active")
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
          field: "status",
          headerName: "STATUS",
          width: 250,
          renderCell: (params) => {
            return (
              <>

              <div>
              <div className={status === "pending" ? 'cellWithStatus pending' : 'cellWithStatus'}>Pending</div>
              <div className={status === "active" ? 'cellWithStatus active' : 'cellWithStatus'}>Active</div>
              <div className={status === "inactive" ? 'cellWithStatus inactive' : 'cellWithStatus'}>Inactive</div>
              <div className={status === "blacklisted" ? 'cellWithStatus blacklisted' : 'cellWithStatus'}>Blacklisted</div>
              </div>



              <div className="optionsContainer">
              <div className="dots">
                <MoreVertIcon  onClick={handleClick}/>
              </div>
              {shown && (
                <div className="optionsBox">
                  <div className="optionsWrapper">
                    
                  <Link to={{pathname: "/users/1", users: params.row }}>
                      <span>
                        <img src={eye} alt="view" />
                        <p>View Details</p>
                      </span>
                    </Link>

                    <span onClick={() => blacklisted(params.row.id)}>
                      <img src={userx} alt="blacklist user" />
                      <p>Blacklist User</p>
                    </span>

                    <span onClick={() => active(params.row.id)}>
                    <img src={usergood} alt="activate user" />
                    <p>Activate User</p>
                    </span>

                  </div>
                </div>
                )}
            </div>

              </>
            );
          },
        },

      ];



  return (
    
    <div className="datatable">

      <DataGrid
        className="datagrid"
        rows={userRows}
        disableSelectionOnClick
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(r) => r.id}
        
      />
      
      <User userRows = {userRows} />
    </div>
  )
}

export default TableSource
