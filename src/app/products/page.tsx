"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const products = [
  { id: 1, name: "Product 1", description: "Description for Product 1" },
  { id: 2, name: "Product 2", description: "Description for Product 2" },
  { id: 3, name: "Product 3", description: "Description for Product 3" },
]

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="min-h-screen bg-black text-blue-300 py-20">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={`https://source.unsplash.com/random/400x300?product=${product.id}`}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-400">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedProduct && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 rounded-lg p-8 max-w-2xl w-full"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <p className="text-gray-400 mb-4">{selectedProduct.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

