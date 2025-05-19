"use client"

import { useState } from "react"
import TailwindResponsiveLayout from "@/components/responsive-approach-1/tailwind-responsive-layout"
import MediaQueryResponsiveLayout from "@/components/responsive-approach-2/media-query-responsive-layout"
import DeviceSpecificLayout from "@/components/responsive-approach-3/device-specific-layout"

export default function ResponsiveExamplesPage() {
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1)

  return (
    <div className="min-h-screen">
      {/* Tab navigation */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4">
            <button
              onClick={() => setActiveTab(1)}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                activeTab === 1 ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Tailwind Responsive
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                activeTab === 2 ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              CSS Media Queries
            </button>
            <button
              onClick={() => setActiveTab(3)}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                activeTab === 3 ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Component-Based
            </button>
          </div>
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="pt-4">
        {activeTab === 1 && <TailwindResponsiveLayout />}
        {activeTab === 2 && <MediaQueryResponsiveLayout />}
        {activeTab === 3 && <DeviceSpecificLayout />}
      </div>
    </div>
  )
}
