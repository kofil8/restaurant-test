import Image from "next/image"

export default function DesktopHero() {
  return (
    <section className="bg-red-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-16 items-center">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold mb-6">Delicious Food For Your Cravings</h1>
            <p className="text-xl mb-8 text-white/80">
              We offer a wide variety of delicious meals prepared with the freshest ingredients. Experience the taste of
              excellence with our chef's special creations.
            </p>
            <div className="flex gap-6">
              <button className="px-8 py-3 bg-white text-red-600 rounded-full font-medium hover:bg-red-100 transition-colors">
                View Menu
              </button>
              <button className="px-8 py-3 border border-white rounded-full font-medium hover:bg-white/10 transition-colors">
                Book a Table
              </button>
            </div>
          </div>
          <div className="relative h-96 w-1/2 rounded-lg overflow-hidden">
            <Image src="/images/hero-food.jpg" alt="Delicious Food" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
