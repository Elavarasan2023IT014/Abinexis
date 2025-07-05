import React, { useState } from 'react';
import ProductCard from './ProductCard';

const CategoriesSection = () => {
  const categories = [
    {
      name: "Electronics",
      count: 245,
      products: [
        {
          id: 1,
          name: "Wireless Headphones Pro",
          price: 299,
          originalPrice: 399,
          rating: 5,
          reviews: 128,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
          badge: "Best Seller"
        },
        {
          id: 2,
          name: "Smart Watch Series X",
          price: 599,
          rating: 4,
          reviews: 89,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
          badge: "New"
        },
        {
          id: 3,
          name: "Bluetooth Speaker",
          price: 149,
          originalPrice: 199,
          rating: 4,
          reviews: 67,
          image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop"
        },
        {
          id: 10,
          name: "Gaming Laptop Pro",
          price: 1299,
          originalPrice: 1599,
          rating: 5,
          reviews: 234,
          image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
          badge: "Gaming"
        },
        {
          id: 11,
          name: "4K Webcam Ultra",
          price: 179,
          rating: 4,
          reviews: 156,
          image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
          badge: "Popular"
        },
        {
          id: 12,
          name: "Wireless Charging Pad",
          price: 49,
          originalPrice: 79,
          rating: 4,
          reviews: 89,
          image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      name: "Fashion",
      count: 189,
      products: [
        {
          id: 4,
          name: "Designer Leather Jacket",
          price: 299,
          originalPrice: 450,
          rating: 5,
          reviews: 156,
          image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
          badge: "Sale"
        },
        {
          id: 5,
          name: "Premium Sneakers",
          price: 179,
          rating: 4,
          reviews: 203,
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
        },
        {
          id: 6,
          name: "Classic Wrist Watch",
          price: 459,
          rating: 5,
          reviews: 78,
          image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop",
          badge: "Luxury"
        },
        {
          id: 13,
          name: "Designer Sunglasses",
          price: 229,
          originalPrice: 329,
          rating: 5,
          reviews: 167,
          image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
          badge: "Trending"
        },
        {
          id: 14,
          name: "Luxury Handbag",
          price: 399,
          rating: 4,
          reviews: 112,
          image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop",
          badge: "Premium"
        },
        {
          id: 15,
          name: "Casual Denim Jeans",
          price: 89,
          originalPrice: 129,
          rating: 4,
          reviews: 298,
          image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      name: "Home & Living",
      count: 134,
      products: [
        {
          id: 7,
          name: "Modern Table Lamp",
          price: 89,
          originalPrice: 129,
          rating: 4,
          reviews: 45,
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
        },
        {
          id: 8,
          name: "Decorative Plant Pot",
          price: 39,
          rating: 4,
          reviews: 92,
          image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
          badge: "Eco-Friendly"
        },
        {
          id: 9,
          name: "Luxury Throw Pillow",
          price: 69,
          rating: 5,
          reviews: 134,
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
        },
        {
          id: 16,
          name: "Minimalist Wall Art",
          price: 129,
          originalPrice: 179,
          rating: 5,
          reviews: 78,
          image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&h=300&fit=crop",
          badge: "Artistic"
        },
        {
          id: 17,
          name: "Scented Candle Set",
          price: 59,
          rating: 4,
          reviews: 156,
          image: "https://images.unsplash.com/photo-1602874801006-8c8b7d7e0b15?w=400&h=300&fit=crop",
          badge: "Relaxing"
        },
        {
          id: 18,
          name: "Wooden Coffee Table",
          price: 349,
          originalPrice: 499,
          rating: 5,
          reviews: 89,
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
          badge: "Handcrafted"
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="categories" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Shop by <span className="bg-gradient-to-r from-[#52B69A] to-[#34A0A4] bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our curated collections of premium products across various categories
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-[#52B69A] to-[#34A0A4] text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeCategory].products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-transparent border-2 border-[#52B69A] text-[#52B69A] rounded-full font-semibold hover:bg-[#52B69A] hover:text-white transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;