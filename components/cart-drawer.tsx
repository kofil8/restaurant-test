"use client"

import { useCart } from "@/context/cart-context"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"

export default function CartDrawer() {
  const { state, toggleCart, removeFromCart, updateQuantity } = useCart()
  const { items, totalAmount, isCartOpen } = state

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={toggleCart}
          />

          {/* Cart drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b flex justify-between items-center bg-red-600 text-white">
              <h2 className="text-xl font-bold flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Your Cart
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <ShoppingBag className="h-16 w-16 mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">Your cart is empty</p>
                  <p className="text-sm text-center mb-6">Add some delicious items to your cart and start your order</p>
                  <button onClick={toggleCart} className="btn btn-primary px-6 py-2 flex items-center">
                    Continue Shopping
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <motion.li
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex border rounded-lg overflow-hidden shadow-sm"
                    >
                      {/* Item image */}
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-bl-md">
                          {item.type}
                        </div>
                      </div>

                      {/* Item details */}
                      <div className="flex-1 p-3 flex flex-col">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-gray-800">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-red-600 font-medium">${item.price}</p>

                        {/* Quantity controls */}
                        <div className="flex items-center mt-auto">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="mx-3 font-medium text-gray-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          <span className="ml-auto font-medium text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer with total and checkout */}
            {items.length > 0 && (
              <div className="border-t p-4 bg-gray-50">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${(totalAmount * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${(totalAmount + 5 + totalAmount * 0.1).toFixed(2)}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Link
                    href="/checkout"
                    className="btn btn-primary w-full py-3 text-center font-medium"
                    onClick={toggleCart}
                  >
                    Proceed to Checkout
                  </Link>
                  <button onClick={toggleCart} className="btn btn-secondary w-full py-2 text-center">
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
