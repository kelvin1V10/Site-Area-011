import React, { useEffect, useState } from "react";
import { VipCard } from "../components/VipCard";
import { motion } from "framer-motion";
import videoFundo from "../assets/videoplayback.mp4";

export function Home() {
  const [vips, setVips] = useState([]);
  const [cars, setCars] = useState([]);
  const [others, setOthers] = useState([]);
  const [activeTab, setActiveTab] = useState("vips");
  const [detailItem, setDetailItem] = useState(null);

  useEffect(() => {
    setVips([
      { id: 1, name: "VIP Bronze", description: "VIP Bronze vem com perks e carro", benefits: ["Carro exclusivo", "Acesso VIP"], price: 10 },
      { id: 2, name: "VIP Prata", description: "VIP Prata vem com mais vantagens", benefits: ["Carro + Skin", "Acesso VIP + Loja"], price: 25 },
      { id: 3, name: "VIP Ouro", description: "VIP Ouro vem com tudo liberado", benefits: ["Todos carros", "Skin exclusiva", "Boost XP"], price: 50 },
      { id: 4, name: "VIP Diamante", description: "VIP topzera com perks completos", benefits: ["Todos carros", "Skin exclusiva", "Boost XP", "Acesso a eventos"], price: 100 },
      { id: 5, name: "VIP Supremo", description: "VIP ultimate da Área 011", benefits: ["Tudo liberado", "Itens raros", "Acesso total"], price: 200 },
      { id: 6, name: "VIP Lendário", description: "VIP lendário com perks épicos", benefits: ["Itens épicos", "Carro exclusivo", "Boost XP máximo"], price: 500 }
    ]);

    setCars([
      { id: 1, name: "Comet SR", description: "Super esportivo rápido", price: 20 },
      { id: 2, name: "Elegy RH8", description: "Esportivo clássico", price: 15 },
      { id: 3, name: "Infernus", description: "O carro mais rápido da cidade", price: 50 },
      { id: 4, name: "Feltzer", description: "Esportivo elegante", price: 40 },
      { id: 5, name: "Banshee", description: "Velocidade máxima garantida", price: 60 }
    ]);

    setOthers([
      { id: 1, name: "Casa de Praia", description: "Um imóvel top na beira-mar", benefits: [], price: 100 },
      { id: 2, name: "Roupas Exclusivas", description: "Skins únicas da Área 011", benefits: [], price: 30 },
      { id: 3, name: "Pacote de Itens Raros", description: "Coleção com itens lendários", benefits: [], price: 75 },
      { id: 4, name: "Armas Exclusivas", description: "Coleção de armas raras", benefits: [], price: 90 },
      { id: 5, name: "Spotify", description: "Tocar música no jogo", benefits: [], price: 100 },
      { id: 6, name: "Roupa Exclusiva", description: "Skin", benefits: [], price: 100 }
    ]);
  }, []);

  const closeModal = () => setDetailItem(null);

  return (
    <div className="relative min-h-screen text-white p-8">
      {/* Vídeo de fundo */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={videoFundo} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      <div className="relative z-10">
        {/* Cabeçalho */}
        <section className="text-center mb-12">
          <motion.h1 className="text-5xl font-extrabold mb-3 text-red-500 drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            Bem-vindo à Loja VIP 🔥
          </motion.h1>
          <motion.p className="text-lg text-gray-300"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Explore nossos VIPs, carros e muito mais da Área 011
          </motion.p>
        </section>

        {/* Abas */}
        <div className="flex justify-center gap-4 mb-12">
          <button className={`px-6 py-2 rounded-full font-bold transition ${activeTab === "vips" ? "bg-red-700 text-white shadow-[0_0_20px_rgba(255,0,0,0.7)]" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`} onClick={() => setActiveTab("vips")}>VIPs 🔥</button>
          <button className={`px-6 py-2 rounded-full font-bold transition ${activeTab === "cars" ? "bg-blue-700 text-white shadow-[0_0_20px_rgba(0,0,255,0.7)]" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`} onClick={() => setActiveTab("cars")}>Carros 🚗</button>
          <button className={`px-6 py-2 rounded-full font-bold transition ${activeTab === "others" ? "bg-green-700 text-white shadow-[0_0_20px_rgba(0,255,0,0.7)]" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`} onClick={() => setActiveTab("others")}>Outros ⚙️</button>
        </div>

        {/* Seções */}
        {activeTab === "vips" && (
          <section id="vips">
            <h2 className="text-4xl font-bold mb-6 text-red-400 drop-shadow-lg text-center">VIPs Disponíveis 🔥</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vips.map((vip, index) => (
                <motion.div key={vip.id} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <VipCard vip={{ ...vip, image: vip.image || "https://via.placeholder.com/150/ff0000/ffffff?text=VIP" }} onDetail={setDetailItem} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "cars" && (
          <section id="cars">
            <h2 className="text-4xl font-bold mb-6 text-blue-400 drop-shadow-lg text-center">Carros Disponíveis 🚗</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cars.map((car, index) => (
                <motion.div key={car.id} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <VipCard vip={{ ...car, image: car.image || "https://via.placeholder.com/150/0000ff/ffffff?text=Carro" }} onDetail={setDetailItem} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "others" && (
          <section id="others">
            <h2 className="text-4xl font-bold mb-6 text-green-400 drop-shadow-lg text-center">Outros Itens ⚙️</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {others.map((item, index) => (
                <motion.div key={item.id} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  <VipCard vip={{ ...item, image: item.image || "https://via.placeholder.com/150/00ff00/ffffff?text=Item" }} onDetail={setDetailItem} />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Modal de detalhe com fundo suave e borrado clarinho */}
      {detailItem && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl w-96 relative shadow-lg">
            <button className="absolute top-2 right-2 text-red-500 font-bold text-xl" onClick={closeModal}>×</button>
            <h2 className="text-2xl font-bold mb-2 text-red-400">{detailItem.name}</h2>
            <p className="mb-4 text-gray-300">{detailItem.description}</p>
            {detailItem.benefits && detailItem.benefits.length > 0 && (
              <ul className="list-disc list-inside text-gray-300 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-red-700">
                {detailItem.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
            <p className="mt-4 text-lg font-bold text-red-500">Preço: R${detailItem.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}
