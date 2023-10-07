interface classType{
    name: string;
    src: string;
}

export default function AulaBanner(props:classType){
    return(
        <div className="w-[98%] flex ml-2 p-3 rounded-sm hover:bg-white/10 cursor-pointer">
            
            <img src={props.src} className="w-40 h-auto rounded-sm"/>
            
            <div className="flex justify-center flex-col ml-4">
                <p className="capitalize text-red-500 font-bold">Demonologia</p>
                <p>{props.name}</p>
            </div>
        </div>
    )
}