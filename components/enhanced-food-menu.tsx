"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Heart, ShoppingCart, Filter, Search, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/context/cart-context"

// Food item type
type FoodItem = {
  id: number
  name: string
  type: "Breakfast" | "Lunch" | "Dinner"
  rating: number
  price: number
  image: string
  description?: string
  isPopular?: boolean
  tags?: string[]
  ingredients?: string[]
  preparationTime?: string
  calories?: number
}

// Sample food data with enhanced details
const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Avocado Toast",
    type: "Breakfast",
    rating: 5,
    price: 12.99,
    image: "/images/avocado-toast.jpg",
    description: "Freshly mashed avocado on artisanal sourdough bread with cherry tomatoes and microgreens",
    isPopular: true,
    tags: ["Vegetarian", "Healthy", "Organic"],
    ingredients: ["Avocado", "Sourdough Bread", "Cherry Tomatoes", "Microgreens", "Olive Oil", "Sea Salt"],
    preparationTime: "15 min",
    calories: 320,
  },
  {
    id: 2,
    name: "Grilled Salmon",
    type: "Lunch",
    rating: 5,
    price: 24.99,
    image: "/images/grilled-salmon.jpg",
    description:
      "Wild-caught salmon fillet grilled to perfection, served with seasonal vegetables and lemon herb sauce",
    tags: ["Seafood", "Gluten-Free", "High Protein"],
    ingredients: ["Salmon Fillet", "Seasonal Vegetables", "Lemon", "Herbs", "Olive Oil"],
    preparationTime: "25 min",
    calories: 450,
  },
  {
    id: 3,
    name: "Beef Tenderloin",
    type: "Dinner",
    rating: 5,
    price: 32.99,
    image: "/images/beef-tenderloin.jpg",
    description: "Premium aged beef tenderloin with truffle mashed potatoes and red wine reduction",
    isPopular: true,
    tags: ["Signature Dish", "Premium"],
    ingredients: ["Beef Tenderloin", "Truffle", "Potatoes", "Red Wine", "Butter", "Herbs"],
    preparationTime: "35 min",
    calories: 580,
  },
  {
    id: 4,
    name: "Acai Bowl",
    type: "Breakfast",
    rating: 4,
    price: 14.99,
    image: "/images/acai-bowl.jpg",
    description: "Refreshing acai smoothie bowl topped with fresh berries, banana, and house-made granola",
    tags: ["Vegan", "Gluten-Free", "Superfood"],
    ingredients: ["Acai", "Berries", "Banana", "Granola", "Coconut", "Honey"],
    preparationTime: "10 min",
    calories: 380,
  },
  {
    id: 5,
    name: "Mediterranean Salad",
    type: "Lunch",
    rating: 5,
    price: 16.99,
    image: "/images/mediterranean-salad.jpg",
    description: "Fresh garden vegetables with feta cheese, olives, and our signature herb vinaigrette",
    isPopular: true,
    tags: ["Vegetarian", "Healthy"],
    ingredients: ["Mixed Greens", "Feta Cheese", "Olives", "Cucumber", "Tomatoes", "Red Onion", "Vinaigrette"],
    preparationTime: "15 min",
    calories: 320,
  },
  {
    id: 6,
    name: "Truffle Risotto",
    type: "Dinner",
    rating: 5,
    price: 28.99,
    image: "/images/truffle-risotto.jpg",
    description: "Creamy Arborio rice with wild mushrooms, finished with black truffle and aged Parmesan",
    tags: ["Vegetarian", "Signature Dish"],
    ingredients: ["Arborio Rice", "Wild Mushrooms", "Black Truffle", "Parmesan", "White Wine", "Vegetable Stock"],
    preparationTime: "30 min",
    calories: 520,
  },
]

