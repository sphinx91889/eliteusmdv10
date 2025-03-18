import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import Locations from './pages/Locations'
import NotFound from './pages/NotFound'

// Services Pages
import MedicalDirector from './pages/services/MedicalDirector'
import MedicalDirectorNP from './pages/services/medical-director/MedicalDirectorNP'
import MedicalDirectorPA from './pages/services/medical-director/MedicalDirectorPA'
import MedicalDirectorRN from './pages/services/medical-director/MedicalDirectorRN'
import MedicalDirectorLayperson from './pages/services/medical-director/MedicalDirectorLayperson'
import MedicalOversight from './pages/services/MedicalOversight'
import MedicalSupervision from './pages/services/MedicalSupervision'
import ChartReview from './pages/services/ChartReview'
import DeviceConsultations from './pages/services/DeviceConsultations'
import Training from './pages/services/Training'

// [Rest of the imports remain the same...]

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/locations" element={<Locations />} />
          
          {/* Services Routes */}
          <Route path="/services/medical-director" element={<MedicalDirector />} />
          <Route path="/services/medical-director/np" element={<MedicalDirectorNP />} />
          <Route path="/services/medical-director/pa" element={<MedicalDirectorPA />} />
          <Route path="/services/medical-director/rn" element={<MedicalDirectorRN />} />
          <Route path="/services/medical-director/layperson" element={<MedicalDirectorLayperson />} />
          <Route path="/services/medical-oversight" element={<MedicalOversight />} />
          <Route path="/services/medical-supervision" element={<MedicalSupervision />} />
          <Route path="/services/chart-review" element={<ChartReview />} />
          <Route path="/services/device-consultations" element={<DeviceConsultations />} />
          <Route path="/services/training" element={<Training />} />

          {/* [Rest of the routes remain the same...] */}
        </Routes>
      </main>
      <Footer />
    </>
  )
}
