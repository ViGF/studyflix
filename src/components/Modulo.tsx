import { Link } from "react-router-dom";
import { Add, Like, PlayModule } from "../assets/Icons";
import InfoModule from "./InfoModule";

interface ModuloProps {
    title: string
    priority: number
    number: number
    materia: string
    slug: string
}

export default function Modulo({ title, priority, number, materia, slug }: ModuloProps) {
    return (
        <Link to={`/${materia}/${slug}/`}>
            <div className="w-80 my-6 hover:scale-105 transition-transform">
                <img src="./module.png" alt="" className="brightness-50 rounded-t-lg hover:brightness-95" />
                <div className="flex flex-col justify-center items-center gap-4 bg-[#141414] py-4 rounded-lg">
                    <div className="flex flex-row gap-2">
                        <PlayModule />
                        <Add />
                        <Like />
                    </div>
                    <InfoModule title={title} priority={priority} number={number} />
                </div>
            </div>
        </Link>
    )
}