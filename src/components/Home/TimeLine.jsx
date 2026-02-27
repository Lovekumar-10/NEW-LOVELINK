import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const experiences = [
    {
      title: "Curation",
      tagline: "The Art of Selection",
      desc: "We don't just match; we curate. Access a circle of elite individuals who mirror your ambition.",
      // High-end aesthetic: Luxury Watch/Fashion
       img: "./Curtion.jpeg", 
     
    },
    {
      title: "Connection",
      tagline: "Beyond the Digital",
      desc: "Our interface is designed for depth. Engage in meaningful dialogue within a space built for privacy.",
      // High-end aesthetic: Champagne/Fine Dining
      img: "./Connection.png", 
    },
    {
      title: "Chemistry",
      tagline: "The Spark of Reality",
      desc: "Transition from online fascination to real-world magic at partner luxury venues.",
      // High-end aesthetic: Evening City/Romantic
      img: "./Chemistry.png", 
    },
    {
      title: "Commitment",
      tagline: "A Legacy of Love",
      desc: "Where fleeting moments evolve into lasting legacies. Your final destination.",
      // High-end aesthetic: Luxury Details
      img: "./Comitment.jpeg", 
    }
  ];

  return (
    <section className="relative w-full py-16 md:px-15 md:py-32 bg-[var(--bg-main)] overflow-hidden font-[var(--ff-primary)] min-h-screen flex flex-col justify-center">
      
      {/* --- VISIBLE DECORATIVE OVERLAYS --- */}
      {/* Floating high-end imagery - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -20 }}
        whileInView={{ opacity: 1, x: -20, rotate: -15 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 z-0 pointer-events-none"
      >
        <img 
          src="https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?auto=compress&cs=tinysrgb&w=400" 
          className="w-48 md:w-80 h-auto rounded-[var(--radius-lg)] shadow-xl "
          alt="deco-top"
        />
      </motion.div>
      
      {/* Floating high-end imagery - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 20 }}
        whileInView={{ opacity: 1, x: 20, rotate: 10 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 right-0 z-0 pointer-events-none"
      >
        <img 
          src="./deco-bottom.png" 
          className="w-64 md:w-96 h-auto rounded-[var(--radius-lg)] shadow-xl "
          alt="deco-bottom"
        />
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-10 relative z-10 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[var(--color-accent-base)] tracking-[0.4em] uppercase text-[10px]  mb-4 font-[var(--fw-bold)]"
          >
            The Love<span className="text-[var(--color-primary)]">Link</span> Experience
          </motion.p>
          <h2 className="text-4xl md:text-[var(--fs-h1)] font-[var(--fw-bold)] text-[var(--text-primary)] leading-tight italic font-serif">
            A Journey of <span className="text-[var(--color-primary)]">Refinement</span>
          </h2>
        </div>

        {/* --- THE FRAMELESS TIMELINE --- */}
        <div className="flex flex-col lg:flex-row border-y border-[var(--color-primary-2)] bg-white/30 backdrop-blur-sm">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
              className={`flex-1 min-w-full lg:min-w-0 p-8 md:p-12 flex flex-col items-center text-center transition-all duration-500
                ${index !== experiences.length - 1 ? 'lg:border-r border-b lg:border-b-0 border-[var(--color-primary-2)]' : ''}
              `}
            >
              {/* Image Circle */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 md:mb-10 group">
                <div className="absolute inset-0 rounded-full border border-[var(--color-primary)] rotate-45 group-hover:rotate-180 transition-transform duration-1000" />
                <div className="w-full h-full rounded-full overflow-hidden p-2">
                   <img 
                    src={item.img} 
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    alt={item.title}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <span className="text-[var(--color-primary)] text-[10px] md:text-[var(--fs-small)] font-[var(--fw-semibold)] tracking-widest uppercase">
                  {item.tagline}
                </span>
                <h3 className="text-2xl md:text-[var(--fs-h3)] text-[var(--text-primary)] font-[var(--fw-bold)]">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm md:text-[var(--fs-body)] leading-relaxed max-w-[280px] mx-auto font-light">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Decorative Element */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                className="w-12 h-[1px] bg-[var(--color-accent)] mt-8"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-[var(--color-primary-2)] to-transparent opacity-20 pointer-events-none z-0" />
    </section>
  );
};

export default Timeline;