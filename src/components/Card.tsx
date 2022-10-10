import { Link } from "react-router-dom"
import { SLetter } from "../assets/Icons"

interface CardProps {
    title: string
    slug: string
}

export default function Card({ title, slug }: CardProps) {
    return (
        <Link to={`/${slug}`}>
            <div className="bg-main bg-cover bg-opacity-50 rounded-xl w-80 h-48 cursor-pointer hover:scale-105 transition-transform">
                <div className="w-full h-full backdrop-brightness-50 p-5 rounded-xl">
                    <SLetter />
                    <p className="font-bold text-4xl text-center mt-7">{title}</p>
                </div>
            </div>
        </Link>
    )
}