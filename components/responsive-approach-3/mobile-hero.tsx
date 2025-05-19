import Image from "next/image"

export default function MobileHero() {
  return (
    <section className="bg-red-800 text-white py-8">
      <div className="px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Delicious Food For Your Cravings</h1>
          <p className="text-lg mb-6 text-white/80">
            We offer a wide variety of delicious meals prepared with the freshest ingredients.
          </p>
          <div className="flex flex-col gap-4">
            <button className="px-6 py-3 bg-white text-red-600 rounded-full font-medium hover:bg-red-100 transition-colors">
              View Menu
            </button>
            <button className="px-6 py-3 border border-white rounded-full font-medium hover:bg-white/10 transition-colors">
              Book a Table
            </button>
          </div>
        </div>
        <div className="relative h-56 w-full rounded-lg overflow-hidden mt-8">
          <Image src="/images/hero-food.jpg" alt="Delicious Food" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}
