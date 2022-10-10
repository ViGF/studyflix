import Lessons from "./Lessons";

interface FooterLesson {
    materia: string
    module: {
        slug: string
        lessons: [
            {
                title: string
                slug: string
            }
        ]
    }
}

export default function FooterLesson({ module, materia }: FooterLesson) {
    return (
        <div className="bg-black">
            <div className="flex flex-row justify-around text-2xl">
                <a href="" className="border-t-4 border-t-[#E41C1C] font-bold w-full py-2 px-10 text-center">Aulas</a>
                <a href="" className="w-full py-2 px-10 text-center">Resumos</a>
                <a href="" className="w-full py-2 px-10 text-center">Questões</a>
                <a href="" className="w-full py-2 px-10 text-center">Pontuação</a>
            </div>
            <div>
                <Lessons module={module} materia={materia} />
            </div>
        </div>
    )
}