import { Product } from "@/types/product";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://6817c5a85a4b07b9d1cd374e.mockapi.io/products");
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main className="min-h-screen p-8 flex flex-col items-center bg-[#fdf6ee]">
      <h1 className="text-3xl font-bold mb-8 text-[#4b2e19] font-serif">Tüm Ürünler</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {products.map((product) => (
          <div key={product.id} className="bg-[#f3e7d8] border border-[#c8b6a6] rounded-xl shadow p-6 flex flex-col items-center transition-shadow hover:shadow-lg">
            <img src={product.image.startsWith('http') ? product.image : 'https://via.placeholder.com/150'} alt={product.name} className="w-full aspect-square object-cover rounded-xl m-0 mt-2 mb-2 mx-4" />
            <h2 className="text-xl font-bold mt-2 mb-3 text-[#4b2e19] font-serif px-2">{product.name}</h2>
            <p className="text-xs text-[#a89c94] mb-3 font-sans italic px-2">Licensed By enhanced Product Brands.</p>
            <p className="text-sm text-[#2d1b0e] mb-4 font-medium font-sans px-2">{product.description}</p>
            <span className="text-lg font-bold text-[#6d4c2b] mb-2 px-2">{product.price} ₺</span>
          </div>
        ))}
      </div>
    </main>
  );
} 