import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage(){
    const[email, setEmail] = useState("");
    const[password, setPasword] = useState("");

    async function Login(){
        console.log("Login button clicked");
        console.log("Email:",email);
        console.log("Password:",password);

        try{
            const res = await axios.post(import.meta.env.VITE_BACKEND_URL+"/user/login",{
                email : email,
                password : password,
            })
            
            console.log(res)

            alert("Login succesfull! Welcome back");

        }catch(err){
            alert("Login failed!");
            console.log("Error during login");
            console.log(err);
        }
    }

    return(
        
        <div className="w-full h-screen bg-[url('/home.jpg')] bg-center bg-cover bg-no-repeat flex">
            <div className="w-[50%] h-full flex justify-center items-center flex-col p-[50px]">
                <img
                     src="/logo.png" 
                     alt="Logo" 
                     className=" w-[200px] w-[200px] mb-[20px] object-cover"
                />
                <h1 className="text-[40px] text-blue-600 text-shadow-2xs font-bold italic">
                    Build your
                </h1>
                <p className="text-[40px] text-blue-600 font-bold italic">
                    dream computer
                </p>

            </div>
            <div className="w-[50%] h-full flex justify-center items-center p-[30px]">

                <div className="w-[400px] h-[500px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center">
                    <h1 className="text-[40px] font-bold mb-[20px] text-secondary text-shadow-white">
                        Login
                    </h1>

                    <input 
                        onChange={
                            (e)=> {
                                setEmail(e.target.value)
                            }
                        }
                        type="email" 
                        placeholder="your email" 
                        className="w-[350px] h-[50px] mb-[20px] text-secondary rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-white"
                    />

                    <input
                        onChange={
                            (e)=> {
                                setPasword(e.target.value)
                            }
                        } 
                        type="password" 
                        placeholder="your password" 
                        className="w-[350px] h-[50px]  text-secondary rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-white"
                    />
                    <p className="w-[350px] h-[30px] mb-[20px] text-white italic">
                        Forgot your password?
                        <Link to="/forgot.password" className="text-amber-600 not-italic">
                            Rest here
                        </Link>
                    </p>

                    <button onClick={Login} className="w-[350px] h-[50px] bg-accent text-white font-bold text-[20px] rounded-lg border-[2px] border-accent hover:bg-transparent hover:text-accent">
                        Login
                    </button>

                     <p className="w-[350px] h-[30px] text-white italic">
                        Don't have an account?
                        <Link to="/register" className="text-amber-600 not-italic">
                            Register here
                        </Link>
                    </p>
                    
                </div>

            </div>

        </div>
    )
}