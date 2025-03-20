import React, { useEffect } from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-700 mb-4">CONTACT US</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          We would love to hear from you! Send us your message using the form below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <img 
              src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d1841a3d10883593df2a9b.png"
              alt="Location Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Our Address</h3>
            <p className="text-gray-600">6210 Wilshire Blvd Ste 208, #527</p>
            <p className="text-gray-600">Los Angeles, CA 90048</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <img 
              src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d184af5e098b8c25617a6f.png"
              alt="Phone Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Our Phone</h3>
            <p className="text-gray-600">1 (877) 665-0654</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <img 
              src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d184af602854ab43bb3d4b.png"
              alt="Email Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Our Email</h3>
            <p className="text-gray-600">info@eliteusmd.com</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
