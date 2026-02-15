# TODO Uygulaması – Yayına Alma Adımları

## 1. Kodu GitHub’a gönder

Terminalde:

```bash
cd "/Users/borakaanaras/Desktop/TNC Bora Kaan Aras/Web Projesi/todo-app"
git push -u origin main
```

(Git kullanıcı adı/şifre veya token isteyebilir.)

## 2. GitHub Pages’i aç

1. Tarayıcıda repoya git: **https://github.com/borakaanaras/Todo4softwarePersona**
2. **Settings** (Ayarlar) sekmesine tıkla.
3. Sol menüden **Pages**’i seç.
4. **Build and deployment** bölümünde:
   - **Source:** **Deploy from a branch** seçili olsun.
   - **Branch:** `gh-pages` seç, klasör olarak **/ (root)** kalsın.
5. **Save** ile kaydet.

## 3. İlk deploy

- `main` branch’e yaptığın her **push**’tan sonra Actions otomatik çalışır ve `gh-pages` branch’ine yayın atar.
- İlk push’tan sonra **Actions** sekmesine gir; “Deploy to GitHub Pages” workflow’unun yeşil tik almasını bekle (1–2 dakika sürebilir).

## 4. Site adresi

Yayın hazır olduktan sonra adres:

**https://borakaanaras.github.io/Todo4softwarePersona/**

(Adresin sonundaki `/` önemli.)

---

### Hâlâ açılmıyorsa

- **Actions** sekmesinde workflow’ta kırmızı X var mı bak; varsa hata mesajını oku.
- Settings > Pages’te Source gerçekten **Deploy from a branch** ve branch **gh-pages** mi kontrol et.
- Bir kez daha `main`’e push atıp birkaç dakika sonra sayfayı yenile.
