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
import IntelectualRoutes from "./routes/IntelectualRoutes";
import MotoraRoutes from "./routes/MotoraRoutes";
import AppLayout from "./layout/AppLayout";
import UserProfiles from "./pages/UserProfiles";
import Disciplinas from "./pages/Tables/Disciplinas";

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
              {accessibilityType === "motora" && <Route index path="/*" element={<MotoraRoutes />}/>}
              {accessibilityType === "intelectual" && <Route index path="/*" element={<IntelectualRoutes />}/>}

              <Route path="admin" element={<AppLayout />}>
                {/* <Route index path="" element={<Home />} /> */}

                {/* Others Page */}
                <Route path="/admin/profile" element={<UserProfiles />} />
                {/* <Route path="/admin//calendar" element={<Calendar />} />
                <Route path="/admin//blank" element={<Blank />} /> */}

                {/* Forms */}
                {/* <Route path="/admin//form-elements" element={<FormElements />} />

                {/* Tables */}
                <Route path="/admin/disciplinas" element={<Disciplinas />} />

                {/* Ui Elements */}
                {/* <Route path="/admin//alerts" element={<Alerts />} />
                <Route path="/admin//avatars" element={<Avatars />} />
                <Route path="/admin//badge" element={<Badges />} />
                <Route path="/admin//buttons" element={<Buttons />} />
                <Route path="/admin//images" element={<Images />} />
                <Route path="/admin//videos" element={<Videos />} /> */}

                {/* Charts */}
                {/* <Route path="/admin//line-chart" element={<LineChart />} />
                <Route path="/admin//bar-chart" element={<BarChart />} /> */}
              </Route>
            </>
          }
          
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
