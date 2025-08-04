import { Route, Routes } from 'react-router-dom';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import About from './pages/About';
import MainLayout from './components/layout/MainLayout';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';

function App() {

  return (
    <main>
       <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
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
  )
}

export default App
