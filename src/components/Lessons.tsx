import LessonCard from "./LessonCard";

interface LessonsProps {
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

export default function Lessons({ module, materia }: LessonsProps) {
    return (
        <div className="mt-20 grid grid-cols-2 place-items-center">
            {module.lessons.map(lesson => (
                <LessonCard key={lesson.slug} title={lesson.title} aula={lesson.slug} modulo={module.slug} materia={materia} />
            ))}
        </div>
    )
}