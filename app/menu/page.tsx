import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import EnhancedFoodMenu from "@/components/enhanced-food-menu";

export const metadata: Metadata = {
  title: "Menu | Restaurant",
  description:
    "Explore our delicious menu offerings for breakfast, lunch, and dinner.",
};

export default function MenuPage() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <div className='pt-16 md:pt-20'>
        {/* Menu Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-br from-red-800 to-red-900 text-white'>
          {/* Background elements */}
          <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-0 right-0 w-96 h-96 bg-red-700/30 rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-96 h-96 bg-red-700/30 rounded-full blur-3xl'></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-full object-cover'
            >
              <source src='/videos/bgvideo.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10'>
            <div className='text-center max-w-3xl mx-auto'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                Our Menu
              </h1>
              <p className='text-xl text-white/90 mb-8 leading-relaxed'>
                Explore our carefully crafted dishes made with the freshest
                ingredients and prepared with passion by our expert chefs.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
          <div className='max-w-7xl mx-auto'>
            <EnhancedFoodMenu />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
