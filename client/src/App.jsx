import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// Import Pages & Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import CoverLetter from "./pages/CoverLetter";
import WebsiteTemplate from "./pages/WebsiteTemplate";
import OrderAResumeService from "./pages/OrderAResumeService";
import JobAlert from "./pages/JobAlert";
import DashNavbar from "./components/Dashboard/DashNavbar";
import DashHome from "./pages/Dashboard/DashHome";
import DashSidebar from "./components/Dashboard/DashSidebar";
import DashTools from "./pages/Dashboard/DashTools";
import WebPageToPDF from "./pages/Dashboard/WebPageToPDF";
import WebPageToImage from "./pages/Dashboard/WebPageToImage";
import WebsiteScreenshots from "./pages/Dashboard/WebsiteScreenshots";
import DashTemplate from "./pages/Dashboard/DashTemplate";
import DashResume from "./pages/Dashboard/DashResume";
import DashCoverLetter from "./pages/Dashboard/DashCoverLetter";
import BlogsPage from "./pages/Dashboard/BlogsPage";
import JobsAlert from "./pages/Dashboard/JobsAlert";
import CreateNewResume from "./pages/Dashboard/CreateNewResume";
import DashFeedback from "./pages/Dashboard/DashFeedback";

import CreateNewCoverLetter from "./pages/Dashboard/CreateNewCoverLetter";

import UserProfile from "./pages/Dashboard/Account/UserProfile";
import EditUserProfile from "./pages/Dashboard/Account/EditUserProfile";
import ChangeUserPassword from "./pages/Dashboard/Account/ChangeUserPassword";
import CLTemplate01 from "./coverLetterTemplates/CLTemplate01";
import EditFinish from "./pages/Dashboard/EditFinish";
import CLTemplate02 from "./coverLetterTemplates/CLTemplate02";
// import CoverPhoto from "./components/Dashboard/CreateResumeForms/CoverPhoto";
// import ResumeTemplate01 from "./resumeTemplates/resumeTemplate01";
import ResumeTemp01 from "./resumeTemplates/resumeTemp01";
import ResumeTemp02 from "./resumeTemplates/resumeTemp02";
import ResumeTemp03 from "./resumeTemplates/resumeTemp03";
import ResumeTemp04 from "./resumeTemplates/resumeTemp04";
import ResumeEditFinish from "./pages/Dashboard/ResumeEditFinish";

const AuthenticatedRoutes = () => {
  const user = useSelector((state) => state.user.currentUser);
  // console.log(user);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Define routes for unauthenticated users without layout
const UnauthenticatedRoutes = () => {
  return <Outlet />;
};

const DashboardRoutes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <ProtectedRoute>
      <div className="mainDashboardCont relative">
        <DashNavbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="subDashCont min-h-dvh flex">
          <DashSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <div
            className={` ${
              isSidebarOpen ? "w-[82%] ps-[18%]" : "w-[90%] ps-[10%]"
            } pt-[7rem] flex-1 bg-coral-light transition-all duration-500`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/jobalert",
        element: <JobAlert />,
      },
      {
        path: "/orderaresumeservice",
        element: <OrderAResumeService />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/coverletter",
        element: <CoverLetter />,
      },
      {
        path: "/websiteTemplate",
        element: <WebsiteTemplate />,
      },
    ],
  },
  {
    path: "/",
    element: <UnauthenticatedRoutes />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardRoutes />,
    children: [
      {
        path: "/app",
        element: <DashHome />,
      },
      {
        path: "/app/profile",
        element: <UserProfile />,
      },
      {
        path: "/app/edit-profile",
        element: <EditUserProfile />,
      },
      {
        path: "/app/password",
        element: <ChangeUserPassword />,
      },
      {
        path: "/app/tools",
        element: <DashTools />,
      },
      {
        path: "/app/tools/web-to-pdf",
        element: <WebPageToPDF />,
      },
      {
        path: "/app/tools/web-to-image",
        element: <WebPageToImage />,
      },
      {
        path: "/app/tools/website-screenshots",
        element: <WebsiteScreenshots />,
      },
      {
        path: "/app/myresume",
        element: <DashResume />,
      },
      {
        path: "/app/coverletter",
        element: <DashCoverLetter />,
      },
      {
        path: "/app/resume-details",
        element: <CreateNewResume />,
      },
      {
        path: "/app/coverletter",
        element: <DashCoverLetter />,
      },
      {
        path: "/app/cover-details",
        element: <CreateNewCoverLetter />,
      },
      {
        path: "/app/template",
        element: <DashTemplate />,
      },
      {
        path: "/app/coverletter/create",
        element: <CreateNewCoverLetter />,
      },
      {
        path: "/app/coverletter/6655085ce595b205733d8e95",
        element: <CLTemplate01 />,
      },
      {
        path: "/app/coverletter/665615890b66a45697909b58",
        element: <CLTemplate02 />,
      },
      {
        path: "/app/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/app/jobsalert",
        element: <JobsAlert />,
      },
      {
        path: "/app/feedback",
        element: <DashFeedback />,
      },
      {
        path: "/app/finish",
        element: <EditFinish />,
      },
      {
        path: "/app/resumeTemp01",
        element: <ResumeTemp01 />,
      },
      {
        path: "/app/resumeTemp02",
        element: <ResumeTemp02 />,
      },
      {
        path: "/app/resumeTemp03",
        element: <ResumeTemp03 />,
      },
      {
        path: "/app/resumeTemp04",
        element: <ResumeTemp04 />,
      },
      {
        path: "/app/resumeFinish",
        element: <ResumeEditFinish />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
