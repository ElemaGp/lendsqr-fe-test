import "./widget.scss";
import usernumicon from "../../assets/usernumicon.svg"
import activeusericon from "../../assets/activeusericon.svg"
import userswithloans from "../../assets/userswithloans.svg"
import userswithsavings from "../../assets/userswithsavings.svg"

const Widget = ({ type }) => {
  let data;

  

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        amount: "2,453",
        icon: (
          <img src={usernumicon} alt="users" />
        ),
      };
      break;
    
      case "active":
      data = {
        title: "ACTIVE USERS",
        amount: "2,453",
        icon: (
          <img src={activeusericon} alt="Active users" />
        ),
      };
      break;
      
      case "loans":
      data = {
        title: "USERS WITH LOANS",
        amount: "12,453",
        icon: (
          <img src={userswithloans} alt="Users with loans" />
        ),
      };
      break;
      
      case "savings":
      data = {
        title: "USERS WITH SAVINGS",
        amount: "102,453",
        icon: (
            <img src={userswithsavings}  alt="Users with savings" className="widgetSavings"/>
        ),
      };
      break;
    
      
   
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="widgetContents">
          <div className="icon">{data.icon}</div>
          <div className="title">{data.title}</div>
          <div className="amount">{data.amount}</div>
      </div>
      
    </div>
  );
};

export default Widget;
        
        
