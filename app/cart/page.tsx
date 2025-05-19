"use client"

import { useCart } from "@/context/cart-context"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { motion } from "framer-motion"

export default function CartPage() {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart()
  const { items, totalItems, totalAmount } = state

  // Calculate additional costs
  const deliveryFee = 5
  const tax = totalAmount * 0.1
  const total = totalAmount + deliveryFee + tax

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/" className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Continue Shopping</span>
          </Link>
          <h1 className="text-3xl font-bold text-center flex-1">Shopping Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="flex flex-col items-center justify-center py-12">
              <ShoppingBag className="h-20 w-20 text-gray-300 mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Looks like you haven't added any items to your cart yet. Browse our menu and discover delicious meals!
              </p>
              <Link href="/" className="btn btn-primary px-8 py-3">
                Explore Menu
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-6 border-b flex justify-between items-center">
                  <h2 className="text-xl font-bold">Cart Items ({totalItems})</h2>
                  <button
                    onClick={clearCart}
                    className="text-gray-500 hover:text-red-600 flex items-center transition-colors"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Clear Cart
                  </button>
                </div>

                <ul className="divide-y">
                  {items.map((item) => (
                    <motion.li
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-6 flex flex-col sm:flex-row gap-4"
                    >
                      {/* Item image */}
                      <div className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-bl-md">
                          {item.type}
                        </div>
                      </div>

                      {/* Item details */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-red-600 font-medium mb-4">${item.price}</p>

                        {/* Quantity controls */}
                        <div className="flex items-center mt-auto">
                          <div className="flex items-center border rounded-full overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 font-medium text-gray-800">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <span className="ml-auto font-bold text-lg text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link href="/checkout" className="btn btn-primary w-full py-3 text-center font-medium">
                  Proceed to Checkout
                </Link>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">We Accept</h3>
                  <div className="flex gap-2">
                    <div className="bg-gray-100 rounded p-2 w-12 h-8"></div>
                    <div className="bg-gray-100 rounded p-2 w-12 h-8"></div>
                    <div className="bg-gray-100 rounded p-2 w-12 h-8"></div>
                    <div className="bg-gray-100 rounded p-2 w-12 h-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
