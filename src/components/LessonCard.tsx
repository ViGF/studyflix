import { Link } from "react-router-dom";
import { Polygon } from "../assets/Icons";

interface LessonCardProps {
    title: string
    aula: string
    modulo: string
    materia: string
}

export default function LessonCard({ title, aula, modulo, materia }: LessonCardProps) {
    return (
        <div className="flex flex-row w-fit items-center bg-[#202020] mb-5">
            <img src="../../module.png" alt="" className="brightness-50 hover:brightness-95" width={185} />
            <p className="ml-5 mr-14 brightness-75 min-w-fit">{title}</p>
            <Link to={`/${materia}/${modulo}/${aula}`} >
                <button className="flex flex-row items-center gap-3 text-black bg-white rounded-md text-base py-2 px-4 mr-6 hover:scale-110 transition-transform">
                    <Polygon />
                    Play
                </button>
            </Link>
        </div>
    )
}