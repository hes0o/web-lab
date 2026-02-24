import './App.css'

function App() {
  return (
    <div className="container">

      {/* skip link - klavye kullanicilari icin */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* header - sayfa baslik alani */}
      <header className="site-header">
        <div className="header-inner">
          <h1>Hassan Chawa</h1>
          {/* nav - ana navigasyon, aria-label ile etiketlendi */}
          <nav aria-label="Ana navigasyon">
            <ul className="nav-links">
              <li><a href="#hakkimda">Hakkımda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* main - sayfanin ana icerigi, sayfada sadece bir tane olmali */}
      <main id="main-content">

        {/* section - tematik icerik blogu, h2 ile basmali */}
        <section id="hakkimda" className="section-card">
          <h2>Hakkımda</h2>
          <div className="profile-grid">

            {/* figure + img + figcaption - gorsel ve aciklamasi */}
            <figure>
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=HC&backgroundColor=1e3a8a&fontColor=ffffff"
                alt="Hassan Chawa'nın portre fotoğrafı"
                width="150"
                height="150"
                className="profile-img"
              />
              <figcaption>Full Stack Developer — Hassan Chawa</figcaption>
            </figure>

            <div className="about-text">
              <p>
                Merhaba! Web teknolojileri, erişilebilir arayüz tasarımı ve yapay
                zeka entegrasyonu üzerine çalışan bir yazılım geliştiricisiyim.
              </p>
              {/* h3 - h2 altinda alt baslik, seviye atlamadim */}
              <h3>Kullandığım Teknolojiler</h3>
              {/* ul - sirasi onemli degil, unsorted list */}
              <ul className="tech-list">
                <li>HTML5 &amp; CSS3</li>
                <li>React &amp; TypeScript</li>
                <li>Node.js &amp; Express</li>
                <li>SQL &amp; Entity Framework</li>
              </ul>
            </div>
          </div>
        </section>

        {/* her proje article icinde - bagimsiz icerik */}
        <section id="projeler" className="section-card">
          <h2>Projelerim</h2>
          <div className="project-grid">

            <article className="project-item">
              <h3>Klinik Yönetim Sistemi</h3>
              <figure>
                <img
                  src="https://placehold.co/400x220/1e3a8a/ffffff?text=Klinik+Sistemi"
                  alt="Klinik yönetim sisteminin hasta kayıt ekranı"
                  className="project-img"
                  width="400"
                  height="220"
                />
              </figure>
              <p>
                C# .NET ve Avalonia UI ile geliştirilmiş; reception, doktor ve
                hemşire panellerini kapsayan tam entegre klinik yönetim sistemi.
              </p>
              {/* aside - ana icerikle dolayli iliskili yan bilgi */}
              <aside className="tech-tags" aria-label="Kullanılan teknolojiler">
                <span>C#</span>
                <span>.NET</span>
                <span>Avalonia</span>
                <span>EF Core</span>
              </aside>
            </article>

            <article className="project-item">
              <h3>Gemini Chatbot Entegrasyonu</h3>
              <figure>
                <img
                  src="https://placehold.co/400x220/0f172a/38bdf8?text=Gemini+Chatbot"
                  alt="Gemini API tabanlı yapay zeka sohbet arayüzü"
                  className="project-img"
                  width="400"
                  height="220"
                />
              </figure>
              <p>
                Google Gemini API kullanılarak PHP projelerine entegre edilmiş,
                doğal dil işleme destekli yapay zeka asistanı.
              </p>
              <aside className="tech-tags" aria-label="Kullanılan teknolojiler">
                <span>PHP</span>
                <span>Gemini API</span>
                <span>REST</span>
              </aside>
            </article>

          </div>
        </section>

        {/* iletisim formu - noValidate ile kendi hatalarimizi gosterecegiz */}
        <section id="iletisim" className="section-card">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>

            {/* fieldset - ilgili alanlari gruplar, legend basligini gosterir */}
            <fieldset>
              <legend>İletişim   Formu</legend>

              <div className="form-group">
                {/* label for ile input id eslesmeli - erisilebilirlik icin zorunlu */}
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  placeholder="örn. Hassan Chawa"
                  aria-describedby="name-error"
                />
                {/* role=alert - js hata yazinca ekran okuyucu otomatik okur */}
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="örn. hassan@mail.com"
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              {/* select - acilir liste, ilk option bos = required ile calisir */}
              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              {/* textarea - cok satirli metin alani */}
              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  placeholder="Mesajınızı buraya yazın..."
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit" className="btn-submit">
                Gönder
              </button>

            </fieldset>
          </form>
        </section>

      </main>

      {/* footer - alt bilgi, telif hakki ve sosyal linkler */}
      <footer className="site-footer">
        <p>&copy; 2026 Hassan Chawa. Tüm hakları saklıdır.</p>
        <ul className="social-links">
          <li>
            <a
              href="https://github.com/hes0o"
              target="_blank"
              rel="noreferrer"
              aria-label="Hassan'ın GitHub profili (yeni sekmede açılır)"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hassan-chawa-15b9592b3/"
              target="_blank"
              rel="noreferrer"
              aria-label="Hassan'ın LinkedIn profili (yeni sekmede açılır)"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>

    </div>
  )
}

export default App
