import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./components/layout/MainLayout";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Services from "./pages/Services";
import ProviderDetail from "./pages/ProviderDetail";
import CheckoutPage from "./pages/CheckoutPage";
import DashboardLayout from "./components/layout/DashboardLayout";
import MyBookings from "./pages/dashboard/MyBookings";
import ProfileSettings from "./pages/dashboard/ProfileSettings";
import AccountSettings from "./pages/dashboard/AccountSettings";
import ProviderDashboardLayout from "./components/layout/ProviderDashboardLayout";
import DashboardOverview from "./pages/provider/DashboardOverview";
import MyServices from "./pages/provider/MyServices";
import Schedule from "./pages/provider/Schedule";
import Earnings from "./pages/provider/Earnings";
import Reviews from "./pages/provider/Reviews";
import ProviderProfile from "./pages/provider/ProviderProfile";
import Contact from "./pages/Contact";
import ProviderSetup from "./pages/provider/ProviderSetup";

const NotificationsPage = () => (
  <h1 className="text-3xl font-bold">Notifications</h1>
);
const PaymentsPage = () => (
  <h1 className="text-3xl font-bold">Payment Methods</h1>
);

function App() {
  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  return (
    <main>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
            <Route path="provider-setup" element={<ProviderSetup />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="provider/:providerId" element={<ProviderDetail />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* Redirect /dashboard to /dashboard/bookings by default */}
            <Route index element={<Navigate to="bookings" replace />} />
            <Route path="bookings" element={<MyBookings />} />
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="account" element={<AccountSettings />} />
          </Route>

          <Route
            path="/provider-dashboard"
            element={<ProviderDashboardLayout />}
          >
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<DashboardOverview />} />
            <Route path="services" element={<MyServices />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="profile" element={<ProviderProfile />} />
          </Route>
        </Routes>

        {/* Toast notifications */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </main>
  );
}

export default App;
