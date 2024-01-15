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
import PackagesPage from "./pages/PackagesPage";
import Privacy from "./pages/Privacy";
import Channels from "./pages/Channels";
import ViewBase from "./pages/ViewBase";
import ViewPrem from "./pages/ViewPrem";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import Webtv from "./pages/Webtv";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq />} />
        <Route path="packages" element={<PackagesPage />} />
        <Route path="packages/base" element={<ViewBase />} />
        <Route path="packages/prem" element={<ViewPrem />} />
        <Route path="channels" element={<Channels />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="portal" element={<Login />} />
        <Route path="webtv" element={<Webtv />} />
        <Route path="cart" element={<Cart />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}
