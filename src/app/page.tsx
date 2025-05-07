import { Product } from "@/types/product";

async function getFeaturedProduct(): Promise<Product | null> {
  const res = await fetch("https://6817c5a85a4b07b9d1cd374e.mockapi.io/products");
  const data = await res.json();
  const products: Product[] = Array.isArray(data) ? data : [];
  if (!products.length) return null;
  return products.find((p) => p.isFeatured) || products[0];
}

export default async function Home() {
  const product = await getFeaturedProduct();
  return (
    <>
     
      <section className="w-full bg-[#fdf6ee] text-[#2d1b0e] py-16 px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg font-serif text-[#4b2e19]">En İyi Ürünler, En İyi Fiyatlarla</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-[#6d4c2b] font-sans">Modern, hızlı ve güvenilir ürün tanıtım platformu. Sizin için özenle seçilmiş ürünler burada!</p>
        <a href="/products" className="inline-block bg-[#4b2e19] text-[#fffaf6] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-[#6d4c2b] transition-all text-lg font-sans">Tüm Ürünleri Gör</a>
      </section>

      
      <main className="container mx-auto px-0 py-0 flex flex-col items-center w-full mt-16 mb-20">
        <h2 className="text-2xl font-bold mb-6 text-[#4b2e19] font-serif">Öne Çıkan Ürün</h2>
        {product ? (
          <article className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center bg-white rounded-3xl shadow-2xl p-8 md:p-16 border-2 border-[#c8b6a6] mb-16">
            <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
              <img src={product.image.startsWith('http') ? product.image : 'https://via.placeholder.com/400'} alt={product.name} className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] object-cover rounded-2xl border-2 border-[#c8b6a6] shadow-lg" />
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-4xl font-extrabold mb-4 text-[#4b2e19] font-serif">{product.name}</h3>
              <p className="text-base text-[#a89c94] mb-2 font-sans italic">4K Ultra HD Smart TV with AI enhancement.</p>
              <p className="text-lg text-[#2d1b0e] mb-6 font-sans">{product.description}</p>
              <span className="text-2xl font-bold text-[#6d4c2b] mb-2 font-sans">{product.price} ₺</span>
            </div>
          </article>
        ) : (
          <div>Ürün bulunamadı.</div>
        )}
      </main>

      
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div className="bg-[#f3e7d8] rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-[#c8b6a6]">
          <h4 className="font-bold text-lg mb-2 text-[#4b2e19] font-serif">Hızlı Teslimat</h4>
          <p className="text-[#6d4c2b] font-sans">Siparişleriniz en kısa sürede kapınızda.</p>
        </div>
        <div className="bg-[#f3e7d8] rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-[#c8b6a6]">
          <h4 className="font-bold text-lg mb-2 text-[#4b2e19] font-serif">Kaliteli Ürünler</h4>
          <p className="text-[#6d4c2b] font-sans">Sadece en iyi ve güvenilir ürünler.</p>
        </div>
        <div className="bg-[#f3e7d8] rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-[#c8b6a6]">
          <h4 className="font-bold text-lg mb-2 text-[#4b2e19] font-serif">Müşteri Memnuniyeti</h4>
          <p className="text-[#6d4c2b] font-sans">7/24 destek ve kolay iade imkanı.</p>
        </div>
      </section>

    
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 bg-[#fdf6ee]">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-[#4b2e19] font-serif">Hakkımızda</h2>
          <p className="text-[#2d1b0e] mb-2 font-sans">Ürün Tanıtım Sitesi, kullanıcılarına en iyi alışveriş deneyimini sunmak için kurulmuştur. Amacımız, kaliteli ürünleri uygun fiyatlarla ve hızlı teslimatla sizlere ulaştırmak.</p>
          <p className="text-[#2d1b0e] font-sans">Müşteri memnuniyetini her zaman ön planda tutuyoruz.</p>
        </div>
      </section>


      <section className="container mx-auto px-4 py-12 bg-[#fdf6ee]">
        <h2 className="text-2xl font-bold mb-6 text-[#4b2e19] text-center font-serif">Neden Bizi Seçmelisiniz?</h2>
        <ul className="grid md:grid-cols-2 gap-8">
          <li className="bg-[#f3e7d8] rounded-lg shadow p-6 flex items-center gap-4 border border-[#c8b6a6]">
            <span className="text-[#2d1b0e] font-sans">Güvenli ödeme altyapısı</span>
          </li>
          <li className="bg-[#f3e7d8] rounded-lg shadow p-6 flex items-center gap-4 border border-[#c8b6a6]">
            <span className="text-[#2d1b0e] font-sans">Her bütçeye uygun ürünler</span>
          </li>
          <li className="bg-[#f3e7d8] rounded-lg shadow p-6 flex items-center gap-4 border border-[#c8b6a6]">
            <span className="text-[#2d1b0e] font-sans">Kolay iade ve değişim</span>
          </li>
          <li className="bg-[#f3e7d8] rounded-lg shadow p-6 flex items-center gap-4 border border-[#c8b6a6]">
            <span className="text-[#2d1b0e] font-sans">Uzman müşteri desteği</span>
          </li>
        </ul>
      </section>


      <section className="container mx-auto px-4 py-12 bg-[#fdf6ee]">
        <h2 className="text-2xl font-bold mb-6 text-[#4b2e19] text-center font-serif">Müşteri Yorumları</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-[#f3e7d8] rounded-lg shadow p-6 border border-[#c8b6a6]">
            <p className="text-[#2d1b0e] italic mb-2 font-sans">“Gerçekten çok hızlı teslimat ve kaliteli ürünler. Çok memnun kaldım!”</p>
            <span className="text-[#6d4c2b] font-semibold font-sans">- Ayşe K.</span>
          </blockquote>
          <blockquote className="bg-[#f3e7d8] rounded-lg shadow p-6 border border-[#c8b6a6]">
            <p className="text-[#2d1b0e] italic mb-2 font-sans">“Müşteri hizmetleri çok ilgili, her soruma hızlıca cevap aldım.”</p>
            <span className="text-[#6d4c2b] font-semibold font-sans">- Mehmet D.</span>
          </blockquote>
        </div>
      </section>


      <section className="container mx-auto px-4 py-12 bg-[#fdf6ee]">
        <h2 className="text-2xl font-bold mb-6 text-[#4b2e19] text-center font-serif">Bize Ulaşın</h2>
        <form className="max-w-xl mx-auto bg-[#f3e7d8] rounded-lg shadow p-8 flex flex-col gap-4 border border-[#c8b6a6]">
          <input type="text" name="name" placeholder="Adınız" className="border rounded px-4 py-2 bg-gray-100 placeholder-black text-black focus:outline-[#6d4c2b] font-sans" required />
          <input type="email" name="email" placeholder="E-posta" className="border rounded px-4 py-2 bg-gray-100 placeholder-black text-black focus:outline-[#6d4c2b] font-sans" required />
          <textarea name="message" placeholder="Mesajınız" className="border rounded px-4 py-2 bg-gray-100 placeholder-black text-black focus:outline-[#6d4c2b] font-sans" rows={4} required />
          <button type="submit" className="bg-[#4b2e19] text-[#fffaf6] font-bold py-2 rounded hover:bg-[#6d4c2b] transition-colors font-sans">Gönder</button>
        </form>
      </section>
    </>
  );
}
