import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
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
import ClientLayout from "./layout/AuthLayout";
import AuthLayout from "./layout/AuthLayout";

export default function App2() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<AuthLayout />}>
            <Route index path="" element={<Home />} />
          </Route>

          
          {/* Dashboard Layout */}
          <Route path="admin" element={<AppLayout />}>
            {/* <Route index path="" element={<Home />} /> */}

            {/* Others Page */}
            <Route path="/admin//profile" element={<UserProfiles />} />
            <Route path="/admin//calendar" element={<Calendar />} />
            <Route path="/admin//blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/admin//form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/admin//basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/admin//alerts" element={<Alerts />} />
            <Route path="/admin//avatars" element={<Avatars />} />
            <Route path="/admin//badge" element={<Badges />} />
            <Route path="/admin//buttons" element={<Buttons />} />
            <Route path="/admin//images" element={<Images />} />
            <Route path="/admin//videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/admin//line-chart" element={<LineChart />} />
            <Route path="/admin//bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          {/* <Route path="/login" element={<SignIn />} /> */}

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
