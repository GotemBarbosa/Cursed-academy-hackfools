interface classType{
    number:number;
    name:string;
    src:string,
    pt?: number;
}

export default function Aluno(props:classType){
    return(
        <div className="w-[95%] flex items-center justify-between gap-2 ml-4 border border-stone-600  rounded-md px-2 py-2 ">
            <div className="flex items-center gap-2">
                <img className="w-10 h-10 object-cover rounded-full" src={props.src}/>
                <p>
                    {props.number}°
                </p>
                <p>
                    {props.name}
                </p>
            </div>

            <div>
                <p>{props.pt}pts</p>
            </div>
        </div>
    )
}