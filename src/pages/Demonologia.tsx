import AulaBanner from "../components/AulaBanner3";
import Header from "../components/Header";

import img1 from "../assets/Demonologia/Invoc.jpeg"
import img2 from "../assets/Demonologia/bode.jpeg"
import img3 from "../assets/Demonologia/xadrez.jpeg"
import img4 from "../assets/Demonologia/pentagrama.jpeg"
import img5 from "../assets/Demonologia/pacto.jpeg"


interface obj {
    name: string;
    imagem: string;
}

const aulas1 = [
    {
        name:"Invocando seu primeiro demônio",
        imagem:img1,
    },
    {
        name:"Como sacrificar um bode",
        imagem:img2,
    },
    {
        name:"Como jogar xadrez com ouija",
        imagem:img3,
    },
    {
        name:"Como fazer um pentagrama rapido e facil",
        imagem:img4,
    },
    {
        name:"Como fazer um bom pacto",
        imagem:img5,
    }

]

export default function Demonologia(){
    return(
        <div className="">
            <Header/>
            <p className="text-2xl ml-10 my-5 font-bold">Demonologia</p>
            {
                aulas1.map((aula: obj) => {
                    return (
                        <AulaBanner name={aula.name} src={aula.imagem}/>
                    );
                })
            }
            
        </div>
    )
}