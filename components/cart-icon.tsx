"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { motion, AnimatePresence } from "framer-motion"

export default function CartIcon() {
  const { state, toggleCart } = useCart()
  const { totalItems } = state

  return (
    <button
      className="relative p-2 rounded-full hover:bg-white/10 transition-colors"
      onClick={toggleCart}
      aria-label={`Shopping cart with ${totalItems} items`}
    >
      <ShoppingCart className="h-5 w-5" />
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
          >
            {totalItems > 99 ? "99+" : totalItems}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
