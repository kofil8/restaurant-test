import Image from "next/image"

export default function TabletHero() {
  return (
    <section className="bg-red-800 text-white py-12">
      <div className="px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Delicious Food For Your Cravings</h1>
            <p className="text-lg mb-6 text-white/80">
              We offer a wide variety of delicious meals prepared with the freshest ingredients.
            </p>
            <div className="flex flex-row justify-center md:justify-start gap-4">
              <button className="px-6 py-2.5 bg-white text-red-600 rounded-full font-medium hover:bg-red-100 transition-colors">
                View Menu
              </button>
              <button className="px-6 py-2.5 border border-white rounded-full font-medium hover:bg-white/10 transition-colors">
                Book a Table
              </button>
            </div>
          </div>
          <div className="relative h-72 w-full md:w-1/2 rounded-lg overflow-hidden">
            <Image src="/images/hero-food.jpg" alt="Delicious Food" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
