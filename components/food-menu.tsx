"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Plus, Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/cart-context";

// Food item type
type FoodItem = {
  id: number;
  name: string;
  type: "Breakfast" | "Lunch" | "Dinner" | "Special";
  rating: number;
  price: number;
  image: string;
  description?: string;
  isPopular?: boolean;
};

// Sample food data
const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Salad Fry",
    type: "Breakfast",
    rating: 5,
    price: 230,
    image: "/images/saladfry.png",
    description: "Fresh mixed vegetables with our special dressing",
    isPopular: true,
  },
  {
    id: 2,
    name: "Chicken Breast",
    type: "Lunch",
    rating: 5,
    price: 230,
    image: "/images/chickenbreast.png",
    description: "Grilled chicken breast with herbs and spices",
  },
  {
    id: 3,
    name: "Chicken Legs",
    type: "Dinner",
    rating: 5,
    price: 230,
    image: "/images/chickenlegs.png",
    description: "Crispy fried chicken legs with special sauce",
    isPopular: true,
  },
  {
    id: 4,
    name: "Fruit Basic",
    type: "Lunch",
    rating: 4,
    price: 230,
    image: "/images/fruitbasic.png",
    description: "Assortment of fresh seasonal fruits",
  },
  {
    id: 5,
    name: "Veggie Salad",
    type: "Dinner",
    rating: 5,
    price: 230,
    image: "/images/veggiesalad.png",
    description: "Fresh garden vegetables with balsamic dressing",
    isPopular: true,
  },
  {
    id: 6,
    name: "Chicken Roll",
    type: "Breakfast",
    rating: 4,
    price: 230,
    image: "/images/chickenroll.png",
    description: "Chicken wrapped in a soft tortilla with fresh veggies",
  },
  {
    id: 7,
    name: "Grilled Lobster",
    type: "Special",
    rating: 5,
    price: 530,
    image: "/images/grilledlobster.png",
    description: "Grilled lobster with garlic butter and herbs",
  },
  {
    id: 8,
    name: "Miso-Glazed Salmon",
    type: "Special",
    rating: 5,
    price: 730,
    image: "/images/salmon.png",
    description: "Salmon fillet glazed with miso and grilled to perfection",
  },
  {
    id: 9,
    name: "Seared Duck Breast",
    type: "Special",
    rating: 5,
    price: 930,
    image: "/images/searedduck.png",
    description: "Duck breast seared to perfection with a crispy skin",
  },
];

export default function FoodMenu() {
  const [filter, setFilter] = useState<
    "All" | "Breakfast" | "Lunch" | "Dinner" | "Special"
  >("All");
  const [filteredItems, setFilteredItems] = useState<FoodItem[]>(foodItems);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (filter === "All") {
      setFilteredItems(foodItems);
    } else {
      setFilteredItems(foodItems.filter((item) => item.type === filter));
    }
  }, [filter]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleAddToCart = (foodItem: FoodItem) => {
    addToCart({
      id: foodItem.id,
      name: foodItem.name,
      price: foodItem.price,
      image: foodItem.image,
      type: foodItem.type,
    });
  };

  return (
    <div className='w-full'>
      {/* Filter Buttons */}
      <div className='flex flex-wrap justify-center gap-3 mb-10'>
        <button
          onClick={() => setFilter("All")}
          className={`btn px-6 py-2.5 ${
            filter === "All" ? "btn-primary" : "btn-secondary"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Breakfast")}
          className={`btn px-6 py-2.5 ${
            filter === "Breakfast" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Breakfast
        </button>
        <button
          onClick={() => setFilter("Lunch")}
          className={`btn px-6 py-2.5 ${
            filter === "Lunch" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Lunch
        </button>
        <button
          onClick={() => setFilter("Dinner")}
          className={`btn px-6 py-2.5 ${
            filter === "Dinner" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Dinner
        </button>

        <button
          onClick={() => setFilter("Special")}
          className={`btn px-6 py-2.5 ${
            filter === "Special" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Special
        </button>

        <div className='ml-auto flex gap-2 mt-4 md:mt-0'>
          <button className='btn btn-primary px-4 py-2.5 flex items-center gap-1'>
            <Plus className='h-4 w-4' />
            Add Food
          </button>
          <button className='btn btn-primary px-4 py-2.5 flex items-center gap-1'>
            <Plus className='h-4 w-4' />
            Add Category
          </button>
        </div>
      </div>

      {/* Food Grid */}
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      >
        {filteredItems.map((itemData) => (
          <motion.div
            key={itemData.id}
            variants={item}
            className='food-card group'
            onMouseEnter={() => setHoveredItem(itemData.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className='relative h-64 w-full overflow-hidden'>
              <Image
                src={itemData.image || "/placeholder.svg"}
                alt={itemData.name}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />

              {/* Popular badge */}
              {itemData.isPopular && (
                <div className='absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                  Popular
                </div>
              )}

              {/* Favorite button */}
              <button className='absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-2 rounded-full transition-colors'>
                <Heart
                  className={`h-5 w-5 ${
                    hoveredItem === itemData.id
                      ? "text-red-500 fill-red-500"
                      : "text-white"
                  }`}
                />
              </button>

              {/* Type badge */}
              <div
                className={`absolute bottom-4 right-4 badge ${
                  itemData.type === "Breakfast"
                    ? "badge-breakfast"
                    : itemData.type === "Lunch"
                    ? "badge-lunch"
                    : "badge-dinner"
                }`}
              >
                {itemData.type}
              </div>
            </div>

            <div className='p-5'>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='text-xl font-bold'>{itemData.name}</h3>
                <span className='font-bold text-xl text-red-600'>
                  ${itemData.price}
                </span>
              </div>

              {itemData.description && (
                <p className='text-gray-600 text-sm mb-3'>
                  {itemData.description}
                </p>
              )}

              <div className='flex justify-between items-center'>
                <div className='flex'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-5 w-5 text-amber-400 fill-amber-400'
                    />
                  ))}
                </div>
                <button
                  className='btn btn-primary px-4 py-1.5 text-sm flex items-center gap-1'
                  onClick={() => handleAddToCart(itemData)}
                >
                  <ShoppingCart className='h-4 w-4' />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
