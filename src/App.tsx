import React, { useState, useEffect, useCallback } from 'react';
import { Navigation } from './components/Navigation';
import { SlideLayout } from './components/SlideLayout';
import { Brain, Palette, TrendingUp, Users, Rocket, GitMerge, Award, ArrowUpRight, Search, Heart, Zap, RefreshCw } from 'lucide-react';

// --- EDITABLE CONTENT CONFIGURATION ---
// Modify the text inside these quotes to update the presentation instantly.
// TIP: Use backticks ` ` instead of quotes " " if you want to hit Enter and create multiple lines.
const CONTENT = {
  intro: {
    candidateName: "Candidate: Marco Ferrara",
    role: "ROLE: MARKETING MANAGER",
    mainTitle: "LOGIC",
    subTitle: "& MAGIC.",
    descriptionPart1: "The precision of an",
    highlight1: "Engineer",
    descriptionPart2: "The soul of a",
    highlight2: "Brand Marketer",
  },
  profile: {
    title: "WHO AM I?", 
    left: {
      title: "The Engineer",
      subtitle: "INDUSTRIAL ENGINEERING  • SUMMA CUM LAUDE",
      points: [
        "Data-driven decision making",
        "Budgeting & P&L ownership",
        "Obsession with efficiency"
      ]
    },
    right: {
      title: "The Marketer",
      subtitle: "10 YEARS BRAND LEADERSHIP",
      points: [
        "Led top profile projects (Como, LALIGA etc.)",
        "Award Winning Brand Campaigns & Activations",
        "Shaped new company strategies"
      ]
    },
    centerBadge: "Perfectly Balanced"
  },
  whyBS: {
    title: "Why Bending Spoons?",
    quote: "It's what Google used to be in the early 2010s.",
    quoteAuthor: "MARCO FERRARA",
    cards: [
      {
        title: "Elite League",
        subtitle: "Top 1% Talent Only",
        desc: "I don't just want to work; I want to compete in the Champion's League. Iron sharpens iron. I need to be surrounded by the best to become the best."
      },
      {
        title: "Velocity",
        subtitle: "Fast Paced",
        desc: "A unique-in-its-genre Italian unicorn. Highly fast-paced environments are where I find myself the most comfortable."
      },
      {
        title: "Intersection",
        subtitle: "The Perfect Mix",
        desc: "The role blends reasoning with brand magic. It is the exact intersection where my career has been heading."
      }
    ]
  },
  chaos: {
    bgWatermark: "DRIVE",
    title: "The \"Change Catalyst\"",
    headline: "Routine kills my",
    headlineHighlight: "drive",
    subHeadline: "New challenges make me perform at my best.",
    points: [
      {
        label: "01. ADAPTABILITY",
        title: "Change to Evolve",
        desc: `Engineering to Management, Brand to Trade, FMCG to Tech.
I don't fear the learning curve, I climb it.`
      },
      {
        label: "02. COMPLEXITY",
        title: "Innovation under Pressure",
        desc: `Built Uber Rides Equity in Italy from zero.
        Soap category total relaunch.`
      },
      {
        label: "03. HUNGER",
        title: "Challenges that drive me",
        desc: `Learned Spanish specifically to lead the LALIGA partnership.
        Chose Japan for the CEMS Master.`
      }
    ]
  },
  impact: {
    badge: "MEASURABLE IMPACT",
    title: "I don't just manage.",
    titleHighlight: "I drive growth.",
    awards: [
      "Uber Award Winner Campaigns",
      "First Ever Worldwide Football Sponsorship"
    ],
    stats: [
      { name: 'Uber Mobility', value: '+70%', sub: 'Revenue Growth', highlight: true },
      { name: 'Uber Eats ES', value: '+100%', sub: 'Promo Sales', highlight: true },
      { name: 'Manetti', value: '+11%', sub: 'Profit Growth', highlight: false },
      { name: 'P&G', value: '+8%', sub: 'Net Sales', highlight: false },
    ],
    recipeTitle: "THE RECIPE FOR SUCCESS",
    recipeSteps: [
      { icon: Search, title: "Analysis", desc: "Data Gathering & Pattern Recognition" },
      { icon: Heart, title: "Value", desc: "Understanding Consumer Needs" },
      { icon: Zap, title: "Execution", desc: "Delivery of a working solution" },
      { icon: RefreshCw, title: "Evolution", desc: "Continuous Improvement & Simplification" },
    ]
  },
  timeline: {
    title: "The 4-Year",
    titleSub: "Chase.",
    desc: "My journey to Bending Spoons isn't a whim. It's a deliberate path of self-improvement and relentless ambition.",
    quote: "I have never changed my mind. I still think it's the best environment for me.",
    events: [
      { date: "JAN 2021", title: "The First Application", desc: "\"Quirky cover letter\" era. I identified the target, but needed to sharpen the skills." },
      { date: "2021 - 2024", title: "The \"Growth Sprint\"", desc: "Leading Brand at Uber. ", tag: "BS Value: Continuous Improvement" },
      { date: "JAN 2025", title: "The Strategic Pivot", desc: "Applied again, for Marketing Manager role. The skills now match the ambition.", tag: "BS Value: Rationality" },
      { date: "NOW", title: "Ready to Join", desc: "Simplifying the complex. Delivering the long-term objective.", active: true }
    ]
  },
  team: {
    quoteStart: "If you want to be the best,",
    quoteEnd: "play with the best",
    subtext: "The opportunity to exchange ideas with the brightest minds is priceless. It's not just work; it's",
    subtextHighlight: "evolution"
  },
  outro: {
    label: "",
    mainTitle: "READY",
    subTitle: "TO BEND.",
    name: "MARCO FERRARA",
    footer: "Creatively Engineered for Bending Spoons"
  }
};

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = 8;

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) setCurrentSlide(c => c + 1);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide(c => c - 1);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden selection:bg-blue-500 selection:text-white font-sans">
      
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none" />

      {/* SLIDE 1: INTRO */}
      <SlideLayout isActive={currentSlide === 0}>
        <div className="max-w-5xl w-full space-y-12 relative z-10">
          <div className="border-l-2 border-blue-600 pl-6">
            <p className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-2">{CONTENT.intro.candidateName}</p>
            <p className="text-gray-500 text-xs font-mono tracking-widest">{CONTENT.intro.role}</p>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-white mix-blend-difference">
            {CONTENT.intro.mainTitle}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-white animate-gradient-x">{CONTENT.intro.subTitle}</span>
          </h1>
          
          <div className="flex items-center gap-6 max-w-xl">
             <p className="text-xl text-gray-400 font-light leading-relaxed whitespace-pre-line">
               {CONTENT.intro.descriptionPart1} <span className="text-white font-medium">{CONTENT.intro.highlight1}</span>. <br/>
               {CONTENT.intro.descriptionPart2} <span className="text-white font-medium">{CONTENT.intro.highlight2}</span>.
             </p>
          </div>
        </div>
      </SlideLayout>

      {/* SLIDE 2: THE PROFILE */}
      <SlideLayout isActive={currentSlide === 1}>
        <div className="absolute inset-0 flex flex-col w-full h-full">
            {/* Top Title Bar */}
            <div className="absolute top-8 left-0 w-full text-center z-30 pointer-events-none">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 drop-shadow-lg">{CONTENT.profile.title}</h2>
            </div>

            <div className="flex flex-1 flex-col md:flex-row w-full h-full">
                {/* Left Panel: Logic */}
                <div className="flex-1 h-full bg-black border-r border-gray-900 p-8 md:p-12 pt-24 md:pt-32 flex flex-col justify-center items-end text-right relative overflow-hidden group">
                    <div className="max-w-md w-full">
                        <Brain className="w-12 h-12 text-blue-600 mb-8 opacity-80 ml-auto" />
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">{CONTENT.profile.left.title}</h3>
                        <p className="font-mono text-blue-500 text-xs mb-8 tracking-widest">{CONTENT.profile.left.subtitle}</p>
                        <ul className="space-y-6 text-gray-400 font-light text-sm md:text-base">
                            {CONTENT.profile.left.points.map((pt, i) => (
                                <li key={i} className="flex gap-4 justify-end whitespace-pre-line">
                                    <span>{pt}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Center Graphic Container */}
                <div className="w-full md:w-64 h-32 md:h-full bg-black/50 flex items-center justify-center relative z-20 shrink-0 border-x border-gray-900/50 backdrop-blur-sm">
                     <div className="flex flex-col items-center gap-4 pt-16 md:pt-0">
                        <div className="relative w-48 h-24">
                            <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                <line x1="20" y1="50" x2="180" y2="50" stroke="white" strokeWidth="2" />
                                <circle cx="20" cy="50" r="4" fill="#2563eb" />
                                <path d="M 20 50 L 10 40 M 20 50 L 10 60" stroke="#2563eb" strokeWidth="2" />
                                <circle cx="180" cy="50" r="4" fill="#9333ea" />
                                <path d="M 180 50 L 190 40 M 180 50 L 190 60" stroke="#9333ea" strokeWidth="2" />
                                <circle cx="100" cy="50" r="8" fill="black" stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest bg-black px-2 text-gray-400 border border-gray-800">{CONTENT.profile.centerBadge}</span>
                    </div>
                </div>

                {/* Right Panel: Magic */}
                <div className="flex-1 h-full bg-neutral-950 p-8 md:p-12 pt-24 md:pt-32 flex flex-col justify-center items-start text-left relative overflow-hidden group">
                    <div className="max-w-md w-full">
                        <Palette className="w-12 h-12 text-purple-600 mb-8 opacity-80" />
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">{CONTENT.profile.right.title}</h3>
                        <p className="font-mono text-purple-500 text-xs mb-8 tracking-widest">{CONTENT.profile.right.subtitle}</p>
                        <ul className="space-y-6 text-gray-400 font-light text-sm md:text-base">
                            {CONTENT.profile.right.points.map((pt, i) => (
                                <li key={i} className="flex gap-4 whitespace-pre-line">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
                                    <span>{pt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </SlideLayout>

      {/* SLIDE 3: WHY BS */}
      <SlideLayout isActive={currentSlide === 2}>
        <div className="max-w-6xl w-full">
          <div className="mb-16 border-b border-gray-800 pb-8 relative">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">{CONTENT.whyBS.title}</h2>
            <div className="mt-6 inline-block">
                <p className="text-2xl md:text-3xl text-white font-light italic">"{CONTENT.whyBS.quote}"</p>
                <p className="text-right text-sm text-blue-500 font-mono mt-2">— {CONTENT.whyBS.quoteAuthor}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-800 border border-gray-800">
            {CONTENT.whyBS.cards.map((item, i) => (
              <div key={i} className="bg-black p-10 group hover:bg-neutral-900 transition-colors duration-500">
                <div className="w-12 h-12 bg-neutral-900 rounded flex items-center justify-center mb-8 text-white group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  {i === 0 ? <Users className="w-6 h-6" /> : i === 1 ? <Rocket className="w-6 h-6" /> : <GitMerge className="w-6 h-6" />}
                </div>
                <div className="h-px w-8 bg-gray-800 mb-6 group-hover:w-full group-hover:bg-blue-500 transition-all duration-700"></div>
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-xs font-mono text-blue-500 mb-4 uppercase">{item.subtitle}</p>
                <p className="text-gray-400 leading-relaxed text-sm whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideLayout>

      {/* SLIDE 4: CHAOS JUNKY */}
      <SlideLayout isActive={currentSlide === 3}>
         <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
               <h1 className="text-[25vw] font-black text-white leading-none tracking-tighter">{CONTENT.chaos.bgWatermark}</h1>
            </div>

            <div className="max-w-6xl w-full relative z-10">
               <div className="flex flex-col md:flex-row gap-16 items-start">
                   <div className="flex-1 sticky top-0">
                       <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                       <h3 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">{CONTENT.chaos.title}</h3>
                       <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
                         {CONTENT.chaos.headline} <span className="text-white font-bold">{CONTENT.chaos.headlineHighlight}</span>. <br/>
                         {CONTENT.chaos.subHeadline}
                       </p>
                   </div>

                   <div className="flex-1 flex flex-col gap-6">
                      {CONTENT.chaos.points.map((pt, i) => (
                        <div key={i} className="bg-neutral-900/50 border-l-2 border-gray-700 p-6 hover:border-blue-500 hover:bg-neutral-900 transition-all duration-300 group rounded-r-lg">
                             <div className="text-xs font-mono text-blue-500 mb-3 flex justify-between items-center border-b border-gray-800 pb-2">
                                <span className="tracking-wider">{pt.label}</span>
                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                             </div>
                             <div className="flex items-start gap-3">
                                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
                                 <div>
                                    <h4 className="text-lg font-bold text-white mb-2 leading-none">{pt.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">{pt.desc}</p>
                                 </div>
                             </div>
                        </div>
                      ))}
                   </div>
               </div>
            </div>
         </div>
      </SlideLayout>

      {/* SLIDE 5: IMPACT */}
      <SlideLayout isActive={currentSlide === 4}>
        <div className="max-w-6xl w-full h-full flex flex-col justify-center">
          <div className="mb-8 shrink-0">
             <div className="inline-flex items-center gap-2 border border-blue-900 bg-blue-900/20 px-4 py-1 rounded-full text-blue-400 text-xs font-mono mb-4">
               <TrendingUp size={14} />
               <span>{CONTENT.impact.badge}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.9] tracking-tighter mb-4">
              {CONTENT.impact.title}<br/><span className="text-blue-600">{CONTENT.impact.titleHighlight}</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-4 text-xs text-gray-400 font-mono mt-4">
                {CONTENT.impact.awards.map((award, i) => (
                    <span key={i} className="flex items-center gap-2 bg-neutral-900 px-3 py-2 rounded border border-neutral-800">
                        <Award size={14} className="text-yellow-500"/> {award}
                    </span>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-0 shrink-0">
             {/* Stats Grid */}
             <div className="grid grid-cols-2 gap-4">
                {CONTENT.impact.stats.map((item, i) => (
                    <div key={i} className="bg-neutral-900/50 p-6 border border-neutral-800 flex flex-col justify-center hover:bg-neutral-800 transition-colors hover:border-gray-600 group">
                        <span className="text-xs font-mono text-gray-500 uppercase mb-2">{item.name}</span>
                        <div>
                            <span className={`text-4xl md:text-5xl font-bold tracking-tighter block mb-1 ${item.highlight ? 'text-blue-500 group-hover:text-blue-400' : 'text-white group-hover:text-gray-200'}`}>
                                {item.value}
                            </span>
                            <p className="text-xs text-gray-400">{item.sub}</p>
                        </div>
                    </div>
                ))}
             </div>

             {/* Recipe for Success - Process Flow */}
             <div className="bg-neutral-900/20 border border-gray-800 p-6 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4 text-[10px] font-bold text-white/90 uppercase tracking-widest border-b border-l border-gray-800 bg-black z-20">
                    {CONTENT.impact.recipeTitle}
                </div>
                
                <div className="flex-1 flex flex-col justify-center gap-4 mt-6">
                    {CONTENT.impact.recipeSteps.map((step, index) => (
                        <div key={index} className="relative flex items-center gap-4 group">
                            {/* Connecting Line */}
                            {index < CONTENT.impact.recipeSteps.length - 1 && (
                                <div className="absolute left-[19px] top-10 w-[1px] h-6 bg-gray-800 group-hover:bg-blue-900 transition-colors"></div>
                            )}
                            
                            <div className="w-10 h-10 rounded-full bg-black border border-gray-700 flex items-center justify-center shrink-0 z-10 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all">
                                <step.icon size={18} className="text-gray-400 group-hover:text-white" />
                            </div>
                            
                            <div className="bg-black border border-gray-800 p-3 px-4 rounded w-full group-hover:border-gray-600 transition-colors">
                                <h4 className="text-sm font-bold text-white">{step.title}</h4>
                                <p className="text-xs text-gray-500 group-hover:text-gray-400 whitespace-pre-line leading-tight">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </SlideLayout>

      {/* SLIDE 6: TIMELINE */}
      <SlideLayout isActive={currentSlide === 5}>
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
                <h2 className="text-5xl font-bold tracking-tighter mb-6">{CONTENT.timeline.title}<br/>{CONTENT.timeline.titleSub}</h2>
                <p className="text-gray-400 text-lg mb-8 whitespace-pre-line">
                    {CONTENT.timeline.desc}
                </p>
                <div className="p-6 bg-neutral-900 rounded border border-gray-800">
                    <p className="text-sm text-gray-300 italic">
                        "{CONTENT.timeline.quote}"
                    </p>
                </div>
            </div>

            <div className="md:w-2/3 relative pl-8 border-l border-gray-800 space-y-12">
                {CONTENT.timeline.events.map((event, i) => (
                    <div key={i} className={`relative ${event.active ? '' : 'opacity-90'}`}>
                        <div className={`absolute ${event.active ? '-left-[39px] w-5 h-5 bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)] animate-pulse' : '-left-[37px] w-4 h-4 bg-gray-700'} top-1 rounded-full border-4 border-black`}></div>
                        <div className={`text-xs font-mono mb-1 ${event.active ? 'text-blue-500' : 'text-gray-500'}`}>{event.date}</div>
                        <h3 className={`font-bold text-white ${event.active ? 'text-2xl' : 'text-xl'}`}>{event.title}</h3>
                        <p className="text-sm text-gray-400 mt-1 whitespace-pre-line">{event.desc}</p>
                        {event.tag && (
                             <div className="flex gap-2 mt-3">
                                <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-[10px] uppercase font-mono rounded">{event.tag}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </SlideLayout>

      {/* SLIDE 7: TEAM */}
      <SlideLayout isActive={currentSlide === 6}>
         <div className="flex flex-col items-center justify-center text-center max-w-5xl">
            <div className="w-24 h-24 border border-gray-800 rounded-full flex items-center justify-center mb-12 relative">
               <div className="absolute inset-0 border border-blue-600 rounded-full animate-ping opacity-20"></div>
               <Users size={40} className="text-white" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
              "{CONTENT.team.quoteStart}<br/> {CONTENT.team.quoteEnd}."
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl font-light whitespace-pre-line">
              {CONTENT.team.subtext} <span className="text-white">{CONTENT.team.subtextHighlight}</span>.
            </p>
         </div>
      </SlideLayout>

      {/* SLIDE 8: OUTRO */}
      <SlideLayout isActive={currentSlide === 7}>
        <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-12">
          
          <div className="space-y-4">
            {CONTENT.outro.label && <p className="text-blue-600 font-mono tracking-widest text-sm uppercase">{CONTENT.outro.label}</p>}
            <h2 className="text-8xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] text-white">
              {CONTENT.outro.mainTitle}<br/>{CONTENT.outro.subTitle}
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mt-12">
             <div className="h-[1px] w-24 bg-gray-800"></div>
             <div className="text-gray-500 font-mono text-sm uppercase tracking-widest">
               {CONTENT.outro.name}
            </div>
            <div className="h-[1px] w-24 bg-gray-800"></div>
          </div>

          <div className="absolute bottom-12 text-[10px] text-gray-700 font-mono tracking-[0.5em] uppercase">
            {CONTENT.outro.footer}
          </div>
        </div>
      </SlideLayout>

      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={TOTAL_SLIDES} 
        next={nextSlide} 
        prev={prevSlide} 
      />
    </div>
  );
};

export default App;