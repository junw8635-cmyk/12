import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Github, Twitter, Linkedin, Mail, AlignRight } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl font-display font-medium tracking-wide"
        >
          JUN.W
        </motion.div>
        
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-[#a0a0a0]">
          {['个人介绍', '产品案例', 'AI视频案例', '合作流程'].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${['about', 'products', 'ai-video', 'process'][i]}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors"
        >
          Get in touch <ArrowUpRight size={16} />
        </motion.button>
        
        <button className="md:hidden text-white">
          <AlignRight size={24} />
        </button>
      </div>
    </nav>
  );
}

const HeroBanner = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-end pt-32 pb-20 overflow-hidden group">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <motion.div
          animate={{ 
            scale: [1.05, 1.15, 1.05],
            rotate: [0, 2, -1, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="w-full h-full origin-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="3D Abstract Background"
            className="w-full h-full object-cover opacity-50 mix-blend-screen"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#050505] via-[#050505]/20 to-transparent opacity-90" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-accent-orange uppercase tracking-[0.2em] text-sm font-medium">亚马逊高级设计师</span>
              <span className="w-10 h-[1px] bg-white/20"></span>
              <span className="text-[#a0a0a0] text-xs tracking-[0.3em] uppercase hidden sm:inline-block">Senior Amazon Designer</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Decorative background text */}
              <span className="absolute -left-8 -top-12 text-[15vw] lg:text-[14rem] font-display font-bold text-white/[0.02] blur-[2px] select-none z-0 tracking-tighter pointer-events-none">
                CREATOR
              </span>
              <h1 className="font-display text-[15vw] lg:text-[10rem] leading-[0.85] tracking-tight mb-8 relative z-10 drop-shadow-2xl">
                Tim<span className="text-accent-orange">.</span>
              </h1>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-8 lg:gap-12 mt-12 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="flex flex-col">
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  01 <span className="text-white/20">/</span> 3D RENDERING
                </span>
                <span className="text-sm font-medium tracking-wide">精通3d渲染</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  02 <span className="text-white/20">/</span> AI CREATION
                </span>
                <span className="text-sm font-medium tracking-wide">AI创作</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  03 <span className="text-white/20">/</span> AI VIDEO
                </span>
                <span className="text-sm font-medium tracking-wide">AI视频制作</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-start lg:justify-end lg:pr-4 pb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="max-w-md glass-panel p-8 md:p-10 backdrop-blur-2xl bg-white/[0.03] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden group/card hover:bg-white/[0.05] transition-colors duration-500 rounded-3xl">
              {/* Background decoration in card */}
              <div className="absolute -top-10 -right-10 text-[8rem] font-display font-black text-white/[0.02] select-none pointer-events-none group-hover/card:scale-110 transition-transform duration-700">08</div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 blur-[50px] rounded-full pointer-events-none"></div>

              <h3 className="text-3xl md:text-4xl font-display font-medium mb-2 text-gradient relative z-10 tracking-wide">
                8 YEARS
              </h3>
              <div className="text-[10px] tracking-[0.2em] text-[#a0a0a0] mb-8 relative z-10 uppercase flex items-center gap-3">
                <span className="text-accent-purple tracking-[0.3em]">EXPERIENCE</span> <span className="text-white/20">|</span> <span className="tracking-[0.1em]">8年设计经验</span>
              </div>
              
              <div className="text-[#a0a0a0] leading-relaxed mb-10 relative z-10 space-y-6">
                <p className="text-[14px]">Over <span className="text-white font-medium">100</span> clients served.<br/><span className="mt-2 block tracking-wider">服务超100家企业，擅长精品。</span></p>
                
                <div>
                  <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-3 block">Service Categories</span>
                  <p className="text-[13px] leading-loose tracking-widest">
                    3C户外 <span className="text-white/20 px-1">/</span> 
                    3C电子 <span className="text-white/20 px-1">/</span> 
                    宠物 <span className="text-white/20 px-1">/</span> 
                    家居收纳 <span className="text-white/20 px-1">/</span> 
                    室内家具
                  </p>
                </div>
              </div>
              
              <button className="flex items-center justify-between group-hover/card:gap-4 gap-3 text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white text-sm tracking-widest transition-all duration-300 w-full hover:text-black uppercase relative z-10">
                <span>查看作品集</span>
                <ArrowUpRight size={18} className="opacity-70 group-hover/card:opacity-100 transition-opacity" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ScrollRevealImage = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className="absolute inset-0 z-0 origin-center">
       <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" alt="Abstract 3D" />
    </motion.div>
  );
};

