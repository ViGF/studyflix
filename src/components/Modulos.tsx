import { ChevronRight } from "../assets/Icons";
import Modulo from "./Modulo";

interface MainDisciplinaProps {
    materia: string
    modulos: [
        {
            title: string
            priority: number
            number: number
            slug: string
        }
    ]
}

export default function Modulos({ modulos, materia }: MainDisciplinaProps) {
    return (
        <div className="pl-24 flex flex-col justify-center bg-black">
            <div className="pt-14 flex items-center flex-row gap-1">
                <p className="text-2xl font-bold">Módulos disponíveis</p>
                <ChevronRight />
            </div>
            <div className="grid grid-cols-4 auto-rows-auto">
                {modulos.map((modulo) => (
                    <Modulo
                        key={modulo.slug}
                        title={modulo.title}
                        priority={modulo.priority}
                        number={modulo.number}
                        slug={modulo.slug}
                        materia={materia}
                    />
                ))}
            </div>
        </div>
    )
}