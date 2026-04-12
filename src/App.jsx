import { useState } from 'react';
import './index.css';
import { Mail, Phone, MapPin, Smartphone, ShoppingBag, Bot, Globe } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'id' : 'en');
  };

  const t = {
    en: {
      nav_home: 'Home',
      nav_services: 'Services',
      nav_clients: 'Clients',
      nav_stores: 'Stores',
      hero_title: 'All-in-One Digital Solution for Your Business',
      hero_subtitle: 'We help clients market their products and services with expert social media management, KOL-driven live sales, and dynamic AI chatbots.',
      hero_cta: 'Elevate Your Brand',
      services_title: 'Our Services',
      services_sub: 'Comprehensive solutions tailored to boost brand awareness and drive sales.',
      srv1_title: 'Social Media Management',
      srv1_desc: 'From content planning and idea generation for Instagram, TikTok, and Facebook to execution. We have experienced in-house creators and smooth AI-generated content technology.',
      srv2_title: 'Live Selling Services',
      srv2_desc: 'We manage your live sales through Shopee Live and TikTok Live. We hold a scalable network of in-house KOLs customized to your brand\'s specific needs.',
      srv3_title: 'Intelligent AI Chatbot',
      srv3_desc: 'Versatile chatbots for customer service, company profiles, product catalogs, up to product education and directing prospects to successful sales.',
      clients_title: 'Our Clients',
      clients_sub: 'Trusted by growing brands to build their digital presence.',
      shops_title: 'Managed Online Stores',
      shops_desc: 'Fully managed stores from product photography, inventory management, talent selection, live scheduling, all the way to final sales execution.',
      contact_title: 'Contact Us',
      contact_sub: 'Ready to transform your digital strategy? Reach out to our team today.'
    },
    id: {
      nav_home: 'Beranda',
      nav_services: 'Layanan',
      nav_clients: 'Klien',
      nav_stores: 'Toko',
      hero_title: 'Solusi Digital All-in-One untuk Bisnis Anda',
      hero_subtitle: 'Kami membantu Anda memasarkan produk atau jasa melalui manajemen media sosial, penjualan live berbasis KOL, dan chatbot AI yang cerdas.',
      hero_cta: 'Tingkatkan Penjualan Anda',
      services_title: 'Layanan Kami',
      services_sub: 'Solusi komprehensif untuk meningkatkan kesadaran merek dan mendorong penjualan.',
      srv1_title: 'Manajemen Media Sosial',
      srv1_desc: 'Termasuk rencana/ide konten Instagram, TikTok, Facebook sampai eksekusi. Kami memiliki tim kreator in-house berpengalaman dan teknologi konten AI yang smooth.',
      srv2_title: 'Jasa Penjualan Live',
      srv2_desc: 'Kami menyediakan jasa penjualan langsung melalui Shopee Live dan TikTok Live. Kami memiliki in-house KOL yang dapat diperbanyak sesuai kebutuhan Anda.',
      srv3_title: 'Chatbot AI Cerdas',
      srv3_desc: 'Chatbot serbaguna untuk kebutuhan customer service, profil perusahaan, katalog produk, hingga edukasi produk untuk mengarahkan langsung ke penjualan.',
      clients_title: 'Klien Kami',
      clients_sub: 'Dipercaya oleh berbagai brand untuk mengembangkan ekosistem digital mereka.',
      shops_title: 'Toko Online yang Kami Kelola',
      shops_desc: 'Kami kelola mulai dari foto produk, manajemen inventory, pemilihan talent live, mengatur jadwal live, sampai terjadinya sales (penjualan).',
      contact_title: 'Hubungi Kami',
      contact_sub: 'Siap mengubah strategi digital Anda? Hubungi tim kami hari ini.'
    }
  };

  const getText = (key) => t[lang][key];

  const clients = [
    'aixin.jpg', 'ancala-pandansari.jpg', 'bahong.jpg', 'koindra-tutorial.jpg',
    'kotak-sepatu.jpg', 'kudapan-area.jpg', 'namarie.jpg', 'sofie.jpg'
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

  return (
    <>
      <header>
        <div className="container header-content">
          <div className="logo-wrapper">
            <img src="/assets/Neurocommerce-assets/Neurocommerce logo.jpeg" alt="Neurocommerce Logo" className="logo-img" />
            <span className="logo-text">Neurocommerce</span>
          </div>
          <div className="controls">
            <div className="lang-toggle">
              <button 
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button 
                className={`lang-btn ${lang === 'id' ? 'active' : ''}`} 
                onClick={() => setLang('id')}
              >
                ID
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container hero-content">
            <div className="hero-text">
              <h1><span className="text-gradient">Neurocommerce</span><br/>{getText('hero_title')}</h1>
              <p>{getText('hero_subtitle')}</p>
              <a href="#contact" className="btn-primary">{getText('hero_cta')}</a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title text-gradient">{getText('services_title')}</h2>
              <p className="section-subtitle">{getText('services_sub')}</p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon"><Smartphone size={32} /></div>
                <h3>{getText('srv1_title')}</h3>
                <p>{getText('srv1_desc')}</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><ShoppingBag size={32} /></div>
                <h3>{getText('srv2_title')}</h3>
                <p>{getText('srv2_desc')}</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><Bot size={32} /></div>
                <h3>{getText('srv3_title')}</h3>
                <p>{getText('srv3_desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" style={{background: 'rgba(2, 6, 23, 0.5)'}}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{getText('clients_title')}</h2>
              <p className="section-subtitle">{getText('clients_sub')}</p>
            </div>
            <div className="clients-grid">
              {clients.map(logo => (
                <img key={logo} src={`/assets/our-clients-logo/${logo}`} alt={logo.split('.')[0]} className="client-logo" />
              ))}
            </div>
          </div>
        </section>

        {/* Managed Online Stores */}
        <section id="stores">
          <div className="container">
            <div className="shops-container">
              <div className="section-header">
                <h2 className="section-title text-gradient">{getText('shops_title')}</h2>
                <p className="section-subtitle">{getText('shops_desc')}</p>
              </div>
              <div className="shops-list">
                {shops.map((shop, i) => (
                  <a key={i} href={shop.url} target="_blank" rel="noopener noreferrer" className="shop-tag">
                    {shop.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h2 className="section-title" style={{marginBottom: '0.5rem'}}>{getText('contact_title')}</h2>
              <p className="section-subtitle" style={{marginBottom: '2rem', marginLeft: '0', textAlign: 'left'}}>{getText('contact_sub')}</p>
              
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:neurocommerceid@gmail.com">neurocommerceid@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div className="contact-text">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/6281288451500" target="_blank" rel="noopener noreferrer">+62 812-8845-1500</a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div className="contact-text">
                  <h4>Address</h4>
                  <p>Jl. Raya Kelapa Nias Blok LB20 no.4, <br/>East Kelapa Gading, Kelapa Gading, <br/>North Jakarta City, Jakarta 14250</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Neurocommerce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
