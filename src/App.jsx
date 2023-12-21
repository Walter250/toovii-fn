import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PackagesPage from "./pages/PackagesPage";
import Payment from "./pages/Payment";
import Privacy from "./pages/Privacy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="packages" element={<PackagesPage />} />
        <Route path="payment" element={<Payment />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
