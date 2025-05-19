export default function DesktopFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">RESTAURANT</h3>
            <p className="text-gray-400 mb-6">
              Serving delicious food since 2010. We pride ourselves on using the freshest ingredients and providing an
              exceptional dining experience for all our customers.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Monday - Friday: 8am - 10pm</li>
              <li>Saturday: 9am - 11pm</li>
              <li>Sunday: 10am - 9pm</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 Restaurant St, City</li>
              <li>+1 234 567 890</li>
              <li>info@restaurant.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for updates and offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 bg-gray-800 text-white rounded-l-md w-full focus:outline-none"
              />
              <button className="bg-red-600 px-5 py-3 rounded-r-md">→</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
