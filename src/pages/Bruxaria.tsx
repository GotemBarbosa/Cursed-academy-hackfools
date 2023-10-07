import AulaBanner from "../components/AulaBanner2";
import Header from "../components/Header";

interface obj {
    name: string;
    imagem: string;
}

import img1 from "../assets/Bruxaria/reviver.jpeg";
import img2 from "../assets/Bruxaria/vudu.jpeg";
import img3 from "../assets/Bruxaria/caldeirao.jpeg";
import img4 from "../assets/Bruxaria/horta.jpeg";
import img5 from "../assets/Bruxaria/pocoes.jpeg";


const aulas3: obj[] = [
    {
        name:"Como reviver um morto",
        imagem: img1,
    },
    {
        name:"Seu primeiro boneco Vudu caseiro",
        imagem: img2,
    },
    {
        name:"Como escolher seu primeiro caldeirao",
        imagem: img3,
    },
    {
        name:"Como cultivar uma horta",
        imagem: img4,
    },
    {
        name:"Como fazer pocoes sem redstone",
        imagem: img5,
    }

]

export default function Bruxaria(){
    return(
        <div className="">
            <Header/>
            <p className="text-2xl ml-10 my-5 font-bold">Bruxaria</p>

            {
                aulas3.map((aula: obj) => {
                    return (
                        <AulaBanner name={aula.name} src={aula.imagem}/>
                    );
                })
            }
            
        </div>
    )
}