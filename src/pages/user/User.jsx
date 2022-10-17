import React, { useEffect, useState } from 'react'
import './user.scss'



const User = ({userRows}) => {
    const [isShown, setIsShown] = useState(false);

    const [orgName, setOrgName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("");
    const [filteredOut, setfilteredOut] = useState({});

    let selected;
    

    



    const handleClick = event => {
        setIsShown(current => !current);
    };
    

    const handleChange = (e) => {
        const value = e.target.value;
        e.target.name==="orgName" && setOrgName(value);
        e.target.name==="username" && setUsername(value);
        e.target.name==="email" && setEmail(value);
        e.target.name==="date" && setDate(value);
        e.target.name==="phone" && setPhone(value);
        selected = { ...selected, [e.target.name]: value}; 
        console.log(selected);
    };
        
        

    const handleSubmit = (e) => {
            userRows.map(user =>{
            if (user.userName === username){
                setfilteredOut(user)
                console.log(filteredOut);
                } 

            if (user.orgName === orgName){
                setfilteredOut(user)
                console.log(filteredOut);
                } 

            if (user.email === email){
                setfilteredOut(user)
                console.log(filteredOut);
                } 

            if (user.phoneNumber === phone){
                setfilteredOut(user)
                console.log(filteredOut);
                } 

            if (user.createdAt === date){
                setfilteredOut(user)
                console.log(filteredOut);
                } 
        })
    }

      



    const handleReset = (e) => {
        setOrgName("");
        setUsername("");
        setEmail("");
        setDate("");
        setPhone("");
        setStatus("");

    };
                





    
    
  return (
    <div className="filter">
        <span className='filterButton' onClick={handleClick}>{isShown ? "Remove filter box" : "Show filter box"}</span>


        {isShown && (
            <div id="filterBox" className="filterBox">
                <div className='itemsContainer'>
    
                    
                    <label>Organization</label>
                    <select name="orgName" onChange={handleChange}>
                        {userRows.map(item=>(
                        <option key={item.id} value={item.orgName}>
                            {item.orgName}
                        </option>
                  ))}
                </select>
    
                    <label>Username</label>
                        <input placeholder='User' name="username" value={username} onChange={handleChange}/>
    
                    <label>Email</label>
                        <input placeholder='Email' name="email" value={email} onChange={handleChange}/>
                    
                    <label>Date</label>
                        <input type="date" placeholder='Email' name="date" value={date} onChange={handleChange}/>
    
                    <label>Phone Number</label>
                        <input placeholder='Phone Number' name="phone" value={phone} onChange={handleChange}/>
                    
                    <label>Status</label>
                         <select className='selectStatus' name="phone">
                            <option value="">Select</option>
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Blacklisted</option>
                            <option>Pending</option>
                         </select>
    
                    <div className="boxBottom">
                        <span className='reset' onClick={handleReset}>Reset</span>
                        <span className='filter' onClick={handleSubmit}>Filter</span>
                    </div>
                
                </div>
            </div>
            )}
            
        </div>
      )
    }
    
    export default User
            
        
        