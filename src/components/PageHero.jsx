import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHero({ title, subtitle, backgroundImage }) {
  return (
    <div 
      className="relative min-h-[500px] flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`
      }}
    >
      <h1 className="text-4xl font-bold text-white text-center mb-4">{title}</h1>
      {subtitle && (
        <h2 className="text-2xl text-white text-center mb-8">{subtitle}</h2>
      )}
      
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl text-white mb-4">
          Ready to Partner with EliteUSMD?
        </h2>
        <p className="text-white text-lg mb-6 max-w-2xl mx-auto px-4">
          Take the first step towards elevating your aesthetic practice with our expert medical director services.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  )
}
