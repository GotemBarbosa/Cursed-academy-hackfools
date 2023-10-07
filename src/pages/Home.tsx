import { Checkbox } from "@mui/material";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import img from "../assets/banner.jpeg";
import bruxaria from "../assets/cursos/bruxaria.jpeg"
import demonologia from "../assets/cursos/demonologia.jpeg"
import protec from "../assets/cursos/protecao paranormal.jpeg"
import tecnicaAss from "../assets/cursos/tecAss.jpeg"
import Footer from "../components/footer";

export default function Home(){
    return(
        <div className="bg-black">
            <Header/>
            <div className="">
                <img src={img}/>
            </div>
            <div className="w-90% mx-16 bg-neutral-800 rounded-md mt-5 px-10 py-3  my-10">
                <p className="text-xl font-bold">Exercicios Diarios</p>
                <div className="w-full">
                    <div className="flex w-full flex-row items-center">
                        <Checkbox
                            checked={false}
                            onChange={()=>{}}
                            inputProps={{ 'aria-label': 'controlled' }}
                            className="w-10"
                        />
                        <div>
                            Invoque um demonio
                        </div>
                    </div> 
                    <div className="flex w-full flex-row items-center">
                        <Checkbox
                            checked={false}
                            defaultChecked
                            onChange={()=>{}}
                            inputProps={{ 'aria-label': 'controlled' }}
                            className="w-10"
                        />
                        <div>
                            Enterre um corpo
                        </div>
                    </div> 
                    <div className="flex w-full flex-row items-center">
                        <Checkbox
                            checked={false}
                            onChange={()=>{}}
                            inputProps={{ 'aria-label': 'controlled' }}
                            className="w-10"
                        />
                        <div>
                            Ganhe uma partida de xadrez contra um poltergeist
                        </div>
                    </div> 
                    <div className="flex w-full flex-row items-center">
                        <Checkbox
                            checked={false}
                            onChange={()=>{}}
                            inputProps={{ 'aria-label': 'controlled' }}
                            className="w-10"
                        />
                        <div>
                            Queime uma biblia
                        </div>
                    </div> 
                </div>
            </div>
            <p className="font-bold text-3xl ml-16"> Cursos </p>

            <div className="flex justify-around my-5 m-40">
                <NavLink
                    to="/bruxaria"
                    className=""
                > 
                   <img src={bruxaria} className="w-40 rounded-md"/>
                </NavLink>
                <NavLink
                    to="/demonologia"
                    className=""
                > 
                    <img src={demonologia} className="w-40 rounded-md"/>
                </NavLink>
                <NavLink
                    to="/protecao"
                    className=""
                > 
                    <img src={protec} className="w-40 rounded-md"/>
                </NavLink>
                <NavLink
                    to="/assassinato"
                    className=""
                >
                    <img src={tecnicaAss} className="w-40 rounded-md"/>
                </NavLink>
            </div>
            <Footer/>
        </div>
    )
}