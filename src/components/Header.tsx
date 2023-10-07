import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div className="w-full h-20 bg-black flex justify-between items-center px-5 font-inter">
            <div className="flex gap-2">
                <NavLink
                    to="/"
                    className="p-2 border rounded-md h-10 cursor-pointer font-bold items-center justify-center"
                > 
                    Home
                </NavLink>
                <NavLink
                    to="/ranking"
                    className="p-2 border rounded-md h-10 cursor-pointer font-bold items-center justify-center"
                > 
                    Ranking
                </NavLink>
            </div>
            <div className="flex gap-2 cursor-pointer items-center hover:bg-white/10 rounded px-2 py-1">
                <p className="font-inter font-bold">
                    Michael Myers
                </p>
                    <img className="w-10 h-10 object-cover rounded-full" src="https://i.pinimg.com/564x/c8/7a/32/c87a323d1ec781e1d73698d917ab61ca.jpg"/>
                
            </div>
        </div>
    )
}