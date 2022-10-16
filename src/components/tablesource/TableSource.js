import axios from "axios";
import { useEffect, useState } from "react";
import "./tablesource.scss";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertIcon from '@mui/icons-material/MoreVert';


const TableSource = () => {
    const [userRows, setUserRows] = useState([]);
    const [status, setStatus] = useState("pending");
    // const [pending, setPending] = useState(false);
    // const [blacklisted, setBlacklisted] = useState(true);
    // const [active, setActive] = useState(false);
    // const [inactive, setInactive] = useState(false);


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
                {/* { pending && 'Pending' }
                { blacklisted && 'Blacklisted' }
                { active && 'Active' }
                { inactive && 'Inactive' } */}
                
                 {/* {status === "active" ? 'Active' : ''}
                 {status === "blacklisted" ? 'Blacklisted' : ''}
                 {status === "inactive" ? 'Inactive' : ''} */}

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
                <MoreVertIcon />
              </div>
            </div>
            );
          },
        },
      ];

  return (
    <div className="datatable">
      
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
      
    </div>
  )
}

export default TableSource
