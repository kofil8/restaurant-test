"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Users, Utensils, CheckCircle } from "lucide-react"

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    specialRequests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }
    if (!formData.date) newErrors.date = "Date is required"
    if (!formData.time) newErrors.time = "Time is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "2",
          occasion: "",
          specialRequests: "",
        })
      }, 3000)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Reservation Confirmed!</h3>
        <p className="text-green-700 mb-6">Thank you for your reservation. We've sent a confirmation to your email.</p>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-gray-500 text-sm">Name</p>
              <p className="font-medium">{formData.name}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Guests</p>
              <p className="font-medium">{formData.guests}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Date</p>
              <p className="font-medium">{formData.date}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Time</p>
              <p className="font-medium">{formData.time}</p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
              placeholder="(123) 456-7890"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Guests
          </label>
          <div className="relative">
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-white"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
            <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          </div>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <div className="relative">
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.date ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
            Time
          </label>
          <div className="relative">
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              min="08:00"
              max="22:00"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.time ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">
            Occasion (Optional)
          </label>
          <div className="relative">
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none bg-white"
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Date Night">Date Night</option>
              <option value="Business Meal">Business Meal</option>
              <option value="Other">Other</option>
            </select>
            <Utensils className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
          Special Requests (Optional)
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Any dietary restrictions or special requests?"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-xl text-white font-medium transition-all ${
          isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 hover:shadow-lg"
        }`}
      >
        {isSubmitting ? "Processing..." : "Book Table"}
      </button>
    </form>
  )
}
