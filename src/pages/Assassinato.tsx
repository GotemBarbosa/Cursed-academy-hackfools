import AulaBanner from "../components/AulaBanner";

interface obj {
    name: string;
    imagem: string;
}

import img1 from "../assets/assassinato/porao.jpeg";
import img2 from "../assets/assassinato/corpo.jpeg";
import img3 from "../assets/assassinato/arma.jpeg";
import img4 from "../assets/assassinato/sangue.jpeg";
import Header from "../components/Header";



const aulas: obj[] = [
    {
        name:"Como prender alguem no seu porao",
        imagem: img1,
    },
    {
        name:"Como esconder um corpo",
        imagem: img2,
    },
    {
        name:"Como apagar digitais de uma arma",
        imagem: img3,
    },
    {
        name:"Como limpar manchas de sangue",
        imagem: img4,
    }

]

export default function Assassinato(){
    return(
        <div className="">
            <Header/>
            <p className="text-2xl ml-10 my-5 font-bold">Tecnica de assassinato</p>
            {
                aulas.map((aula: obj) => {
                    return (
                        <AulaBanner name={aula.name} src={aula.imagem}/>
                    );
                })
            }
            
        </div>
    )
}