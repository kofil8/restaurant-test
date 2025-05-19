import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ReservationForm from "@/components/reservation-form";

export const metadata: Metadata = {
  title: "Book a Table | Restaurant",
  description:
    "Reserve a table at our restaurant for a memorable dining experience.",
};

export default function ReservationPage() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <div className='pt-16 md:pt-20'>
        {/* Reservation Hero Section */}
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
                Book a Table
              </h1>
              <p className='text-xl text-white/90 mb-8 leading-relaxed'>
                Reserve your table now for a memorable dining experience. We
                look forward to serving you.
              </p>
            </div>
          </div>
        </section>

        {/* Reservation Form Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
              <div>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Make a Reservation
                </h2>
                <p className='text-gray-600 mb-8'>
                  Please fill out the form below to reserve your table. We'll
                  confirm your reservation via email or phone.
                </p>
                <ReservationForm />
              </div>
              <div className='bg-gray-50 p-8 rounded-2xl'>
                <h3 className='text-2xl font-bold mb-6'>
                  Reservation Information
                </h3>
                <div className='space-y-6'>
                  <div>
                    <h4 className='font-bold text-lg mb-2'>Opening Hours</h4>
                    <ul className='space-y-2 text-gray-600'>
                      <li className='flex justify-between'>
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 10:00 PM</span>
                      </li>
                      <li className='flex justify-between'>
                        <span>Saturday</span>
                        <span>9:00 AM - 11:00 PM</span>
                      </li>
                      <li className='flex justify-between'>
                        <span>Sunday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-bold text-lg mb-2'>Special Requests</h4>
                    <p className='text-gray-600'>
                      If you have any special requests or dietary requirements,
                      please let us know in the form. We'll do our best to
                      accommodate your needs.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-bold text-lg mb-2'>Large Groups</h4>
                    <p className='text-gray-600'>
                      For parties of 8 or more, please contact us directly at
                      (480) 555-0103 to arrange your reservation.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-bold text-lg mb-2'>
                      Cancellation Policy
                    </h4>
                    <p className='text-gray-600'>
                      We kindly ask that you notify us at least 24 hours in
                      advance if you need to cancel or modify your reservation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
