

export const productCategories = ["All", "Pipes", "Fixtures", "Tools", "Fittings", "Accessories"]

export const products = [
  {
    id: 1,
    name: "Premium Copper Pipes",
    description:
      "High-quality copper pipes for residential and commercial use. Durable, corrosion-resistant, and perfect for water supply lines.",
    price: "$45.99",
    image: "/copper-pipes-plumbing.png",
    rating: 4.8,
    isNew: true,
    category: "Pipes",
    features: ["Corrosion resistant", "Long-lasting durability", "Easy installation", "Lead-free construction"],
    specifications: {
      Material: "Pure Copper",
      Diameter: "1/2 inch",
      Length: "10 feet",
      "Pressure Rating": "200 PSI",
      "Temperature Range": "-40°F to 400°F",
    },
    inStock: true,
    stockCount: 150,
  },
  {
    id: 2,
    name: "Modern Faucet Set",
    description:
      "Sleek and durable faucet with water-saving technology. Features ceramic disc valves and brushed nickel finish.",
    price: "$129.99",
    image: "/modern-kitchen-faucet.png",
    rating: 4.9,
    isHot: true,
    category: "Fixtures",
    features: ["Water-saving aerator", "Ceramic disc valves", "Single handle operation", "Easy installation"],
    specifications: {
      Finish: "Brushed Nickel",
      "Mount Type": "Single Hole",
      "Flow Rate": "1.5 GPM",
      "Valve Type": "Ceramic Disc",
      Warranty: "Lifetime Limited",
    },
    inStock: true,
    stockCount: 75,
  },
  {
    id: 3,
    name: "Professional Wrench Kit",
    description:
      "Complete set of professional-grade plumbing wrenches. Includes pipe wrenches, basin wrenches, and adjustable wrenches.",
    price: "$89.99",
    image: "/plumbing-wrench-tools.png",
    rating: 4.7,
    category: "Tools",
    features: [
      "Drop-forged steel construction",
      "Comfortable grip handles",
      "Multiple sizes included",
      "Professional grade quality",
    ],
    specifications: {
      Material: "Drop-forged Steel",
      "Set Includes": "6 Wrenches",
      Sizes: '8", 10", 12", 14", 18", 24"',
      "Handle Type": "Cushion Grip",
      Weight: "12 lbs",
    },
    inStock: true,
    stockCount: 45,
  },
  {
    id: 4,
    name: "Luxury Shower Head",
    description:
      "Multi-function shower head with adjustable pressure settings. Features rainfall, massage, and mist modes.",
    price: "$79.99",
    image: "/luxury-shower-head.png",
    rating: 4.6,
    category: "Fixtures",
    features: ["Multiple spray patterns", "Adjustable pressure", "Easy-clean nozzles", "Water-saving design"],
    specifications: {
      "Spray Patterns": "5 Functions",
      "Flow Rate": "2.5 GPM",
      Finish: "Chrome",
      Connection: "1/2 inch NPT",
      Diameter: "8 inches",
    },
    inStock: true,
    stockCount: 120,
  },
  {
    id: 5,
    name: "PVC Pipe Fittings",
    description:
      "Durable PVC fittings for various plumbing applications. Includes elbows, tees, couplings, and reducers.",
    price: "$24.99",
    image: "/pvc-pipe-fittings.png",
    rating: 4.5,
    isNew: true,
    category: "Fittings",
    features: ["Chemical resistant", "Easy to install", "Leak-proof joints", "Multiple sizes available"],
    specifications: {
      Material: "PVC Schedule 40",
      "Size Range": '1/2" to 4"',
      "Pressure Rating": "200 PSI",
      "Temperature Range": "32°F to 140°F",
      Package: "Assorted Pack",
    },
    inStock: true,
    stockCount: 200,
  },
  {
    id: 6,
    name: "Drain Snake Tool",
    description: "Professional drain cleaning tool for tough clogs. Features flexible steel cable with cutting head.",
    price: "$59.99",
    image: "/drain-snake-plumbing-tool.png",
    rating: 4.8,
    category: "Tools",
    features: ["Flexible steel cable", "Cutting head attachment", "Easy grip handle", "Professional grade"],
    specifications: {
      "Cable Length": "25 feet",
      "Cable Diameter": "1/4 inch",
      Material: "High Carbon Steel",
      "Handle Type": "Ergonomic Grip",
      "Max Pipe Size": "4 inches",
    },
    inStock: true,
    stockCount: 85,
  },
]

export function getProductById(id) {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category) {
  if (category === "All") return products
  return products.filter((product) => product.category === category)
}

export function searchProducts(query) {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery),
  )
}
