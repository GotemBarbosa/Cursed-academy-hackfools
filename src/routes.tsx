
import { Route, BrowserRouter, Routes} from "react-router-dom";

import Home from "./pages/Home"
import Ranking from "./pages/Ranking"
import Assassinato from "./pages/Assassinato"
import Bruxaria from "./pages/Bruxaria"
import Demonologia from "./pages/Demonologia"
import Protecao from "./pages/Protecao"


const RoutesPage = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/ranking" element={<Ranking/>}/>
                <Route path="/bruxaria" element={<Bruxaria/>}/>
                <Route path="/demonologia" element={<Demonologia/>}/>
                <Route path="/assassinato" element={<Assassinato/>}/>
                <Route path="/protecao" element={<Protecao/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPage;