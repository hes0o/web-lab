Proje klasöründe CSS-KARARLARI.md dosyası oluştur (veya README'ye ekle). Aşağıdaki başlıklarda kısa açıklamalar yaz:

# CSS Kararları

## 1. Breakpoint Seçimi
- Neden 640px ve 1024px seçtim?  
  640px, mobil cihazlar için uygun, 1024px ise tablet ve küçük dizüstü bilgisayarlar için ideal. Bu iki breakpoint, geniş ekranlarda da uyumlu bir düzen sağlar.
  
- İçerik bu noktalarda nasıl değişiyor?  
  640px’de içerik tek sütuna düşerken, 1024px’de iki sütun düzenine geçiliyor. Bu, daha büyük ekranlarda daha fazla bilgi sunuyor.

## 2. Layout Tercihleri
- Header için neden Flexbox seçtim?  
  Flexbox, öğeleri kolayca hizalamama ve esnek bir düzen kurmama olanak tanıdı, özellikle farklı ekran boyutlarında sorunsuz çalıştı.
  
- Proje kartları için neden Grid seçtim?  
  Grid, kartların boyutlarını ve aralarındaki boşlukları daha iyi kontrol etmemi sağladı, böylece daha düzenli bir görünüm elde ettim.

- auto-fit mi auto-fill mi kullandım, neden?  
  Auto-fit kullandım çünkü kartlar ekran genişliğine göre dinamik olarak uyum sağladı.

## 3. Design Tokens
- Hangi renk paletini seçtim ve neden?  
  Nötr tonlar ve bir ana renk seçtim, böylece sade ve şık bir görünüm elde ettim, dikkat dağıtıcı öğelerden kaçındım.

- Spacing skalasını nasıl belirledim?  
  Tutarlı bir aralık bırakarak, öğeler arasında dengeli bir mesafe oluşturup, görsel hiyerarşi sağladım.

- Fluid typography için clamp değerlerini nasıl ayarladım?  
  Ekran boyutuna göre font boyutunu otomatik olarak ayarlamak için `clamp()` kullandım, böylece her cihazda okunabilirlik arttı.

## 4. Responsive Stratejiler
- Mobile-first yaklaşımını nasıl uyguladım?  
  İlk olarak mobil için tasarım yapıp, ardından geniş ekranlara uygun düzenler ekledim. Bu, mobil cihazlar için daha hızlı yüklenme sağladı.

- Hangi elemanlar breakpoint'lerde değişiyor?  
  Menü ve içerik düzeni, ekran boyutuna göre uyum sağlıyor. Mobilde dikey, geniş ekranda ise yatay olarak düzenlendi.

- Görsel boyutları nasıl yönettim?  
  Görselleri `max-width` ile esnek hale getirip, farklı çözünürlükler için optimize ettim, böylece hızlı yüklenmesini sağladım.