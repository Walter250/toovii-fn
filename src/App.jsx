import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PackagesPage from "./pages/PackagesPage";
import Privacy from "./pages/Privacy";
import Channels from "./pages/Channels";
import ViewBase from "./pages/ViewBase";
import ViewPrem from "./pages/ViewPrem";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="packages" element={<PackagesPage />} />
        <Route path="packages/base" element={<ViewBase />} />
        <Route path="packages/prem" element={<ViewPrem />} />
        <Route path="channels" element={<Channels />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
