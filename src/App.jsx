import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/50 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-extrabold tracking-tight text-xl">
          <span className="inline-block mr-2 w-2.5 h-2.5 rounded-sm bg-[#8B0000]"></span>
          Your Company
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
          <a href="#solutions" className="text-white/90 hover:text-white transition-colors">Solutions</a>
          <a href="#work" className="text-white/90 hover:text-white transition-colors">Work</a>
          <a href="#contact" className="text-white/90 hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-[#8B0000] text-white px-4 py-2 text-sm font-semibold shadow hover:brightness-110 transition">
          Get Started
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay that does not block interaction */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            Modern • Clean • Impactful
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Build a sharper digital presence with a clean, modern look
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            We craft elegant, high-performance web experiences that elevate your brand and drive results. Designed with precision, powered by modern tech, and tailored to your goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center rounded-md bg-[#8B0000] text-white px-5 py-3 font-semibold shadow transition hover:brightness-110">
              Talk to our team
            </a>
            <a href="#solutions" className="inline-flex justify-center items-center rounded-md bg-white/10 text-white px-5 py-3 font-semibold shadow transition hover:bg-white/20">
              Explore solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-[#8B0000]">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  )
}

function Solutions() {
  const items = [
    {
      title: 'Brand-first websites',
      desc: 'Clean, responsive, and fast—crafted to reflect your identity and convert visitors.',
      icon: '🧭',
    },
    {
      title: 'Product landing pages',
      desc: 'Launch-ready pages with clear messaging, crisp visuals, and strong CTAs.',
      icon: '🚀',
    },
    {
      title: 'Design systems',
      desc: 'Consistent, scalable components—built with accessibility and polish in mind.',
      icon: '🧩',
    },
  ]

  return (
    <section id="solutions" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Solutions that look great and work even better
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl">
              We combine thoughtful design, robust engineering, and performance best practices to deliver experiences your audience will love.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {items.map((it) => (
                <div key={it.title} className="rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow transition">
                  <div className="text-2xl">{it.icon}</div>
                  <div className="mt-3 font-semibold text-gray-900">{it.title}</div>
                  <div className="mt-2 text-sm text-gray-600">{it.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-0 bg-gradient-to-tr from-[#8B0000]/10 via-transparent to-transparent rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
              <img
                alt="Design preview"
                src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <Stat value="98%" label="Client satisfaction" />
          <Stat value="120+" label="Projects shipped" />
          <Stat value="<1s" label="Core page load" />
          <Stat value="A+" label="Accessibility first" />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              A clean aesthetic, tailored to your brand
            </h2>
            <p className="mt-4 text-gray-600">
              Your brand color takes the lead. We use deep accents, generous whitespace, and crisp typography to create a refined, modern look that feels unmistakably yours.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#8B0000]" /> Pixel-perfect layout and spacing</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#8B0000]" /> Fast loads, smooth interactions</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#8B0000]" /> Built for long-term scalability</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-0 bg-[#8B0000]/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
              <div className="bg-[#8B0000] text-white px-6 py-4 text-sm font-semibold">Primary color in action</div>
              <div className="p-6 grid sm:grid-cols-3 gap-4 bg-white">
                <div className="rounded-md h-20 bg-[#8B0000]" />
                <div className="rounded-md h-20 bg-[#8B0000]/80" />
                <div className="rounded-md h-20 bg-[#8B0000]/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-tr from-[#8B0000]/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow">
          <div className="grid md:grid-cols-2">
            <div className="p-10 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Ready to make something great?
              </h3>
              <p className="mt-3 text-gray-600">
                Tell us about your goals. We’ll follow up within one business day.
              </p>
              <form className="mt-8 grid gap-4">
                <input className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8B0000]" placeholder="Your name" />
                <input type="email" className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#8B0000]" placeholder="Work email" />
                <textarea className="w-full rounded-md border border-gray-300 px-4 py-2.5 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#8B0000]" placeholder="Project details"></textarea>
                <button type="button" className="inline-flex justify-center items-center rounded-md bg-[#8B0000] text-white px-5 py-3 font-semibold shadow transition hover:brightness-110">
                  Request a consultation
                </button>
              </form>
            </div>
            <div className="relative min-h-[320px]">
              <img
                alt="Office"
                src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1600&auto=format&fit=crop"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#8B0000]/40 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#8B0000]" />
          <span className="text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#solutions" className="hover:text-white">Solutions</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Solutions />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}
