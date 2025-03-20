import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaPhone } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isClinicTypesOpen, setIsClinicTypesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = isHomePage
    ? `fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`
    : 'bg-white shadow-lg fixed w-full top-0 z-50';

  const linkClasses = isHomePage && !isScrolled
    ? 'hover:text-secondary px-3 py-2 text-white'
    : 'hover:text-secondary px-3 py-2 text-primary-dark';

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleClinicTypesMenu = () => {
    setIsClinicTypesOpen(!isClinicTypesOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsClinicTypesOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (!isHomePage) {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    closeMenu();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const clinicTypes = [
    { name: "Medical Spas", path: "/clinic-types/medical-spas" },
    { name: "Aesthetic Clinics", path: "/clinic-types/aesthetic-clinics" },
    { name: "Weight Loss Clinics", path: "/clinic-types/weight-loss-clinics" },
    { name: "Wellness Centers", path: "/clinic-types/wellness-centers" },
    { name: "Chiropractors", path: "/clinic-types/chiropractors" },
    { name: "IV Therapy & Wellness", path: "/clinic-types/iv-therapy" },
    { name: "Home Healthcare & Concierge", path: "/clinic-types/home-healthcare" },
    { name: "Mobile & Telehealth Services", path: "/clinic-types/mobile-services" }
  ];

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-28">
          <Link to="/" onClick={handleHomeClick} className="relative z-50">
            <img 
              src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0f1541ae850c45b73eb47.png"
              alt="EliteUSMD Logo"
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" onClick={handleHomeClick} className={linkClasses}>Home</Link>
            
            <div className="relative group">
              <button className={`${linkClasses} flex items-center`}>
                Services <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 px-4 w-64 top-full left-0 z-50">
                <Link 
                  to="/services/medical-director" 
                  className="block py-2 text-primary-dark hover:text-secondary"
                >
                  Medical Director
                </Link>
                <Link 
                  to="/services/chart-review" 
                  className="block py-2 text-primary-dark hover:text-secondary"
                >
                  Chart Review
                </Link>
                <Link 
                  to="/services/training" 
                  className="block py-2 text-primary-dark hover:text-secondary"
                >
                  Training
                </Link>
                <Link 
                  to="/services/device-consultations" 
                  className="block py-2 text-primary-dark hover:text-secondary"
                >
                  Device Consultations
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className={`${linkClasses} flex items-center`}>
                Clinic Types <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 px-4 w-64 top-full left-0 z-50">
                {clinicTypes.map((type, index) => (
                  <Link 
                    key={index}
                    to={type.path} 
                    className="block py-2 text-primary-dark hover:text-secondary"
                  >
                    {type.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/locations" className={linkClasses}>Locations</Link>
            <Link to="/resources" className={linkClasses}>Resources</Link>
            <a 
              href="tel:8776650654" 
              className={`${linkClasses} flex items-center font-semibold`}
            >
              <FaPhone className="mr-2" /> 1 (877) 665-0654
            </a>
            <Link 
              to="/contact" 
              onClick={handleGetStarted}
              className={`${linkClasses} bg-secondary text-white rounded-lg px-4 py-2 hover:bg-secondary-dark`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`z-50 relative ${isHomePage && !isScrolled ? "text-white" : "text-primary-dark"}`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-28 bg-white z-40 overflow-y-auto">
            <div className="flex flex-col space-y-4 p-6">
              <Link 
                to="/" 
                className="text-primary-dark text-xl py-2 border-b"
                onClick={handleHomeClick}
              >
                Home
              </Link>

              <div>
                <button 
                  onClick={toggleServicesMenu} 
                  className="w-full flex justify-between items-center text-primary-dark text-xl py-2 border-b"
                >
                  Services 
                  <FaChevronDown className={`transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link 
                      to="/services/medical-director" 
                      className="block text-primary-dark py-2"
                      onClick={closeMenu}
                    >
                      Medical Director
                    </Link>
                    <Link 
                      to="/services/chart-review" 
                      className="block text-primary-dark py-2"
                      onClick={closeMenu}
                    >
                      Chart Review
                    </Link>
                    <Link 
                      to="/services/training" 
                      className="block text-primary-dark py-2"
                      onClick={closeMenu}
                    >
                      Training
                    </Link>
                    <Link 
                      to="/services/device-consultations" 
                      className="block text-primary-dark py-2"
                      onClick={closeMenu}
                    >
                      Device Consultations
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button 
                  onClick={toggleClinicTypesMenu} 
                  className="w-full flex justify-between items-center text-primary-dark text-xl py-2 border-b"
                >
                  Clinic Types 
                  <FaChevronDown className={`transform ${isClinicTypesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isClinicTypesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {clinicTypes.map((type, index) => (
                      <Link 
                        key={index}
                        to={type.path} 
                        className="block text-primary-dark py-2"
                        onClick={closeMenu}
                      >
                        {type.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/locations" 
                className="text-primary-dark text-xl py-2 border-b"
                onClick={closeMenu}
              >
                Locations
              </Link>

              <Link 
                to="/resources" 
                className="text-primary-dark text-xl py-2 border-b"
                onClick={closeMenu}
              >
                Resources
              </Link>

              <a 
                href="tel:8776650654" 
                className="text-primary-dark text-xl py-2 border-b flex items-center justify-center"
              >
                <FaPhone className="mr-2" /> (877) 665-0654
              </a>

              <Link 
                to="/contact" 
                className="text-white bg-secondary rounded-lg px-4 py-3 text-xl text-center hover:bg-secondary-dark"
                onClick={handleGetStarted}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
