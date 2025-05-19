import FoodMenu from "@/components/food-menu";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import { Utensils, Clock, Award, Users } from "lucide-react";
import InfinitePartnersCarousel from "@/components/infinite-partners-carousel";
import CustomerFeedback from "@/components/customer-feedback";
import Link from "next/link";

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* Navbar - now added to the page */}
      <Navbar />

      {/* Hero Section - adjusted with top padding for the navbar */}
      <div className='pt-16 md:pt-20'>
        <HeroSection />
      </div>

      {/* Features Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: <Utensils className='h-8 w-8' />,
                title: "Quality Food",
                description:
                  "We use only the freshest ingredients for our dishes",
              },
              {
                icon: <Clock className='h-8 w-8' />,
                title: "Fast Delivery",
                description: "Quick delivery to your doorstep, hot and fresh",
              },
              {
                icon: <Award className='h-8 w-8' />,
                title: "Best Quality",
                description: "Award-winning recipes prepared by expert chefs",
              },
              {
                icon: <Users className='h-8 w-8' />,
                title: "24/7 Support",
                description: "Our customer service team is always available",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow hover-lift'
              >
                <div className='bg-red-100 text-red-600 p-3 rounded-xl inline-block mb-4'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Seller Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-3xl md:text-5xl font-bold mb-4'>
            Our Best Seller Dishes
          </h2>
          <p className='max-w-2xl mx-auto text-gray-600 mb-8'>
            Our fresh garden salad is a light and refreshing option. It features
            a mix of crisp lettuce, juicy tomatoes all tossed in your choice of
            dressing.
          </p>

          <div className='mb-12'>
            <Link href='/menu' className='btn btn-primary px-6 py-3'>
              View Full Menu
            </Link>
          </div>

          {/* Food Menu */}
          <FoodMenu />
        </div>
      </section>

      {/* Customer Feedback Section */}
      <CustomerFeedback />

      {/* Team Section */}
      <TeamSection />

      {/* Partners Section */}
      <InfinitePartnersCarousel />

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='bg-gradient-to-br from-red-800 to-red-900 rounded-3xl overflow-hidden shadow-xl'>
            <div className='relative px-6 py-12 md:p-16 text-white'>
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

              <div className='relative z-10 text-center'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
                  Ready to Experience Our Cuisine?
                </h2>
                <p className='text-xl text-white/80 mb-8 max-w-3xl mx-auto'>
                  Join us for an unforgettable dining experience. Book a table
                  today or explore our menu to see what awaits you.
                </p>
                <div className='flex flex-col sm:flex-row justify-center gap-4'>
                  <Link
                    href='/menu'
                    className='px-8 py-3 bg-white text-red-600 rounded-full font-medium hover:bg-red-50 transition-colors'
                  >
                    View Menu
                  </Link>
                  <Link
                    href='/reservation'
                    className='px-8 py-3 border border-white rounded-full font-medium hover:bg-white/10 transition-colors'
                  >
                    Book a Table
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
