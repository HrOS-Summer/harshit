import React, { useState, useEffect } from 'react';
import { Heart, Star, Gift, Sparkles } from 'lucide-react';
import "./app.css"

const BirthdayWebsite = () => {
  const [candlesLit, setCandlesLit] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [turnedPages, setTurnedPages] = useState([]);

  // Auto-light candles animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCandlesLit(prev => {
        if (prev < 5) return prev + 1;
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  // Birthday wishes for the greeting card
  const wishes = [
    {
      title: "Happy 24th Birthday!",
      message: "Another year of amazing adventures, incredible memories, and endless laughter! You bring so much joy to everyone around you. Here's to celebrating the wonderful person you've become and all the exciting chapters yet to be written in your story.",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      title: "Celebrating You!",
      message: "Your friendship means the world to me. Thank you for being such an incredible person who lights up every room you enter! Your kindness, humor, and genuine spirit make this world a brighter place. I'm so grateful to have you as my best friend.",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      bgColor: "from-yellow-50 to-amber-50"
    },
    {
      title: "Here's to 24!",
      message: "May this new year bring you countless blessings, exciting opportunities, and all the happiness your heart can hold! I hope every dream you've been nurturing comes true and that this year surprises you with beautiful moments and wonderful experiences.",
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      title: "Best Friend Forever!",
      message: "Cheers to another year of inside jokes, spontaneous adventures, and being absolutely amazing. You deserve all the best things in life! Thank you for being my partner in crime, my shoulder to lean on, and my source of endless laughter. Here's to many more years of friendship!",
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
      bgColor: "from-blue-50 to-cyan-50"
    }
  ];

  const turnPage = (pageIndex) => {
    setTurnedPages(prev => {
      if (prev.includes(pageIndex)) {
        return prev.filter(p => p !== pageIndex);
      } else {
        return [...prev, pageIndex];
      }
    });
  };

  const nextPage = () => {
    if (currentPage < wishes.length - 1) {
      turnPage(currentPage);
      setTimeout(() => setCurrentPage(currentPage + 1), 400);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      turnPage(currentPage - 1);
      setTimeout(() => setCurrentPage(currentPage - 1), 400);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-orange-200 to-yellow-200 overflow-x-hidden">
      {/* Google Fonts */}
      <style>
        
      </style>

      {/* Floating confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti absolute w-3 h-3 bg-gradient-to-r from-pink-400 to-yellow-400 rounded"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Homepage Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        {/* Floating sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sparkle absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}

        {/* Happy Birthday Banner */}
        <div className="text-center mb-8 float-animation">
          <h1 className="dancing-script text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 mb-4">
            Happy Birthday!
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <Heart className="w-8 h-8 text-pink-500 bounce-animation" />
            <p className="poppins text-2xl md:text-3xl font-semibold text-gray-700">
              To My Amazing Best Friend
            </p>
            <Heart className="w-8 h-8 text-pink-500 bounce-animation" />
          </div>
        </div>

        {/* Friend's Photo Placeholder */}
        <div className="relative mb-8 float-animation">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full flex items-center justify-center shadow-2xl border-8 border-white">
            {/* Replace this div with an actual img tag when you have the photo */}
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-4xl"><img src='/images/harshit.png'/></span>
              </div>
              <p className="poppins text-white font-medium">Harshit</p>
            </div>
          </div>
          {/* Decorative elements around photo */}
          <Star className="absolute -top-4 -right-4 w-12 h-12 text-yellow-400 bounce-animation" />
          <Heart className="absolute -bottom-4 -left-4 w-10 h-10 text-pink-400 float-animation" />
        </div>

        {/* Birthday Cake Animation */}
        <div className="text-center">
          <div className="relative inline-block">
            {/* Cake Base */}
            <div className="w-48 h-32 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-lg shadow-lg relative">
              {/* Cake layers */}
              <div className="absolute top-0 w-full h-4 bg-pink-400 rounded-t-lg"></div>
              <div className="absolute top-4 w-full h-4 bg-white"></div>
              <div className="absolute top-8 w-full h-4 bg-pink-400"></div>
              
              {/* Candles */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative">
                    <div className="w-2 h-8 bg-blue-300 rounded-t"></div>
                    {candlesLit > i && (
                      <div className="candle-flame absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-t from-orange-400 to-yellow-400 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Number 24 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="dancing-script text-4xl font-bold text-white drop-shadow-lg bounce-animation">
                  24
                </span>
              </div>
            </div>
          </div>
          
          <p className="poppins text-lg text-gray-600 mt-4 font-medium">
            Make a wish! 🎂✨
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-animation">
          <p className="poppins text-gray-600 mb-2">Scroll for more surprises!</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 bounce-animation"></div>
          </div>
        </div>
      </section>

      {/* Greeting Card Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full">
          <h2 className="dancing-script text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-12">
            Birthday Wishes
          </h2>
          
          {/* Realistic Book/Notebook */}
          <div className="book relative mx-auto max-w-3xl">
            <div className="relative w-full h-96 md:h-[500px] book-shadow rounded-r-lg">
              {/* Book Spine */}
              <div className="book-spine absolute left-0 top-0 w-6 h-full rounded-l-lg z-20"></div>
              
              {/* Book Pages Stack */}
              <div className="relative w-full h-full">
                {wishes.map((wish, index) => (
                  <div
                    key={index}
                    className={`page absolute inset-0 ${
                      turnedPages.includes(index) ? 'turned' : ''
                    }`}
                    style={{ zIndex: wishes.length - index }}
                  >
                    {/* Front of Page */}
                    <div className={`page-front bg-gradient-to-br ${wish.bgColor} rounded-r-lg shadow-lg border border-gray-200 p-8 md:p-12 relative overflow-hidden`}>
                      {/* Page texture overlay */}
                      <div className="page-texture absolute inset-0 opacity-30"></div>
                      
                      {/* Notebook lines */}
                      <div className="absolute inset-0 opacity-10">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="border-b border-blue-200"
                            style={{ marginTop: `${i * 20 + 60}px`, height: '20px' }}
                          />
                        ))}
                      </div>
                      
                      {/* Red margin line */}
                      <div className="absolute left-16 top-0 bottom-0 w-px bg-red-300 opacity-30"></div>
                      
                      {/* Page content */}
                      <div className="relative z-10 h-full flex flex-col justify-center">
                        <div className="text-center mb-6">
                          {wish.icon}
                        </div>
                        
                        <h3 className="dancing-script text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                          {wish.title}
                        </h3>
                        
                        <p className="poppins text-base md:text-lg text-gray-700 leading-relaxed text-left pl-4 handwriting-style max-h-64 md:max-h-72 overflow-y-auto break-words overflow-wrap">
                          {wish.message}
                        </p>
                        
                        {/* Page number */}
                        <div className="absolute bottom-4 right-6 text-sm text-gray-400 poppins">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Click area to turn page */}
                      {index < wishes.length - 1 && (
                        <div 
                          className="absolute right-0 top-0 w-1/3 h-full cursor-pointer hover:bg-black hover:bg-opacity-5 transition-colors duration-200 rounded-r-lg flex items-center justify-end pr-4"
                          onClick={() => turnPage(index)}
                          title="Click to turn page"
                        >
                          <div className="text-gray-400 opacity-0 hover:opacity-100 transition-opacity">
                            →
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Back of Page (next page preview) */}
                    <div className={`page-back bg-gradient-to-br ${wishes[index + 1]?.bgColor || 'from-gray-50 to-gray-100'} rounded-r-lg shadow-lg border border-gray-200 p-8 md:p-12 relative overflow-hidden`}>
                      {index + 1 < wishes.length && (
                        <>
                          {/* Page texture overlay */}
                          <div className="page-texture absolute inset-0 opacity-30"></div>
                          
                          {/* Notebook lines */}
                          <div className="absolute inset-0 opacity-10">
                            {[...Array(20)].map((_, i) => (
                              <div
                                key={i}
                                className="border-b border-blue-200"
                                style={{ marginTop: `${i * 20 + 60}px`, height: '20px' }}
                              />
                            ))}
                          </div>
                          
                          {/* Red margin line */}
                          <div className="absolute left-16 top-0 bottom-0 w-px bg-red-300 opacity-30"></div>
                          
                          {/* Preview of next page content */}
                          <div className="relative z-10 h-full flex flex-col justify-center opacity-90">
                            <div className="text-center mb-6">
                              {wishes[index + 1].icon}
                            </div>
                            
                            <h3 className="dancing-script text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                              {wishes[index + 1].title}
                            </h3>
                            
                            <p className="poppins text-base md:text-lg text-gray-700 leading-relaxed text-left pl-4">
                              {wishes[index + 1].message}
                            </p>
                            
                            {/* Page number */}
                            <div className="absolute bottom-4 right-6 text-sm text-gray-400 poppins">
                              {index + 2}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Book binding holes */}
              <div className="absolute left-2 top-1/4 w-2 h-2 bg-gray-400 rounded-full opacity-50"></div>
              <div className="absolute left-2 top-1/2 w-2 h-2 bg-gray-400 rounded-full opacity-50"></div>
              <div className="absolute left-2 top-3/4 w-2 h-2 bg-gray-400 rounded-full opacity-50"></div>
            </div>
            
            {/* Navigation Instructions */}
            <div className="text-center mt-8">
              <p className="poppins text-gray-600 mb-4">
                Click on the right side of each page to turn it, or use the buttons below
              </p>
              <br />
              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-6">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className={`poppins px-8 py-3 md:px-10 md:py-4 rounded-2xl font-medium transition-all duration-300 ${
                    currentPage === 0 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-105 shadow-lg cursor-pointer'
                  }`}
                >
                  ← Previous Page
                </button>
                
                <button
                  onClick={nextPage}
                  disabled={currentPage === wishes.length - 1}
                  className={`poppins px-8 py-3 md:px-10 md:py-4 rounded-2xl font-medium transition-all duration-300 ${
                    currentPage === wishes.length - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 shadow-lg cursor-pointer'
                  }`}
                >
                  Next Page →
                </button>
              </div>
              
              {/* Page indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {wishes.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i <= currentPage ? 'bg-pink-500 scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h3 className="dancing-script text-4xl font-bold text-gray-800 mb-4">
              Have the Most Amazing Day!
            </h3>
            <p className="poppins text-lg text-gray-600 mb-6">
              Hope your 24th birthday is filled with love, laughter, and unforgettable moments!
            </p>
            <div className="flex justify-center space-x-4">
              <Heart className="w-8 h-8 text-red-500 bounce-animation" />
              <Gift className="w-8 h-8 text-blue-500 float-animation" />
              <Star className="w-8 h-8 text-yellow-500 sparkle" />
            </div>
          </div>
        </div>
      </section>
      <br /><br />
    </div>
  );
};

export default BirthdayWebsite;