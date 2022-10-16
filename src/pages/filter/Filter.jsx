import React from 'react'
import './filter.scss'

//User with filter

const Filter = () => {

    const btn= document.getElementById("filterButton");
    const targetDiv = document.getElementById("filterBox");
    
    btn.onclick = function() {
        if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
        } else {
            targetDiv.style.display = "block";
        }

        if (targetDiv.style.display === "block") {
            btn.textContent = "Remove filter box"
        } else {
            btn.textContent = "Filter box"
        }

    };
    
  return (
    <div className="filter">
        <span id='filterButton' className='filterButton'>Filter</span>
        
        <div id="filterBox" className="filterBox">
            <div className='itemsContainer'>

                
                <label>Organization</label>
                <select>
                    <option>Select</option>
                </select>

                <label>Username</label>
                    <input placeholder='User'/>

                <label>Email</label>
                    <input placeholder='Email'/>
                
                <label>Date</label>
                    <input type="date" placeholder='Email'/>

                <label>Phone Number</label>
                    <input placeholder='Phone Number'/>
                
                <label>Status</label>
                     <select className='selectStatus'>
                        <option>Select</option>
                     </select>

                <div className="boxBottom">
                    <span className='reset'>Reset</span>
                    <span className='filter'>Filter</span>
                </div>
            
            </div>
        </div>
        
    </div>
  )
}

export default Filter