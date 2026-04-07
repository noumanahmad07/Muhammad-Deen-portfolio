import { motion } from "motion/react";
import {
  Palette,
  Globe,
  BookOpen,
  Image as ImageIcon,
  Layout,
  Camera,
  Newspaper,
  PenTool,
  Monitor,
  Layers,
  Smartphone,
  Utensils,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Instagram,
  ExternalLink,
  CheckCircle2,
  Zap,
  Award,
  Users,
} from "lucide-react";
import { cn } from "./lib/utils";
import { useState, useEffect } from "react";

const categories = [
  { id: "all", name: "All Work", icon: Layers },
  { id: "logo", name: "Logo Design", icon: Palette },
  { id: "website", name: "Website", icon: Globe },
  { id: "illustration", name: "Illustration", icon: PenTool },
  { id: "social", name: "Social Media", icon: Smartphone },
  { id: "thumbnails", name: "Thumbnails", icon: Monitor },
  { id: "mockups", name: "Mockups", icon: Layers },
  { id: "manipulation", name: "Manipulation", icon: ImageIcon },
  { id: "editorial", name: "Editorial", icon: Newspaper },
  { id: "lightroom", name: "Lightroom", icon: Camera },
  { id: "canva", name: "Canva Design", icon: Layout },
];

const portfolioItems = [
  // Logo Design Category
  {
    category: "logo",
    title: "Professional Logo Design",
    description: "Modern and impactful logo for brand identity.",
    details:
      "Clean typography and geometric symbols designed for professional recall.",
    image: "/images/logo/42abe175-ca03-48f4-a5cb-abfcb9d1b838.jpg",
    tags: ["Branding", "Logo", "Identity"],
  },

  // Illustration Category
  {
    category: "illustration",
    title: "Digital Art Illustration",
    description: "Creative digital artwork with modern aesthetics.",
    details: "Expressive artwork with attention to detail and emotion.",
    image: "/images/illlustration/a1af8ba0-31fc-427e-bc1c-47235e150d15.jpg",
    tags: ["Digital Art", "Illustration", "Creative"],
  },
  {
    category: "illustration",
    title: "Abstract Design",
    description: "Modern abstract illustration with geometric patterns.",
    details: "Vibrant colors and dynamic shapes creating visual interest.",
    image: "/images/illlustration/e3961f7b-d8fa-44a0-889c-8a54a77230c5.jpg",
    tags: ["Abstract", "Geometric", "Art"],
  },
  {
    category: "illustration",
    title: "Character Illustration",
    description: "Detailed character design and illustration.",
    details: "Unique character concept with detailed artwork and personality.",
    image: "/images/illlustration/eb2de6f0-bdc2-4ec1-b31e-7833cef4239c.jpg",
    tags: ["Character", "Illustration", "Design"],
  },
  {
    category: "illustration",
    title: "Nature Landscape",
    description: "Beautiful nature-inspired digital illustration.",
    details: "Serene landscape with attention to natural detail and color.",
    image: "/images/illlustration/fb3868cb-1b1d-4086-a07b-a687efc354d3.jpg",
    tags: ["Nature", "Landscape", "Illustration"],
  },

  // Social Media Category
  {
    category: "social",
    title: "Social Media Campaign",
    description: "Professional social media campaign design.",
    details:
      "High-energy social media post designed to drive engagement and sales.",
    image: "/images/social-media/1c0c56bb-ec0b-4db9-acb8-a3eb35e88c69.jpg",
    tags: ["Social Media", "Campaign", "Marketing"],
  },
  {
    category: "social",
    title: "Brand Promotion",
    description: "Creative brand promotion for social platforms.",
    details: "Engaging visuals designed to attract and convert audience.",
    image: "/images/social-media/349b4f8a-220e-4e6b-b2ae-81413c6239a0.jpg",
    tags: ["Branding", "Social Media", "Promotion"],
  },

  // Thumbnails Category
  {
    category: "thumbnails",
    title: "YouTube Thumbnail Design",
    description: "Attention-grabbing thumbnail for content creators.",
    details:
      "High-CTR design optimized for YouTube algorithm and viewer engagement.",
    image: "/images/thumnails/0221747f-70a2-47cf-8f87-a28425baa71d.jpg",
    tags: ["YouTube", "Thumbnail", "CTR"],
  },
  {
    category: "thumbnails",
    title: "Growth Strategy Thumbnail",
    description: "Viral-style thumbnail for growth content.",
    details: "High-impact visuals designed to maximize click-through rates.",
    image: "/images/thumnails/8abd21ec-4af0-4328-bafb-3a14239faa3f.jpg",
    tags: ["Growth", "YouTube", "Viral"],
  },
  {
    category: "thumbnails",
    title: "Educational Content Thumbnail",
    description: "Professional thumbnail for educational content.",
    details: "Clean design with clear messaging for educational audience.",
    image: "/images/thumnails/93955fe9-e196-4119-81a4-47c5feeaa7ac.jpg",
    tags: ["Education", "YouTube", "Tutorial"],
  },

  // Website Category
  {
    category: "website",
    title: "Modern Web Design",
    description: "Contemporary website design with focus on UX.",
    details: "Clean layout with modern aesthetics and user-friendly interface.",
    image: "/images/website/c8dfe345-30de-44d8-9e80-2a2794bb1bec.jpg",
    tags: ["Web Design", "UI/UX", "Modern"],
  },

  // Lightroom Category
  {
    category: "lightroom",
    title: "Professional Photo Editing",
    description: "Professional photo enhancement and retouching.",
    details: "Color correction and enhancement for professional photography.",
    image: "/images/lightroom/19f6a3d4-b465-4722-a121-cfed1c4e9f26.jpg",
    tags: ["Photography", "Editing", "Lightroom"],
  },
  {
    category: "lightroom",
    title: "Color Grading",
    description: "Advanced color grading and photo enhancement.",
    details: "Professional color correction for visual impact.",
    image: "/images/lightroom/330e3cfd-f8af-4a29-8e37-aa04c7b193b0.jpg",
    tags: ["Color", "Grading", "Photography"],
  },
  {
    category: "lightroom",
    title: "Photo Retouching",
    description: "Professional photo retouching and enhancement.",
    details: "Detailed retouching for flawless professional results.",
    image: "/images/lightroom/57a024ac-e0cb-4814-a3a6-6b003ceb0010.jpg",
    tags: ["Retouching", "Photography", "Enhancement"],
  },
  {
    category: "lightroom",
    title: "Landscape Enhancement",
    description: "Professional landscape photo editing.",
    details: "Enhanced colors and details for stunning landscape photography.",
    image: "/images/lightroom/f212ce6b-e0c2-4bab-8cd7-8caa0172d212.jpg",
    tags: ["Landscape", "Photography", "Enhancement"],
  },

  // Canva Design Category
  {
    category: "canva",
    title: "Canva Graphic Design",
    description: "Professional design using Canva platform.",
    details: "Modern graphic design created with Canva tools and templates.",
    image: "/images/canvadesign/78656ffa-c085-4c2d-a6ed-7f43fcc50a0e.jpg",
    tags: ["Canva", "Graphic Design", "Templates"],
  },

  // Editorial Category
  {
    category: "editorial",
    title: "Editorial Design",
    description: "Professional editorial layout and design.",
    details: "Structured layouts for modern publications and magazines.",
    image: "/images/editorial/589e4223-6def-49da-a232-7a1dcced8614.jpg",
    tags: ["Editorial", "Layout", "Publishing"],
  },

  // Manipulation Category
  {
    category: "manipulation",
    title: "Photo Manipulation",
    description: "Creative photo manipulation and compositing.",
    details: "Advanced photo manipulation techniques for artistic results.",
    image: "/images/manipulation/5eae2de7-8307-4c42-9187-ec6d8782b2c2.jpg",
    tags: ["Manipulation", "Compositing", "Art"],
  },
];

