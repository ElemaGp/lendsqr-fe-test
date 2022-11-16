import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import "./details.scss"
import backarrow from "../../assets/backarrow.svg"
import usermid from "../../assets/usermid.svg"
import yellowstar from "../../assets/yellowstar.svg"
import whitestar from "../../assets/whitestar.svg"
import { Context } from '../context/Context';



const Details = () => {

/*i stored the user details in localStorage using useContext. Please check the "context" folder in the "components" folder
for the code */

  const {user} = useContext(Context);

  console.log(user);

  return (
    <div className='details'>
      <div className="detailsWrapper">
        
        <div className="bannerTop">
          
          <div className='topDiv'>
            <img src={backarrow} alt="back" />
            <span className='backUsersText'>Back to Users</span>
          </div>
          <span>User Details</span>

          <div className='userActivities'>
            <span>Blacklist User</span>
            <span>Activate User</span>
          </div>

        </div>

        <div className="bannerMiddle">

          <div className="middleWrapper">

            <div className='middleOne'>
              <img src={usermid} alt="usermid" className='middleUserImg' />
              <div className='middleText'>
                <span className='textName'>{user.profile.firstName} {user.profile.lastName}</span>
                <span className='textAccountNum'>{user.accountNumber}</span>
              </div>
            </div>

            <div className="middleTwo">
              <span className='middleTwoText'>User's Tier</span>
              <div className='middleTwoStars'>
                <span><img src={yellowstar} alt="yellowstar" /></span>
                <span><img src={whitestar} alt="whitestar" /></span>
                <span><img src={whitestar} alt="whitestar" /></span>
              </div>
            </div>

            <div className="middleThree">
              <span className='middleAccBalance'>N{user.accountBalance}</span>
              <span className='middleBank'>{user.accountNumber}/Providus Bank</span>
            </div>

        </div>

        <div className='middleLower'>
          <span>General Details</span>
          <span>Documents</span>
          <span>Bank Details</span>
          <span>Loans</span>
          <span>Savings</span>
          <span>App and System</span>
        </div>

        </div>
          

        <div className="bannerBottom">
            
            <div className="eachBottomSectionWrapper">

            <div className="eachItem">
            <span>FULL NAME</span>
            <span>{user.profile.firstName} {user.profile.lastName}</span>
            </div>
            
            <div className="eachItem">
            <span>PHONE NUMBER</span>
            <span>{user.phoneNumber}</span>
            </div>

            <div className="eachItem">
            <span>EMAIL ADDRESS</span>
            <span>{user.email}</span>
            </div>
            
            <div className="eachItem">
            <span>BVN</span>
            <span>{user.profile.bvn}</span>
            </div>
            
            <div className="eachItem">
            <span>GENDER</span>
            <span>{user.profile.gender}</span>
            </div>

            <div className="eachItem">
            <span>MARITAL STATUS</span>
            <span>Single</span>
            </div>
            
            <div className="eachItem">
            <span>CHILDREN</span>
            <span>None</span>
            </div>
            
            <div className="eachItem">
            <span>TYPE OF RESIDENCE</span>
            <span>Parent's Apartment</span>
          </div>

          


          <div>
            
            <div className="eachItem">
            <span>LEVEL OF EDUCATION</span>
            <span>{user.education.level}</span>
            </div>
            
            <div className="eachItem">
            <span>EMPLOYMENT STATUS</span>
            <span>{user.education.employmentStatus}</span>
            </div>
            
            <div className="eachItem">
            <span>SECTOR OF EMPLOYMENT</span>
            <span>{user.education.sector}</span>
            </div>
            
            <div className="eachItem">
            <span>DURATION OF EMPLOYMENT</span>
            <span>{user.education.duration}</span>
            </div>
            
            <div className="eachItem">
            <span>OFFICE EMAIL</span>
            <span>{user.education.officeEmail}</span>
            </div>
            
            <div className="eachItem">
            <span>MONTHLY INCOME</span>
            <span>N{user.education.monthlyIncome[1]} - N{user.education.monthlyIncome[0]}</span>
            </div>

            <div className="eachItem">
            <span>LOAN REPAYMENT</span>
            <span>{user.education.loanRepayment}</span>
            </div>

          </div>


          <div>
            
            
            <div className="eachItem">
            <span>TWITTER</span>
            <span>{user.socials.twitter}</span>
            </div>
            
            <div className="eachItem">
            <span>FACEBOOK</span>
            <span>{user.socials.facebook}</span>
            </div>
            
            <div className="eachItem">
            <span>INSTAGRAM</span>
            <span>{user.socials.instagram}</span>
            </div>

          </div>

          <div>
            
            
            <div className="eachItem">
            <span>FULL NAME</span>
            <span>{user.guarantor.firstName} {user.guarantor.lastName}</span>
            </div>

            <div className="eachItem">
            <span>PHONE NUMBER</span>
            <span>{user.guarantor.phoneNumber}</span>
            </div>
            
            <div className="eachItem">
            <span>EMAIL ADDRESS</span>
            <span>hara@gmail.com</span>
            </div>
            
            <div className="eachItem">
            <span>RELATIONSHIP</span>
            <span>Sister</span>
            </div>
          </div>

          <div>
            
            
            <div className="eachItem">
            <span>FULL NAME</span>
            <span>{user.guarantor.firstName} {user.guarantor.lastName}</span>
            </div>
            
            <div className="eachItem">
            <span>PHONE NUMBER</span>
            <span>{user.guarantor.phoneNumber}</span>
            </div>
            
            <div className="eachItem">
            <span>EMAIL ADDRESS</span>
            <span>hara@gmail.com</span>
            </div>
            
            <div className="eachItem">
            <span>RELATIONSHIP</span>
            <span>Sister</span>
            </div>
          </div>

        </div>
            

        </div>

      </div>
      
    </div>
  )
}

export default Details




          
