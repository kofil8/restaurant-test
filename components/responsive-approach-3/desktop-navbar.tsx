import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";

export default function DesktopNavbar() {
  return (
    <header className='bg-red-800 text-white sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-8 py-6'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='relative w-10 h-10 rounded-full overflow-hidden border-2 border-white'>
              <Image
                src='/images/logo-white.png'
                alt='Restaurant Logo'
                fill
                className='object-cover'
              />
            </div>
            <span className='ml-3 text-xl font-bold'>RESTAURANT</span>
          </div>

          {/* Navigation */}
          <nav className='flex items-center space-x-4'>
            <Link
              href='/'
              className='px-4 py-2 text-base font-medium hover:text-red-200'
            >
              Home
            </Link>
            <Link
              href='#'
              className='px-4 py-2 text-base font-medium hover:text-red-200'
            >
              Menu
            </Link>
            <Link
              href='#'
              className='px-4 py-2 text-base font-medium hover:text-red-200'
            >
              About
            </Link>
            <Link
              href='#'
              className='px-4 py-2 text-base font-medium hover:text-red-200'
            >
              Contact
            </Link>
          </nav>

          {/* Action buttons */}
          <div className='flex items-center'>
            <button className='p-2 rounded-full hover:bg-white/10 transition-colors'>
              <ShoppingCart className='h-5 w-5' />
            </button>
            <button className='p-2 rounded-full hover:bg-white/10 transition-colors ml-3'>
              <Search className='h-5 w-5' />
            </button>
            <button className='ml-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-red-600 transition-colors text-base font-medium'>
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
