import { Link } from "react-router-dom";
export const Navbar = () => {   
    return (
      
        <div style={{
    display: "flex",
    justifyContent: "space-between" ,
    alignItems: "center" ,
    padding: "10px 20px" ,
    backgroundColor: "blue" ,
    color: "#fff" ,
    boxShadow: "0 0 10px #fff" ,
    fontSize: "24px" ,
    fontWeight: "bold" ,
    fontfamily: "Arial, sans-serif" ,
  }}>
        <h2>fitconnect ai   </h2>
            <div style={{
    display: "flex",
    justifyContent: "center" ,
    gap: "20px" ,
    color: "#fff" ,
    fontcolor: "red" ,
  } }> <div
  style={{
    display: "flex",
    gap: "40px",
  }}
>
  <Link to="/">Home</Link>
  <Link to="/login">Login</Link>
  <Link to="/register">Register</Link>
</div></div>
       
        </div>
        
        
    );
};
