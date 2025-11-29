import { Link, Route, Routes } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { LiaComments } from "react-icons/lia";

export default function AdminPage(){
    return(
        <div className="w-full h-full max-h-full bg-accent flex">
            <div className="w-[300px] h-full bg-accent">
                <div className="w-full h-[100px]  text-primary flex items-center">
                    <img src="/logo.png" className="h-full "/>
                    <h1 className="text-2xl">Admin</h1>
                </div>
                    <div className="w-full h-[400px] text-white text-2xl flex flex-col">
                    <Link to="/admin"className="w-full h-[50px] flex item-center gap-[10px]"><LuClipboardList />Orders</Link>
                    <Link to="/admin/products"className="w-full flex h-[50px] item-center gap-[10px]"><LuBoxes />Products</Link>
                    <Link to="/adimin/users"className="w-full flex h-[50px] item-center gap-[10px]"><FiUsers />Users</Link>
                    <Link to="/admin/reviews"className="w-full flex h-[50px] item-center gap-[10px]"><LiaComments />Reviews</Link>

                </div>


            </div>

                 <div className="w-[calc(100%-300px)] h-full max-h-full bg-primary  border-6 border-accent rounded-3xl text-3xl">
                    <div className="w-full h-full max-h-full  overflow-y-scroll">
                        <Routes path="/">
                            <Route path="/" element={<h1>Orders</h1>}></Route>
                            <Route path="/products" element={<h1>Products</h1>}></Route>
                            <Route path="/users" element={<h1>Users</h1>}></Route>
                            <Route path="/reveiws" element={<h1>Reviews</h1>}></Route>
                        </Routes>
                    </div>

                </div>

    

        </div>
    )
}