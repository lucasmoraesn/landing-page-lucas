import { useState, useEffect } from 'react';
import { Github, Instagram, MessageCircle, Code, Zap, Users, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated 3D Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            >
              <div className="w-8 h-8 border-2 border-cyan-400 transform rotate-45"></div>
            </div>
          ))}
        </div>

        {/* Moving Lines */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20 animate-slide"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            >
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform rotate-12"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-cyan-400 mr-2" />
              <span className="text-xl font-bold text-white">Lucas Moraes</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'HOME' },
                { id: 'about', label: 'SOBRE MIM' },
                { id: 'contact', label: 'CONTATOS' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'HOME' },
                { id: 'about', label: 'SOBRE MIM' },
                { id: 'contact', label: 'CONTATOS' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-gray-800'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Eleve seu negócio digital a outro nível com um{' '}
              <span className="text-cyan-400 animate-glow">
                Desenvolvedor de qualidade!
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <button
                onClick={() => scrollToSection('about')}
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                Conhecer Mais
              </button>
              <a
                href="https://wa.me/5512992126779"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-cyan-400">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 md:order-2">
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou formado em Análise e Desenvolvimento de Sistemas e atuo com foco em criar soluções digitais eficientes, modernas e escaláveis. Ao longo da minha carreira, desenvolvi projetos utilizando tecnologias como HTML, CSS, JavaScript, Node.js, SQL, Laravel, Tailwind e Bootstrap, sempre com atenção à performance, usabilidade e qualidade de código.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Tenho experiência tanto no desenvolvimento de interfaces intuitivas quanto na construção de sistemas robustos e seguros para empresas de diferentes portes. Minha abordagem é colaborativa e orientada a resultados — busco entender a real necessidade do cliente ou do projeto para entregar soluções que realmente fazem a diferença.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Além do domínio técnico, valorizo a comunicação clara, prazos bem definidos e o constante aperfeiçoamento profissional. Estou sempre em busca de novos desafios e oportunidades para aplicar meu conhecimento em projetos que impactem positivamente pessoas e negócios.
              </p>
            </div>

            <div className="md:order-1 flex flex-col items-center space-y-8">
              <div className="relative">
                <img 
                  src="/lucas.jpg"
                  alt="Foto de Lucas Moraes"
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <Code className="h-8 w-8 text-cyan-400 mb-2" />
                  <h3 className="text-base font-semibold mb-2">Desenvolvimento</h3>
                  <p className="text-sm text-gray-300">Sistemas web escaláveis</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <Zap className="h-8 w-8 text-cyan-400 mb-2" />
                  <h3 className="text-base font-semibold mb-2">Performance</h3>
                  <p className="text-sm text-gray-300">Otimização contínua</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <Users className="h-8 w-8 text-cyan-400 mb-2" />
                  <h3 className="text-base font-semibold mb-2">Colaboração</h3>
                  <p className="text-sm text-gray-300">Trabalho em equipe</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <Code className="h-8 w-8 text-cyan-400 mb-2" />
                  <h3 className="text-base font-semibold mb-2">Qualidade</h3>
                  <p className="text-sm text-gray-300">Código limpo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-cyan-400">Contatos</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Estou sempre aberto a novos projetos e oportunidades. Entre em contato comigo!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Redes Sociais</h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 border border-gray-700 hover:border-cyan-400"
                  >
                    <Github size={32} className="text-white hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 border border-gray-700 hover:border-cyan-400"
                  >
                    <Instagram size={32} className="text-white hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>
              <a
                href="https://wa.me/5512992126779"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <MessageCircle size={24} />
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-md border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Lucas Moraes. Desenvolvido com paixão e tecnologia.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

