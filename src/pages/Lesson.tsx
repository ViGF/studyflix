import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import FooterLesson from "../components/FooterLesson";
import Header from "../components/Header";
import Player from "../components/Player";
import { GET_LESSONS_BY_SLUG } from "../graphql/queries/get-lesson-by-slug-query";

export default function Lesson() {
    const { modulo, aula, materia } = useParams<{ aula: string, modulo: string, materia: string}>()

    const { loading, data } = useQuery(GET_LESSONS_BY_SLUG, {
        variables: {
            slug: modulo
        }
    })

    if (loading) {
        return (
            <div>
                <Header />
                <div className="flex flex-1 justify-center items-center">
                    <h1>Carregando...</h1>
                </div>
            </div>
        )
    } else {
        const lesson = aula ? data.module.lessons.filter((lesson: { slug: string }) => lesson.slug == aula) : null
        return (
            <div>
                <Header />
                <Player lesson={lesson ? lesson[0] : data.module.lessons[0]} module={data.module} />
                <FooterLesson module={data.module} materia={materia ?? ''} />
            </div>
        )
    }
}