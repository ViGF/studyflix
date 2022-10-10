import { Info, Play } from "../assets/Icons";

interface MainDisciplinaProps {
    materia: string
}

export default function MainDisciplina({ materia }: MainDisciplinaProps) {
    return (
        <div className="h-screen bg-main bg-cover -z-10">
            <div className="flex flex-col justify-center h-full pl-36 backdrop-brightness-50">
                <div>
                    <h1 className="font-bebas text-9xl drop-shadow-text bg-clip-text uppercase">{materia}</h1>
                    <p className="text-3xl leading-10 max-w-2xl">
                        Aqui você terá conteúdo de qualidade sobre a disciplina de
                        <span className="font-bold lowercase"> {materia} </span>
                        para o ENEM.
                    </p>
                </div>
                <div className="flex flex-row gap-7 mt-5">
                    <button className={`
                        flex flex-row font-bold bg-white
                        text-black p-3 rounded-[4px] gap-1 hover:brightness-[0.68]
                    `}>
                        <Play />
                        Começar!
                    </button>
                    <button className={`
                        flex flex-row font-bold rounded-[4px]
                        p-3 gap-1 bg-white/50 text-white hover:brightness-[0.68]
                    `}>
                        <Info />
                        Entenda a lista completa de conteúdos abordados.
                    </button>
                </div>
            </div>
        </div>
    )
}