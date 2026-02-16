// Product data with images from picsum.photos
const products = [
  { id: 1, name: 'Wireless Headphones Pro', price: 199.99, image: 'https://picsum.photos/seed/headphones/400/400', category: 'Electronics' },
  { id: 2, name: 'Minimal Leather Watch', price: 149.99, image: 'https://picsum.photos/seed/watch/400/400', category: 'Accessories' },
  { id: 3, name: 'Running Sneakers Ultra', price: 129.99, image: 'https://picsum.photos/seed/sneakers/400/400', category: 'Footwear' },
  { id: 4, name: 'Canvas Backpack', price: 79.99, image: 'https://picsum.photos/seed/backpack/400/400', category: 'Bags' },
  { id: 5, name: 'Smart Fitness Tracker', price: 89.99, image: 'https://picsum.photos/seed/tracker/400/400', category: 'Electronics' },
  { id: 6, name: 'Polarized Sunglasses', price: 59.99, image: 'https://picsum.photos/seed/sunglasses/400/400', category: 'Accessories' },
  { id: 7, name: 'Ceramic Coffee Mug Set', price: 34.99, image: 'https://picsum.photos/seed/mug/400/400', category: 'Home' },
  { id: 8, name: 'Bluetooth Speaker Mini', price: 49.99, image: 'https://picsum.photos/seed/speaker/400/400', category: 'Electronics' },
  { id: 9, name: 'Yoga Mat Premium', price: 44.99, image: 'https://picsum.photos/seed/yogamat/400/400', category: 'Fitness' },
  { id: 10, name: 'Stainless Water Bottle', price: 29.99, image: 'https://picsum.photos/seed/bottle/400/400', category: 'Accessories' },
  { id: 11, name: 'Mechanical Keyboard RGB', price: 119.99, image: 'https://picsum.photos/seed/keyboard/400/400', category: 'Electronics' },
  { id: 12, name: 'Denim Jacket Classic', price: 89.99, image: 'https://picsum.photos/seed/jacket/400/400', category: 'Fashion' },
]

// Generate a seeded random discount so it stays consistent per product
function getDiscount(productId) {
  const seed = productId * 7 + 3
  return 10 + (seed % 41) // 10% to 50%
}

// Attach discount info to each product
const productsWithDiscount = products.map(p => {
  const discount = getDiscount(p.id)
  const discountedPrice = +(p.price * (1 - discount / 100)).toFixed(2)
  return { ...p, discount, discountedPrice }
})

export default productsWithDiscount
