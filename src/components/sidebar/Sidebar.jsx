import "./sidebar.scss"
import briefcase from "../../assets/briefcase.svg"
import dropdown2 from "../../assets/dropdown2.svg"
import dashboard from "../../assets/dashboard.svg"
import users from "../../assets/users.svg"
import threeusers from "../../assets/threeusers.svg"
import moneysack1 from "../../assets/moneysack1.svg"
import handshake from "../../assets/handshake.svg"
import piggybank from "../../assets/piggybank.svg"
import moneyhand from "../../assets/moneyhand.svg"
import usercheck from "../../assets/usercheck.svg"
import userbad from "../../assets/userbad.svg"
import briefcasesec from "../../assets/briefcasesec.svg"
import handmoneysec from "../../assets/handmoneysec.svg"
import bank from "../../assets/bank.svg"
import coins from "../../assets/coins.svg"
import directions from "../../assets/directions.svg"
import spinner from "../../assets/spinner.svg"
import usersettings from "../../assets/usersettings.svg"
import scroll from "../../assets/scroll.svg"
import chartbar from "../../assets/chartbar.svg"
import threehorizontal from "../../assets/threehorizontal.svg"
import badgepercent from "../../assets/badgepercent.svg"
import note from "../../assets/note.svg"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="center">
        
          <div className="sideBarTop">
            <img src={briefcase} alt="briefcase" className="briefcase" />
            <span className="sidebarSwitch">Switch Organization</span>
            <img src={dropdown2} alt="dropdown2" className="dropdown2" />
          </div>
          
            <div className="dash">
              <img src={dashboard} alt="dashboard" />
              <span className="dashTitle">Dashboard</span>
            </div>
          
          <p className="subHeading">CUSTOMERS</p>

          <div className="item">
            <img src={users} alt="users" />
            <span className="userTitle">Users</span>
          </div>

          <div className="item">
            <img src={threeusers} alt="guarantors" />
            <span>Guarantors</span>
          </div>

          <div className="item">
            <img src={moneysack1} alt="loans" />
            <span>Loans</span>
          </div>
         
          <div className="item">
            <img src={handshake} alt="decision models" />
            <span>Decision Models</span>
          </div>

          <div className="item">
            <img src={piggybank} alt="savings" />
            <span>Savings</span>
          </div>

          <div className="item">
            <img src={moneyhand} alt="Loan Requests" />
            <span>Loan Requests</span>
          </div>

          <div className="item">
            <img src={usercheck} alt="Whitelist" />
            <span>Whitelist</span>
          </div>

          <div className="item">
            <div className="downSpacing">
            <img src={userbad} alt="Karma" />
            <span>Karma</span>
            </div>
          </div>

          <p>BUSINESSES</p>

          <div className="item">
            <img src={briefcasesec} alt="Organization" />
            <span>Organization</span>
          </div>

          <div className="item">
            <img src={handmoneysec} alt="Loan Products" />
            <span>Loan Products</span>
          </div>

          <div className="item">
            <img src={bank} alt="Savings Products" />
            <span>Savings Products</span>
          </div>

          <div className="item">
            <img src={coins} alt="Fees and Charges" />
            <span>Fees and Charges</span>
          </div>
          
          <div className="item">
            <img src={directions} alt="Transactions" />
            <span>Transactions</span>
          </div>
          
          <div className="item">
            <img src={spinner} alt="Services" />
            <span>Services</span>
          </div>
          
          <div className="item">
            <img src={usersettings} alt="Service Account" />
            <span>Service Account</span>
          </div>
          
          <div className="item">
            <img src={scroll} alt="Settlements" />
            <span>Settlements</span>
          </div>

          <div className="item">
            <div className="downSpacing">
            <img src={chartbar} alt="Reports" />
            <span>Reports</span>
            </div>
          </div>

          <p>SETTINGS</p>

          <div className="item">
            <img src={threehorizontal} alt="Preferences" />
            <span>Preferences</span>
          </div>

          <div className="item">
            <img src={badgepercent} alt="Fees and Pricing" />
            <span>Fees and Pricing</span>
          </div>

          <div className="item">
            <img src={note} alt="Audit Logs" />
            <span>Audit Logs</span>
          </div>
          
      </div>
    
    </div>
  )
}

export default Sidebar