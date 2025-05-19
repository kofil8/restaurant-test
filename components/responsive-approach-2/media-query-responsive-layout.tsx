"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, ShoppingCart, Search } from "lucide-react"
import Link from "next/link"
import styles from "./media-query-styles.module.css"

export default function MediaQueryResponsiveLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={styles.container}>
      {/* Navbar with CSS Media Queries */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            {/* Logo */}
            <div className={styles.logo}>
              <div className={styles.logoImage}>
                <Image src="/images/logo-white.png" alt="Restaurant Logo" fill className="object-cover" />
              </div>
              <span className={styles.logoText}>RESTAURANT</span>
            </div>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
              <Link href="#" className={styles.navLink}>
                Menu
              </Link>
              <Link href="#" className={styles.navLink}>
                About
              </Link>
              <Link href="#" className={styles.navLink}>
                Contact
              </Link>
            </nav>

            {/* Action buttons */}
            <div className={styles.actionButtons}>
              <button className={styles.iconButton}>
                <ShoppingCart className={styles.icon} />
              </button>
              <button className={styles.iconButton + " " + styles.searchButton}>
                <Search className={styles.icon} />
              </button>
              <button className={styles.bookButton}>Book a Table</button>

              {/* Mobile menu button */}
              <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              <Link href="/" className={styles.mobileNavLink}>
                Home
              </Link>
              <Link href="#" className={styles.mobileNavLink}>
                Menu
              </Link>
              <Link href="#" className={styles.mobileNavLink}>
                About
              </Link>
              <Link href="#" className={styles.mobileNavLink}>
                Contact
              </Link>
              <div className={styles.mobileMenuDivider}>
                <button className={styles.mobileBookButton}>Book a Table</button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with CSS Media Queries */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Delicious Food For Your Cravings</h1>
              <p className={styles.heroDescription}>
                We offer a wide variety of delicious meals prepared with the freshest ingredients.
              </p>
              <div className={styles.heroButtons}>
                <button className={styles.primaryButton}>View Menu</button>
                <button className={styles.secondaryButton}>Book a Table</button>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image src="/images/hero-food.jpg" alt="Delicious Food" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Food Menu with CSS Media Queries */}
      <section className={styles.foodMenu}>
        <div className={styles.foodMenuContainer}>
          <h2 className={styles.sectionTitle}>Our Popular Dishes</h2>

          <div className={styles.foodGrid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={styles.foodCard}>
                <div className={styles.foodImageContainer}>
                  <Image src={`/images/food-${item}.jpg`} alt={`Food item ${item}`} fill className="object-cover" />
                </div>
                <div className={styles.foodCardContent}>
                  <h3 className={styles.foodTitle}>Delicious Dish {item}</h3>
                  <p className={styles.foodDescription}>A wonderful combination of fresh ingredients and spices.</p>
                  <div className={styles.foodCardFooter}>
                    <span className={styles.foodPrice}>$24.99</span>
                    <button className={styles.addToCartButton}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with CSS Media Queries */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerTitle}>RESTAURANT</h3>
              <p className={styles.footerText}>
                Serving delicious food since 2010. We pride ourselves on using the freshest ingredients.
              </p>
            </div>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerTitle}>Opening Hours</h3>
              <ul className={styles.footerList}>
                <li>Monday - Friday: 8am - 10pm</li>
                <li>Saturday: 9am - 11pm</li>
                <li>Sunday: 10am - 9pm</li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerTitle}>Contact Us</h3>
              <ul className={styles.footerList}>
                <li>123 Restaurant St, City</li>
                <li>+1 234 567 890</li>
                <li>info@restaurant.com</li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerTitle}>Newsletter</h3>
              <p className={styles.footerText}>Subscribe to our newsletter for updates and offers.</p>
              <div className={styles.newsletterForm}>
                <input type="email" placeholder="Your email" className={styles.newsletterInput} />
                <button className={styles.newsletterButton}>→</button>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
