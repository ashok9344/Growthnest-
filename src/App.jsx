import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./layout/Layout";

// ✅ Lazy load all pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Career = lazy(() => import("./pages/Career"));
const ITProject = lazy(() => import("./pages/ITProject"));
const NonITWork = lazy(() => import("./pages/NonITWork"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Events = lazy(() => import("./pages/Events"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const GetinTouch = lazy(() => import("./components/GetinTouch"));
const ApplyJob = lazy(() => import("./components/ApplyJob"));
const Meet = lazy(() => import("./components/Meet"));
const RegisterPage = lazy(() => import("./components/RegisterPage"));
const NotFound = lazy(() => import("./components/NotFound"));

import ScrollToTop from "./components/ScrollToTop";

// Course Platform pages
const Courses = lazy(() => import("./pages/Courses"));
const CourseDetail = lazy(() => import("./pages/CourseDetail"));
const StudentLogin = lazy(() => import("./pages/StudentLogin"));
const StudentDashboard = lazy(() => import("./pages/StudentDashboard"));

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense
        fallback={
          <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{ color: "#179a37" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading GrowthNest...</span>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="it-project" element={<ITProject />} />
            <Route path="service" element={<Service />} />
            <Route path="it-career" element={<Career />} />
            <Route path="career" element={<Career />} />
            <Route path="non-it-work" element={<NonITWork />} />
            <Route path="events" element={<Events />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="getintouch" element={<GetinTouch />} />
            <Route path="courses" element={<Courses />} />
            <Route path="course/:id" element={<CourseDetail />} />
            <Route path="student-login" element={<StudentLogin />} />
            <Route path="student-dashboard" element={<StudentDashboard />} />
            <Route path="student/course/:id" element={<StudentDashboard />} />
            <Route path="applyjob" element={<ApplyJob />} />
            <Route path="meet" element={<Meet />} />
            <Route path="registerpage" element={<RegisterPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="admin" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
