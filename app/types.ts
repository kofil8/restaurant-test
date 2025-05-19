export type FoodItem = {
  id: number
  name: string
  type: "Breakfast" | "Lunch" | "Dinner" | "Special"
  rating: number
  price: number
  image: string
}

export type TeamMember = {
  id: number
  name: string
  role: string
  image: string
}

export type Partner = {
  id: number
  name: string
  logo: string
}
