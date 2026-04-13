import { useState } from 'react';
import './index.css';
import { Mail, Phone, MapPin, Smartphone, ShoppingBag, Bot, Video, ExternalLink, Menu, X } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = {
    en: {
      nav_home: 'Home',
      nav_services: 'Services',
      nav_clients: 'Clients',
      nav_avatars: 'AI Avatars',
      nav_stores: 'Stores',
      hero_badge: 'Introducing AI Avatars',
      hero_title: 'Transform Your Sales with',
      hero_title_highlight: 'Digital Intelligence',
      hero_subtitle: 'We help clients market their products and services with expert social media management, KOL-driven live sales, and dynamic AI chatbots.',
      hero_cta: 'View Our Solutions',
      hero_cta_sec: 'Talk to an Expert',
      services_title: 'Our Services',
      services_sub: 'Comprehensive solutions tailored to boost brand awareness and drive sales.',
      srv1_title: 'Social Media Management',
      srv1_desc: 'From content planning and idea generation for Instagram, TikTok, and Facebook to execution. We have experienced in-house creators and smooth AI-generated content technology.',
      srv2_title: 'Live Selling Services',
      srv2_desc: 'We manage your live sales through Shopee Live and TikTok Live. We hold a scalable network of in-house KOLs customized to your brand\'s specific needs.',
      srv3_title: 'Intelligent AI Chatbot',
      srv3_desc: 'Versatile chatbots for customer service, company profiles, product catalogs, up to product education and directing prospects to successful sales.',
      srv4_title: 'AI Avatar Video Content',
      srv4_desc: 'Create highly engaging 20-30s AI-generated videos with realistic avatars. Features "Virtual Try-On" where avatars can actually wear your apparel products to rapidly elevate your marketing and sales.',
      avatar_title: 'Our AI Avatars',
      avatar_sub: 'Meet our AI-powered virtual influencers — already creating viral content on TikTok.',
      avatar_cta: 'See in action',
      clients_title: 'Our Clients',
      clients_sub: 'Trusted by growing brands to build their digital presence.',
      shops_title: 'Managed Online Stores',
      shops_desc: 'Fully managed stores from product photography, inventory management, talent selection, live scheduling, all the way to final sales execution.',
      contact_title: 'Ready to scale?',
      contact_sub: 'Reach out to our team today and build a powerful digital ecosystem.'
    },
    id: {
      nav_home: 'Beranda',
      nav_services: 'Layanan',
      nav_clients: 'Klien',
      nav_avatars: 'Avatar AI',
      nav_stores: 'Toko',
      hero_badge: 'Memperkenalkan Avatar AI',
      hero_title: 'Tingkatkan Penjualan Anda Melalui',
      hero_title_highlight: 'Kecerdasan Digital',
      hero_subtitle: 'Kami membantu Anda memasarkan produk atau jasa melalui manajemen media sosial, penjualan live berbasis KOL, dan chatbot AI yang cerdas.',
      hero_cta: 'Lihat Solusi Kami',
      hero_cta_sec: 'Hubungi Ahli Kami',
      services_title: 'Layanan Kami',
      services_sub: 'Solusi komprehensif untuk meningkatkan kesadaran merek dan mendorong penjualan.',
      srv1_title: 'Manajemen Media Sosial',
      srv1_desc: 'Termasuk rencana/ide konten Instagram, TikTok, Facebook sampai eksekusi. Kami memiliki tim kreator in-house berpengalaman dan teknologi konten AI yang smooth.',
      srv2_title: 'Jasa Penjualan Live',
      srv2_desc: 'Kami menyediakan jasa penjualan langsung melalui Shopee Live dan TikTok Live. Kami memiliki in-house KOL yang dapat diperbanyak sesuai kebutuhan Anda.',
      srv3_title: 'Chatbot AI Cerdas',
      srv3_desc: 'Chatbot serbaguna untuk kebutuhan customer service, profil perusahaan, katalog produk, hingga edukasi produk untuk mengarahkan langsung ke penjualan.',
      srv4_title: 'Konten Video Avatar AI',
      srv4_desc: 'Menciptakan konten video AI 20-30 detik dengan avatar realistis. Dilengkapi fitur "Try On Apparel" dimana produk pakaian Anda bisa dipakai langsung oleh avatar untuk mendongkrak promosi!',
      avatar_title: 'Avatar AI Kami',
      avatar_sub: 'Kenali virtual influencer berbasis AI kami — aktif membuat konten viral di TikTok.',
      avatar_cta: 'Lihat Aksinya',
      clients_title: 'Klien Kami',
      clients_sub: 'Dipercaya oleh berbagai brand untuk mengembangkan ekosistem digital mereka.',
      shops_title: 'Toko Online Kelolaan',
      shops_desc: 'Kami merawat dari foto produk, manajemen inventori, pemilihan talent live, jadwal live, sampai pencapaian penjualan akhir.',
      contact_title: 'Siap untuk Berkembang?',
      contact_sub: 'Hubungi tim kami hari ini dan bangun ekosistem digital yang tangguh.'
    }
  };

  const getText = (key) => t[lang][key];

  const clients = [
    'aixin.jpg', 'ancala-pandansari.jpg', 'bahong.jpg', 'koindra-tutorial.jpg',
    'kotak-sepatu.jpg', 'kudapan-area.jpg', 'namarie.jpg', 'sofie.jpg'
  ];

  const avatars = [
    {
      name: 'Cici Aini',
      handle: '@ciciaini_',
      image: '/assets/ai-avatars/cici-aini.jpeg',
      url: 'https://www.tiktok.com/@ciciaini_',
      desc: lang === 'en'
        ? 'AI-generated virtual influencer creating engaging lifestyle & product content.'
        : 'Virtual influencer berbasis AI yang membuat konten gaya hidup & produk yang menarik.'
    },
    {
      name: 'Rara Aira',
      handle: '@__raraaira',
      image: '/assets/ai-avatars/rara-aira.jpeg',
      url: 'https://www.tiktok.com/@__raraaira',
      desc: lang === 'en'
        ? 'AI avatar influencer driving brand awareness through creative video storytelling.'
        : 'Avatar influencer AI yang mendorong kesadaran merek melalui narasi video kreatif.'
    }
  ];

  const shops = [
    { url: 'https://shopee.co.id/angelia.co', name: 'angelia.co' },
    { url: 'https://shopee.co.id/amelia.sply', name: 'amelia.sply' },
    { url: 'https://shopee.co.id/akira.cloth', name: 'akira.cloth' },
    { url: 'https://shopee.co.id/denasavila.id', name: 'denasavila.id' },
    { url: 'https://shopee.co.id/maylia.id', name: 'maylia.id' },
    { url: 'https://shopee.co.id/aulia.co', name: 'aulia.co' },
    { url: 'https://shopee.co.id/cyntia.co', name: 'cyntia.co' },
    { url: 'https://shopee.co.id/angel.cloth', name: 'angel.cloth' },
    { url: 'https://shopee.co.id/diana.cloth', name: 'diana.cloth' },
    { url: 'https://shopee.co.id/untukrakyatid', name: 'untukrakyatid' },
    { url: 'https://shopee.co.id/pastinyamanpoll', name: 'pastinyamanpoll' },
    { url: 'https://shopee.co.id/perasaanwarga', name: 'perasaanwarga' }
  ];

  const servicesMap = [
    { id: 1, icon: Smartphone, title: 'srv1_title', desc: 'srv1_desc' },
    { id: 2, icon: ShoppingBag, title: 'srv2_title', desc: 'srv2_desc' },
    { id: 3, icon: Bot, title: 'srv3_title', desc: 'srv3_desc' },
    { id: 4, icon: Video, title: 'srv4_title', desc: 'srv4_desc' },
  ];

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-50 selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#09090b] overflow-hidden shadow-[0_0_15px_rgba(99,102,241,0.2)] transition duration-300 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]">
              <img src="/assets/Neurocommerce-assets/Neurocommerce logo.jpeg" alt="Neurocommerce Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-gradient">Neurocommerce</span>
          </a>

          <div className="hidden lg:flex items-center md:gap-8">
            <a href="#services" className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors">{getText('nav_services')}</a>
            <a href="#avatars" className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors">{getText('nav_avatars')}</a>
            <a href="#clients" className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors">{getText('nav_clients')}</a>
            <a href="#stores" className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors">{getText('nav_stores')}</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800">
              <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${lang === 'en' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>EN</button>
              <button onClick={() => setLang('id')} className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${lang === 'id' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>ID</button>
            </div>
            <a href="#contact" className="hidden sm:inline-flex px-5 py-2.5 text-sm font-medium text-white rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Contact Us
            </a>
            <button className="lg:hidden text-zinc-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-4">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 font-medium">{getText('nav_services')}</a>
            <a href="#avatars" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 font-medium">{getText('nav_avatars')}</a>
            <a href="#clients" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 font-medium">{getText('nav_clients')}</a>
            <a href="#stores" onClick={() => setIsMenuOpen(false)} className="text-zinc-400 font-medium">{getText('nav_stores')}</a>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-20 snap-start" id="home">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
              <span className="flex w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">{getText('hero_badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-50 tracking-tight leading-[1.1] mb-6">
              {getText('hero_title')} <br/>
              <span className="accent-text-gradient">{getText('hero_title_highlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {getText('hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#services" className="px-8 py-4 rounded-full bg-zinc-50 text-zinc-950 font-semibold hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
                {getText('hero_cta')}
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full bg-transparent text-zinc-300 font-semibold border border-zinc-700 hover:border-zinc-500 hover:text-zinc-50 transition-all duration-300">
                {getText('hero_cta_sec')}
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-zinc-950 relative border-t border-zinc-900 snap-start">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{getText('services_title')}</h2>
              <p className="text-zinc-400 text-lg">{getText('services_sub')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {servicesMap.map((svc) => (
                <div key={svc.id} className="group relative p-[1px] rounded-3xl bg-zinc-800 hover:accent-gradient transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]">
                  <div className="flex flex-col h-full bg-zinc-900/90 backdrop-blur-xl p-8 rounded-3xl z-10 transition-colors duration-500 group-hover:bg-zinc-900/80">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-all duration-500">
                      <svc.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-50 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">
                      {getText(svc.title)}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">
                      {getText(svc.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Avatars Section */}
        <section id="avatars" className="py-24 bg-zinc-900/30 relative border-t border-zinc-900 snap-start">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{getText('avatar_title')}</h2>
              <p className="text-zinc-400 text-lg">{getText('avatar_sub')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {avatars.map((avatar, i) => (
                <a key={i} href={avatar.url} target="_blank" rel="noopener noreferrer" className="group block p-[1px] rounded-[2rem] bg-zinc-800 hover:accent-gradient transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]">
                  <div className="bg-zinc-900 rounded-[2rem] overflow-hidden flex flex-col h-full relative">
                    <div className="relative aspect-square overflow-hidden">
                      <img src={avatar.image} alt={avatar.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-950/40">
                        <div className="accent-gradient p-3 rounded-full text-white shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                          <ExternalLink className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 -mt-16 relative z-10">
                      <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-1">{avatar.name}</h3>
                        <span className="text-indigo-400 font-medium text-sm block mb-4">{avatar.handle}</span>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">{avatar.desc}</p>
                        <div className="flex items-center text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                          {getText('avatar_cta')} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="py-24 bg-zinc-950 border-t border-zinc-900 snap-start">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{getText('clients_title')}</h2>
              <p className="text-zinc-400 text-lg">{getText('clients_sub')}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80">
              {clients.map(logo => (
                <div key={logo} className="w-24 md:w-32 hover:-translate-y-2 hover:scale-110 transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100">
                  <img src={`/assets/our-clients-logo/${logo}`} alt={logo.split('.')[0]} className="w-full h-auto rounded-xl shadow-xl" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shops Section */}
        <section id="stores" className="py-24 bg-zinc-900/30 border-t border-zinc-900 snap-start">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-[2.5rem] p-8 md:p-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{getText('shops_title')}</h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{getText('shops_desc')}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {shops.map((shop, i) => (
                  <a key={i} href={shop.url} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-zinc-800 text-zinc-300 font-medium text-sm border border-zinc-700 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(99,102,241,0.25)]">
                    {shop.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#050505] pt-24 pb-8 border-t border-zinc-900 snap-start">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-20 relative">
            
            {/* Ambient Background for contact */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div>
              <h2 className="text-4xl font-bold mb-4">{getText('contact_title')}</h2>
              <p className="text-zinc-400 mb-10 max-w-md text-lg">{getText('contact_sub')}</p>
              
              <div className="space-y-6">
                <a href="mailto:neurocommerceid@gmail.com" className="group flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 transition-colors w-max">
                  <div className="p-3 rounded-xl bg-zinc-800 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-zinc-500 font-medium mb-1">Email</span>
                    <span className="block text-zinc-200 font-semibold">neurocommerceid@gmail.com</span>
                  </div>
                </a>
                
                <a href="https://wa.me/6281288451500" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 transition-colors w-max">
                  <div className="p-3 rounded-xl bg-zinc-800 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-zinc-500 font-medium mb-1">WhatsApp</span>
                    <span className="block text-zinc-200 font-semibold">+62 812-8845-1500</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="md:flex md:justify-end">
              <div className="max-w-xs">
                <div className="flex items-start gap-4 p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800">
                  <MapPin className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-zinc-50 font-semibold mb-3">Headquarters</h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Jl. Raya Kelapa Nias Blok LB20 no.4,<br/>
                      East Kelapa Gading, Kelapa Gading,<br/>
                      North Jakarta City, Jakarta 14250
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900/80 text-zinc-500 text-sm">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src="/assets/Neurocommerce-assets/Neurocommerce logo.jpeg" alt="Neurocommerce Logo" className="w-6 h-6 rounded-sm object-cover" />
              <span className="font-semibold text-zinc-400">Neurocommerce</span>
            </div>
            <p>&copy; {new Date().getFullYear()} Neurocommerce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
