import './App.css'
import Navigation from './components/Navigation'
import ScamChecker from './components/ScamChecker'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import PrivacyPolicy from './components/PrivacyPolicy'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Blog from './components/Blog'
import BlogDetails from './components/BlogDetails'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation name="Scam Puncher" />

      <div className='min-h-screen bg-gray-50'>

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <ScamChecker
                  name="Scam Puncher"
                  description="Not Sure if it's Safe?"
                />
                <HowItWorks />
              </>
            }
          />

          {/* PRIVACY POLICY PAGE */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* CONTACT US PAGE */}
          <Route path="/contact" element={<ContactUs />} />
          {/* ABOUT US PAGE */}
          <Route path="/about" element={<AboutUs />} />
          {/* BLOG PAGE */}
          <Route path="/blog" element={<Blog />} />
          {/* BLOG DETAILS PAGE */}
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>

      </div>

      <Footer />
    </>
  )
}

export default App