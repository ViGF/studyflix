import { useQuery } from "@apollo/client";
import { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import MainDisciplina from "../components/MainDisciplina";
import Modulos from "../components/Modulos";
import { GET_MODULES_BY_SLUG_QUERY } from "../graphql/queries/get-modules-by-slug-query";

export default function Disciplina() {
    const { materia } = useParams<{ materia: string }>()

    const { loading, data } = useQuery(GET_MODULES_BY_SLUG_QUERY, {
        variables: {
            slug: materia
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
        return (
            <div>
                <Header />
                <MainDisciplina materia={data.subjects[0].title ?? ''} />
                <Modulos modulos={data.subjects[0].modules} materia={materia ?? ''} />
            </div>
        )
    }
}