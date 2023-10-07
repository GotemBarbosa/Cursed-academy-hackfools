import React from "react";
import Aluno from "../components/Aluno";
import Header from "../components/Header";

export default function Ranking(){
    return(
        <div>
            <Header/>
            <p className="font-inter text-2xl font-bold ml-5 mt-2"> Ranking dos melhores alunos </p>
            <p className="ml-6">Classificacao dos melhores alunos do curso</p>
            <div className="flex flex-col gap-5 mt-4 w-[50%]">
                <Aluno number={1} name="Grugger" src="https://i.pinimg.com/564x/c8/7a/32/c87a323d1ec781e1d73698d917ab61ca.jpg" pt={1000} />
                <Aluno number={2} name="Freira" src="https://www.rbsdirect.com.br/imagesrc/24674338.jpg?w=1024&h=1024&a=c" pt={950} />
                <Aluno number={3} name="Panico" src="https://canalcienciascriminais.com.br/wp-content/uploads/2023/10/canalcienciascriminais.com.br-de-arrepiar-documentario-sobre-assassino-que-inspirou-a-franquia-panico-chegara-ao-brasil-panico.jpg" pt={800} />
                <Aluno number={4} name="Chucky" src="https://www.gerarmemes.com.br/uploads/galeria/meme-259-brinquedo-assassino-chuck-gerador-de-memes.jpg" pt={790} />
                <Aluno number={5} name="Samara" src="https://img.ibxk.com.br/2021/11/09/09193239117123.jpg?ims=328x" pt={750} />
            </div>

        </div>
    )
}