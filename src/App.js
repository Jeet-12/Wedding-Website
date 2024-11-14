import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="main-nav">
        <div className="nav-logo">Humsafar Weddings</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#stories">Stories</a>
          <a href="#contact" className="cta-button">Book Consultation</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-slider">
        <img 
          className="hero-video"
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920"
          alt="Wedding celebration"
        />

          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Where Every Love Story Finds Its Perfect Day</h1>
            <p className="hero-subtitle">Crafting Timeless Wedding Celebrations with Heart & Soul</p>
            <button className="primary-cta">Begin Your Journey</button>
          </div>
        </div>
      </header>
      

      {/* Welcome Section */}
      <section className="welcome-section" id="about">
        <div className="welcome-content">
          <h2 className="section-title">Welcome to Humsafar Weddings</h2>
          <p className="welcome-text">
            Your love story is unique, and your wedding should be too. At Humsafar Weddings, we blend tradition with contemporary elegance to create celebrations that reflect your journey, your culture, and your dreams.
          </p>
          <div className="signature">With love, Team Humsafar</div>
        </div>
      </section>

      {/* Love Stories Section */}
      <section className="love-stories" id="stories">
        <h2 className="section-title">Beautiful Love Stories We've Been Part Of</h2>
        <div className="stories-grid">
          <div className="story-card">
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a" 
                alt="Priya and Rahul Wedding" 
              />
            </div>
            <div className="story-content">
              <blockquote>
                "Humsafar turned our dream wedding into reality. Every detail was perfect, every moment magical. They didn't just plan our wedding, they helped tell our love story."
              </blockquote>
              <p className="couple-name">- Priya & Rahul</p>
              <p className="wedding-date">December 2023</p>
            </div>
          </div>
          <div className="story-card">
            <div className="story-image" style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff" alt="Sarah and Arjun Wedding" />
            </div>
            <div className="story-content">
              <blockquote>
                "From our first meeting to the last dance, Humsafar made us feel like family. They created a celebration that perfectly blended our cultures and traditions."
              </blockquote>
              <p className="couple-name">- Sarah & Arjun</p>
              <p className="wedding-date">October 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Celebration Moments Section */}
      <section className="celebration-moments" id="portfolio">
        <h2 className="section-title">Moments That Last Forever</h2>
        <div className="moments-grid">
          <div className="moment-card">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc" alt="Traditional Ceremony" />
            <div className="moment-overlay">
              <h3>Traditional Ceremonies</h3>
              <p>Honoring heritage with grace</p>
            </div>
          </div>
          <div className="moment-card">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552" alt="Elegant Decor" />
            <div className="moment-overlay">
              <h3>Magical Decorations</h3>
              <p>Creating enchanted spaces</p>
            </div>
          </div>
          <div className="moment-card">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed" alt="Candid Moments" />
            <div className="moment-overlay">
              <h3>Precious Moments</h3>
              <p>Capturing pure joy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="contact-cta" id="contact">
        <div className="cta-content">
          <h2>Ready to Begin Your Wedding Journey?</h2>
          <p>Let's create something beautiful together</p>
          <button className="secondary-cta">Schedule Your Free Consultation</button>
        </div>
      </section>
    </div>
  );
}

export default App;