const stats = [
  { label: "Projects Completed", value: "15+", icon: CheckCircle2 },
  { label: "Happy Clients", value: "11+", icon: Users },
  { label: "Years Experience", value: "1+", icon: Zap },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-emerald-500/30 selection:text-emerald-400">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
          isScrolled
            ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-xl text-slate-950 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              MD
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-none">
                Muhammad Deen
              </span>
              <span className="text-[10px] text-emerald-400 font-bold tracking-[0.2em] uppercase">
                Designer
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-400">
            {["Work", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-emerald-400 transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald-500 text-slate-950 px-7 py-2.5 rounded-full font-bold hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 transition-all active:scale-95 inline-block"
            >
              Let's Talk
            </a>
          </div>

          <button className="md:hidden text-slate-400">
            <Layout size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent -z-10" />

        {/* Floating Software Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          {["Ps", "Ai", "Lr", "Id"].map((tool, i) => (
            <motion.div
              key={tool}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={cn(
                "absolute font-bold text-4xl text-slate-700",
                i === 0 && "top-1/4 left-10",
                i === 1 && "top-1/3 right-20",
                i === 2 && "bottom-1/4 left-20",
                i === 3 && "bottom-1/3 right-10",
              )}
            >
              {tool}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-8 border border-emerald-500/20 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for New Projects
            </motion.div>

            <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter leading-[0.85] md:leading-[0.8]">
              Visual Storyteller <br />
              <span className="text-gradient">& Brand Architect</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed px-4">
              I transform complex ideas into compelling visual narratives.
              Specializing in high-impact brand identities and digital
              experiences.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <button className="group bg-emerald-500 text-slate-950 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2">
                Explore Portfolio{" "}
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#services"
                className="glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-900 transition-colors border-slate-800 inline-block"
              >
                My Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-slate-900 mb-4 text-emerald-400 border border-slate-800">
                <stat.icon size={20} />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Filter */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Creative Showcase
              </h2>
              <p className="text-slate-400 font-medium">
                Every project is a unique blend of strategy and art.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2",
                    activeCategory === cat.id
                      ? "bg-emerald-500 text-slate-950 shadow-lg"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800",
                  )}
                >
                  <cat.icon size={14} />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative"
              >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 glass border-slate-800/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <p className="text-slate-300 text-sm mb-4 line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.details}
                    </p>
                    <button className="w-fit bg-white text-slate-950 px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-emerald-400 transition-colors">
                      View Project <ExternalLink size={14} />
                    </button>
                  </div>
                </div>

                <div className="px-4">
                  <div className="flex gap-2 mb-3">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Software Skills Section */}
      <section className="py-24 px-6 bg-slate-900/20 border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Mastered Tools</h2>
            <p className="text-slate-500">
              The industry-standard software powering my creative workflow.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { name: "Photoshop", color: "blue" },
              { name: "Illustrator", color: "orange" },
              { name: "Lightroom", color: "cyan" },
              { name: "InDesign", color: "rose" },
              { name: "Canva", color: "indigo" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center text-2xl font-bold group-hover:border-emerald-500/50 transition-all group-hover:-translate-y-2">
                  {tool.name[0]}
                  {tool.name[1]}
                </div>
                <span className="text-sm font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass border-slate-800 relative z-10">
              <img
                src="https://picsum.photos/seed/muhammad-deen/800/1000"
                alt="Muhammad Deen"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-3xl -z-10" />

            <div className="absolute -bottom-8 -right-8 glass p-10 rounded-[2.5rem] z-20 border-slate-700 shadow-2xl">
              <div className="text-5xl font-bold text-emerald-400 mb-1 tracking-tighter">
                1 +
              </div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                Years in Design
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-6 border border-emerald-500/20">
              My Story
            </div>
            <h2 className="text-5xl font-bold mb-8 tracking-tight leading-tight">
              Crafting Digital <br />
              <span className="text-gradient">Experiences Since 2020</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
              I am a passionate graphic designer with a keen eye for detail and
              a love for creative problem-solving. My work reflects innovation,
              detail, and originality, helping brands stand out with a strong
              visual identity. From minimalist logos to complex editorial
              layouts, I bring a high level of dedication to every pixel.
            </p>

            <div className="flex justify-center gap-16 md:gap-34 mb-12">
              {[
                {
                  label: "Projects Completed",
                  value: "15+",
                  icon: CheckCircle2,
                },
                { label: "Happy Clients", value: "11+", icon: Users },
                { label: "Years Experience", value: "1+", icon: Zap },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex p-3 rounded-xl bg-slate-900 mb-4 text-emerald-400 border border-slate-800">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:-translate-y-1"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-6 border border-emerald-500/20">
              What I Offer
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Services Built for <br />
              <span className="text-gradient">Impact & Growth</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              From brand identity to digital content, I deliver design solutions
              that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Brand Identity",
                description:
                  "Logos, color palettes, and visual systems that define your brand's unique voice.",
                tags: ["Logo Design", "Branding", "Guidelines"],
              },
              {
                icon: Globe,
                title: "Web Design",
                description:
                  "Modern, responsive websites with focus on user experience and conversion.",
                tags: ["UI/UX", "Landing Pages", "Web Apps"],
              },
              {
                icon: PenTool,
                title: "Illustration",
                description:
                  "Custom digital artwork, character designs, and abstract visuals for any need.",
                tags: ["Digital Art", "Vectors", "Concept Art"],
              },
              {
                icon: Smartphone,
                title: "Social Media",
                description:
                  "Engaging content designs optimized for Instagram, Facebook, LinkedIn, and more.",
                tags: ["Posts", "Stories", "Ads"],
              },
              {
                icon: Monitor,
                title: "YouTube Content",
                description:
                  "High-CTR thumbnails and channel art that boost views and subscribers.",
                tags: ["Thumbnails", "Banners", "Overlays"],
              },
              {
                icon: Camera,
                title: "Photo Editing",
                description:
                  "Professional retouching, color grading, and enhancement for stunning visuals.",
                tags: ["Retouching", "Color Grading", "Restoration"],
              },
              {
                icon: Layout,
                title: "Editorial Design",
                description:
                  "Magazine layouts, brochures, and print materials with polished typography.",
                tags: ["Magazines", "Brochures", "Reports"],
              },
              {
                icon: ImageIcon,
                title: "Photo Manipulation",
                description:
                  "Creative compositing and surreal photo edits that tell unique visual stories.",
                tags: ["Compositing", "Surreal", "Art Direction"],
              },
              {
                icon: Zap,
                title: "Quick Turnarounds",
                description:
                  "Fast, quality designs when you need them. Rush projects welcome.",
                tags: ["24-48h", "Priority", "Revisions"],
              },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass p-8 rounded-[2rem] border-slate-800/50 hover:border-emerald-500/30 transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-slate-800/50 px-3 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-emerald-500 text-slate-950 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-105 transition-all"
            >
              Start a Project <ChevronRight size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-12 md:p-24 rounded-[3rem] md:rounded-[4rem] text-center border-slate-800/50 relative overflow-hidden group"
          >
            {/* Subtle Background Icon */}
            <div className="absolute -top-12 -right-12 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
              <Mail size={320} />
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
                Let's Create Something <br />
                <span className="text-gradient inline-block mt-2">
                  Extraordinary
                </span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                Ready to elevate your brand's visual identity? I'm currently
                accepting new projects and would love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a
                  href="mailto:nomandeveloper007@gmail.com"
                  className="w-full sm:w-auto bg-emerald-500 text-slate-950 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-105 transition-all active:scale-95"
                >
                  <Mail size={24} /> Send an Email
                </a>
                <button className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-lg border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all flex items-center justify-center gap-3 active:scale-95">
                  Book a Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-bold text-slate-950">
                MD
              </div>
              <span className="font-bold text-2xl tracking-tight">
                Muhammad Deen
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Crafting innovative visual solutions for forward-thinking brands
              worldwide.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Navigation
              </span>
              <div className="flex flex-col gap-2 text-sm text-slate-500 font-medium">
                <a
                  href="#work"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Me
                </a>
                <a
                  href="#services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Services
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Social
              </span>
              <div className="flex flex-col gap-2 text-sm text-slate-500 font-medium">
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 text-center text-slate-600 text-xs font-bold">
          <p>© 2026 Muhammad Deen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