const BentoGrid = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-[0.2em] text-accent-purple mb-4">Behind the Designs</h2>
          <h3 className="text-4xl md:text-5xl font-display mb-16 max-w-2xl leading-tight">
            Shaping experiences that make life simpler.
          </h3>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={0.1} className="md:col-span-2 glass-panel p-8 md:p-12 h-[400px] relative overflow-hidden group">
            <ScrollRevealImage />
            <div className="relative z-10 flex flex-col justify-between h-full pointer-events-none">
              <div className="text-xl font-medium tracking-wide">Design with Purpose</div>
              <p className="text-gray-300 max-w-md">Every pixel serves a function. I blend strategy with visual aesthetics to create products that people actually want to use.</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="glass-panel p-8 h-[400px] flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="relative z-10">
              <h4 className="text-5xl font-display font-light mb-2">12+</h4>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="relative z-10 mt-auto">
              <p className="text-sm text-gray-300 leading-relaxed">Working with startups and enterprise clients worldwide.</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3} className="glass-panel p-8 aspect-square md:aspect-auto md:h-[400px] relative overflow-hidden group">
             <div className="absolute inset-0 z-0 bg-[#111]">
                 <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 grayscale mix-blend-overlay group-hover:grayscale-0 transition-all duration-700" alt="Setup" />
             </div>
             <div className="relative z-10 flex h-full items-end">
               <h4 className="text-2xl font-display">Attention to Detail</h4>
             </div>
          </FadeIn>
          
          <FadeIn delay={0.4} className="md:col-span-2 glass-panel p-8 md:p-12 h-[400px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center overflow-hidden">
             <div className="text-center max-w-lg relative z-10">
                <h3 className="text-3xl font-display mb-4">Let's build something meaningful together.</h3>
                <p className="text-gray-400 mb-8">I'm currently accepting new projects and collaborations.</p>
                <button className="px-8 py-3 rounded-full bg-accent-orange text-white font-medium hover:bg-orange-600 transition-colors inline-block">
                  Schedule a call
                </button>
             </div>
             
             {/* Decorative glows */}
             <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent-purple/30 blur-[80px] rounded-full pointer-events-none" />
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-orange/20 blur-[80px] rounded-full pointer-events-none" />
          </FadeIn>
          
          {/* New Video Showcase Panel */}
          <FadeIn delay={0.5} className="md:col-span-3 glass-panel p-2 h-[450px] md:h-[600px] relative overflow-hidden group rounded-[2rem] border border-white/10 mt-6">
             <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 text-sm tracking-widest uppercase shadow-xl">
                 <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></div>
                 <span className="text-white/80 font-medium text-xs">Featured Video Reel</span>
               </div>
             </div>
             <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
               <div className="px-4 py-2 bg-black/60 text-white/50 text-[10px] uppercase font-mono tracking-widest backdrop-blur-xl rounded-full border border-white/10 hover:text-white transition-colors cursor-pointer">
                 Watch Full
               </div>
             </div>
             
             <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1621360841013-c76831f1ffea?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out brightness-75 group-hover:brightness-100" alt="Video cover" />
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-700">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/30 cursor-pointer shadow-[0_0_40px_rgba(255,164,28,0.1)] group-hover:shadow-[0_0_60px_rgba(255,164,28,0.3)] group-hover:bg-white group-hover:text-black transition-all duration-500 hover:scale-110">
                      <svg className="w-8 h-8 md:w-10 md:h-10 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                </div>
                
                {/* Playback Controls Mockup */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20 flex flex-col gap-3">
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-md cursor-pointer group/progress">
                     <div className="w-[45%] h-full bg-accent-orange relative rounded-full">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md scale-0 group-hover/progress:scale-100 transition-transform"></div>
                     </div>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono text-white/80">
                     <span>01:24 <span className="opacity-50">/ 03:00</span></span>
                     <div className="flex gap-4">
                        <svg className="w-5 h-5 cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9m-2.828 9.9a9 9 0 000-12.728m-2.828 9.9m-2.828-9.9M5 10v4a2 2 0 002 2h3l4 4V4l-4 4H7a2 2 0 00-2 2z" /></svg>
                        <svg className="w-5 h-5 cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                     </div>
                  </div>
                </div>
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const AnimatedProductShowcase = () => {
  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop", // Headphone
    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop", // Watch
    "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=800&auto=format&fit=crop", // Shoe
    "https://images.unsplash.com/photo-1528643604158-5423f5383506?q=80&w=800&auto=format&fit=crop", // Electronics
    "https://images.unsplash.com/photo-1583394837505-1814e4e59f15?q=80&w=800&auto=format&fit=crop", // Headphone 2
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop", // Watch 2
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 2s pause + 1s move
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-[600px] md:h-[800px] bg-[#050505] relative overflow-hidden flex items-center my-16 group/showcase border-y border-white/5">
        {/* Big Background Text */}
        <div className="absolute z-0 w-full text-center">
            <h2 className="text-[10vw] font-display font-bold text-white/[0.03] tracking-tighter whitespace-nowrap select-none uppercase">
              AMAZON LEVEL 3D
            </h2>
        </div>

        {/* Scrolling Images (Discrete steps) */}
        <div 
          className="product-track absolute flex items-center h-full z-10 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
             left: '50%',
             transform: `translateX(calc((var(--item-width) / -2) - (${currentIndex} * var(--item-width))))`
          }}
        >
           {images.map((src, i) => (
             <div key={i} className="flex-shrink-0 flex justify-center items-center px-4 md:px-8" style={{ width: 'var(--item-width)' }}>
                <img 
                  src={src} 
                  className={`w-full aspect-square object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white transition-all duration-[1000ms] ${i === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-20 mix-blend-luminosity'}`} 
                  alt="Product 3D Render" 
                />
             </div>
           ))}
        </div>

        {/* Video Playback Window */}
        <div className="absolute z-20 w-[260px] h-[180px] md:w-[380px] md:h-[240px] bottom-10 md:bottom-[15%] right-[5%] md:right-[15%] border border-white/20 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-black/60 backdrop-blur-xl group hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
           <div className="h-8 bg-white/10 flex items-center px-4 gap-2">
             <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
             <div className="ml-auto text-[10px] uppercase tracking-widest text-white/40">AI Video Render</div>
           </div>
           <div className="relative w-full h-[calc(100%-2rem)]">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 mix-blend-screen" alt="Video thumbnail" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-white group-hover:text-black transition-all group-hover:scale-110">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
              </div>
           </div>
        </div>

        {/* Realistic iPhone Box with Amazon Interface overlay */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] w-[280px] h-[580px] md:w-[320px] md:h-[650px] border-[10px] md:border-[12px] border-[#252528] rounded-[2.5rem] md:rounded-[3rem] z-20 overflow-visible"
             style={{
                boxShadow: '0 0 0 4000px rgba(5, 5, 5, 0.88), inset 0 2px 8px rgba(255,255,255,0.1)',
             }}>

             {/* Phone hardware buttons */}
             <div className="absolute top-[100px] -right-[13px] md:-right-[15px] w-[3px] md:w-[3px] h-[60px] bg-[#222] rounded-r-md"></div>
             <div className="absolute top-[80px] -left-[13px] md:-left-[15px] w-[3px] md:w-[3px] h-[40px] bg-[#222] rounded-l-md"></div>
             <div className="absolute top-[130px] -left-[13px] md:-left-[15px] w-[3px] md:w-[3px] h-[40px] bg-[#222] rounded-l-md"></div>
             <div className="absolute top-[40px] -left-[13px] md:-left-[15px] w-[3px] md:w-[3px] h-[20px] bg-[#222] rounded-l-md"></div>

             {/* Inner Screen Mask */}
             <div className="w-full h-full relative overflow-hidden rounded-[2rem] md:rounded-[2.4rem] bg-transparent">

                 {/* Phone bezel highlight */}
                 <div className="absolute inset-0 border-[2px] border-[#000] rounded-[2rem] md:rounded-[2.4rem] pointer-events-none z-50"></div>

                 {/* Dynamic Island */}
                 <div className="absolute top-2 inset-x-0 flex justify-center z-50">
                   <div className="w-[90px] h-[26px] bg-black rounded-full shadow-[0_0_2px_rgba(255,255,255,0.1)] flex items-center justify-end px-2.5">
                     <div className="w-2.5 h-2.5 bg-[#0c0c0c] rounded-full border border-white/10 shadow-inner"></div>
                   </div>
                 </div>

                 {/* Amazon UI - Header */}
                 <div className="absolute top-0 inset-x-0 h-[100px] bg-[#232f3e] z-40 flex flex-col justify-end pb-3 px-3 shadow-md font-sans">
                    <div className="flex justify-between items-center mb-2 px-1">
                        <span className="text-white font-bold text-lg tracking-tighter flex items-center"><span className="text-[22px] leading-none pt-1">amazon</span></span>
                        <div className="flex justify-end gap-3 text-white">
                            <svg className="w-5 h-5 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                    </div>
                    <div className="h-10 bg-white rounded-md flex items-center px-3 overflow-hidden shadow-inner w-full">
                        <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        <span className="text-gray-400 text-[14px]">Search Amazon</span>
                    </div>
                 </div>

                 {/* Top Fade overlay into product image */}
                 <div className="absolute top-[100px] inset-x-0 h-10 bg-gradient-to-b from-[#232f3e]/10 to-transparent pointer-events-none z-40"></div>

                 {/* Bottom Fade overlay from product image to UI */}
                 <div className="absolute bottom-[230px] inset-x-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-40"></div>

                 {/* Amazon UI - Bottom Area */}
                 <div className="absolute bottom-0 inset-x-0 h-[230px] bg-white z-40 px-4 pt-4 pb-6 shadow-[0_-15px_30px_rgba(0,0,0,0.1)] flex flex-col items-start font-sans">
                     <div className="flex text-[#FFA41C] text-[13px] mb-1">
                        ★★★★★ <span className="text-[#007185] text-[11px] ml-1 pt-0.5">(4,289)</span>
                     </div>
                     <p className="text-[#0f1111] leading-tight text-[14px] font-medium line-clamp-2 mb-2">High-End Product 3D Render - Amazon Quality Visuals for Conversion</p>
                     <div className="flex items-start mb-1">
                        <span className="text-[#B12704] text-[10px] font-bold mt-1">$</span>
                        <span className="text-[#B12704] text-xl font-bold font-sans">99</span>
                        <span className="text-[#B12704] text-[10px] font-bold mt-1">99</span>
                        <span className="text-[#565959] text-[11px] line-through ml-2 mt-1.5">$129.99</span>
                     </div>
                     <div className="text-[#007185] text-[11px] font-bold italic mb-3">prime <span className="text-[#565959] font-normal not-italic ml-1">Next-Day Delivery</span></div>

                     <div className="w-full mt-auto space-y-2.5">
                         <button className="w-full bg-[#FFD814] rounded-full py-3 text-[14px] text-[#0F1111] font-medium hover:bg-[#F7CA00] transition-colors shadow-sm">
                             Add to Cart
                         </button>
                         <button className="w-full bg-[#FFA41C] rounded-full py-3 text-[14px] text-[#0F1111] font-medium hover:bg-[#FA8900] transition-colors shadow-sm">
                             Buy Now
                         </button>
                     </div>
                 </div>
                 
                 {/* Internal phone glare overlay */}
                 <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl from-white/10 to-transparent pointer-events-none z-50 transform -rotate-12 translate-x-1/3 -translate-y-1/3 blur-sm"></div>
             </div>
        </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    { title: "Kine Studio", type: "Brand Identity Design", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=2000&auto=format&fit=crop" },
    { title: "Field Coffee Co.", type: "Packaging Design", img: "https://images.unsplash.com/photo-1587049352847-4d4b12b14185?q=80&w=2600&auto=format&fit=crop" },
    { title: "Nova Scene", type: "Digital Product", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2600&auto=format&fit=crop" },
    { title: "Liquid", type: "Motion & 3D", img: "https://images.unsplash.com/photo-1634804306598-f2eea3ea3d2f?q=80&w=2600&auto=format&fit=crop" }
  ];

  return (
    <section id="products" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <FadeIn>
             <h2 className="text-xs uppercase tracking-[0.2em] text-[#a0a0a0] mb-4">Featured Work</h2>
             <h3 className="text-4xl md:text-5xl font-display leading-tight max-w-lg tracking-widest">
               产品案例
             </h3>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-6 md:mt-0 max-w-xs">
            <p className="text-sm text-gray-400">A look at what I've been working on lately—designs, stories, and creative partnerships.</p>
          </FadeIn>
        </div>
      </div>
      
      <AnimatedProductShowcase />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl glass-panel mb-6 aspect-[4/3] relative">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-display font-medium mb-2">{proj.title}</h4>
                    <p className="text-[#a0a0a0] text-sm">{proj.type}</p>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gray-500 border border-gray-800 rounded-full px-3 py-1 mt-1">2024</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-xs uppercase tracking-[0.2em] text-accent-orange mb-4">Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-display mb-6">Simple Packages for Every Stage</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-16">Clear, flexible packages built to fit your brand's unique needs without any hidden fees.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              name: 'Starter', price: '$1990', desc: 'Perfect for early-stage startups',
              features: ['Brand Strategy Session', 'Logo Design', 'Basic Styleguide', '2 Revisions']
            },
            {
              name: 'Pro Plan', price: '$2990', desc: 'Comprehensive rebrand & web', highlighted: true,
              features: ['Full Brand Identity', 'Web Design (Up to 5 pages)', 'Social Media Kit', 'Unlimited Revisions', 'Priority Support']
            },
            {
              name: 'Enterprise', price: '$4990', desc: 'Complete ecosystem design',
              features: ['Everything in Pro', 'Design System Architecture', 'Webflow Development', 'Motion Guidelines', 'Monthly Consultations']
            }
          ].map((plan, i) => (
            <FadeIn key={i} delay={i * 0.1}>
               <div className={`rounded-3xl p-8 h-full flex flex-col ${plan.highlighted ? 'bg-gradient-to-b from-accent-orange to-[#b33e14] text-white transform md:-translate-y-4' : 'glass-panel text-white'}`}>
                  <div className="text-xs uppercase tracking-[0.2em] mb-4 opacity-80">{plan.name}</div>
                  <div className="text-5xl font-display font-light mb-4">{plan.price}</div>
                  <p className={`text-sm mb-8 ${plan.highlighted ? 'text-white/80' : 'text-gray-400'}`}>{plan.desc}</p>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className={plan.highlighted ? 'text-white' : 'text-gray-300'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-full font-medium text-sm transition-colors ${plan.highlighted ? 'bg-white text-accent-orange hover:bg-gray-100' : 'bg-white/10 hover:bg-white/20'}`}>
                    Get in touch
                  </button>
               </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 relative z-10 glass-panel mt-12 rounded-t-[3rem] border-x-0 border-b-0 mx-2 md:mx-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-display mb-8">Got a project?<br/>Let's talk.</h2>
            <button className="flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full font-medium hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              hello@junw.design
            </button>
          </div>
          <div className="flex flex-col md:items-end justify-end">
            <div className="flex gap-4 mb-4">
               <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Twitter size={20}/></a>
               <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Linkedin size={20}/></a>
               <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Github size={20}/></a>
            </div>
            <p className="text-gray-500 text-sm">Follow me on social media.</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>© 2024 JUN.W All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent-orange selection:text-white">
      {/* Background ambient gradients */}
      <div className="bg-ambient" />
      
      <Navbar />
      <HeroBanner />
      <BentoGrid />
      <ProjectsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

