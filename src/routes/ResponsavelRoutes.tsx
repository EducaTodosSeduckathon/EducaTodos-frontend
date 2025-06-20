import { Route, Routes } from "react-router";
import ResponsavelHome from "../pages/Experiences/Responsavel/Home";
import ExperienceVisualLayout from "../pages/Experiences/ExperienceVisualLayout";

export default function VisualRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<ExperienceVisualLayout />}>
        <Route path="" element={<ResponsavelHome />} />
      </Route>

    </Routes>
  );
}