import { Route, Routes } from "react-router";
import VisualHome from "../pages/Experiences/Visual/Home";
import VisualMateria from "../pages/Experiences/Visual/Materia";
import VisualContentMenu from "../pages/Experiences/Visual/ContentMenu";
import VisualResume from "../pages/Experiences/Visual/Resume";
import VisualExtras from "../pages/Experiences/Visual/Extras";
import VisualQuestions from "../pages/Experiences/Visual/Questions";
import ExperienceLayout from "../pages/Experiences/ExperienceLayout";
import ExperienceVisualLayout from "../pages/Experiences/ExperienceVisualLayout";

export default function VisualRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<ExperienceVisualLayout />}>
        <Route path="" element={<VisualHome />} />
        <Route path="materias/:materia/conteudos" element={<VisualMateria />} />
        <Route path="materias/:materia/conteudos/:conteudo" element={<VisualContentMenu />} />
        <Route path="materias/:materia/conteudos/:conteudo/resumo" element={<VisualResume />} />
        <Route path="materias/:materia/conteudos/:conteudo/extras" element={<VisualExtras />} />
        <Route path="materias/:materia/conteudos/:conteudo/questoes" element={<VisualQuestions />} />
      </Route>

    </Routes>
  );
}