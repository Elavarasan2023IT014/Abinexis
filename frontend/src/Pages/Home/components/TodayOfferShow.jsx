import React, { useState, useEffect } from 'react';
import { Star, Clock, Heart, ShoppingCart, Tag, Zap, TrendingUp } from 'lucide-react';

const TodayOfferShow = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const [likedOffers, setLikedOffers] = useState(new Set());

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const todayOffers = [
    {
      id: 1,
      title: "Premium Wireless Earbuds",
      originalPrice: 299,
      offerPrice: 149,
      discount: 50,
      rating: 4.9,
      reviews: 2847,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
      badge: "Flash Sale",
      category: "Electronics",
      soldCount: 1247,
      totalStock: 2000,
      features: ["Noise Cancellation", "24H Battery", "Wireless Charging"]
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      originalPrice: 599,
      offerPrice: 399,
      discount: 33,
      rating: 4.8,
      reviews: 1923,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      badge: "Limited Time",
      category: "Wearables",
      soldCount: 892,
      totalStock: 1500,
      features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant"]
    },
    {
      id: 3,
      title: "Designer Leather Bag",
      originalPrice: 450,
      offerPrice: 279,
      discount: 38,
      rating: 4.7,
      reviews: 856,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      badge: "Best Seller",
      category: "Fashion",
      soldCount: 634,
      totalStock: 800,
      features: ["Genuine Leather", "Multiple Compartments", "Lifetime Warranty"]
    },
    {
      id: 4,
      title: "Professional Camera Lens",
      originalPrice: 899,
      offerPrice: 649,
      discount: 28,
      rating: 4.9,
      reviews: 1456,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      badge: "Pro Choice",
      category: "Photography",
      soldCount: 423,
      totalStock: 600,
      features: ["Ultra-Wide Angle", "Image Stabilization", "Weather Sealed"]
    },
    {
      id: 5,
      title: "Luxury Skincare Set",
      originalPrice: 199,
      offerPrice: 129,
      discount: 35,
      rating: 4.8,
      reviews: 2341,
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop",
      badge: "Trending",
      category: "Beauty",
      soldCount: 1876,
      totalStock: 2500,
      features: ["Organic Ingredients", "Anti-Aging", "Dermatologist Tested"]
    },
    {
      id: 6,
      title: "Smart Home Speaker",
      originalPrice: 249,
      offerPrice: 179,
      discount: 28,
      rating: 4.6,
      reviews: 1098,
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=300&fit=crop",
      badge: "New Arrival",
      category: "Smart Home",
      soldCount: 756,
      totalStock: 1200,
      features: ["Voice Control", "360° Sound", "Smart Integration"]
    }
  ];

  const toggleLike = (offerId) => {
    setLikedOffers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(offerId)) {
        newSet.delete(offerId);
      } else {
        newSet.add(offerId);
      }
      return newSet;
    });
  };

  const getStockPercentage = (soldCount, totalStock) => {
    return (soldCount / totalStock) * 100;
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Flash Sale': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'Limited Time': return 'bg-gradient-to-r from-orange-500 to-amber-500';
      case 'Best Seller': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'Pro Choice': return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      case 'Trending': return 'bg-gradient-to-r from-var(--primary-mint) to-var(--primary-turquoise)';
      case 'New Arrival': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <section id ='today-offers'className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[var(--primary-mint)] to-[var(--primary-turquoise)] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-ocean)] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-[var(--primary-mint)]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Today's <span className="bg-gradient-to-r from-[var(--primary-mint)] to-[var(--primary-turquoise)] bg-clip-text text-transparent">Hot Deals</span>
            </h2>
            <Zap className="w-8 h-8 text-[var(--primary-mint)]" />
          </div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Unbelievable offers that won't last long. Grab these exclusive deals before they're gone!
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-[var(--primary-mint)]">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-semibold">Offer Ends In:</span>
            </div>
            <div className="flex gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-gray-800 rounded-lg px-4 py-2 min-w-16">
                  <div className="text-2xl font-bold text-[var(--primary-mint)]">{value.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-400 capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Deal Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 mb-16 border border-gray-700 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  🔥 MEGA DEAL
                </span>
                <span className="text-[var(--primary-mint)] text-sm font-semibold">
                  70% OFF
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Premium Wireless Earbuds Pro Max
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Experience crystal-clear audio with our flagship wireless earbuds featuring advanced noise cancellation and 48-hour battery life.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-white font-semibold">4.9</span>
                  <span className="text-gray-400">(3,847 reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[var(--primary-mint)]">$89</span>
                <span className="text-2xl text-gray-400 line-through">$299</span>
                <button className="bg-gradient-to-r from-[var(--primary-mint)] to-[var(--primary-turquoise)] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[var(--primary-mint)]/25 transition-all duration-300 transform hover:scale-105">
                  Claim Deal Now
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=400&fit=crop"
                alt="Featured Deal"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-3">
                <TrendingUp className="w-6 h-6 text-[var(--primary-mint)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {todayOffers.map((offer) => (
            <div key={offer.id} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl hover:shadow-[var(--primary-mint)]/10 transition-all duration-500 transform hover:-translate-y-2 group">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${getBadgeColor(offer.badge)} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                  {offer.badge}
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  -{offer.discount}%
                </div>

                {/* Heart Icon */}
                <button 
                  onClick={() => toggleLike(offer.id)}
                  className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors duration-300"
                >
                  <Heart 
                    className={`w-5 h-5 ${likedOffers.has(offer.id) ? 'text-red-500 fill-current' : 'text-white'}`}
                  />
                </button>

                {/* Category Tag */}
                <div className="absolute bottom-4 left-4 bg-[var(--primary-mint)]/20 backdrop-blur-sm border border-[var(--primary-mint)]/30 text-[var(--primary-mint)] px-3 py-1 rounded-full text-sm font-semibold">
                  <Tag className="w-4 h-4 inline mr-1" />
                  {offer.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--primary-mint)] transition-colors duration-300">
                  {offer.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(offer.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-white font-semibold">{offer.rating}</span>
                  <span className="text-gray-400 text-sm">({offer.reviews.toLocaleString()})</span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {offer.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-lg text-xs">
                        {feature}
                      </span>
                    ))}
                    {offer.features.length > 2 && (
                      <span className="bg-gray-800 text-[var(--primary-mint)] px-2 py-1 rounded-lg text-xs">
                        +{offer.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stock Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Stock: {offer.soldCount}/{offer.totalStock}</span>
                    <span className="text-[var(--primary-mint)]">{Math.round(getStockPercentage(offer.soldCount, offer.totalStock))}% sold</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[var(--primary-mint)] to-[var(--primary-turquoise)] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${getStockPercentage(offer.soldCount, offer.totalStock)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-[var(--primary-mint)]">
                      ${offer.offerPrice}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ${offer.originalPrice}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">You Save</div>
                    <div className="text-green-400 font-bold">
                      ${offer.originalPrice - offer.offerPrice}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-[var(--primary-mint)] to-[var(--primary-turquoise)] text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--primary-mint)]/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TodayOfferShow;