export default function EnhancedFoodMenu() {
  const [filter, setFilter] = useState<"All" | "Breakfast" | "Lunch" | "Dinner">("All")
  const [filteredItems, setFilteredItems] = useState<FoodItem[]>(foodItems)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const { addToCart } = useCart()

  // Get all unique tags
  const allTags = Array.from(new Set(foodItems.flatMap((item) => item.tags || [])))

  // Filter items based on type, search term, and tags
  useEffect(() => {
    let result = foodItems

    // Filter by meal type
    if (filter !== "All") {
      result = result.filter((item) => item.type === filter)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description?.toLowerCase().includes(term) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(term)),
      )
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter((item) => selectedTags.every((tag) => item.tags?.includes(tag)))
    }

    setFilteredItems(result)
  }, [filter, searchTerm, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const handleAddToCart = (foodItem: FoodItem) => {
    addToCart({
      id: foodItem.id,
      name: foodItem.name,
      price: foodItem.price,
      image: foodItem.image,
      type: foodItem.type,
    })
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="w-full">
      {/* Search and Filter Bar */}
      <div className="mb-8 bg-white rounded-2xl shadow-md p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for dishes, ingredients, or dietary preferences..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Expanded Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t mt-4">
                <h3 className="font-medium mb-3">Dietary Preferences</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1.5 rounded-full text-sm ${
                        selectedTags.includes(tag)
                          ? "bg-red-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setFilter("All")}
          className={`btn px-6 py-2.5 ${filter === "All" ? "btn-primary" : "btn-secondary"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Breakfast")}
          className={`btn px-6 py-2.5 ${filter === "Breakfast" ? "btn-primary" : "btn-secondary"}`}
        >
          Breakfast
        </button>
        <button
          onClick={() => setFilter("Lunch")}
          className={`btn px-6 py-2.5 ${filter === "Lunch" ? "btn-primary" : "btn-secondary"}`}
        >
          Lunch
        </button>
        <button
          onClick={() => setFilter("Dinner")}
          className={`btn px-6 py-2.5 ${filter === "Dinner" ? "btn-primary" : "btn-secondary"}`}
        >
          Dinner
        </button>
      </div>

      {/* Results Count */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Showing <span className="font-bold text-gray-800">{filteredItems.length}</span> items
          {filter !== "All" && (
            <span>
              {" "}
              in <span className="font-bold text-red-600">{filter}</span>
            </span>
          )}
          {selectedTags.length > 0 && (
            <span>
              {" "}
              with tags:{" "}
              {selectedTags.map((tag) => (
                <span key={tag} className="inline-block bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs mx-1">
                  {tag}
                </span>
              ))}
            </span>
          )}
        </p>
      </div>

      {/* No Results Message */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-2xl">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-xl font-bold mb-2">No items found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your filters or search term</p>
          <button
            onClick={() => {
              setFilter("All")
              setSearchTerm("")
              setSelectedTags([])
            }}
            className="btn btn-primary px-6 py-2.5"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Food Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            variants={item}
            className="food-card group"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Popular badge */}
              {item.isPopular && (
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              )}

              {/* Preparation time */}
              {item.preparationTime && (
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {item.preparationTime}
                </div>
              )}

              {/* Favorite button */}
              <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-2 rounded-full transition-colors">
                <Heart className={`h-5 w-5 ${hoveredItem === item.id ? "text-red-500 fill-red-500" : "text-white"}`} />
              </button>

              {/* Type badge */}
              <div
                className={`absolute bottom-4 right-4 badge ${
                  item.type === "Breakfast" ? "badge-breakfast" : item.type === "Lunch" ? "badge-lunch" : "badge-dinner"
                }`}
              >
                {item.type}
              </div>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <span className="font-bold text-xl text-red-600">${item.price.toFixed(2)}</span>
              </div>

              {item.description && <p className="text-gray-600 text-sm mb-3">{item.description}</p>}

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Calories */}
              {item.calories && <div className="text-gray-500 text-sm mb-3">{item.calories} calories</div>}

              <div className="flex justify-between items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < item.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <button
                  className="btn btn-primary px-4 py-1.5 text-sm flex items-center gap-1"
                  onClick={() => handleAddToCart(item)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
