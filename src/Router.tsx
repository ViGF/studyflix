import { Route, Routes } from "react-router-dom"
import Disciplina from "./pages/Disciplina"
import Lesson from "./pages/Lesson"
import Main from "./pages/Main"

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:materia" element={<Disciplina />} />
            <Route path="/:materia/:modulo" element={<Lesson />} />
            <Route path="/:materia/:modulo/:aula" element={<Lesson />} />
        </Routes>
    )   
}