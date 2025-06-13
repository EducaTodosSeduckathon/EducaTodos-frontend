import { BrowserRouter as Router, Routes, Route } from "react-router";
import NotFound from "./pages/OtherPage/NotFound";
import { ScrollToTop } from "./components/common/ScrollToTop";
// import Home from "./pages/Dashboard/Home";
import Home from "./pages/Auth/Home";
import AuditivaHome from "./pages/Experiences/Auditiva/Home";
import AuditivaMateria from "./pages/Experiences/Auditiva/Materia";
import AuditivaContentMenu from "./pages/Experiences/Auditiva/ContentMenu";
import AuditivaResume from "./pages/Experiences/Auditiva/Resume";
import AuditivaExtras from "./pages/Experiences/Auditiva/Extras";
import AuditivaQuestions from "./pages/Experiences/Auditiva/Questions";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthProvider";
import AuthLayout from "./layout/AuthLayout";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import AuditivaRoutes from "./routes/AuditivaRoutes";
import VisualRoutes from "./routes/VisualRoutes";

export default function App() {


  const { accessibilityType, authenticated } = useContext(AuthContext);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {!authenticated ? 
            <Route element={<AuthLayout />}>
              <Route index path="" element={<Home />} />
            </Route>
            :
            <>
              {accessibilityType === "auditiva" && <Route index path="/*" element={<AuditivaRoutes />}/>}
              {accessibilityType === "visual" && <Route index path="/*" element={<VisualRoutes />}/>}
            </>
          }

          {/* {accessibilityType === "visual" && <VisualRoutes />} */}
          
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
