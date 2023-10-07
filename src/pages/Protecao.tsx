import AulaBanner from "../components/AulaBanner4";
import Header from "../components/Header";

interface obj {
    name: string;
    imagem: string;
}


import img1 from "../assets/Protecao/latim.jpeg";
import img2 from "../assets/Protecao/sal.jpeg";
import img3 from "../assets/Protecao/exorcismo.jpeg";
import img4 from "../assets/Protecao/exorcismo2.jpeg";
import img5 from "../assets/Protecao/aguabenta.jpeg";

const aulas2: obj[] = [
    {
        name:"Oracoes em latim para afastar o demonio",
        imagem:img1,
    },
    {
        name:"Como fazer um circulo de sal rapido e facil",
        imagem:img2,
    },
    {
        name:"Exorcismo basico",
        imagem:img3,
    },
    {
        name:"Exorcisco avancado I e II",
        imagem:img4,
    },
    {
        name:"Como fazer agua benta (sem padre)",
        imagem:img5,
    }

]

export default function Protecao(){
    return(
        <div className="">
            <Header/>
            <p className="text-2xl ml-10 my-5 font-bold">Protecao Paranormal</p>
            {
                aulas2.map((aula: obj) => {
                    return (
                        <AulaBanner name={aula.name} src={aula.imagem}/>
                    );
                })
            }
            
        </div>
    )
}