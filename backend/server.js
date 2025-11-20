import cors from "cors";
import express from "express";

//import bcrypt from "bcryptjs";

//database importation

const app = express();
const PORT  = 8000;
app.use(cors({
    origin : "http://localhost:5173",
    methods: ["GET","POST","PUT"]
}));
app.use(express.json()); 


//to be repaced with the database entry 
const fakeUser = { email: "iana12@gmail.com",password : "wierwe12"}

app.get("/",(req, res) => {
  console.log("ian is the best")
  res.send("ian is great ")
})
app.post("/login", async (req,res) => {
    const {email, password} = req.body; 
    if(email !== fakeUser.email){
        return res.status(404).json("Email not found")
    }if(password !== fakeUser.password){
        return res.status(404).json("Password is incorrct or invalid")
    }
    return res.status(200).json("youre fully logged in!")
  
})


app.put("/login/identity", (req ,res)=>{
    const { email, password} = req.body; 
    if(email === fakeUser.email){
        return res.status(200).json("now sending message")
        
    }
    return res.status(404).json("wrong eamil")
})
app.listen(PORT , ()=> { console.log(`app listening on ${PORT}`)})



/**
 * import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Example request — customize URL
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      setSuccess("Login successful!");
      console.log("Server response:", response.data);

    } catch (err) {
      console.log(err);
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Login</h1>
      <h2>Welcome to the login screen</h2>

      <form onSubmit={handleSubmit}>

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Submit"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

 */