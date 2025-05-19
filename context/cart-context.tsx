"use client"

import type React from "react"

import { createContext, useContext, useReducer, type ReactNode, useEffect } from "react"

// Define the food item type
export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  type: string
  quantity: number
}

// Define the cart state
type CartState = {
  items: CartItem[]
  totalItems: number
  totalAmount: number
  isCartOpen: boolean
}

// Define the cart actions
type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }

// Initial cart state
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
  isCartOpen: false,
}

// Create the cart context
const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
  addToCart: (item: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
}>({
  state: initialState,
  dispatch: () => null,
  addToCart: () => null,
  removeFromCart: () => null,
  updateQuantity: () => null,
  clearCart: () => null,
  toggleCart: () => null,
})

// Cart reducer function
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id)

      if (existingItemIndex > -1) {
        // Item already exists, update quantity
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
        }

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + action.payload.quantity,
          totalAmount: state.totalAmount + action.payload.price * action.payload.quantity,
        }
      } else {
        // Add new item
        return {
          ...state,
          items: [...state.items, action.payload],
          totalItems: state.totalItems + action.payload.quantity,
          totalAmount: state.totalAmount + action.payload.price * action.payload.quantity,
        }
      }
    }

    case "REMOVE_FROM_CART": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (!existingItem) {
        return state
      }

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        totalItems: state.totalItems - existingItem.quantity,
        totalAmount: state.totalAmount - existingItem.price * existingItem.quantity,
      }
    }

    case "UPDATE_QUANTITY": {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id)

      if (existingItemIndex === -1) {
        return state
      }

      const item = state.items[existingItemIndex]
      const quantityDiff = action.payload.quantity - item.quantity

      // If quantity is 0, remove the item
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
          totalItems: state.totalItems - item.quantity,
          totalAmount: state.totalAmount - item.price * item.quantity,
        }
      }

      // Update quantity
      const updatedItems = [...state.items]
      updatedItems[existingItemIndex] = {
        ...item,
        quantity: action.payload.quantity,
      }

      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDiff,
        totalAmount: state.totalAmount + item.price * quantityDiff,
      }
    }

    case "CLEAR_CART":
      return {
        ...initialState,
        isCartOpen: state.isCartOpen,
      }

    case "TOGGLE_CART":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      }

    default:
      return state
  }
}

// Cart provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart) as CartState
        // Only restore items, totalItems, and totalAmount
        dispatch({ type: "ADD_TO_CART", payload: { ...parsedCart.items[0], quantity: 0 } }) // Dummy action to trigger reducer
        parsedCart.items.forEach((item) => {
          dispatch({ type: "ADD_TO_CART", payload: item })
        })
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (state.items.length > 0) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: state.items,
          totalItems: state.totalItems,
          totalAmount: state.totalAmount,
        }),
      )
    } else {
      localStorage.removeItem("cart")
    }
  }, [state.items, state.totalItems, state.totalAmount])

  // Helper functions
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: 1 },
    })
  }

  const removeFromCart = (id: number) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    })
  }

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity },
    })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
