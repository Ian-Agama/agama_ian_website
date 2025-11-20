import { useNavigate } from "react-router-dom"

export default function Dashboard() {

  const navigate = useNavigate();

  function handleLogout(){
    navigate("/login");
  }
    return (
        <>
         <div>
            <h1>Welcome Back Ian</h1>
            <button type="button" onClick={handleLogout}>Logout</button>
          </div> 
        </>
    )
}
